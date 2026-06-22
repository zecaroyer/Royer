import type { FlowStep } from "@/components/ui/FlowDiagram";

export const TRACEABILITY_FLOW: FlowStep[] = [
  { title: "Supplier", detail: "Qualified, audited source" },
  { title: "Raw Material Lot", detail: "CoA/SDS attached, quarantined" },
  { title: "Formula / BOM", detail: "Approved formula version" },
  { title: "Manufacturing Batch", detail: "Unique batch number assigned" },
  { title: "QC Release", detail: "Pass/fail against specification" },
  { title: "Packaging Lot", detail: "Jars, caps, labels, boxes" },
  { title: "Finished Product Lot", detail: "PAO/expiry assigned" },
  { title: "Customer / Distributor", detail: "Shipment recorded" },
  { title: "Complaint / Recall", detail: "Backward trace if triggered" },
];

export type MockBatchRecord = {
  batchNumber: string;
  formula: string;
  manufacturingDate: string;
  quantityUnits: number;
  qcStatus: "Pass" | "Pending" | "Hold";
  releaseStatus: "Released" | "Quarantine" | "Blocked";
  rawMaterialLots: string[];
  distributorRef: string;
};

export const MOCK_BATCH_RECORDS: MockBatchRecord[] = [
  {
    batchNumber: "ALB-2026-0142",
    formula: "Aloe Vera Gel-Cream v2.1",
    manufacturingDate: "2026-02-03",
    quantityUnits: 612,
    qcStatus: "Pass",
    releaseStatus: "Released",
    rawMaterialLots: ["AV-2026-011", "PRV-2025-087"],
    distributorRef: "DIST-PT-004",
  },
  {
    batchNumber: "HSC-2026-0058",
    formula: "Hemp Seed Oil Body Cream v1.3",
    manufacturingDate: "2026-02-10",
    quantityUnits: 498,
    qcStatus: "Pass",
    releaseStatus: "Released",
    rawMaterialLots: ["HSO-2026-004", "SHB-2025-019"],
    distributorRef: "DIST-PT-004",
  },
  {
    batchNumber: "BFL-2026-0033",
    formula: "Botanical Facial Cream v3.0",
    manufacturingDate: "2026-02-17",
    quantityUnits: 640,
    qcStatus: "Pending",
    releaseStatus: "Quarantine",
    rawMaterialLots: ["AV-2026-013", "CAL-2025-066"],
    distributorRef: "—",
  },
  {
    batchNumber: "BBL-2026-0021",
    formula: "Botanical Body Lotion v1.0",
    manufacturingDate: "2026-02-19",
    quantityUnits: 388,
    qcStatus: "Hold",
    releaseStatus: "Blocked",
    rawMaterialLots: ["AV-2026-013", "LAV-2025-041"],
    distributorRef: "—",
  },
];
