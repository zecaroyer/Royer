// ---------------------------------------------------------------------------
// Ingredient chemistry reference table.
//
// For pure/simple compounds, a molecular formula is given. For complex natural
// oils/extracts/blends, NO single molecular formula is invented — the entry
// states explicitly that it is a complex mixture, per project policy. CAS
// numbers are commonly cited reference values for the named INCI material;
// verify the exact CAS/grade against the actual supplier CoA/SDS before use —
// natural extracts in particular are frequently registered under multiple or
// no CAS numbers depending on processing and supplier.
// ---------------------------------------------------------------------------

export type ChemistryType = "simple-compound" | "complex-mixture" | "polymer" | "blend";

export type IngredientChemistry = {
  id: string;
  inciName: string;
  commonName: string;
  function: string;
  chemistryType: ChemistryType;
  typicalChemistry: string;
  molecularFormula?: string;
  casNumber?: string;
  fattyAcidProfile?: string[];
  note?: string;
};

export const INGREDIENT_CHEMISTRY: IngredientChemistry[] = [
  {
    id: "aqua",
    inciName: "Aqua",
    commonName: "Water",
    function: "Solvent / continuous phase",
    chemistryType: "simple-compound",
    typicalChemistry: "Universal cosmetic solvent and continuous phase of every emulsion in this range.",
    molecularFormula: "H2O",
    casNumber: "7732-18-5",
  },
  {
    id: "glycerin",
    inciName: "Glycerin",
    commonName: "Glycerol",
    function: "Humectant",
    chemistryType: "simple-compound",
    typicalChemistry: "Simple triol; binds water at the skin surface as a humectant.",
    molecularFormula: "C3H8O3",
    casNumber: "56-81-5",
  },
  {
    id: "tocopherol",
    inciName: "Tocopherol",
    commonName: "Vitamin E",
    function: "Antioxidant",
    chemistryType: "simple-compound",
    typicalChemistry: "Lipid-soluble, chain-breaking antioxidant; protects oils from oxidative rancidity.",
    molecularFormula: "C29H50O2",
    casNumber: "59-02-9",
    note: "CAS shown is for alpha-tocopherol; commercial cosmetic-grade tocopherol is frequently a mixed-isomer blend (CAS 10191-41-9) — confirm against the supplier CoA.",
  },
  {
    id: "citric-acid",
    inciName: "Citric Acid",
    commonName: "Citric acid",
    function: "pH adjuster (lowering)",
    chemistryType: "simple-compound",
    typicalChemistry: "Tricarboxylic acid used in dilute solution to bring formula pH down to target range.",
    molecularFormula: "C6H8O7",
    casNumber: "77-92-9",
  },
  {
    id: "sodium-hydroxide",
    inciName: "Sodium Hydroxide",
    commonName: "Caustic soda / lye",
    function: "pH adjuster (raising)",
    chemistryType: "simple-compound",
    typicalChemistry: "Strong base used only in dilute aqueous solution to raise pH; requires careful dosing and handling controls.",
    molecularFormula: "NaOH",
    casNumber: "1310-73-2",
  },
  {
    id: "panthenol",
    inciName: "Panthenol",
    commonName: "Pro-Vitamin B5",
    function: "Humectant / conditioning agent",
    chemistryType: "simple-compound",
    typicalChemistry: "Alcohol analogue of pantothenic acid; cosmetic humectant and conditioning agent.",
    molecularFormula: "C9H19NO4",
    casNumber: "81-13-0",
  },
  {
    id: "bisabolol",
    inciName: "Bisabolol",
    commonName: "alpha-Bisabolol",
    function: "Skin-conditioning agent, fragrance component",
    chemistryType: "simple-compound",
    typicalChemistry: "Sesquiterpene alcohol found naturally in chamomile; used for sensory finish and fragrance character.",
    molecularFormula: "C15H26O",
    casNumber: "515-69-7",
  },
  {
    id: "squalane",
    inciName: "Squalane",
    commonName: "Squalane (vegetal)",
    function: "Emollient",
    chemistryType: "simple-compound",
    typicalChemistry: "Fully saturated hydrocarbon (hydrogenated squalene); a defined single molecule despite being plant-derived.",
    molecularFormula: "C30H62",
    casNumber: "111-01-3",
  },
  {
    id: "aloe-vera",
    inciName: "Aloe Barbadensis Leaf Juice",
    commonName: "Aloe vera juice",
    function: "Humectant / botanical base",
    chemistryType: "complex-mixture",
    typicalChemistry:
      "Complex natural mixture of triglycerides/fatty acids/unsaponifiables; no single molecular formula. Aqueous botanical extract: polysaccharides (acemannan), amino acids, trace organic acids and minerals dissolved in water.",
    casNumber: "85507-69-3",
    note: "CAS applies to the extract as commonly registered; composition varies by supplier processing (stabilisation, filtration, concentration).",
  },
  {
    id: "jojoba-oil",
    inciName: "Simmondsia Chinensis Seed Oil",
    commonName: "Jojoba oil",
    function: "Emollient",
    chemistryType: "complex-mixture",
    typicalChemistry:
      "Complex natural mixture; no single molecular formula. Botanically a liquid wax rather than a triglyceride: long-chain wax esters of fatty acids and fatty alcohols.",
    casNumber: "61789-91-1",
    fattyAcidProfile: ["Gondoic (eicosenoic) acid ~65–70%", "Erucic acid ~10–14%", "Oleic acid ~10–13%"],
  },
  {
    id: "rosehip-oil",
    inciName: "Rosa Canina Fruit Oil",
    commonName: "Rosehip oil",
    function: "Emollient, antioxidant-rich carrier oil",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex triglyceride/fatty acid mixture; no single molecular formula.",
    casNumber: "84603-93-0",
    fattyAcidProfile: ["Linoleic acid ~44%", "alpha-Linolenic acid ~32%", "Oleic acid ~14%"],
  },
  {
    id: "olive-oil",
    inciName: "Olea Europaea Fruit Oil",
    commonName: "Olive oil",
    function: "Emollient",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex triglyceride mixture rich in oleic acid; no single molecular formula.",
    casNumber: "8001-25-0",
    fattyAcidProfile: ["Oleic acid ~55–83%", "Linoleic acid ~4–21%", "Palmitic acid ~8–14%"],
  },
  {
    id: "coconut-oil",
    inciName: "Cocos Nucifera Oil",
    commonName: "Coconut oil",
    function: "Emollient",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex triglyceride mixture rich in lauric acid; no single molecular formula.",
    casNumber: "8001-31-8",
    fattyAcidProfile: ["Lauric acid ~45–53%", "Myristic acid ~16–21%", "Palmitic acid ~8–11%"],
  },
  {
    id: "hemp-seed-oil",
    inciName: "Cannabis Sativa Seed Oil",
    commonName: "Hemp seed oil",
    function: "Emollient",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex triglyceride mixture rich in linoleic and alpha-linolenic acids; no single molecular formula.",
    casNumber: "8023-98-1",
    fattyAcidProfile: ["Linoleic acid ~50–60%", "alpha-Linolenic acid ~15–20%", "Oleic acid ~10–16%"],
    note: "Cold-pressed from the seed only. Not a cannabinoid-bearing ingredient when properly sourced and documented — see the CBD / Cannabinoid Regulatory Hold section. Each lot still requires cannabinoid/THC absence verification (see testing plan).",
  },
  {
    id: "shea-butter",
    inciName: "Butyrospermum Parkii Butter",
    commonName: "Shea butter",
    function: "Emollient, occlusive",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex triglyceride/unsaponifiable mixture; no single molecular formula. Significant unsaponifiable fraction (triterpene alcohols).",
    casNumber: "91080-23-8",
    fattyAcidProfile: ["Oleic acid ~40–55%", "Stearic acid ~35–45%"],
  },
  {
    id: "caprylic-capric-triglyceride",
    inciName: "Caprylic/Capric Triglyceride",
    commonName: "Fractionated coconut oil (MCT)",
    function: "Emollient, lightweight carrier oil",
    chemistryType: "complex-mixture",
    typicalChemistry:
      "Mixture of triglycerides of caprylic and capric fatty acids; no single molecular formula. Semi-synthetic ester built from coconut/palm-derived medium-chain fatty acids esterified onto glycerin.",
    casNumber: "73398-61-5",
    fattyAcidProfile: ["Caprylic acid (C8) ~50–65%", "Capric acid (C10) ~30–45%"],
  },
  {
    id: "cetearyl-olivate-sorbitan-olivate",
    inciName: "Cetearyl Olivate and Sorbitan Olivate",
    commonName: "Olive-derived emulsifier blend",
    function: "Emulsifier (O/W)",
    chemistryType: "blend",
    typicalChemistry: "Emulsifier blend; no single molecular formula. Olive-oil-derived esters of cetearyl alcohol and sorbitan with olive fatty acids.",
    note: "Proprietary-style blend; no single commonly cited CAS number for the combined material.",
  },
  {
    id: "cetearyl-alcohol",
    inciName: "Cetearyl Alcohol",
    commonName: "Cetyl/stearyl alcohol blend",
    function: "Co-emulsifier, thickener",
    chemistryType: "complex-mixture",
    typicalChemistry: "Fatty alcohol mixture; no single molecular formula. Blend of cetyl (C16) and stearyl (C18) fatty alcohols.",
    casNumber: "8005-44-5",
  },
  {
    id: "glyceryl-stearate-citrate",
    inciName: "Glyceryl Stearate Citrate",
    commonName: "Glyceryl stearate citrate",
    function: "Emulsifier (mild, anionic)",
    chemistryType: "blend",
    typicalChemistry: "Ester blend; no single molecular formula. Ester of glycerin, stearic acid and citric acid.",
    note: "No single commonly cited CAS number for the combined ester blend.",
  },
  {
    id: "xanthan-gum",
    inciName: "Xanthan Gum",
    commonName: "Xanthan gum",
    function: "Rheology modifier / stabiliser",
    chemistryType: "polymer",
    typicalChemistry: "Polysaccharide, variable polymer structure; no single molecular formula. High molecular weight biopolymer produced by fermentation.",
    casNumber: "11138-66-2",
  },
  {
    id: "calendula-extract",
    inciName: "Calendula Officinalis Flower Extract",
    commonName: "Calendula extract (in oil)",
    function: "Botanical conditioning extract",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex natural mixture; no single molecular formula. Oil-soluble botanical infusion of carotenoids, flavonoids and triterpenes.",
    casNumber: "84776-23-8",
  },
  {
    id: "beeswax",
    inciName: "Cera Alba",
    commonName: "Beeswax",
    function: "Structuring wax",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex natural mixture; no single molecular formula. Long-chain wax esters, fatty acids and hydrocarbons secreted by Apis mellifera.",
    casNumber: "8012-89-3",
    note: "Vegan alternative: Candelilla Wax (Euphorbia Cerifera, CAS 8006-44-8) or Rice Bran Wax (Oryza Sativa Cera).",
  },
  {
    id: "chamomile-extract",
    inciName: "Chamomilla Recutita Flower Extract",
    commonName: "Chamomile extract",
    function: "Botanical conditioning extract",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex natural mixture; no single molecular formula.",
    casNumber: "84082-60-0",
  },
  {
    id: "cucumber-extract",
    inciName: "Cucumis Sativus Fruit Extract",
    commonName: "Cucumber extract",
    function: "Botanical conditioning extract",
    chemistryType: "complex-mixture",
    typicalChemistry: "Complex natural mixture; no single molecular formula.",
    casNumber: "89998-01-0",
  },
  {
    id: "preservative-system",
    inciName: "Preservative system (example reference only)",
    commonName: "Broad-spectrum preservative blend",
    function: "Antimicrobial preservation",
    chemistryType: "blend",
    typicalChemistry:
      "Example reference only — exact INCI(s) and CAS number(s) to be selected and challenge-tested by the formulator/safety assessor. Must be a broad-spectrum, EU Annex V-compliant system (e.g. a Phenoxyethanol/Ethylhexylglycerin or organic-acid-based system).",
    casNumber: "To be selected/validated by formulator",
  },
  {
    id: "fragrance",
    inciName: "Parfum",
    commonName: "Fragrance / natural aroma",
    function: "Sensory / fragrance",
    chemistryType: "blend",
    typicalChemistry: "Allergen-controlled natural aroma blend, or fragrance-free option. If used, the EU-regulated fragrance allergens must be screened and declared above their labelling threshold.",
    note: "No single CAS number — composition is formulator/supplier-specific and must be disclosed via allergen declaration.",
  },
];

export function getChemistry(id: string): IngredientChemistry | undefined {
  return INGREDIENT_CHEMISTRY.find((i) => i.id === id);
}
