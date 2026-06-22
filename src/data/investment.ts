// ---------------------------------------------------------------------------
// Angel investment plan content — mirrors INVESTMENT_PLAN.md.
// Market figures are third-party desk-research estimates (cited inline);
// everything else is a placeholder modelling assumption, not a commitment.
// ---------------------------------------------------------------------------

export type MarketStat = {
  label: string;
  value: string;
  source: string;
};

export const MARKET_STATS: MarketStat[] = [
  { label: "Portugal skincare market, 2025", value: "$478.35M", source: "IMARC Group" },
  { label: "Portugal skincare market, 2034 (proj.)", value: "$660.38M", source: "IMARC Group, ~3.65% CAGR" },
  { label: "Portugal beauty & personal care, 2025", value: "$1,528.19M", source: "IMARC Group" },
  { label: "Natural cosmetics CAGR, 2024–2029", value: "~5.40%", source: "Market Research Future" },
];

export type UseOfFundsItem = {
  allocation: string;
  pct: number;
  amountEur: number;
  covers: string;
};

export const USE_OF_FUNDS: UseOfFundsItem[] = [
  { allocation: "Regulatory & compliance", pct: 10, amountEur: 30000, covers: "Safety assessor, CPSR/PIF/CPNP across 6 SKUs, regulatory consultant fees" },
  { allocation: "Facility fit-out & equipment", pct: 30, amountEur: 90000, covers: "Lab zoning, HVAC/water utilities, core equipment list" },
  { allocation: "Initial production & inventory", pct: 15, amountEur: 45000, covers: "First commercial batches across all 6 SKUs, packaging, raw materials" },
  { allocation: "Brand, content & launch marketing", pct: 20, amountEur: 60000, covers: "Real product photography, e-commerce build, launch campaign" },
  { allocation: "Team & operations", pct: 20, amountEur: 60000, covers: "Founder/operator runway, contract labour, admin" },
  { allocation: "Contingency / working capital", pct: 5, amountEur: 15000, covers: "Buffer against placeholder cost assumptions turning out higher in reality" },
];

export const TARGET_RAISE_EUR = 300000;

export type FinancialRampRow = {
  year: string;
  stage: string;
  revenueRange: string;
  notes: string;
};

export const FINANCIAL_RAMP: FinancialRampRow[] = [
  { year: "Year 1", stage: "Build, regulatory, first shipments in final 1–2 months", revenueRange: "€20,000–€40,000", notes: "Mostly pre-revenue; roadmap Phases 0–5" },
  { year: "Year 2", stage: "First full commercial year, ramping", revenueRange: "€190,000–€285,000", notes: "~40–60% of modelled steady-state run rate" },
  { year: "Year 3", stage: "Steady-state at modelled volumes", revenueRange: "up to ~€475,000 (D2C)", notes: "Full run-rate ceiling at current 6-SKU, single-market scope" },
];

export const INVESTOR_RISK_HIGHLIGHTS = [
  {
    title: "Regulatory — CBD/cannabinoid ingredient risk",
    mitigation: "Mitigated by design: no cannabinoid-bearing ingredient is in any formula; hemp seed oil is the only cannabis-plant ingredient, gated by a dedicated regulatory hold.",
  },
  {
    title: "Claims risk",
    mitigation: "The most common compliance failure mode in this category — mitigated by the claims-substantiation workflow already built into /compliance.",
  },
  {
    title: "Timing risk",
    mitigation: "Placing product on the market before CPNP/CPSR completion — mitigated by a hard launch-checklist gate.",
  },
  {
    title: "Cost-model risk",
    mitigation: "Every cost figure in this plan is a placeholder; real supplier quotes could materially change the unit economics.",
  },
  {
    title: "Execution risk",
    mitigation: "This plan assumes a founding team capable of running regulatory, production, and commercial workstreams in parallel.",
  },
];
