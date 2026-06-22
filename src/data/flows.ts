import type { FlowStep } from "@/components/ui/FlowDiagram";

export const PRODUCTION_FLOW: FlowStep[] = [
  { title: "Raw material release", detail: "QC-released lots only" },
  { title: "Weighing & sampling", detail: "Per batch manufacturing record" },
  { title: "Mixing / emulsification", detail: "Controlled temperature & shear" },
  { title: "In-process QC", detail: "pH, viscosity, appearance" },
  { title: "Filling & capping", detail: "Line clearance verified" },
  { title: "Labelling & coding", detail: "Batch/lot + PAO printed" },
  { title: "FG quarantine", detail: "Hold for QC disposition" },
  { title: "Release & storage", detail: "FEFO managed" },
];

export const PERSONNEL_FLOW: FlowStep[] = [
  { title: "Entry / changing area", detail: "Street clothes removed" },
  { title: "Handwashing", detail: "Mandatory station" },
  { title: "Gowning", detail: "PPE per zone requirement" },
  { title: "Production zones", detail: "One-directional flow" },
  { title: "De-gowning", detail: "Return via changing area" },
];

export const RAW_MATERIAL_FLOW: FlowStep[] = [
  { title: "Goods-in", detail: "Reception / quarantine" },
  { title: "Sampling", detail: "QC sample drawn" },
  { title: "CoA/SDS check", detail: "Against specification" },
  { title: "Release decision", detail: "Released or rejected" },
  { title: "Approved storage", detail: "Ready for weighing" },
];

export const FINISHED_PRODUCT_FLOW: FlowStep[] = [
  { title: "Filled & packed", detail: "Batch closed" },
  { title: "FG quarantine", detail: "Awaiting QC disposition" },
  { title: "QC release", detail: "Pass against specification" },
  { title: "Released storage", detail: "FEFO managed" },
  { title: "Shipment", detail: "Distributor / customer" },
];

export const WASTE_FLOW: FlowStep[] = [
  { title: "Generation", detail: "Production / packaging / QC" },
  { title: "Segregation", detail: "General / recyclable / hazardous" },
  { title: "Waste area", detail: "Temporary holding" },
  { title: "Scheduled collection", detail: "Licensed waste operator" },
  { title: "Disposal record", detail: "Filed for audit trail" },
];
