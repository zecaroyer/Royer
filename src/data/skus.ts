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
  imagePath: string;
  imageAlt: string;
  imageBlurDataUrl: string;
};

// Product photography note: images under /public/products are AI-generated
// concept mockups with the ROYER wordmark composited onto the label by the
// image model — no real packaging has been produced yet. Used here to
// visualise positioning only, not as photos of a manufactured product.

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
    imagePath: "/products/sku-01.jpg",
    imageAlt: "ROYER-branded concept render of the 50 ml airless pump jar for the Aloe Vera Daily Face Cream",
    imageBlurDataUrl: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgMF/8QAHxAAAQQCAgMAAAAAAAAAAAAAAgEDBBEAEhMhIjFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A3H3morSuyD1BFq6xRZDUprdgtg9XVZKZFdktiPIFCaFRhaL86XDHjPsgYoTLey34CtJ1XSZJr//Z",
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
    imagePath: "/products/sku-02.jpg",
    imageAlt: "ROYER-branded concept render of the 30 ml glass dropper bottle for the Rosehip + Jojoba Premium Face Oil",
    imageBlurDataUrl: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQF/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQMCAAQREiFBMVFSkf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A0GyEFylI4ABOamQwOtls2EtojJHZ7p1pvE3AYdWqiCTDI2lx49Ui1liwZpms/ORx+UMLX//Z",
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
    imagePath: "/products/sku-03.jpg",
    imageAlt: "ROYER-branded concept render of the 200 ml jar for the Aloe + Olive Body Cream",
    imageBlurDataUrl: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQF/8QAIxAAAgICAQIHAAAAAAAAAAAAAQIDBAARIQUSIjFBYXGB8P/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3rNyvDEXklVV5G/3xh171S4uoplcj18sJ6TnxMYpj3sexzoEEa5OuT75HH0+zHJKUgiVXUBVWTYXX1kif//Z",
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
    imagePath: "/products/sku-04.jpg",
    imageAlt: "ROYER-branded concept render of the 75 ml tube for the Coconut + Aloe Hand Cream",
    imageBlurDataUrl: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAIBAAAwACAgEFAAAAAAAAAAAAAQIDBBEAEhQhMTJBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/ANNlirY7iFBOp+LEbAPCYc7Ux28igpUOw7AaBA4y6l4uqN1Yj0P4eS8ZMzGnCLEV0dvUsB97I0ffkqUf/9k=",
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
    imagePath: "/products/sku-05.jpg",
    imageAlt: "ROYER-branded concept render of the 50 ml tin for the Hemp Seed + Calendula Botanical Balm",
    imageBlurDataUrl: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwUG/8QAIxAAAQMDAwUBAAAAAAAAAAAAAQIDEQAEIRIxQQUTImGh0f/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEAAgMAAAAAAAAAAAAAAAAAAEEhMWH/2gAMAwEAAhEDEQA/ANCXFLXjEbGcH9o3F6VypYA3j5iaK5ZeUnwcLRnUl0bp4gipx6bfOXBU+/3VDkzgeqmU2M8P/9k=",
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
    imagePath: "/products/sku-06.jpg",
    imageAlt: "ROYER-branded concept render of the 100 ml jar for the Aloe Botanical Gel-Cream",
    imageBlurDataUrl: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBf/EACAQAAICAwABBQAAAAAAAAAAAAECAxEABAUSISJBUnH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDX6PQGhGjmJpPIn0BqqwczpL0EZ1iZK+xxM2jvztG0kkBaFiVJFq1ijYynV1J4nkeRovNwo9ikBQP35yRr/9k=",
  },
];

export function getSku(id: SkuId): Sku {
  const sku = SKUS.find((s) => s.id === id);
  if (!sku) throw new Error(`Unknown SKU id: ${id}`);
  return sku;
}
