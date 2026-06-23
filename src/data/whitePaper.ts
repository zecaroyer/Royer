// ---------------------------------------------------------------------------
// White paper content: a dated master timeline laid over the same six
// implementation phases already defined in src/data/roadmap.ts (Months 1–12),
// plus the multi-round fundraising plan that funds them. Keep the milestone
// wording here in sync with roadmap.ts if either changes — this file adds
// calendar dates and funding context, it does not redefine the phases.
//
// Every date and figure below is an illustrative planning target for
// internal/investor discussion, not a commitment — see the standard
// disclaimer in the footer and FormulationDisclaimerBox-style hedging used
// throughout this site.
// ---------------------------------------------------------------------------

export type DatedPhase = {
  id: string;
  phase: string;
  window: string;
  milestones: string[];
};

export const DATED_ROADMAP: DatedPhase[] = [
  {
    id: "phase-p",
    phase: "Phase P — Pre-Launch Preparation",
    window: "Now (June 2026) – December 2026",
    milestones: [
      "Technical, formulation, compliance and investment dossiers drafted (this site)",
      "Six SKUs fully specified, pending lab validation",
      "Pre-seed fundraising outreach and data-room access set up",
      "Brand identity, positioning and initial marketing concepts drafted",
    ],
  },
  {
    id: "phase-0",
    phase: "Phase 0 — Legal & Regulatory Foundations",
    window: "January 2027 – February 2027",
    milestones: [
      "Engage regulatory consultant and safety assessor",
      "Designate EU-established Responsible Person",
      "Legal opinion on CBD/cannabinoid ingredient exclusion (confirm hemp seed oil route)",
      "Define INFARMED cosmetic entity registration requirements",
    ],
  },
  {
    id: "phase-1",
    phase: "Phase 1 — Formulation & Lab Pilot",
    window: "February 2027 – May 2027",
    milestones: [
      "Bench-scale formulation of priority SKUs",
      "Stability testing (real-time + accelerated) started",
      "Preservative efficacy (challenge) testing per formula",
      "Draft CPSR opened per formula version",
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2 — Facility Fit-Out",
    window: "April 2027 – August 2027",
    milestones: [
      "Lease/fit-out of facility per zoning concept (see /laboratory)",
      "HVAC, water system and utilities installation",
      "Equipment procurement and installation qualification",
      "GMP/ISO 22716 documentation set drafted (SOPs, logs, templates)",
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3 — Pilot Batches & Validation",
    window: "July 2027 – September 2027",
    milestones: [
      "First pilot batches under draft batch manufacturing records",
      "Environmental monitoring baseline established",
      "Equipment calibration and cleaning validation",
      "Mock recall exercise using the traceability system",
    ],
  },
  {
    id: "phase-4",
    phase: "Phase 4 — Regulatory Submission & Launch Readiness",
    window: "September 2027 – November 2027",
    milestones: [
      "CPSR finalised and signed by safety assessor",
      "Label artwork legal review and approval",
      "CPNP notification filed per SKU",
      "PIF completed and archived per SKU",
    ],
  },
  {
    id: "phase-5",
    phase: "Phase 5 — Commercial Launch",
    window: "December 2027 onward",
    milestones: [
      "First commercial batches released to distribution",
      "Complaint handling and CAPA processes live",
      "Quarterly compliance and traceability audit cadence established",
    ],
  },
  {
    id: "phase-6",
    phase: "Phase 6 — EU Market Expansion",
    window: "2028 onward",
    milestones: [
      "Expand distribution beyond Portugal to additional EU markets under the existing CPNP notification",
      "Evaluate additional SKUs and product-line extensions",
      "Revisit the CBD/cannabinoid ingredient question only if a dedicated legal opinion has cleared it by this point",
    ],
  },
];

export type FundingRound = {
  id: string;
  name: string;
  window: string;
  targetEur: number;
  instrument: string;
  unlocks: string;
};

// Only the Pre-Seed figure mirrors a real number already modelled in
// src/data/investment.ts (TARGET_RAISE_EUR). Seed and Growth figures are
// directional placeholders for planning conversations, not pricing.
export const FUNDING_ROUNDS: FundingRound[] = [
  {
    id: "pre-seed",
    name: "Pre-Seed",
    window: "Now (mid-2026) – December 2026",
    targetEur: 300000,
    instrument: "SAFE / convertible note (placeholder, subject to legal counsel)",
    unlocks: "Phase 0–2: legal foundations, formulation & lab pilot, facility fit-out",
  },
  {
    id: "seed",
    name: "Seed",
    window: "Illustrative — around Q3 2027, after Phase 3 pilot validation",
    targetEur: 900000,
    instrument: "Priced round or SAFE — instrument TBD with counsel",
    unlocks: "Phase 4–5: regulatory submission, launch inventory, launch marketing",
  },
  {
    id: "growth",
    name: "Growth / Series A",
    window: "Illustrative — 2028 onward, after commercial traction",
    targetEur: 3000000,
    instrument: "Priced equity round — terms not yet modelled",
    unlocks: "Phase 6: multi-market EU expansion, additional SKUs/lines",
  },
];
