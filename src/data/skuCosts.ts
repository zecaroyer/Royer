import type { SkuId } from "@/data/skus";
import { SKUS } from "@/data/skus";
import { FORMULAS, type Formula } from "@/data/formulas";
import { SKU_PACKAGING, type PackagingAssumption } from "@/data/packaging";

// ---------------------------------------------------------------------------
// SKU cost & margin engine.
//
// Every cost figure below — raw material €/kg, labour rate, QC budget,
// regulatory allocation, wastage, distributor margin — is a placeholder
// assumption for modelling only. None of it comes from a real supplier
// quotation. Replace each input with a dated, real quote before using this
// model for financial decisions or investor figures.
//
// Simplifying assumption: all formulas are costed at a uniform density of
// 1.0 g/ml (i.e. 1 kg of bulk formula ≈ 1 litre). This is a deliberate
// modelling simplification, not a measured value.
// ---------------------------------------------------------------------------

export const DENSITY_G_PER_ML = 1.0;

export const RAW_MATERIAL_COST_PER_KG: Record<string, number> = {
  aqua: 0.001,
  glycerin: 1.8,
  tocopherol: 28,
  "citric-acid": 3.2,
  "sodium-hydroxide": 2.5,
  panthenol: 18,
  bisabolol: 45,
  squalane: 22,
  "aloe-vera": 6.5,
  "jojoba-oil": 14,
  "rosehip-oil": 32,
  "olive-oil": 6,
  "coconut-oil": 4.5,
  "hemp-seed-oil": 9,
  "shea-butter": 7,
  "caprylic-capric-triglyceride": 5.5,
  "cetearyl-olivate-sorbitan-olivate": 12,
  "cetearyl-alcohol": 4,
  "glyceryl-stearate-citrate": 9,
  "xanthan-gum": 9,
  "calendula-extract": 20,
  beeswax: 9,
  "chamomile-extract": 18,
  "cucumber-extract": 16,
  "preservative-system": 14,
  fragrance: 16,
};

export type GlobalSkuCostAssumptions = {
  labourRatePerHour: number;
  qcTestingBudgetPerBatch: number;
  safetyAssessmentPerSku: number;
  pifCpsrPerSku: number;
  wastagePct: number;
  distributorMarginPct: number;
};

export const DEFAULT_SKU_ASSUMPTIONS: GlobalSkuCostAssumptions = {
  labourRatePerHour: 9.6,
  qcTestingBudgetPerBatch: 380,
  safetyAssessmentPerSku: 2500,
  pifCpsrPerSku: 1800,
  wastagePct: 5,
  distributorMarginPct: 30,
};

export type SkuEconomicsInput = {
  skuId: SkuId;
  retailPriceExVat: number;
  fillingMinutesPerUnit: number;
  batchSizeUnitsDefault: number;
  annualVolumeForecastUnits: number;
};

export const SKU_ECONOMICS_INPUTS: SkuEconomicsInput[] = [
  { skuId: "sku-01", retailPriceExVat: 24.9, fillingMinutesPerUnit: 1.5, batchSizeUnitsDefault: 1000, annualVolumeForecastUnits: 4000 },
  { skuId: "sku-02", retailPriceExVat: 29.9, fillingMinutesPerUnit: 2.0, batchSizeUnitsDefault: 600, annualVolumeForecastUnits: 3000 },
  { skuId: "sku-03", retailPriceExVat: 26.9, fillingMinutesPerUnit: 1.8, batchSizeUnitsDefault: 700, annualVolumeForecastUnits: 3200 },
  { skuId: "sku-04", retailPriceExVat: 12.9, fillingMinutesPerUnit: 1.2, batchSizeUnitsDefault: 1400, annualVolumeForecastUnits: 5000 },
  { skuId: "sku-05", retailPriceExVat: 19.9, fillingMinutesPerUnit: 1.6, batchSizeUnitsDefault: 900, annualVolumeForecastUnits: 3000 },
  { skuId: "sku-06", retailPriceExVat: 18.9, fillingMinutesPerUnit: 1.4, batchSizeUnitsDefault: 1000, annualVolumeForecastUnits: 4000 },
];

export function getEconomicsInput(skuId: SkuId): SkuEconomicsInput {
  const input = SKU_ECONOMICS_INPUTS.find((i) => i.skuId === skuId);
  if (!input) throw new Error(`No economics input found for SKU: ${skuId}`);
  return input;
}

export function computeFormulaCostPerKg(formula: Formula): number {
  return formula.ingredients.reduce((sum, row) => {
    const costPerKg = RAW_MATERIAL_COST_PER_KG[row.chemistryId] ?? 0;
    return sum + (row.percentage / 100) * costPerKg;
  }, 0);
}

