import type { ComplianceStatus } from "@/components/ui/StatusPill";
import type { SkuId } from "@/data/skus";

// ---------------------------------------------------------------------------
// Draft cosmetic formulation concepts.
//
// All formulas are draft cosmetic formulation concepts only. They require
// review by a qualified cosmetic chemist, stability testing, microbiological
// testing, preservative efficacy/challenge testing where applicable, CPSR,
// PIF, CPNP notification, label review, claims substantiation and
// Responsible Person validation before being placed on the market.
//
// Percentages are w/w (weight by weight) and each formula's ingredient list
// sums to exactly 100.00%. The Aqua row is the calculated q.s. (quantum
// satis) remainder. The pH adjuster (Citric Acid / Sodium Hydroxide) is
// dosed q.s. in a small, variable, near-negligible amount and is therefore
// noted separately rather than carried as its own percentage line.
// ---------------------------------------------------------------------------

export type FormulaIngredientRow = {
  chemistryId: string;
  inciName: string;
  commonName: string;
  percentage: number;
  isQs?: boolean;
  function: string;
  phase: string;
};

export type ManufacturingStep = {
  step: string;
  detail: string;
};

export type FormulationCompliance = {
  inciVerificationNeeded: boolean;
  restrictedSubstancesCheck: ComplianceStatus;
  allergenDeclarationCheck: ComplianceStatus;
  preservativeSystemValidation: ComplianceStatus;
  microbiologicalRisk: "Low" | "Medium" | "High";
  stabilityTestingRequired: boolean;
  packagingCompatibilityRequired: boolean;
  cpsrStatus: ComplianceStatus;
  pifStatus: ComplianceStatus;
  cpnpStatus: ComplianceStatus;
};

export type Formula = {
  skuId: SkuId;
  formulaCode: string;
  version: string;
  type: "emulsion" | "anhydrous";
  status: ComplianceStatus;
  targetPh: string;
  targetViscosity: string;
  ingredients: FormulaIngredientRow[];
  phAdjusterNote?: string;
  manufacturingProcess: ManufacturingStep[];
  claimRestrictions: string[];
  manufacturingNotes: string[];
  formulationCompliance: FormulationCompliance;
};

const STANDARD_CLAIM_RESTRICTIONS = [
  "No medical or therapeutic claims: no treatment, cure, prevention or relief of any disease or medical condition (pain, inflammation, eczema, arthritis, anxiety, insomnia, wounds, or otherwise).",
  "No claim implying CBD or cannabinoid content or effect, including where hemp seed oil is used.",
  "Only cosmetic/sensory claims permitted: hydration, softness, smoothness, daily comfort, fragrance, finish, texture, antioxidant-rich formula.",
  "Every public claim requires a dedicated claims substantiation file before use — see /compliance.",
];

const EMULSION_PROCESS: ManufacturingStep[] = [
  { step: "Phase A — water phase", detail: "Disperse Xanthan Gum into glycerin to pre-wet, then add water and Aloe Barbadensis Leaf Juice. Heat to 75–80°C under mixing." },
  { step: "Phase B — oil phase", detail: "Combine oils/butters, emulsifier and Cetearyl Alcohol. Heat to 75–80°C until fully melted and homogeneous." },
  { step: "Emulsification", detail: "Add Phase B to Phase A under high-shear homogenisation; hold temperature and shear per the batch manufacturing record." },
  { step: "Cool-down phase", detail: "Cool with continued mixing to ≤40°C." },
  { step: "Heat-sensitive addition", detail: "Below 40°C, add Tocopherol, the preservative system and any heat-sensitive actives (e.g. Panthenol, botanical extracts)." },
  { step: "pH adjustment", detail: "Adjust to target pH with Citric Acid (lower) or dilute Sodium Hydroxide solution (raise); record the final pH." },
  { step: "Homogenisation", detail: "Final low-shear mix for uniformity, avoiding air incorporation." },
  { step: "Filling", detail: "Fill into qualified primary packaging per the batch plan." },
  { step: "Batch record", detail: "Complete the batch manufacturing record with all parameters and in-process checks." },
  { step: "QC release", detail: "Check pH, viscosity, appearance and odour against specification; draw microbiological sample." },
  { step: "Retention sample", detail: "Retain a representative sample for the shelf-life period plus margin." },
];

