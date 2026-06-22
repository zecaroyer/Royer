import type { ComplianceStatus } from "@/components/ui/StatusPill";

export type SkuId = "sku-01" | "sku-02" | "sku-03" | "sku-04" | "sku-05" | "sku-06";

export type Sku = {
  id: SkuId;
  code: string;
  name: string;
  volumeMl: number;
  format: string;
  positioning: string;
  heroIngredient: string;
  cosmeticClaims: string[];
  usesHempSeedOil: boolean;
  containsCannabinoid: boolean;
  complianceStatus: ComplianceStatus;
};

export const SKUS: Sku[] = [
  {
    id: "sku-01",
    code: "SKU-01",
    name: "Aloe Vera Daily Face Cream",
    volumeMl: 50,
    format: "50 ml airless pump jar",
    positioning: "Light daily botanical face cream.",
    heroIngredient: "Aloe Barbadensis Leaf Juice",
    cosmeticClaims: ["Daily hydration", "Light, fast-absorbing finish", "Softens skin texture"],
    usesHempSeedOil: false,
    containsCannabinoid: false,
    complianceStatus: "draft",
  },
  {
    id: "sku-02",
    code: "SKU-02",
    name: "Rosehip + Jojoba Premium Face Oil",
    volumeMl: 30,
    format: "30 ml glass dropper bottle",
    positioning: "Premium anhydrous facial oil.",
    heroIngredient: "Rosa Canina Fruit Oil (Rosehip Oil)",
    cosmeticClaims: ["Nourishing facial oil", "Silky, fast-absorbing finish", "Antioxidant-rich formula"],
    usesHempSeedOil: false,
    containsCannabinoid: false,
    complianceStatus: "draft",
  },
  {
    id: "sku-03",
    code: "SKU-03",
    name: "Aloe + Olive Body Cream",
    volumeMl: 200,
    format: "200 ml PP jar",
    positioning: "Rich botanical body cream.",
    heroIngredient: "Olea Europaea Fruit Oil (Olive Oil)",
    cosmeticClaims: ["Rich, nourishing body cream", "Softens skin texture", "Daily comfort"],
    usesHempSeedOil: false,
    containsCannabinoid: false,
    complianceStatus: "draft",
  },
  {
    id: "sku-04",
    code: "SKU-04",
    name: "Coconut + Aloe Hand Cream",
    volumeMl: 75,
    format: "75 ml tube",
    positioning: "Compact hand cream for daily use.",
    heroIngredient: "Cocos Nucifera Oil (Coconut Oil)",
    cosmeticClaims: ["Fast-absorbing hand cream", "Daily comfort", "Non-greasy finish"],
    usesHempSeedOil: false,
    containsCannabinoid: false,
    complianceStatus: "draft",
  },
  {
    id: "sku-05",
    code: "SKU-05",
    name: "Hemp Seed + Calendula Botanical Balm",
    volumeMl: 50,
    format: "50 ml metal tin",
    positioning: "Waterless botanical balm — hemp seed oil, no CBD.",
    heroIngredient: "Cannabis Sativa Seed Oil (Hemp Seed Oil)",
    cosmeticClaims: ["Rich occlusive balm", "Softens dry skin texture", "Botanical fragrance"],
    usesHempSeedOil: true,
    containsCannabinoid: false,
    complianceStatus: "draft",
  },
  {
    id: "sku-06",
    code: "SKU-06",
    name: "Aloe Botanical Gel-Cream",
    volumeMl: 100,
    format: "100 ml PP jar",
    positioning: "Light gel-cream, fresh botanical texture.",
    heroIngredient: "Aloe Barbadensis Leaf Juice",
    cosmeticClaims: ["Fresh, lightweight finish", "Daily hydration", "Fragrance-free option available"],
    usesHempSeedOil: false,
    containsCannabinoid: false,
    complianceStatus: "draft",
  },
];

export function getSku(id: SkuId): Sku {
  const sku = SKUS.find((s) => s.id === id);
  if (!sku) throw new Error(`Unknown SKU id: ${id}`);
  return sku;
}
