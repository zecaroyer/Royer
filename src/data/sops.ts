export type Sop = {
  code: string;
  title: string;
  area: string;
  purpose: string;
};

export const SOP_LIST: Sop[] = [
  { code: "SOP-001", title: "Raw material reception & quarantine", area: "Warehouse", purpose: "Inspection, quarantine status and release of incoming raw materials." },
  { code: "SOP-002", title: "Supplier qualification & approval", area: "Procurement", purpose: "Criteria and records for approving and re-evaluating suppliers." },
  { code: "SOP-003", title: "Sampling and weighing", area: "Production", purpose: "Correct sampling technique, weighing tolerances and contamination control." },
  { code: "SOP-004", title: "Water system qualification & monitoring", area: "Utilities", purpose: "Water quality specification, monitoring frequency and corrective actions." },
  { code: "SOP-005", title: "Mixing & emulsification process control", area: "Production", purpose: "Temperature, time and shear parameters per formula; in-process checks." },
  { code: "SOP-006", title: "Filling & capping line operation", area: "Production", purpose: "Line set-up, fill weight checks, torque checks and in-process sampling." },
  { code: "SOP-007", title: "Labelling & batch coding", area: "Production", purpose: "Label version control, batch/lot coding and reconciliation of printed materials." },
  { code: "SOP-008", title: "Line clearance", area: "Production", purpose: "Verification that a line is clear of previous batch materials before changeover." },
  { code: "SOP-009", title: "Equipment cleaning & cleaning verification", area: "Production", purpose: "Cleaning method, frequency, and visual/analytical verification per equipment type." },
  { code: "SOP-010", title: "Equipment calibration programme", area: "Quality Control", purpose: "Calibration frequency, tolerances and traceable reference standards for scales, pH meters, viscometers." },
  { code: "SOP-011", title: "Preventive maintenance programme", area: "Facility", purpose: "Scheduled maintenance for production and utility equipment." },
  { code: "SOP-012", title: "Gowning and personal hygiene", area: "GMP / Hygiene", purpose: "PPE requirements, handwashing and gowning sequence per zone." },
  { code: "SOP-013", title: "Personnel and material flow control", area: "GMP / Hygiene", purpose: "Defined entry/exit routes for personnel, raw materials, and finished goods to avoid cross-contamination." },
  { code: "SOP-014", title: "Environmental monitoring programme", area: "Quality Control", purpose: "Surface swabs, air monitoring (if justified) and trending of results." },
  { code: "SOP-015", title: "Pest control programme", area: "Facility", purpose: "Scheduled inspection and treatment by a qualified contractor." },
  { code: "SOP-016", title: "In-process and finished product QC testing", area: "Quality Control", purpose: "pH, viscosity, appearance, odour, and microbiological release criteria." },
  { code: "SOP-017", title: "Stability testing programme", area: "Quality Control", purpose: "Real-time and accelerated stability protocols supporting shelf-life claims." },
  { code: "SOP-018", title: "Preservative efficacy (challenge) testing", area: "Quality Control", purpose: "Protocol for challenge testing of the preservative system per formula." },
  { code: "SOP-019", title: "Retention sample management", area: "Quality Control", purpose: "Sampling quantity, storage conditions and retention period per batch." },
  { code: "SOP-020", title: "Batch manufacturing record (BMR) control", area: "Documentation", purpose: "Issuance, completion, review and archival of batch records." },
  { code: "SOP-021", title: "Deviation management", area: "Quality Assurance", purpose: "Identification, documentation, investigation and closure of deviations." },
  { code: "SOP-022", title: "CAPA (Corrective and Preventive Action)", area: "Quality Assurance", purpose: "Root cause analysis, action planning, effectiveness check and closure." },
  { code: "SOP-023", title: "Complaint handling", area: "Quality Assurance", purpose: "Logging, investigation, response and trend analysis of customer complaints." },
  { code: "SOP-024", title: "Product recall and withdrawal", area: "Quality Assurance", purpose: "Trigger criteria, traceability use, notification chain and mock-recall testing." },
  { code: "SOP-025", title: "PIF and CPSR maintenance", area: "Regulatory Affairs", purpose: "Compilation, version control and update triggers for the Product Information File and Cosmetic Product Safety Report." },
  { code: "SOP-026", title: "CPNP notification process", area: "Regulatory Affairs", purpose: "Data required, submission process and update triggers for the EU Cosmetic Product Notification Portal." },
  { code: "SOP-027", title: "Claims substantiation", area: "Regulatory Affairs", purpose: "Evidence requirements and approval workflow before any marketing claim is published." },
  { code: "SOP-028", title: "Label and artwork approval", area: "Regulatory Affairs", purpose: "Mandatory regulatory review of label artwork against Regulation (EC) 1223/2009 before print." },
  { code: "SOP-029", title: "Training and competency records", area: "Human Resources", purpose: "Induction, GMP refresher training and competency verification per role." },
  { code: "SOP-030", title: "Document control", area: "Quality Assurance", purpose: "Numbering, versioning, approval and archival of all controlled documents." },
];
