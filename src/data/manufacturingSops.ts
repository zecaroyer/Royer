import type { ComplianceStatus } from "@/components/ui/StatusPill";
import type { SkuId } from "@/data/skus";

// ---------------------------------------------------------------------------
// Per-SKU manufacturing Standard Operating Procedures (SOPs).
//
// These are draft-stage controlled-document concepts. Step-by-step procedure
// content is NOT duplicated here — it is sourced live from
// `formula.manufacturingProcess` in src/data/formulas.ts (single source of
// truth). This file adds the surrounding SOP structure: purpose, scope,
// responsibilities, safety, equipment, in-process controls, documentation
// and revision history. Every SOP requires QA/cosmetic-chemist review and
// formal approval before use — see FormulationDisclaimerBox.
// ---------------------------------------------------------------------------

export type ResponsibilityRow = {
  role: string;
  responsibility: string;
};

export type IpcCheck = {
  stage: string;
  parameter: string;
  target: string;
};

export type RevisionRow = {
  version: string;
  date: string;
  change: string;
};

export type ManufacturingSop = {
  skuId: SkuId;
  sopCode: string;
  status: ComplianceStatus;
  purpose: string;
  scope: string;
  responsibilities: ResponsibilityRow[];
  safetyPrecautions: string[];
  equipmentRequired: string[];
  inProcessControls: IpcCheck[];
  documentationRequired: string[];
  revisionHistory: RevisionRow[];
};

const STANDARD_RESPONSIBILITIES: ResponsibilityRow[] = [
  { role: "Production Operator", responsibility: "Executes the procedure exactly as written; records parameters in real time on the batch manufacturing record (BMR)." },
  { role: "Production Supervisor", responsibility: "Verifies line clearance before batch start; reviews and co-signs the completed BMR." },
  { role: "QC Analyst", responsibility: "Performs in-process and finished-product testing against specification; records results." },
  { role: "Quality Assurance / Responsible Person", responsibility: "Reviews the closed batch record, approves any deviation, and issues final batch disposition (release/quarantine/reject)." },
];

const STANDARD_DOCUMENTATION = [
  "Batch Manufacturing Record (BMR) — SOP-020",
  "Line clearance checklist — SOP-008",
  "Equipment cleaning log — SOP-009",
  "Equipment calibration record — SOP-010",
  "Retention sample log — SOP-019",
  "Deviation report, if applicable — SOP-021",
];

const DRAFT_REVISION: RevisionRow[] = [
  { version: "0.1", date: "June 2026", change: "Initial draft — pending cosmetic chemist and QA review/approval. Not yet effective." },
];

const EMULSION_SAFETY = [
  "Standard PPE required throughout (lab coat, gloves, hairnet) per SOP-012.",
  "Heat-resistant gloves required when handling Phase A/B vessels at 75–80°C.",
  "Sodium Hydroxide solution must be prepared and handled per its SDS — chemical-resistant gloves and face shield required during pH adjustment.",
  "Report any skin/eye contact with raw concentrate immediately per site safety procedure.",
];

const EMULSION_EQUIPMENT = [
  "Stainless steel work benches",
  "Precision laboratory scales",
  "Heating/melting jacketed vessel",
  "High-shear homogenizer/mixer",
  "Calibrated pH meter",
  "Rotational viscometer",
  "Semi-automatic cream filling machine",
  "Capping machine",
  "Label printer & applicator",
  "Batch/lot coding printer",
];

function emulsionIpc(targetPh: string, targetViscosity: string): IpcCheck[] {
  return [
    { stage: "After Phase A/B combination (emulsification)", parameter: "Appearance", target: "Homogeneous emulsion, no visible oil/water separation" },
    { stage: "After cool-down, before pH adjustment", parameter: "pH", target: targetPh },
    { stage: "After final homogenisation", parameter: "Viscosity / texture", target: targetViscosity },
    { stage: "During filling", parameter: "Fill weight", target: "Within ± tolerance defined on the BMR for the declared net content" },
  ];
}