export type SkuEconomics = {
  skuId: SkuId;
  formulaCostPerKg: number;
  rawMaterialCostPerUnit: number;
  packagingCostPerUnit: number;
  labourCostPerUnit: number;
  qcAllocationPerUnit: number;
  regulatoryAllocationPerUnit: number;
  totalCogsPerUnit: number;
  retailPriceExVat: number;
  tradePrice: number;
  grossMarginD2cPct: number;
  grossMarginWholesalePct: number;
  minRetailForMargin: { targetPct: number; price: number }[];
  batchProfit: { units: number; d2cProfit: number; wholesaleProfit: number }[];
};

const MARGIN_TARGETS = [60, 65, 70];
const BATCH_SIZES_FOR_PROFIT = [500, 1000, 5000];

export type SkuEconomicsOverrides = {
  retailPriceExVat?: number;
  packagingCostPerUnit?: number;
  formulaCostPerKg?: number;
};

export function computeSkuEconomics(
  skuId: SkuId,
  assumptions: GlobalSkuCostAssumptions = DEFAULT_SKU_ASSUMPTIONS,
  overrides: SkuEconomicsOverrides = {}
): SkuEconomics {
  const sku = SKUS.find((s) => s.id === skuId);
  const formula = FORMULAS.find((f) => f.skuId === skuId);
  const packaging: PackagingAssumption | undefined = SKU_PACKAGING.find((p) => p.skuId === skuId);
  const input = getEconomicsInput(skuId);
  if (!sku || !formula || !packaging) {
    throw new Error(`Incomplete data for SKU: ${skuId}`);
  }

  const wastageDivisor = 1 - assumptions.wastagePct / 100;

  const formulaCostPerKg = overrides.formulaCostPerKg ?? computeFormulaCostPerKg(formula);
  const rawMaterialCostPerUnitRaw = formulaCostPerKg * (sku.volumeMl / 1000) * DENSITY_G_PER_ML;
  const packagingCostPerUnitRaw =
    overrides.packagingCostPerUnit ??
    packaging.containerCostEur +
      packaging.capOrClosureCostEur +
      packaging.labelCostEur +
      (packaging.includeBox ? packaging.boxCostEur : 0);
  const labourCostPerUnitRaw = (input.fillingMinutesPerUnit / 60) * assumptions.labourRatePerHour;

  const rawMaterialCostPerUnit = rawMaterialCostPerUnitRaw / wastageDivisor;
  const packagingCostPerUnit = packagingCostPerUnitRaw / wastageDivisor;
  const labourCostPerUnit = labourCostPerUnitRaw / wastageDivisor;

  const qcAllocationPerUnit = assumptions.qcTestingBudgetPerBatch / input.batchSizeUnitsDefault;
  const regulatoryAllocationPerUnit =
    (assumptions.safetyAssessmentPerSku + assumptions.pifCpsrPerSku) / input.annualVolumeForecastUnits;

  const totalCogsPerUnit =
    rawMaterialCostPerUnit +
    packagingCostPerUnit +
    labourCostPerUnit +
    qcAllocationPerUnit +
    regulatoryAllocationPerUnit;

  const retailPriceExVat = overrides.retailPriceExVat ?? input.retailPriceExVat;
  const tradePrice = retailPriceExVat * (1 - assumptions.distributorMarginPct / 100);

  const grossMarginD2cPct = ((retailPriceExVat - totalCogsPerUnit) / retailPriceExVat) * 100;
  const grossMarginWholesalePct = ((tradePrice - totalCogsPerUnit) / tradePrice) * 100;

  const minRetailForMargin = MARGIN_TARGETS.map((targetPct) => ({
    targetPct,
    price: totalCogsPerUnit / (1 - targetPct / 100),
  }));

  const batchProfit = BATCH_SIZES_FOR_PROFIT.map((units) => ({
    units,
    d2cProfit: units * (retailPriceExVat - totalCogsPerUnit),
    wholesaleProfit: units * (tradePrice - totalCogsPerUnit),
  }));

  return {
    skuId,
    formulaCostPerKg,
    rawMaterialCostPerUnit,
    packagingCostPerUnit,
    labourCostPerUnit,
    qcAllocationPerUnit,
    regulatoryAllocationPerUnit,
    totalCogsPerUnit,
    retailPriceExVat,
    tradePrice,
    grossMarginD2cPct,
    grossMarginWholesalePct,
    minRetailForMargin,
    batchProfit,
  };
}

export function computeAllSkuEconomics(
  assumptions: GlobalSkuCostAssumptions = DEFAULT_SKU_ASSUMPTIONS
): SkuEconomics[] {
  return SKUS.map((sku) => computeSkuEconomics(sku.id, assumptions));
}
