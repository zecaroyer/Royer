export type RiskLevel = "Low" | "Medium" | "High" | "Critical";

export type Risk = {
  id: string;
  category: string;
  risk: string;
  likelihood: RiskLevel;
  impact: RiskLevel;
  mitigation: string;
  owner: string;
};

export const RISK_REGISTER: Risk[] = [
  {
    id: "R-01",
    category: "Regulatory — ingredients",
    risk: "CBD/cannabinoid raw material is found to be non-compliant for use in Portuguese cosmetic products after sourcing has begun.",
    likelihood: "Medium",
    impact: "Critical",
    mitigation: "No CBD/cannabinoid ingredient enters formulation development until written legal/regulatory clearance is obtained. Hemp seed oil used as default botanical route.",
    owner: "Regulatory consultant + Responsible Person",
  },
  {
    id: "R-02",
    category: "Regulatory — claims",
    risk: "Marketing or labelling language drifts into medical/therapeutic claim territory (e.g. anti-inflammatory, treats, heals).",
    likelihood: "Medium",
    impact: "High",
    mitigation: "Claims substantiation workflow (see /compliance) with mandatory legal sign-off before any new claim is published.",
    owner: "Marketing lead + Responsible Person",
  },
  {
    id: "R-03",
    category: "Regulatory — notification",
    risk: "Product placed on the market before CPNP notification and CPSR finalisation are complete.",
    likelihood: "Low",
    impact: "Critical",
    mitigation: "Hard gate in launch checklist: no shipment of finished goods without CPNP confirmation number on file.",
    owner: "Responsible Person",
  },
  {
    id: "R-04",
    category: "Quality — microbiology",
    risk: "Insufficient preservative system leads to microbial contamination during shelf life or in-use period.",
    likelihood: "Medium",
    impact: "High",
    mitigation: "Mandatory preservative efficacy (challenge) testing and stability testing before CPSR approval.",
    owner: "Safety assessor + QC",
  },
  {
    id: "R-05",
    category: "Supply chain",
    risk: "Key botanical raw material (aloe vera, hemp seed oil) has batch-to-batch variability affecting stability or sensory profile.",
    likelihood: "Medium",
    impact: "Medium",
    mitigation: "Supplier qualification programme, incoming CoA verification and retained samples per lot.",
    owner: "Procurement + QC",
  },
  {
    id: "R-06",
    category: "Operations — GMP",
    risk: "Cross-contamination between batches or product lines due to inadequate line clearance.",
    likelihood: "Low",
    impact: "High",
    mitigation: "Documented line clearance checklist and cleaning verification before each new batch start.",
    owner: "Production supervisor",
  },
  {
    id: "R-07",
    category: "Documentation",
    risk: "PIF/CPSR documentation incomplete or outdated at the time of an authority inspection.",
    likelihood: "Medium",
    impact: "High",
    mitigation: "Documentation plan with assigned owners, review cadence and version-controlled archive.",
    owner: "Responsible Person",
  },
  {
    id: "R-08",
    category: "Facility",
    risk: "HVAC/environmental drift (temperature, humidity) affects emulsion stability or microbiological risk in production.",
    likelihood: "Low",
    impact: "Medium",
    mitigation: "Continuous temperature/humidity monitoring with alert thresholds and logged corrective actions.",
    owner: "Facility manager",
  },
  {
    id: "R-09",
    category: "Commercial",
    risk: "Cost assumptions in the economic model diverge materially from real supplier quotes.",
    likelihood: "High",
    impact: "Medium",
    mitigation: "All figures on /custos are explicit placeholders pending formal supplier quotations before financial commitments.",
    owner: "Finance / project lead",
  },
  {
    id: "R-10",
    category: "Market access",
    risk: "Responsible Person obligations are not properly assigned or are assigned to an entity not established in the EU.",
    likelihood: "Low",
    impact: "Critical",
    mitigation: "Formal designation of an EU-established Responsible Person before any CPNP notification is filed.",
    owner: "Founders / legal counsel",
  },
];