const ANHYDROUS_LIQUID_SAFETY = [
  "Standard PPE required (lab coat, gloves) per SOP-012.",
  "No heating phase above 40°C required for this formula — minimal thermal risk.",
  "Handle glass dropper bottles with care during filling and capping to avoid breakage.",
];

const ANHYDROUS_LIQUID_EQUIPMENT = [
  "Stainless steel work benches",
  "Precision laboratory scales",
  "Low-shear mixer / paddle stirrer",
  "Semi-automatic liquid filling machine (dropper-bottle format)",
  "Label printer & applicator",
  "Batch/lot coding printer",
];

const ANHYDROUS_LIQUID_IPC: IpcCheck[] = [
  { stage: "After oil blending", parameter: "Appearance", target: "Clear, homogeneous oil blend; no visible particulates" },
  { stage: "After antioxidant addition", parameter: "Odour", target: "Matches reference standard — no rancid/off notes" },
  { stage: "During filling", parameter: "Fill weight", target: "Within ± tolerance defined on the BMR for the declared net content" },
];

const ANHYDROUS_BALM_SAFETY = [
  "Standard PPE required (lab coat, gloves) per SOP-012.",
  "Heat-resistant gloves required when handling the wax/butter melting vessel (65–70°C).",
  "Cannabis Sativa Seed Oil lot must be verified released — including cannabinoid/THC absence confirmation — before use; see SOP-001 and the CBD/Cannabinoid Regulatory Hold on /compliance.",
];

const ANHYDROUS_BALM_EQUIPMENT = [
  "Stainless steel work benches",
  "Precision laboratory scales",
  "Heating/melting jacketed vessel",
  "Low-shear mixer / paddle stirrer",
  "Semi-automatic filling machine (tin format)",
  "Label printer & applicator",
  "Batch/lot coding printer",
];

const ANHYDROUS_BALM_IPC: IpcCheck[] = [
  { stage: "After wax/butter melt-in", parameter: "Appearance", target: "Fully melted, homogeneous, no visible solid particles" },
  { stage: "Before filling (just above set point)", parameter: "Pour temperature", target: "Fluid enough to fill cleanly without splashing; recorded on BMR" },
  { stage: "After cooling/setting", parameter: "Appearance / texture", target: "Smooth, uniform set; no graininess, cracking, or surface bloom" },
];

