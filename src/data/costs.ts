// ---------------------------------------------------------------------------
// Cost & production-economics assumptions.
//
// EVERY NUMBER IN THIS FILE IS A PLACEHOLDER ASSUMPTION FOR MODELLING ONLY.
// None of these figures come from real supplier quotations, real labour
// contracts, or a finalised formula. They exist so the /custos calculator
// has sensible defaults to start from. Before any financial commitment,
// replace each figure with a real, dated supplier quote or costed estimate.
// All amounts are in EUR.
// ---------------------------------------------------------------------------

export type CostAssumptions = {
  packaging: {
    capCost: number;
    labelCost: number;
    boxCost: number;
  };
  formulaPerMl: {
    aloeVeraBase: number;
    botanicalExtracts: number;
    preservatives: number;
    emulsifiers: number;
    fragranceAllergenControlled: number;
  };
  labour: {
    hourlyRate: number;
    batchLabourHours: number;
    fillingPackagingPerUnit: number;
  };
  qc: {
    testsCostPerBatch: number;
  };
  regulatory: {
    safetyAssessmentPerSku: number;
    pifCpsrPerSku: number;
  };
  operational: {
    wastagePct: number;
    targetManufacturerMarginPct: number;
    distributorMarginPct: number;
  };
};

export const DEFAULT_ASSUMPTIONS: CostAssumptions = {
  packaging: {
    capCost: 0.18,
    labelCost: 0.22,
    boxCost: 0.35,
  },
  formulaPerMl: {
    aloeVeraBase: 0.045,
    botanicalExtracts: 0.05,
    preservatives: 0.018,
    emulsifiers: 0.03,
    fragranceAllergenControlled: 0.022,
  },
  labour: {
    hourlyRate: 9.6,
    batchLabourHours: 8,
    fillingPackagingPerUnit: 0.3,
  },
  qc: {
    testsCostPerBatch: 180,
  },
  regulatory: {
    safetyAssessmentPerSku: 2500,
    pifCpsrPerSku: 1800,
  },
  operational: {
    wastagePct: 5,
    targetManufacturerMarginPct: 45,
    distributorMarginPct: 30,
  },
};

export type CostScenario = {
  id: string;
  name: string;
  volumeMl: number;
  containerType: string;
  containerCost: number;
  includeBox: boolean;
  formulaIntensity: number;
  batchVolumeLiters: number;
  annualVolumeUnitsForecast: number;
  retailPriceTarget: number;
};

export const COST_SCENARIOS: CostScenario[] = [
  {
    id: "face-cream-30",
    name: "30 ml Premium Face Cream",
    volumeMl: 30,
    containerType: "Glass jar, premium finish",
    containerCost: 0.68,
    includeBox: true,
    formulaIntensity: 1.35,
    batchVolumeLiters: 20,
    annualVolumeUnitsForecast: 4000,
    retailPriceTarget: 24.9,
  },
  {
    id: "face-cream-50",
    name: "50 ml Face Cream",
    volumeMl: 50,
    containerType: "Glass jar",
    containerCost: 0.78,
    includeBox: true,
    formulaIntensity: 1.1,
    batchVolumeLiters: 30,
    annualVolumeUnitsForecast: 3500,
    retailPriceTarget: 21.9,
  },
  {
    id: "body-cream-100",
    name: "100 ml Body Cream",
    volumeMl: 100,
    containerType: "PP jar",
    containerCost: 0.92,
    includeBox: false,
    formulaIntensity: 0.9,
    batchVolumeLiters: 50,
    annualVolumeUnitsForecast: 3000,
    retailPriceTarget: 18.9,
  },
  {
    id: "lotion-250",
    name: "250 ml Lotion",
    volumeMl: 250,
    containerType: "Pump bottle",
    containerCost: 1.15,
    includeBox: false,
    formulaIntensity: 0.7,
    batchVolumeLiters: 100,
    annualVolumeUnitsForecast: 2500,
    retailPriceTarget: 16.9,
  },
];

