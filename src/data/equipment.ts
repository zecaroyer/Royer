export type EquipmentCategory =
  | "Production"
  | "Quality Control"
  | "Utilities"
  | "Documentation & IT"
  | "Safety & Facilities";

export type EquipmentItem = {
  id: string;
  name: string;
  category: EquipmentCategory;
  zone: string;
  purpose: string;
  notes?: string;
};

export const EQUIPMENT_LIST: EquipmentItem[] = [
  {
    id: "eq-01",
    name: "Stainless steel work benches (AISI 304/316)",
    category: "Production",
    zone: "Sampling, weighing, mixing, filling",
    purpose: "Cleanable, corrosion-resistant work surfaces across all production zones.",
  },
  {
    id: "eq-02",
    name: "Precision laboratory scales (0.001 g–1 g resolution)",
    category: "Quality Control",
    zone: "Sampling / weighing room",
    purpose: "Accurate weighing of actives, extracts and minor-phase ingredients.",
    notes: "Subject to scheduled calibration and calibration logs.",
  },
  {
    id: "eq-03",
    name: "Floor scale (bulk raw materials)",
    category: "Production",
    zone: "Reception / quarantine",
    purpose: "Weighing of incoming drums, totes and bulk packaging.",
  },
  {
    id: "eq-04",
    name: "Calibrated pH meter",
    category: "Quality Control",
    zone: "QC bench/lab",
    purpose: "In-process and finished product pH control against formula specification.",
  },
  {
    id: "eq-05",
    name: "Rotational viscometer",
    category: "Quality Control",
    zone: "QC bench/lab",
    purpose: "Viscosity/consistency control of creams and lotions batch-to-batch.",
  },
  {
    id: "eq-06",
    name: "High-shear homogenizer / mixer",
    category: "Production",
    zone: "Mixing / emulsification room",
    purpose: "Emulsification of cream and lotion bases under controlled shear and temperature.",
  },
  {
    id: "eq-07",
    name: "Heating / melting jacketed vessel",
    category: "Production",
    zone: "Mixing / emulsification room",
    purpose: "Melting of waxes/butters and controlled heating of oil and water phases.",
  },
  {
    id: "eq-08",
    name: "Stainless steel holding tanks (mobile, jacketed)",
    category: "Production",
    zone: "Mixing / preparation area",
    purpose: "Bulk holding and cooling of finished bulk product prior to filling.",
  },
  {
    id: "eq-09",
    name: "Semi-automatic cream filling machine",
    category: "Production",
    zone: "Filling room",
    purpose: "Volumetric/weight filling of jars and bottles with viscous emulsions.",
  },
  {
    id: "eq-10",
    name: "Capping machine",
    category: "Production",
    zone: "Filling room",
    purpose: "Consistent torque application for caps, pumps and lids.",
  },
  {
    id: "eq-11",
    name: "Label printer & applicator",
    category: "Production",
    zone: "Packaging / labelling room",
    purpose: "Application of primary labels meeting Regulation (EC) 1223/2009 labelling requirements.",
  },
  {
    id: "eq-12",
    name: "Batch / lot coding printer (inkjet or thermal transfer)",
    category: "Production",
    zone: "Packaging / labelling room",
    purpose: "Printing of batch number, manufacturing date and PAO/expiry onto primary and secondary packaging.",
  },
  {
    id: "eq-13",
    name: "Water purification / deionised water system",
    category: "Utilities",
    zone: "Water / preparation area",
    purpose: "Supply of purified water meeting internal water-quality specification for aqueous phases.",
    notes: "Alternative: qualified external supplier with certificate of analysis per delivery.",
  },
  {
    id: "eq-14",
    name: "Pharmaceutical-grade refrigerator",
    category: "Utilities",
    zone: "Reception / QC storage",
    purpose: "Cold storage of temperature-sensitive actives, extracts and retention samples.",
  },
  {
    id: "eq-15",
    name: "Microbiology incubator (or outsourced microbiology testing)",
    category: "Quality Control",
    zone: "QC bench/lab",
    purpose: "Incubation for in-house microbiological monitoring, or logistics for outsourced contract lab testing.",
  },
  {
    id: "eq-16",
    name: "Cleaning equipment set (dedicated, colour-coded)",
    category: "Safety & Facilities",
    zone: "Cleaning / washing area",
    purpose: "Zone-dedicated cleaning tools to prevent cross-contamination between areas.",
  },
  {
    id: "eq-17",
    name: "PPE stock (gowns, gloves, hairnets, masks, overshoes)",
    category: "Safety & Facilities",
    zone: "Staff changing / PPE area",
    purpose: "Personnel hygiene barrier prior to entry into production zones.",
  },
  {
    id: "eq-18",
    name: "Barcode / QR scanner",
    category: "Documentation & IT",
    zone: "All production & warehouse zones",
    purpose: "Scanning of raw material lots, batch records and finished goods for the traceability system.",
  },
  {
    id: "eq-19",
    name: "Batch-record computer / tablet terminal",
    category: "Documentation & IT",
    zone: "Production floor & QC",
    purpose: "Electronic batch manufacturing records, QC result entry and CAPA logging.",
  },
  {
    id: "eq-20",
    name: "Locked document archive / controlled document cabinet",
    category: "Documentation & IT",
    zone: "Office / documentation archive",
    purpose: "Secure storage of PIF, CPSR, signed batch records and controlled SOPs.",
  },
  {
    id: "eq-21",
    name: "Fire safety & spill equipment (extinguishers, spill kits, eyewash)",
    category: "Safety & Facilities",
    zone: "All zones",
    purpose: "Workplace safety compliance and emergency response.",
  },
  {
    id: "eq-22",
    name: "Segregated waste bins (general, recyclable, hazardous)",
    category: "Safety & Facilities",
    zone: "Waste area",
    purpose: "Segregation of packaging waste, raw material waste and any hazardous residues.",
  },
  {
    id: "eq-23",
    name: "HEPA-filtered local unit (optional upgrade)",
    category: "Utilities",
    zone: "Weighing room / filling room",
    purpose: "Optional localised HEPA filtration for dust-sensitive weighing or sensitive filling operations.",
    notes: "Optional upgrade — to be justified by process risk assessment, not assumed by default.",
  },
];
