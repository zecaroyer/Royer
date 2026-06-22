export type RoadmapPhase = {
  phase: string;
  duration: string;
  milestones: string[];
};

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: "Phase 0 — Legal & Regulatory Foundations",
    duration: "Months 1–2",
    milestones: [
      "Engage regulatory consultant and safety assessor",
      "Designate EU-established Responsible Person",
      "Legal opinion on CBD/cannabinoid ingredient exclusion (confirm hemp seed oil route)",
      "Define INFARMED cosmetic entity registration requirements",
    ],
  },
  {
    phase: "Phase 1 — Formulation & Lab Pilot",
    duration: "Months 2–5",
    milestones: [
      "Bench-scale formulation of priority SKUs",
      "Stability testing (real-time + accelerated) started",
      "Preservative efficacy (challenge) testing per formula",
      "Draft CPSR opened per formula version",
    ],
  },
  {
    phase: "Phase 2 — Facility Fit-Out",
    duration: "Months 4–8",
    milestones: [
      "Lease/fit-out of facility per zoning concept (see laboratory layout)",
      "HVAC, water system and utilities installation",
      "Equipment procurement and installation qualification",
      "GMP/ISO 22716 documentation set drafted (SOPs, logs, templates)",
    ],
  },
  {
    phase: "Phase 3 — Pilot Batches & Validation",
    duration: "Months 7–9",
    milestones: [
      "First pilot batches under draft batch manufacturing records",
      "Environmental monitoring baseline established",
      "Equipment calibration and cleaning validation",
      "Mock recall exercise using the traceability system",
    ],
  },
  {
    phase: "Phase 4 — Regulatory Submission & Launch Readiness",
    duration: "Months 9–11",
    milestones: [
      "CPSR finalised and signed by safety assessor",
      "Label artwork legal review and approval",
      "CPNP notification filed per SKU",
      "PIF completed and archived per SKU",
    ],
  },
  {
    phase: "Phase 5 — Commercial Launch",
    duration: "Month 12+",
    milestones: [
      "First commercial batches released to distribution",
      "Complaint handling and CAPA processes live",
      "Quarterly compliance and traceability audit cadence established",
    ],
  },
];