export type ScenarioEconomics = {
  scenarioId: string;
  grossUnitsPerBatch: number;
  goodUnitsPerBatch: number;
  formulaCostPerUnit: number;
  packagingCostPerUnit: number;
  variableCostPerUnit: number;
  batchDirectCost: number;
  directCostPerUnit: number;
  regulatoryCostPerUnit: number;
  fullyLoadedUnitCost: number;
  tradePrice: number;
  manufacturerMarginPerUnit: number;
  manufacturerMarginPct: number;
  meetsTargetMargin: boolean;
  breakEvenUnits: number;
  breakEvenBatches: number;
};

export function computeFormulaCostPerMl(a: CostAssumptions["formulaPerMl"]): number {
  return (
    a.aloeVeraBase + a.botanicalExtracts + a.preservatives + a.emulsifiers + a.fragranceAllergenControlled
  );
}

export function computeScenarioEconomics(
  scenario: CostScenario,
  assumptions: CostAssumptions
): ScenarioEconomics {
  const formulaCostPerMl = computeFormulaCostPerMl(assumptions.formulaPerMl);
  const formulaCostPerUnit = formulaCostPerMl * scenario.volumeMl * scenario.formulaIntensity;

  const packagingCostPerUnit =
    scenario.containerCost +
    assumptions.packaging.capCost +
    assumptions.packaging.labelCost +
    (scenario.includeBox ? assumptions.packaging.boxCost : 0);

  const variableCostPerUnit =
    formulaCostPerUnit + packagingCostPerUnit + assumptions.labour.fillingPackagingPerUnit;

  const grossUnitsPerBatch = Math.floor((scenario.batchVolumeLiters * 1000) / scenario.volumeMl);
  const goodUnitsPerBatch = Math.max(
    1,
    Math.floor(grossUnitsPerBatch * (1 - assumptions.operational.wastagePct / 100))
  );

  const batchFixedCost =
    assumptions.labour.batchLabourHours * assumptions.labour.hourlyRate + assumptions.qc.testsCostPerBatch;

  const batchDirectCost = variableCostPerUnit * grossUnitsPerBatch + batchFixedCost;
  const directCostPerUnit = batchDirectCost / goodUnitsPerBatch;

  const regulatoryCostPerUnit =
    (assumptions.regulatory.safetyAssessmentPerSku + assumptions.regulatory.pifCpsrPerSku) /
    scenario.annualVolumeUnitsForecast;

  const fullyLoadedUnitCost = directCostPerUnit + regulatoryCostPerUnit;

  const tradePrice = scenario.retailPriceTarget * (1 - assumptions.operational.distributorMarginPct / 100);
  const manufacturerMarginPerUnit = tradePrice - fullyLoadedUnitCost;
  const manufacturerMarginPct = (manufacturerMarginPerUnit / tradePrice) * 100;
  const meetsTargetMargin = manufacturerMarginPct >= assumptions.operational.targetManufacturerMarginPct;

  const contributionMarginPerUnit = tradePrice - directCostPerUnit;
  const breakEvenUnits =
    contributionMarginPerUnit > 0
      ? Math.ceil(
          (assumptions.regulatory.safetyAssessmentPerSku + assumptions.regulatory.pifCpsrPerSku) /
            contributionMarginPerUnit
        )
      : Infinity;
  const breakEvenBatches = Number.isFinite(breakEvenUnits)
    ? Math.ceil(breakEvenUnits / goodUnitsPerBatch)
    : Infinity;

  return {
    scenarioId: scenario.id,
    grossUnitsPerBatch,
    goodUnitsPerBatch,
    formulaCostPerUnit,
    packagingCostPerUnit,
    variableCostPerUnit,
    batchDirectCost,
    directCostPerUnit,
    regulatoryCostPerUnit,
    fullyLoadedUnitCost,
    tradePrice,
    manufacturerMarginPerUnit,
    manufacturerMarginPct,
    meetsTargetMargin,
    breakEvenUnits,
    breakEvenBatches,
  };
}