export const MANUFACTURING_SOPS: ManufacturingSop[] = [
  {
    skuId: "sku-01",
    sopCode: "SOP-MFG-SKU01",
    status: "draft",
    purpose: "To define the standardised manufacturing procedure for the Aloe Vera Daily Face Cream, ensuring batch-to-batch consistency, ISO 22716 GMP compliance, and full traceability.",
    scope: "Applies to all personnel involved in weighing, mixing/emulsification, filling, and packaging of this SKU at the ROYER manufacturing facility, for all batch sizes defined on the current batch manufacturing record.",
    responsibilities: STANDARD_RESPONSIBILITIES,
    safetyPrecautions: EMULSION_SAFETY,
    equipmentRequired: EMULSION_EQUIPMENT,
    inProcessControls: emulsionIpc("5.0–5.5", "Light-to-medium cream; spreadable, fast-absorbing, low residue"),
    documentationRequired: STANDARD_DOCUMENTATION,
    revisionHistory: DRAFT_REVISION,
  },
  {
    skuId: "sku-02",
    sopCode: "SOP-MFG-SKU02",
    status: "draft",
    purpose: "To define the standardised manufacturing procedure for the Rosehip + Jojoba Premium Face Oil, ensuring batch-to-batch consistency, ISO 22716 GMP compliance, and full traceability.",
    scope: "Applies to all personnel involved in oil blending, filling, and packaging of this SKU at the ROYER manufacturing facility, for all batch sizes defined on the current batch manufacturing record.",
    responsibilities: STANDARD_RESPONSIBILITIES,
    safetyPrecautions: ANHYDROUS_LIQUID_SAFETY,
    equipmentRequired: ANHYDROUS_LIQUID_EQUIPMENT,
    inProcessControls: ANHYDROUS_LIQUID_IPC,
    documentationRequired: STANDARD_DOCUMENTATION,
    revisionHistory: DRAFT_REVISION,
  },
  {
    skuId: "sku-03",
    sopCode: "SOP-MFG-SKU03",
    status: "draft",
    purpose: "To define the standardised manufacturing procedure for the Aloe + Olive Body Cream, ensuring batch-to-batch consistency, ISO 22716 GMP compliance, and full traceability.",
    scope: "Applies to all personnel involved in weighing, mixing/emulsification, filling, and packaging of this SKU at the ROYER manufacturing facility, for all batch sizes defined on the current batch manufacturing record.",
    responsibilities: STANDARD_RESPONSIBILITIES,
    safetyPrecautions: EMULSION_SAFETY,
    equipmentRequired: EMULSION_EQUIPMENT,
    inProcessControls: emulsionIpc("5.0–5.5", "Rich, dense body cream; slow-melting, occlusive after-feel"),
    documentationRequired: STANDARD_DOCUMENTATION,
    revisionHistory: DRAFT_REVISION,
  },
  {
    skuId: "sku-04",
    sopCode: "SOP-MFG-SKU04",
    status: "draft",
    purpose: "To define the standardised manufacturing procedure for the Coconut + Aloe Hand Cream, ensuring batch-to-batch consistency, ISO 22716 GMP compliance, and full traceability.",
    scope: "Applies to all personnel involved in weighing, mixing/emulsification, filling, and packaging of this SKU at the ROYER manufacturing facility, for all batch sizes defined on the current batch manufacturing record.",
    responsibilities: STANDARD_RESPONSIBILITIES,
    safetyPrecautions: EMULSION_SAFETY,
    equipmentRequired: EMULSION_EQUIPMENT,
    inProcessControls: emulsionIpc("5.0–5.5", "Medium cream, fast absorption, suited to a tube format"),
    documentationRequired: STANDARD_DOCUMENTATION,
    revisionHistory: DRAFT_REVISION,
  },
  {
    skuId: "sku-05",
    sopCode: "SOP-MFG-SKU05",
    status: "draft",
    purpose: "To define the standardised manufacturing procedure for the Hemp Seed + Calendula Botanical Balm, ensuring batch-to-batch consistency, ISO 22716 GMP compliance, and full traceability.",
    scope: "Applies to all personnel involved in oil/wax blending, filling, and packaging of this SKU at the ROYER manufacturing facility, for all batch sizes defined on the current batch manufacturing record. Positioning must remain strictly cosmetic — no medical-cannabis or pain-relief framing.",
    responsibilities: STANDARD_RESPONSIBILITIES,
    safetyPrecautions: ANHYDROUS_BALM_SAFETY,
    equipmentRequired: ANHYDROUS_BALM_EQUIPMENT,
    inProcessControls: ANHYDROUS_BALM_IPC,
    documentationRequired: [...STANDARD_DOCUMENTATION, "Cannabinoid/THC absence certificate for the Cannabis Sativa Seed Oil lot used"],
    revisionHistory: DRAFT_REVISION,
  },
  {
    skuId: "sku-06",
    sopCode: "SOP-MFG-SKU06",
    status: "draft",
    purpose: "To define the standardised manufacturing procedure for the Aloe Botanical Gel-Cream, ensuring batch-to-batch consistency, ISO 22716 GMP compliance, and full traceability.",
    scope: "Applies to all personnel involved in weighing, mixing/emulsification, filling, and packaging of this SKU at the ROYER manufacturing facility, for all batch sizes defined on the current batch manufacturing record.",
    responsibilities: STANDARD_RESPONSIBILITIES,
    safetyPrecautions: EMULSION_SAFETY,
    equipmentRequired: EMULSION_EQUIPMENT,
    inProcessControls: emulsionIpc("5.0–5.5", "Light gel-cream; fresh, low-tack, quick-absorbing"),
    documentationRequired: STANDARD_DOCUMENTATION,
    revisionHistory: DRAFT_REVISION,
  },
];

export function getManufacturingSop(skuId: SkuId): ManufacturingSop {
  const sop = MANUFACTURING_SOPS.find((s) => s.skuId === skuId);
  if (!sop) throw new Error(`No manufacturing SOP found for SKU: ${skuId}`);
  return sop;
}