const ANHYDROUS_LIQUID_PROCESS: ManufacturingStep[] = [
  { step: "Oil blending", detail: "Combine all liquid oils at room temperature or with gentle warming until homogeneous." },
  { step: "Antioxidant addition", detail: "Add Tocopherol and Bisabolol once the blend is at or below 40°C to limit thermal degradation." },
  { step: "Filling", detail: "Fill at room temperature into qualified primary packaging." },
  { step: "QC release", detail: "Check appearance, odour and oxidative stability indicators against specification." },
  { step: "Retention sample", detail: "Retain a representative sample for the shelf-life period plus margin." },
];

const ANHYDROUS_BALM_PROCESS: ManufacturingStep[] = [
  { step: "Oil blending", detail: "Combine liquid oils at room temperature or with gentle warming." },
  { step: "Wax/butter melting", detail: "Melt the structuring wax and butter together at 65–70°C until fully liquid." },
  { step: "Combination", detail: "Add the melted wax/butter phase to the oil blend and mix until homogeneous." },
  { step: "Antioxidant addition", detail: "Add Tocopherol and Bisabolol once the blend has cooled below 40°C to limit thermal degradation." },
  { step: "Filling temperature", detail: "Fill while still fluid, just above the setting point of the wax." },
  { step: "Cooling/setting", detail: "Allow to set undisturbed at controlled room temperature; avoid thermal shock and condensation." },
  { step: "QC release", detail: "Check appearance, odour and oxidative stability indicators against specification." },
  { step: "Retention sample", detail: "Retain a representative sample for the shelf-life period plus margin." },
];

function draftFormulationCompliance(
  overrides: Partial<FormulationCompliance> = {}
): FormulationCompliance {
  return {
    inciVerificationNeeded: true,
    restrictedSubstancesCheck: "draft",
    allergenDeclarationCheck: "draft",
    preservativeSystemValidation: "draft",
    microbiologicalRisk: "Medium",
    stabilityTestingRequired: true,
    packagingCompatibilityRequired: true,
    cpsrStatus: "draft",
    pifStatus: "draft",
    cpnpStatus: "draft",
    ...overrides,
  };
}

