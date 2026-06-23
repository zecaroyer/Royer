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
    imageBlurDataUrl: "data:image/jpeg;base64,/9j//gAQTGF2YzYyLjExLjEwMAD/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/xABmAAEBAQAAAAAAAAAAAAAAAAACBQcBAQEBAAAAAAAAAAAAAAAAAAMEAhAAAgICAgIDAQAAAAAAAAAAAQIDESEABAUSMXGBQRMRAQACAgIDAQEAAAAAAAAAAAEAIQIRQQMTBFFCMf/AABEIAAwADAMBEgACEgADEgD/2gAMAwEAAhEDEQA/AMe4EAeQmWOZ0C4EYyXsULsfOqBf7hUcmlWxRo5Yfv3p9qhTiX+vkXRiuWrad3Ndel5a4hhuVW7DsIWaOIzhEZlTNHxBIFgH3pHKlgLRoR4qzAWATg17Oxvr4P8AQ3K3EytlXlz43AMkqf/Z",
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
    imageBlurDataUrl: "data:image/jpeg;base64,/9j//gAQTGF2YzYyLjExLjEwMAD/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/xABtAAEBAQAAAAAAAAAAAAAAAAACBgcBAQEBAQEAAAAAAAAAAAAAAAEEAgMFEAACAgEDBQEBAAAAAAAAAAACAQMRAAQxIXJRQQUi0gYRAAEDBAAHAQAAAAAAAAAAAAECABESIVGR0QMxgeFhFBP/wAARCAAMAAwDARIAAhIAAxIA/9oADAMBAAIRAxEAPwDGdLIIETYovgq5qiexbctdsQiiIb8U8CgrHWIv4dFIhXsNCoOXzqJpFrOrj/r/AGmnAIopyAAVJYIdFFPGJmybfT+c8v5k5O3sqPLJSIjvxdn7HA0xKAoSZf8A/9k=",
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
    imageBlurDataUrl: "data:image/jpeg;base64,/9j//gAQTGF2YzYyLjExLjEwMAD/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/xABrAAADAQAAAAAAAAAAAAAAAAADBAUHAQEBAQEAAAAAAAAAAAAAAAAEAwECEAACAgEEAgMBAAAAAAAAAAABAgMRBAASMUEiITITUQURAQACAgIBBQEAAAAAAAAAAAECABEhMUEDcnFhgUIi/8AAEQgADAAMAwESAAISAAMSAP/aAAwDAQACEQMRAD8AyPFjhR1MjurfbEPFAw2N8m9ke16Xv90NEEjx7rNsq8nizrEnI/kjj5cbqYgcF6ixOc/RZc2tn/1s1slwkkhRPCM0FJRSdpIBoEjSmSakrpRtHPAsDvQzwEdIZ7xszWH69TUPmk7OOrB69i//2Q==",
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
    imageBlurDataUrl: "data:image/jpeg;base64,/9j//gAQTGF2YzYyLjExLjEwMAD/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/xABpAAEBAQAAAAAAAAAAAAAAAAAFAwcBAQEBAAAAAAAAAAAAAAAAAAQAARABAAIBBAIBBQEAAAAAAAAAAQIDESEEEgAxQQUTcWFRIzIRAAICAgMBAQEAAAAAAAAAAAECEQAhAzFhUSJBEv/AABEIAAwADAMBEgACEgADEgD/2gAMAwEAAhEDEQA/AMg21c9xa1VV/Usk/wAw/wBMl8GUNc5Pt2dLmFsvEokGMjRi8jUfT3fka2/rzmziSokwZkfhxbJYRdU8nyIrTufkKVrc1MHDCTxYvs4qY/fT7rrN5Is3Em6fEjznrLAaC/joCmo557rlUKIFUH2DqmJLZN//2Q==",
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
    imageBlurDataUrl: "data:image/jpeg;base64,/9j//gAQTGF2YzYyLjExLjEwMAD/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/xABvAAEBAQAAAAAAAAAAAAAAAAAFBgcBAQEBAAAAAAAAAAAAAAAAAAQFAxAAAgIABQIHAQAAAAAAAAAAAQIDEQQABSEiMRIUE2FxUZFBMhEAAgEDBAIDAQAAAAAAAAAAAQIAAxEhMRITIkFxgVFhMv/AABEIAAwADAMBEgACEgADEgD/2gAMAwEAAhEDEQA/AMw0jSk1CRVZ+22qgVUgj3/ckIiuyEje+tnI69ZqX8i/7k3lAYvaKpUw+ptCHOsq8WPAYmXDwYrzURtnXoSQL/k0SDYJGxIybFLJKt9xjA4hY+CKB8KPs+uZ6UeVFZgASNIwUkTFg3kluzH2TGNU2EqCSPuYcrvm+3wAvUD4E//Z",
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
    imageBlurDataUrl: "data:image/jpeg;base64,/9j//gAQTGF2YzYyLjExLjEwMAD/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/xABtAAEAAAAAAAAAAAAAAAAAAAAGAQEBAQAAAAAAAAAAAAAAAAAFAgYQAAICAAUEAwEAAAAAAAAAAAECEQMEEkEAEyExUSIUMwUjEQACAQMDAwUBAAAAAAAAAAACAQMRACExBCJBYSMS8NGxUYH/wAARCAAMAAwDARIAAhIAAxIA/9oADAMBAAIRAxEAPwA98j8aupRiMLdy8xrsBZmisiQ+brJhyCoC66k7NUWNWuHxQ+zmI1y9E75QQAZMmIk7oYJ4RqYDJXTyENHjFF92gZGG34mQ+quU9M0xdGYylwkcaWvASqv7ZxJGZppYp82pJUkjCU/wUsteeQxAYyYnpmMmJPfvs6MXfeM5dkkt61s1aD2OisJ8kmSfO87uNqccjRyAJdVrTONO1phADGpVNk22ROrbt6PewoV17/vt2QIoUkr/AP/Z",
  },
];

export function getSku(id: SkuId): Sku {
  const sku = SKUS.find((s) => s.id === id);
  if (!sku) throw new Error(`Unknown SKU id: ${id}`);
  return sku;
}
