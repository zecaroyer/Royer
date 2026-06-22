export type ComplianceStatus =
  | "draft"
  | "needs-review"
  | "ready-for-validation"
  | "approved";

const STATUS_LABEL: Record<ComplianceStatus, string> = {
  draft: "Draft",
  "needs-review": "Needs Expert Review",
  "ready-for-validation": "Ready for Validation",
  approved: "Approved",
};

const STATUS_CLASS: Record<ComplianceStatus, string> = {
  draft: "bg-ink-soft/10 text-ink-soft border-ink-soft/30",
  "needs-review": "bg-amber-500/10 text-amber-700 border-amber-500/40",
  "ready-for-validation": "bg-sky-500/10 text-sky-700 border-sky-500/40",
  approved: "bg-lab-green/10 text-lab-green border-lab-green/40",
};

const STATUS_CLASS_DARK: Record<ComplianceStatus, string> = {
  draft: "bg-cream/10 text-cream/80 border-cream/30",
  "needs-review": "bg-amber-400/15 text-amber-300 border-amber-400/40",
  "ready-for-validation": "bg-sky-400/15 text-sky-300 border-sky-400/40",
  approved: "bg-gold/15 text-gold-light border-gold/40",
};

export function StatusPill({
  status,
  light = false,
}: {
  status: ComplianceStatus;
  light?: boolean;
}) {
  const className = light ? STATUS_CLASS_DARK[status] : STATUS_CLASS[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {STATUS_LABEL[status]}
    </span>
  );
}

export function statusLabel(status: ComplianceStatus) {
  return STATUS_LABEL[status];
}
