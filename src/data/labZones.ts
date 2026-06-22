export type LabZone = {
  id: string;
  name: string;
  function: string;
  hygieneLevel: "Standard" | "Controlled" | "Controlled +";
  keyControls: string[];
};

export const LAB_ZONES: LabZone[] = [
  {
    id: "reception",
    name: "Reception / Quarantine — Raw Materials",
    function: "Intake inspection and quarantine hold of incoming raw materials and packaging until QC release.",
    hygieneLevel: "Standard",
    keyControls: ["Visual inspection on arrival", "Quarantine labelling", "CoA/SDS check before release"],
  },
  {
    id: "sampling",
    name: "Sampling / Weighing Room",
    function: "Sampling of incoming lots and precision weighing of formula components.",
    hygieneLevel: "Controlled",
    keyControls: ["Dedicated cleaned tools per material", "Local dust control", "Calibrated scales"],
  },
  {
    id: "water-prep",
    name: "Water / Preparation Area",
    function: "Water treatment/qualification and pre-preparation of aqueous and oil phases.",
    hygieneLevel: "Controlled",
    keyControls: ["Water quality monitoring", "Loop sanitisation schedule", "Phase pre-weigh verification"],
  },
  {
    id: "mixing",
    name: "Mixing / Emulsification Room",
    function: "Core production: heating, emulsification and homogenisation of bulk product.",
    hygieneLevel: "Controlled +",
    keyControls: ["Positive pressure vs corridor", "Gowned personnel only", "Batch parameter logging"],
  },
  {
    id: "filling",
    name: "Filling Room",
    function: "Filling of bulk product into primary containers and capping.",
    hygieneLevel: "Controlled +",
    keyControls: ["Line clearance before start", "Fill-weight in-process checks", "Optional HEPA local filtration"],
  },
  {
    id: "packaging",
    name: "Packaging / Labelling Room",
    function: "Secondary packaging, labelling and batch/lot coding.",
    hygieneLevel: "Controlled",
    keyControls: ["Label version reconciliation", "Batch code verification", "Carton sealing checks"],
  },
  {
    id: "fg-quarantine",
    name: "Finished Goods Quarantine",
    function: "Hold area for finished product pending QC release decision.",
    hygieneLevel: "Standard",
    keyControls: ["Physical/system quarantine status", "No release without signed QC disposition"],
  },
  {
    id: "fg-released",
    name: "Released Finished Goods Storage",
    function: "Storage of released, sellable finished product prior to shipment.",
    hygieneLevel: "Standard",
    keyControls: ["FEFO stock rotation", "Temperature monitoring", "Restricted access"],
  },
  {
    id: "qc-lab",
    name: "QC Bench / Lab",
    function: "In-process and finished product testing: pH, viscosity, appearance, microbiology sampling.",
    hygieneLevel: "Controlled",
    keyControls: ["Calibrated instruments", "Retention sample storage", "Independent of production reporting line"],
  },
  {
    id: "cleaning",
    name: "Cleaning / Washing Area",
    function: "Cleaning of utensils, mobile tanks and reusable equipment between batches.",
    hygieneLevel: "Controlled",
    keyControls: ["Colour-coded cleaning tools", "Cleaning verification log", "Drying/storage racking"],
  },
  {
    id: "waste",
    name: "Waste Area",
    function: "Segregated holding of general, recyclable and any hazardous waste before collection.",
    hygieneLevel: "Standard",
    keyControls: ["Segregated bins", "Scheduled removal", "Spill response kit nearby"],
  },
  {
    id: "changing",
    name: "Staff Changing / PPE Area",
    function: "Personnel transition point: street clothes to gowned production attire.",
    hygieneLevel: "Controlled",
    keyControls: ["One-directional gowning flow", "Handwash station", "PPE stock control"],
  },
  {
    id: "office",
    name: "Office / Documentation Archive",
    function: "Administrative work and secure archive for controlled quality and regulatory documents.",
    hygieneLevel: "Standard",
    keyControls: ["Locked archive cabinet", "Access log", "Backup of digital records"],
  },
];
