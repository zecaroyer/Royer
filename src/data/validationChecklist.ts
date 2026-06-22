export type ChecklistItem = {
  item: string;
  requiresExpert: boolean;
};

export type ChecklistGroup = {
  category: string;
  items: ChecklistItem[];
};

export const VALIDATION_CHECKLIST: ChecklistGroup[] = [
  {
    category: "Legal & corporate",
    items: [
      { item: "Responsible Person formally designated and established in the EU", requiresExpert: true },
      { item: "Cosmetic entity registration with INFARMED completed", requiresExpert: true },
      { item: "Written legal opinion on CBD/cannabinoid ingredient status obtained", requiresExpert: true },
    ],
  },
  {
    category: "Formulation & safety",
    items: [
      { item: "Final formula version frozen and approved", requiresExpert: false },
      { item: "Cosmetic Product Safety Report (CPSR) signed by qualified safety assessor", requiresExpert: true },
      { item: "Preservative efficacy (challenge) testing passed", requiresExpert: true },
      { item: "Stability testing programme completed for shelf-life claim", requiresExpert: true },
      { item: "Microbiological limits testing passed on pilot batches", requiresExpert: true },
    ],
  },
  {
    category: "Documentation",
    items: [
      { item: "Product Information File (PIF) compiled per SKU", requiresExpert: false },
      { item: "All SOPs reviewed and approved (see documentation plan)", requiresExpert: false },
      { item: "Batch manufacturing record template piloted on a real batch", requiresExpert: false },
    ],
  },
  {
    category: "Facility & GMP",
    items: [
      { item: "Facility zoning matches laboratory layout concept", requiresExpert: false },
      { item: "HVAC, water and utility systems qualified", requiresExpert: true },
      { item: "Equipment calibration and cleaning validation completed", requiresExpert: false },
      { item: "Environmental monitoring baseline recorded", requiresExpert: false },
    ],
  },
  {
    category: "Labelling & claims",
    items: [
      { item: "Label artwork legally reviewed against Reg. (EC) 1223/2009 and Infarmed guidance", requiresExpert: true },
      { item: "Every marketing claim backed by a claims substantiation file", requiresExpert: true },
      { item: "No medical/therapeutic wording present anywhere in copy or packaging", requiresExpert: false },
    ],
  },
  {
    category: "Market access",
    items: [
      { item: "CPNP notification submitted and confirmed per SKU", requiresExpert: true },
      { item: "Traceability system operational end-to-end (lot to customer)", requiresExpert: false },
      { item: "Mock recall exercise executed successfully", requiresExpert: false },
    ],
  },
];
