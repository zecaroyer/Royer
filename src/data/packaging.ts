import type { SkuId } from "@/data/skus";

// ---------------------------------------------------------------------------
// Packaging cost assumptions, per SKU. All figures are placeholder EUR costs
// for modelling only — replace with real, dated supplier quotations before
// using this for financial decisions.
// ---------------------------------------------------------------------------

export type PackagingAssumption = {
  skuId: SkuId;
  containerType: string;
  containerCostEur: number;
  capOrClosureCostEur: number;
  labelCostEur: number;
  boxCostEur: number;
  includeBox: boolean;
  packagingCompatibilityNotes: string;
};

export const SKU_PACKAGING: PackagingAssumption[] = [
  {
    skuId: "sku-01",
    containerType: "50 ml airless pump jar",
    containerCostEur: 0.95,
    capOrClosureCostEur: 0.35,
    labelCostEur: 0.22,
    boxCostEur: 0.35,
    includeBox: true,
    packagingCompatibilityNotes: "Airless pump must be compatibility-tested against the emulsion's emulsifier system to confirm no separation or pump clogging over shelf life.",
  },
  {
    skuId: "sku-02",
    containerType: "30 ml amber/opaque glass dropper bottle",
    containerCostEur: 1.1,
    capOrClosureCostEur: 0.45,
    labelCostEur: 0.22,
    boxCostEur: 0.4,
    includeBox: true,
    packagingCompatibilityNotes: "Amber or opaque glass recommended to limit light-driven oxidation of the polyunsaturated oil fraction; confirm dropper material is oil-compatible.",
  },
  {
    skuId: "sku-03",
    containerType: "200 ml PP jar",
    containerCostEur: 0.85,
    capOrClosureCostEur: 0.2,
    labelCostEur: 0.25,
    boxCostEur: 0,
    includeBox: false,
    packagingCompatibilityNotes: "Wide-mouth jar suits a dense body cream; confirm PP resin compatibility with the olive-derived emulsifier and fragrance load.",
  },
  {
    skuId: "sku-04",
    containerType: "75 ml laminate tube",
    containerCostEur: 0.55,
    capOrClosureCostEur: 0.12,
    labelCostEur: 0.18,
    boxCostEur: 0,
    includeBox: false,
    packagingCompatibilityNotes: "Tube orifice diameter must be matched to final viscosity; confirm no separation under tube pressure during dispensing trials.",
  },
  {
    skuId: "sku-05",
    containerType: "50 ml metal tin",
    containerCostEur: 0.6,
    capOrClosureCostEur: 0,
    labelCostEur: 0.2,
    boxCostEur: 0,
    includeBox: false,
    packagingCompatibilityNotes: "Integrated lid (no separate closure cost). Confirm no interaction between the metal liner and the unsaponifiable fraction of shea butter/beeswax over shelf life.",
  },
  {
    skuId: "sku-06",
    containerType: "100 ml PP jar",
    containerCostEur: 0.78,
    capOrClosureCostEur: 0.18,
    labelCostEur: 0.22,
    boxCostEur: 0,
    includeBox: false,
    packagingCompatibilityNotes: "Light gel-cream is sensitive to syneresis (water separation) — confirm jar seal integrity and headspace across the shelf-life test window.",
  },
];

export function getPackaging(skuId: SkuId): PackagingAssumption {
  const pkg = SKU_PACKAGING.find((p) => p.skuId === skuId);
  if (!pkg) throw new Error(`No packaging assumption found for SKU: ${skuId}`);
  return pkg;
}
