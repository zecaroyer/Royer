import type { SkuId } from "@/data/skus";

export type TestId =
  | "stability-real-time"
  | "stability-accelerated"
  | "freeze-thaw"
  | "centrifuge"
  | "microbiological-limits"
  | "preservative-efficacy"
  | "packaging-compatibility"
  | "ph-drift"
  | "viscosity-monitoring"
  | "odour-colour-change"
  | "heavy-metals-pesticides"
  | "cannabinoid-absence"
  | "coa-sds-collection";

export type TestDefinition = {
  id: TestId;
  label: string;
  description: string;
};

export const TEST_DEFINITIONS: TestDefinition[] = [
  { id: "stability-real-time", label: "Real-time stability", description: "Storage at label conditions, checked at defined intervals across the claimed shelf life." },
  { id: "stability-accelerated", label: "Accelerated stability", description: "Elevated-temperature/humidity storage to predict shelf-life behaviour faster than real time." },
  { id: "freeze-thaw", label: "Freeze/thaw cycling", description: "Repeated freeze/thaw cycles to check emulsion stability under transport/storage extremes." },
  { id: "centrifuge", label: "Centrifuge test", description: "Accelerated phase-separation check for emulsions." },
  { id: "microbiological-limits", label: "Microbiological limits", description: "Total viable count and specified pathogen absence against specification." },
  { id: "preservative-efficacy", label: "Preservative efficacy (challenge test)", description: "Validates the preservative system against a panel of challenge organisms; required for every water-containing formula." },
  { id: "packaging-compatibility", label: "Packaging compatibility", description: "Confirms no adverse interaction between the formula and its primary packaging over shelf life." },
  { id: "ph-drift", label: "pH drift monitoring", description: "Tracks pH stability across the stability programme against the target range." },
  { id: "viscosity-monitoring", label: "Viscosity monitoring", description: "Tracks viscosity/texture stability across the stability programme." },
  { id: "odour-colour-change", label: "Odour / colour change", description: "Sensory check for oxidation or degradation signs across the stability programme." },
  { id: "heavy-metals-pesticides", label: "Heavy metals / pesticide residue", description: "Screening for agricultural/botanical raw materials where supplier risk justifies it." },
  { id: "cannabinoid-absence", label: "Cannabinoid / THC absence verification", description: "Per-lot verification that hemp seed oil carries no cannabinoid/THC carry-over." },
  { id: "coa-sds-collection", label: "CoA / SDS collection", description: "Certificate of Analysis and Safety Data Sheet collected and filed for every raw material lot." },
];

export type SkuTestingPlan = {
  skuId: SkuId;
  requiredTests: TestId[];
  notes?: string;
};

export const SKU_TESTING_PLANS: SkuTestingPlan[] = [
  {
    skuId: "sku-01",
    requiredTests: [
      "stability-real-time",
      "stability-accelerated",
      "freeze-thaw",
      "centrifuge",
      "microbiological-limits",
      "preservative-efficacy",
      "packaging-compatibility",
      "ph-drift",
      "viscosity-monitoring",
      "odour-colour-change",
      "coa-sds-collection",
    ],
  },
  {
    skuId: "sku-02",
    requiredTests: [
      "stability-real-time",
      "stability-accelerated",
      "packaging-compatibility",
      "odour-colour-change",
      "heavy-metals-pesticides",
      "coa-sds-collection",
    ],
    notes: "Anhydrous formula — no water phase, so microbiological limits and preservative efficacy testing are not applicable by default. Oxidative stability (odour/colour) is the primary risk given the cold-pressed oil content.",
  },
  {
    skuId: "sku-03",
    requiredTests: [
      "stability-real-time",
      "stability-accelerated",
      "freeze-thaw",
      "centrifuge",
      "microbiological-limits",
      "preservative-efficacy",
      "packaging-compatibility",
      "ph-drift",
      "viscosity-monitoring",
      "odour-colour-change",
      "coa-sds-collection",
    ],
  },
  {
    skuId: "sku-04",
    requiredTests: [
      "stability-real-time",
      "stability-accelerated",
      "freeze-thaw",
      "centrifuge",
      "microbiological-limits",
      "preservative-efficacy",
      "packaging-compatibility",
      "ph-drift",
      "viscosity-monitoring",
      "odour-colour-change",
      "coa-sds-collection",
    ],
  },
  {
    skuId: "sku-05",
    requiredTests: [
      "stability-real-time",
      "stability-accelerated",
      "packaging-compatibility",
      "odour-colour-change",
      "heavy-metals-pesticides",
      "cannabinoid-absence",
      "coa-sds-collection",
    ],
    notes: "Hemp seed oil lot requires cannabinoid/THC absence verification despite this being a non-CBD, seed-only formula — see the CBD / Cannabinoid Regulatory Hold.",
  },
  {
    skuId: "sku-06",
    requiredTests: [
      "stability-real-time",
      "stability-accelerated",
      "freeze-thaw",
      "centrifuge",
      "microbiological-limits",
      "preservative-efficacy",
      "packaging-compatibility",
      "ph-drift",
      "viscosity-monitoring",
      "odour-colour-change",
      "coa-sds-collection",
    ],
  },
];

export function getTestingPlan(skuId: SkuId): SkuTestingPlan {
  const plan = SKU_TESTING_PLANS.find((p) => p.skuId === skuId);
  if (!plan) throw new Error(`No testing plan found for SKU: ${skuId}`);
  return plan;
}

export function getTestDefinition(id: TestId): TestDefinition {
  const def = TEST_DEFINITIONS.find((d) => d.id === id);
  if (!def) throw new Error(`Unknown test id: ${id}`);
  return def;
}
