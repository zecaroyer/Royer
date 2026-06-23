// ---------------------------------------------------------------------------
// Go-to-market content for the Marketing Plan page. Pricing references
// src/data/skuCosts.ts via /costs rather than restating numbers here — see
// CLAUDE.md rule 6 (cost figures are placeholders, cite rather than copy).
// ---------------------------------------------------------------------------

export type PositioningPillar = {
  title: string;
  body: string;
};

export const POSITIONING_PILLARS: PositioningPillar[] = [
  {
    title: "Premium, not pharmacy",
    body: "Royal-blue-and-gold visual identity, editorial photography, no clinical/drugstore cues — the target customer pays a premium price and expects the brand to look like one.",
  },
  {
    title: "One ingredient story, told well",
    body: "Aloe vera and hemp seed oil, both mature and well-characterised — depth over breadth. Marketing leans on sourcing transparency and sensory experience, not exotic-ingredient hype.",
  },
  {
    title: "Cosmetic claims only, always",
    body: "Every claim is sensory/cosmetic-function (hydrates, softens, nourishes) and substantiated before publication — see /compliance. No exceptions for ad copy, influencer briefs, or video scripts.",
  },
];

export type Channel = {
  name: string;
  role: string;
};

export const CHANNEL_MIX: Channel[] = [
  { name: "D2C e-commerce", role: "Primary revenue channel at launch; full-price margin, owns the customer relationship and first-party data." },
  { name: "Paid social (Instagram/TikTok)", role: "Primary acquisition channel pre- and post-launch; vertical video-first creative, the ASMR concept library below." },
  { name: "Organic content & SEO", role: "Brand-story and ingredient-education content; supports paid efficiency over time rather than replacing it." },
  { name: "Selective wholesale", role: "Curated boutiques/spas matching the premium positioning once D2C demand validates the range — see the wholesale margin model on /costs." },
  { name: "Email/CRM", role: "Retention and repeat-purchase channel; the newsletter capture already live on the public homepage feeds this list pre-launch." },
];

export type ContentPillar = {
  title: string;
  description: string;
};

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    title: "Sensory product film",
    description: "Macro texture shots, application motion, ASMR sound design — describing how the product feels in the moment, never a results claim or testimonial. See the six concept films below.",
  },
  {
    title: "Ingredient & sourcing education",
    description: "Where the aloe vera and hemp seed oil come from, why they were chosen, how supplier qualification works — content that earns the premium price with substance, not adjectives.",
  },
  {
    title: "Process transparency",
    description: "Compliance-first manufacturing as a brand asset: batch traceability, GMP facility, the same dashboard investors see — repurposed as customer-facing trust content, not hidden as back-office detail.",
  },
];

export type AsmrConcept = {
  skuId: string;
  videoPath: string;
  mood: string;
};

export const ASMR_CONCEPTS: AsmrConcept[] = [
  { skuId: "sku-01", videoPath: "/marketing/asmr/sku-01.mp4", mood: "Fingertip dip into the jar, light whipped texture, calm morning routine." },
  { skuId: "sku-02", videoPath: "/marketing/asmr/sku-02.mp4", mood: "Dropper drops catching morning light, glossy fingertip application." },
  { skuId: "sku-03", videoPath: "/marketing/asmr/sku-03.mp4", mood: "Indulgent body-cream massage, robe and soft golden light." },
  { skuId: "sku-04", videoPath: "/marketing/asmr/sku-04.mp4", mood: "Hand-to-hand massage, close on fingers and knuckles." },
  { skuId: "sku-05", videoPath: "/marketing/asmr/sku-05.mp4", mood: "Solid balm warming and melting between fingertips, calendula accent." },
  { skuId: "sku-06", videoPath: "/marketing/asmr/sku-06.mp4", mood: "Cool blue-tinted gel, light patting application, refreshed mood." },
];