export const FORMULAS: Formula[] = [
  {
    skuId: "sku-01",
    formulaCode: "FORM-SKU01-v0.1",
    version: "0.1 (draft concept)",
    type: "emulsion",
    status: "draft",
    targetPh: "5.0–5.5",
    targetViscosity: "Light-to-medium cream; spreadable, fast-absorbing, low residue.",
    ingredients: [
      { chemistryId: "aqua", inciName: "Aqua", commonName: "Water", percentage: 38.2, isQs: true, function: "Solvent / continuous phase", phase: "Water phase (A)" },
      { chemistryId: "aloe-vera", inciName: "Aloe Barbadensis Leaf Juice", commonName: "Aloe vera juice", percentage: 35.0, function: "Humectant / botanical base", phase: "Water phase (A)" },
      { chemistryId: "glycerin", inciName: "Glycerin", commonName: "Glycerin", percentage: 4.0, function: "Humectant", phase: "Water phase (A)" },
      { chemistryId: "jojoba-oil", inciName: "Simmondsia Chinensis Seed Oil", commonName: "Jojoba oil", percentage: 5.0, function: "Emollient", phase: "Oil phase (B)" },
      { chemistryId: "rosehip-oil", inciName: "Rosa Canina Fruit Oil", commonName: "Rosehip oil", percentage: 3.0, function: "Emollient, antioxidant-rich", phase: "Oil phase (B)" },
      { chemistryId: "caprylic-capric-triglyceride", inciName: "Caprylic/Capric Triglyceride", commonName: "Fractionated coconut oil", percentage: 6.0, function: "Lightweight emollient", phase: "Oil phase (B)" },
      { chemistryId: "cetearyl-olivate-sorbitan-olivate", inciName: "Cetearyl Olivate and Sorbitan Olivate", commonName: "Olive-derived emulsifier", percentage: 5.0, function: "Emulsifier (O/W)", phase: "Oil phase (B)" },
      { chemistryId: "cetearyl-alcohol", inciName: "Cetearyl Alcohol", commonName: "Cetearyl alcohol", percentage: 2.0, function: "Co-emulsifier, thickener", phase: "Oil phase (B)" },
      { chemistryId: "xanthan-gum", inciName: "Xanthan Gum", commonName: "Xanthan gum", percentage: 0.3, function: "Rheology modifier", phase: "Water phase (A)" },
      { chemistryId: "tocopherol", inciName: "Tocopherol", commonName: "Vitamin E", percentage: 0.3, function: "Antioxidant", phase: "Cool-down phase (C)" },
      { chemistryId: "preservative-system", inciName: "Preservative system", commonName: "Broad-spectrum preservative", percentage: 1.0, function: "Antimicrobial preservation", phase: "Cool-down phase (C)" },
      { chemistryId: "fragrance", inciName: "Parfum", commonName: "Allergen-controlled aroma (optional)", percentage: 0.2, function: "Fragrance (or fragrance-free option)", phase: "Cool-down phase (C)" },
    ],
    phAdjusterNote: "Citric Acid / Sodium Hydroxide dosed q.s. to reach target pH 5.0–5.5; negligible mass already accounted for within the Aqua phase above.",
    manufacturingProcess: EMULSION_PROCESS,
    claimRestrictions: STANDARD_CLAIM_RESTRICTIONS,
    manufacturingNotes: [
      "Add Rosehip Oil and Tocopherol only after the emulsion has cooled below 40°C to protect oxidation-sensitive polyunsaturated fatty acids.",
      "Fragrance is optional — a fragrance-free SKU variant is the lower-risk default for allergen declaration purposes.",
    ],
    formulationCompliance: draftFormulationCompliance({ microbiologicalRisk: "Medium" }),
  },
  {
    skuId: "sku-02",
    formulaCode: "FORM-SKU02-v0.1",
    version: "0.1 (draft concept)",
    type: "anhydrous",
    status: "draft",
    targetPh: "Not applicable (anhydrous)",
    targetViscosity: "Light-to-medium oil; fast spreading, non-tacky finish.",
    ingredients: [
      { chemistryId: "jojoba-oil", inciName: "Simmondsia Chinensis Seed Oil", commonName: "Jojoba oil", percentage: 45.0, function: "Primary emollient carrier", phase: "Anhydrous blend" },
      { chemistryId: "caprylic-capric-triglyceride", inciName: "Caprylic/Capric Triglyceride", commonName: "Fractionated coconut oil", percentage: 25.0, function: "Lightweight emollient", phase: "Anhydrous blend" },
      { chemistryId: "rosehip-oil", inciName: "Rosa Canina Fruit Oil", commonName: "Rosehip oil", percentage: 15.0, function: "Emollient, antioxidant-rich", phase: "Anhydrous blend" },
      { chemistryId: "olive-oil", inciName: "Olea Europaea Fruit Oil", commonName: "Olive oil", percentage: 8.0, function: "Emollient", phase: "Anhydrous blend" },
      { chemistryId: "squalane", inciName: "Squalane", commonName: "Squalane (vegetal)", percentage: 5.0, function: "Emollient", phase: "Anhydrous blend" },
      { chemistryId: "tocopherol", inciName: "Tocopherol", commonName: "Vitamin E", percentage: 0.7, function: "Antioxidant / oxidation control", phase: "Anhydrous blend" },
      { chemistryId: "bisabolol", inciName: "Bisabolol", commonName: "alpha-Bisabolol", percentage: 0.3, function: "Sensory finish, fragrance component", phase: "Anhydrous blend" },
      { chemistryId: "fragrance", inciName: "Parfum", commonName: "Natural fragrance (or fragrance-free)", percentage: 1.0, function: "Fragrance (or fragrance-free option)", phase: "Anhydrous blend" },
    ],
    manufacturingProcess: ANHYDROUS_LIQUID_PROCESS,
    claimRestrictions: STANDARD_CLAIM_RESTRICTIONS,
    manufacturingNotes: [
      "No water phase and no preservative system in the antimicrobial sense — oxidation control (Tocopherol) is the primary stability lever; pack under nitrogen headspace if oxidation risk testing indicates it.",
      "Amber or opaque glass packaging recommended to limit light-driven oxidation of polyunsaturated rosehip oil fraction.",
    ],
    formulationCompliance: draftFormulationCompliance({
      microbiologicalRisk: "Low",
      preservativeSystemValidation: "needs-review",
    }),
  },
  {
    skuId: "sku-03",
    formulaCode: "FORM-SKU03-v0.1",
    version: "0.1 (draft concept)",
    type: "emulsion",
    status: "draft",
    targetPh: "5.0–5.5",
    targetViscosity: "Rich, dense body cream; slow-melting, occlusive after-feel.",
    ingredients: [
      { chemistryId: "aqua", inciName: "Aqua", commonName: "Water", percentage: 45.1, isQs: true, function: "Solvent / continuous phase", phase: "Water phase (A)" },
      { chemistryId: "aloe-vera", inciName: "Aloe Barbadensis Leaf Juice", commonName: "Aloe vera juice", percentage: 25.0, function: "Humectant / botanical base", phase: "Water phase (A)" },
      { chemistryId: "glycerin", inciName: "Glycerin", commonName: "Glycerin", percentage: 4.0, function: "Humectant", phase: "Water phase (A)" },
      { chemistryId: "olive-oil", inciName: "Olea Europaea Fruit Oil", commonName: "Olive oil", percentage: 6.0, function: "Emollient", phase: "Oil phase (B)" },
      { chemistryId: "coconut-oil", inciName: "Cocos Nucifera Oil", commonName: "Coconut oil", percentage: 4.0, function: "Emollient", phase: "Oil phase (B)" },
      { chemistryId: "shea-butter", inciName: "Butyrospermum Parkii Butter", commonName: "Shea butter", percentage: 5.0, function: "Emollient, occlusive", phase: "Oil phase (B)" },
      { chemistryId: "cetearyl-olivate-sorbitan-olivate", inciName: "Cetearyl Olivate and Sorbitan Olivate", commonName: "Olive-derived emulsifier", percentage: 5.0, function: "Emulsifier (O/W)", phase: "Oil phase (B)" },
      { chemistryId: "cetearyl-alcohol", inciName: "Cetearyl Alcohol", commonName: "Cetearyl alcohol", percentage: 2.5, function: "Co-emulsifier, thickener", phase: "Oil phase (B)" },
      { chemistryId: "glyceryl-stearate-citrate", inciName: "Glyceryl Stearate Citrate", commonName: "Glyceryl stearate citrate", percentage: 1.5, function: "Emulsifier (mild, anionic)", phase: "Oil phase (B)" },
      { chemistryId: "xanthan-gum", inciName: "Xanthan Gum", commonName: "Xanthan gum", percentage: 0.3, function: "Rheology modifier", phase: "Water phase (A)" },
      { chemistryId: "tocopherol", inciName: "Tocopherol", commonName: "Vitamin E", percentage: 0.3, function: "Antioxidant", phase: "Cool-down phase (C)" },
      { chemistryId: "preservative-system", inciName: "Preservative system", commonName: "Broad-spectrum preservative", percentage: 1.0, function: "Antimicrobial preservation", phase: "Cool-down phase (C)" },
      { chemistryId: "fragrance", inciName: "Parfum", commonName: "Allergen-controlled aroma (optional)", percentage: 0.3, function: "Fragrance (or fragrance-free option)", phase: "Cool-down phase (C)" },
    ],
    phAdjusterNote: "Citric Acid / Sodium Hydroxide dosed q.s. to reach target pH 5.0–5.5; negligible mass already accounted for within the Aqua phase above.",
    manufacturingProcess: EMULSION_PROCESS,
    claimRestrictions: STANDARD_CLAIM_RESTRICTIONS,
    manufacturingNotes: [
      "Shea Butter must be fully melted into Phase B before emulsification to avoid grainy/waxy texture defects.",
      "Body-cream viscosity targets a slower pump/jar dispense than the face cream (SKU-01) — confirm with the filling line during pilot batches.",
    ],
    formulationCompliance: draftFormulationCompliance({ microbiologicalRisk: "Medium" }),
  },
  {
    skuId: "sku-04",
    formulaCode: "FORM-SKU04-v0.1",
    version: "0.1 (draft concept)",
    type: "emulsion",
    status: "draft",
    targetPh: "5.0–5.5",
    targetViscosity: "Medium cream; fast absorption suited to a tube format.",
    ingredients: [
      { chemistryId: "aqua", inciName: "Aqua", commonName: "Water", percentage: 40.6, isQs: true, function: "Solvent / continuous phase", phase: "Water phase (A)" },
      { chemistryId: "aloe-vera", inciName: "Aloe Barbadensis Leaf Juice", commonName: "Aloe vera juice", percentage: 30.0, function: "Humectant / botanical base", phase: "Water phase (A)" },
      { chemistryId: "glycerin", inciName: "Glycerin", commonName: "Glycerin", percentage: 5.0, function: "Humectant", phase: "Water phase (A)" },
      { chemistryId: "coconut-oil", inciName: "Cocos Nucifera Oil", commonName: "Coconut oil", percentage: 6.0, function: "Emollient", phase: "Oil phase (B)" },
      { chemistryId: "olive-oil", inciName: "Olea Europaea Fruit Oil", commonName: "Olive oil", percentage: 4.0, function: "Emollient", phase: "Oil phase (B)" },
      { chemistryId: "jojoba-oil", inciName: "Simmondsia Chinensis Seed Oil", commonName: "Jojoba oil", percentage: 2.0, function: "Emollient", phase: "Oil phase (B)" },
      { chemistryId: "cetearyl-olivate-sorbitan-olivate", inciName: "Cetearyl Olivate and Sorbitan Olivate", commonName: "Olive-derived emulsifier", percentage: 5.0, function: "Emulsifier (O/W)", phase: "Oil phase (B)" },
      { chemistryId: "cetearyl-alcohol", inciName: "Cetearyl Alcohol", commonName: "Cetearyl alcohol", percentage: 3.0, function: "Co-emulsifier, thickener", phase: "Oil phase (B)" },
      { chemistryId: "glyceryl-stearate-citrate", inciName: "Glyceryl Stearate Citrate", commonName: "Glyceryl stearate citrate", percentage: 1.5, function: "Emulsifier (mild, anionic)", phase: "Oil phase (B)" },
      { chemistryId: "panthenol", inciName: "Panthenol", commonName: "Pro-Vitamin B5", percentage: 1.0, function: "Humectant / conditioning agent", phase: "Cool-down phase (C)" },
      { chemistryId: "xanthan-gum", inciName: "Xanthan Gum", commonName: "Xanthan gum", percentage: 0.3, function: "Rheology modifier", phase: "Water phase (A)" },
      { chemistryId: "tocopherol", inciName: "Tocopherol", commonName: "Vitamin E", percentage: 0.3, function: "Antioxidant", phase: "Cool-down phase (C)" },
      { chemistryId: "preservative-system", inciName: "Preservative system", commonName: "Broad-spectrum preservative", percentage: 1.0, function: "Antimicrobial preservation", phase: "Cool-down phase (C)" },
      { chemistryId: "fragrance", inciName: "Parfum", commonName: "Allergen-controlled aroma (optional)", percentage: 0.3, function: "Fragrance (or fragrance-free option)", phase: "Cool-down phase (C)" },
    ],
    phAdjusterNote: "Citric Acid / Sodium Hydroxide dosed q.s. to reach target pH 5.0–5.5; negligible mass already accounted for within the Aqua phase above.",
    manufacturingProcess: EMULSION_PROCESS,
    claimRestrictions: STANDARD_CLAIM_RESTRICTIONS,
    manufacturingNotes: [
      "Tube filling requires tighter viscosity control than jar filling — confirm orifice/backpressure settings during line trials.",
      "Frequent-use hand cream profile: prioritise fast absorption and low tackiness in sensory trials.",
    ],
    formulationCompliance: draftFormulationCompliance({ microbiologicalRisk: "Medium" }),
  },
  {
    skuId: "sku-05",
    formulaCode: "FORM-SKU05-v0.1",
    version: "0.1 (draft concept)",
    type: "anhydrous",
    status: "draft",
    targetPh: "Not applicable (anhydrous)",
    targetViscosity: "Solid balm at room temperature; melts on contact with skin.",
    ingredients: [
      { chemistryId: "hemp-seed-oil", inciName: "Cannabis Sativa Seed Oil", commonName: "Hemp seed oil", percentage: 30.0, function: "Primary emollient carrier", phase: "Anhydrous blend" },
      { chemistryId: "olive-oil", inciName: "Olea Europaea Fruit Oil", commonName: "Olive oil", percentage: 25.0, function: "Emollient", phase: "Anhydrous blend" },
      { chemistryId: "coconut-oil", inciName: "Cocos Nucifera Oil", commonName: "Coconut oil", percentage: 15.0, function: "Emollient", phase: "Anhydrous blend" },
      { chemistryId: "shea-butter", inciName: "Butyrospermum Parkii Butter", commonName: "Shea butter", percentage: 10.0, function: "Emollient, occlusive", phase: "Wax/butter phase" },
      { chemistryId: "beeswax", inciName: "Cera Alba", commonName: "Beeswax (or vegan wax alternative)", percentage: 13.0, function: "Structuring wax", phase: "Wax/butter phase" },
      { chemistryId: "calendula-extract", inciName: "Calendula Officinalis Flower Extract", commonName: "Calendula extract (in oil)", percentage: 4.0, function: "Botanical conditioning extract", phase: "Anhydrous blend" },
      { chemistryId: "tocopherol", inciName: "Tocopherol", commonName: "Vitamin E", percentage: 0.7, function: "Antioxidant / oxidation control", phase: "Anhydrous blend" },
      { chemistryId: "bisabolol", inciName: "Bisabolol", commonName: "alpha-Bisabolol", percentage: 0.3, function: "Sensory finish, fragrance component", phase: "Anhydrous blend" },
      { chemistryId: "fragrance", inciName: "Parfum", commonName: "Natural fragrance (or fragrance-free)", percentage: 2.0, function: "Fragrance (or fragrance-free option)", phase: "Anhydrous blend" },
    ],
    manufacturingProcess: ANHYDROUS_BALM_PROCESS,
    claimRestrictions: STANDARD_CLAIM_RESTRICTIONS,
    manufacturingNotes: [
      "Positioning must stay strictly cosmetic/botanical — no cannabis-leaf imagery, no medical-cannabis or pain-relief framing anywhere in artwork or copy.",
      "Cannabis Sativa Seed Oil lot must carry supplier documentation confirming cold-pressed seed origin and cannabinoid/THC absence before acceptance — see CBD / Cannabinoid Regulatory Hold and the testing plan.",
      "Vegan variant: substitute Cera Alba with Candelilla Wax (Euphorbia Cerifera) at an equivalent structuring dose; re-verify set point and texture.",
    ],
    formulationCompliance: draftFormulationCompliance({
      microbiologicalRisk: "Low",
      preservativeSystemValidation: "needs-review",
      restrictedSubstancesCheck: "needs-review",
    }),
  },
  {
    skuId: "sku-06",
    formulaCode: "FORM-SKU06-v0.1",
    version: "0.1 (draft concept)",
    type: "emulsion",
    status: "draft",
    targetPh: "5.0–5.5",
    targetViscosity: "Light gel-cream; fresh, low-tack, quick-absorbing.",
    ingredients: [
      { chemistryId: "aqua", inciName: "Aqua", commonName: "Water", percentage: 33.8, isQs: true, function: "Solvent / continuous phase", phase: "Water phase (A)" },
      { chemistryId: "aloe-vera", inciName: "Aloe Barbadensis Leaf Juice", commonName: "Aloe vera juice", percentage: 50.0, function: "Humectant / botanical base", phase: "Water phase (A)" },
      { chemistryId: "glycerin", inciName: "Glycerin", commonName: "Glycerin", percentage: 4.0, function: "Humectant", phase: "Water phase (A)" },
      { chemistryId: "panthenol", inciName: "Panthenol", commonName: "Pro-Vitamin B5", percentage: 1.5, function: "Humectant / conditioning agent", phase: "Cool-down phase (C)" },
      { chemistryId: "jojoba-oil", inciName: "Simmondsia Chinensis Seed Oil", commonName: "Jojoba oil", percentage: 2.0, function: "Emollient (light fraction)", phase: "Oil phase (B)" },
      { chemistryId: "caprylic-capric-triglyceride", inciName: "Caprylic/Capric Triglyceride", commonName: "Fractionated coconut oil", percentage: 3.0, function: "Lightweight emollient", phase: "Oil phase (B)" },
      { chemistryId: "cetearyl-olivate-sorbitan-olivate", inciName: "Cetearyl Olivate and Sorbitan Olivate", commonName: "Olive-derived emulsifier", percentage: 3.0, function: "Emulsifier (O/W)", phase: "Oil phase (B)" },
      { chemistryId: "xanthan-gum", inciName: "Xanthan Gum", commonName: "Xanthan gum", percentage: 0.4, function: "Rheology modifier", phase: "Water phase (A)" },
      { chemistryId: "chamomile-extract", inciName: "Chamomilla Recutita Flower Extract", commonName: "Chamomile or cucumber extract", percentage: 1.0, function: "Botanical conditioning extract", phase: "Cool-down phase (C)" },
      { chemistryId: "tocopherol", inciName: "Tocopherol", commonName: "Vitamin E", percentage: 0.2, function: "Antioxidant", phase: "Cool-down phase (C)" },
      { chemistryId: "preservative-system", inciName: "Preservative system", commonName: "Broad-spectrum preservative", percentage: 1.0, function: "Antimicrobial preservation", phase: "Cool-down phase (C)" },
      { chemistryId: "fragrance", inciName: "Parfum", commonName: "Fragrance-free or allergen-controlled aroma", percentage: 0.1, function: "Fragrance (or fragrance-free option)", phase: "Cool-down phase (C)" },
    ],
    phAdjusterNote: "Citric Acid / Sodium Hydroxide dosed q.s. to reach target pH 5.0–5.5; negligible mass already accounted for within the Aqua phase above.",
    manufacturingProcess: EMULSION_PROCESS,
    claimRestrictions: STANDARD_CLAIM_RESTRICTIONS,
    manufacturingNotes: [
      "Highest aloe vera content in the range (50%) — verify viscosity stability across the shelf-life window given aloe's variable solids content by supplier lot.",
      "Either Chamomilla Recutita Flower Extract or Cucumis Sativus Fruit Extract may be used — confirm against allergen and INCI screening before final selection.",
    ],
    formulationCompliance: draftFormulationCompliance({ microbiologicalRisk: "Medium" }),
  },
];

export function getFormula(skuId: SkuId): Formula {
  const formula = FORMULAS.find((f) => f.skuId === skuId);
  if (!formula) throw new Error(`No formula found for SKU: ${skuId}`);
  return formula;
}

export function formulaTotalPercentage(formula: Formula): number {
  return Math.round(formula.ingredients.reduce((sum, row) => sum + row.percentage, 0) * 100) / 100;
}
