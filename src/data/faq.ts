export type FaqItem = {
  question: string;
  answer: string;
};

export const HOME_FAQ: FaqItem[] = [
  {
    question: "Is ROYER a medical product or supplement?",
    answer:
      "No. ROYER is a cosmetics project under EU Regulation (EC) 1223/2009. Nothing on this site is a medicine, medical device, food supplement, or medical-cannabis product, and no claim treats, cures, or relieves any medical condition.",
  },
  {
    question: "Does ROYER sell CBD?",
    answer:
      "No. One formula uses hemp seed oil (Cannabis Sativa Seed Oil) as a cosmetic emollient — not CBD. Any cannabinoid-bearing ingredient is on a regulatory hold and excluded from sale until a qualified legal/regulatory pathway is confirmed. See /compliance.",
  },
  {
    question: "Is the product already being manufactured and sold?",
    answer:
      "Not yet. This is a pre-seed, draft-stage project: six formulas are fully specified, but CPSR, PIF, CPNP notification, and Responsible Person validation are still pending expert review — see the live status on /compliance.",
  },
  {
    question: "How can I invest or partner with ROYER?",
    answer:
      "See /investidores for the angel investment plan, unit economics, and a contact form to request the data room or book a call.",
  },
  {
    question: "Where are the products manufactured?",
    answer:
      "The laboratory concept is designed to be built and registered in Portugal, manufacturing under ISO 22716 GMP and selling EU-wide via a single CPNP notification per SKU. See /projeto-laboratorio.",
  },
];
