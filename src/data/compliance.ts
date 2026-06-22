import type { ComplianceStatus } from "@/components/ui/StatusPill";

export type ComplianceModule = {
  id: string;
  title: string;
  status: ComplianceStatus;
  regulatoryBasis: string;
  description: string;
  owner: string;
  nextAction: string;
};

export const COMPLIANCE_MODULES: ComplianceModule[] = [
  {
    id: "pif",
    title: "Product Information File (PIF)",
    status: "draft",
    regulatoryBasis: "Reg. (EC) 1223/2009, Art. 11",
    description:
      "Central technical file per product: formula, manufacturing description, safety report, proof of effect, data on animal testing.",
    owner: "Responsible Person",
    nextAction: "Open a PIF skeleton per SKU as soon as a formula version is frozen.",
  },
  {
    id: "cpsr",
    title: "Cosmetic Product Safety Report (CPSR)",
    status: "needs-review",
    regulatoryBasis: "Reg. (EC) 1223/2009, Annex I",
    description:
      "Safety assessment covering toxicological profile, exposure, microbiological quality and conclusion, signed by a qualified safety assessor.",
    owner: "Safety assessor",
    nextAction: "Engage a qualified safety assessor before any sample leaves the lab for testing or PR use.",
  },
  {
    id: "cpnp",
    title: "CPNP Notification",
    status: "draft",
    regulatoryBasis: "Reg. (EC) 1223/2009, Art. 13",
    description:
      "Notification to the EU Cosmetic Product Notification Portal prior to placing each product on the market.",
    owner: "Responsible Person",
    nextAction: "Notify only after CPSR is finalised and label artwork is approved.",
  },
  {
    id: "responsible-person",
    title: "Responsible Person (EU-established)",
    status: "needs-review",
    regulatoryBasis: "Reg. (EC) 1223/2009, Art. 4–5",
    description:
      "Legal entity established in the EU, formally designated and accountable for regulatory compliance of each product.",
    owner: "Founders / legal counsel",
    nextAction: "Formalise designation in writing before first notification or sale.",
  },
  {
    id: "gmp-iso22716",
    title: "GMP / ISO 22716",
    status: "draft",
    regulatoryBasis: "EN ISO 22716:2007",
    description:
      "Good Manufacturing Practice framework: premises, personnel, equipment, production, QC, documentation, deviations.",
    owner: "Quality Assurance",
    nextAction: "Build the GMP documentation set in parallel with facility fit-out (see /projeto-laboratorio).",
  },
  {
    id: "labels",
    title: "Labelling",
    status: "draft",
    regulatoryBasis: "Reg. (EC) 1223/2009, Art. 19 + Infarmed guidance",
    description:
      "Mandatory label content in Portuguese: function, ingredient list (INCI), precautions, batch number, PAO/expiry, Responsible Person address.",
    owner: "Regulatory affairs",
    nextAction: "Legal review of every label artwork prior to print — no exceptions.",
  },
  {
    id: "claims",
    title: "Claims Substantiation",
    status: "needs-review",
    regulatoryBasis: "Reg. (EC) 1223/2009, Art. 20 + Reg. (EU) 655/2013",
    description:
      "Evidence file justifying every marketing and on-pack claim; medical/therapeutic claims are out of scope by design.",
    owner: "Marketing + Regulatory affairs",
    nextAction: "Build a claims evidence file per claim before any public use.",
  },
  {
    id: "batch-records",
    title: "Batch Manufacturing Records",
    status: "draft",
    regulatoryBasis: "EN ISO 22716, §8",
    description:
      "Signed record of each manufacturing batch: quantities, parameters, in-process checks, deviations, release decision.",
    owner: "Production + QC",
    nextAction: "Pilot the batch record template on the first trial batch.",
  },
  {
    id: "supplier-qualification",
    title: "Supplier Qualification",
    status: "draft",
    regulatoryBasis: "EN ISO 22716, §5",
    description:
      "Approval and periodic re-evaluation of raw material and packaging suppliers, including CoA/SDS management.",
    owner: "Procurement + QC",
    nextAction: "Issue qualification questionnaires to shortlisted aloe vera and hemp seed oil suppliers.",
  },
  {
    id: "complaints",
    title: "Complaint Handling",
    status: "draft",
    regulatoryBasis: "EN ISO 22716, §11",
    description:
      "Process to log, investigate, respond to and trend customer and market complaints.",
    owner: "Quality Assurance",
    nextAction: "Define complaint intake channel before first commercial shipment.",
  },
  {
    id: "recalls",
    title: "Recall / Withdrawal Procedure",
    status: "draft",
    regulatoryBasis: "Reg. (EC) 1223/2009, Art. 25 + EN ISO 22716",
    description:
      "Procedure to withdraw or recall product from the market using batch traceability, including authority notification.",
    owner: "Responsible Person + QA",
    nextAction: "Run a mock recall exercise once batch traceability (see /rastreabilidade) is operational.",
  },
  {
    id: "capa",
    title: "CAPA (Corrective & Preventive Action)",
    status: "draft",
    regulatoryBasis: "EN ISO 22716, §11",
    description:
      "Structured root-cause analysis and action tracking for deviations, complaints and audit findings.",
    owner: "Quality Assurance",
    nextAction: "Stand up a CAPA log template alongside the deviation log.",
  },
];

export const COMPLIANCE_SUMMARY = {
  totalModules: COMPLIANCE_MODULES.length,
  approved: COMPLIANCE_MODULES.filter((m) => m.status === "approved").length,
  readyForValidation: COMPLIANCE_MODULES.filter((m) => m.status === "ready-for-validation").length,
  needsReview: COMPLIANCE_MODULES.filter((m) => m.status === "needs-review").length,
  draft: COMPLIANCE_MODULES.filter((m) => m.status === "draft").length,
};
