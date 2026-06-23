import type { SkuId } from "./skus";

export type ProductFamily = {
  id: string;
  name: string;
  format: string;
  description: string;
  keyIngredients: string[];
  cosmeticClaims: string[];
  representativeSkuId: SkuId;
};

// Cosmetic positioning only. No medical, therapeutic or treatment claims.
// Wording is restricted to skin-feel / sensory / cosmetic-function claims
// permissible under Regulation (EC) 1223/2009, Art. 20 — every final claim
// requires substantiation before use (see /compliance).
export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    id: "aloe-gel-cream",
    name: "Aloe Vera Gel-Cream",
    format: "Face & body, 30–100 ml jar",
    description:
      "A light, fast-absorbing gel-cream built on a high-content aloe vera base, designed for a fresh, hydrated skin-feel and a clean sensory finish.",
    keyIngredients: ["Aloe Barbadensis leaf juice", "Glycerin", "Panthenol"],
    cosmeticClaims: ["Hydrates", "Lightweight finish", "Refreshing sensation"],
    representativeSkuId: "sku-06",
  },
  {
    id: "hemp-seed-body-cream",
    name: "Hemp Seed Oil Body Cream",
    format: "Body, 100–250 ml jar / bottle",
    description:
      "A nourishing body cream formulated around cold-pressed hemp seed oil for a silky after-feel and long-lasting surface comfort.",
    keyIngredients: ["Cannabis Sativa seed oil", "Shea butter", "Aloe vera"],
    cosmeticClaims: ["Nourishes skin surface", "Silky after-feel", "Softens skin texture"],
    representativeSkuId: "sku-05",
  },
  {
    id: "botanical-facial-line",
    name: "Botanical Facial Cream Line",
    format: "Face, 30–50 ml jar / airless pump",
    description:
      "A premium facial line combining aloe vera with rosemary, calendula and green tea extracts for a balanced, elegant daily routine.",
    keyIngredients: ["Aloe vera", "Calendula officinalis extract", "Camellia sinensis (green tea) extract"],
    cosmeticClaims: ["Daily comfort", "Smooth, even-looking skin", "Antioxidant-rich formula"],
    representativeSkuId: "sku-02",
  },
  {
    id: "botanical-body-lotion",
    name: "Botanical Body Lotion",
    format: "Body, 250 ml bottle",
    description:
      "A fluid, quickly absorbed lotion for everyday use, combining aloe vera with lavender and chamomile extracts purely for fragrance and sensory character.",
    keyIngredients: ["Aloe vera", "Lavandula angustifolia extract", "Chamomilla recutita extract"],
    cosmeticClaims: ["Everyday hydration", "Pleasant botanical scent", "Quick absorption"],
    representativeSkuId: "sku-03",
  },
];

export const POSITIONING_NOTES = [
  "All product families are cosmetics under Regulation (EC) 1223/2009 — intended exclusively to clean, perfume, protect, change the appearance of, or keep skin in good condition.",
  "No claim on this site refers to treating, curing, preventing or relieving any disease or medical condition.",
  "Any CBD/cannabinoid-bearing ingredient is excluded from formulation until a dedicated legal and regulatory review confirms it is permitted — see the compliance warning on this page and on /compliance.",
];
