export default function RegulatoryHoldBox() {
  return (
    <div className="rounded-2xl border border-red-500/40 bg-red-500/[0.05] p-6">
      <div className="flex items-start gap-3">
        <svg
          viewBox="0 0 24 24"
          className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v5M12 16h.01" />
        </svg>
        <div>
          <p className="font-medium text-red-800">CBD / Cannabinoid Regulatory Hold</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            CBD or cannabinoid-containing cosmetic SKUs must not be commercialised
            until the exact ingredient origin, INCI status, THC absence, supplier
            documentation, Portuguese market position, INFARMED interpretation,
            CPSR safety assessment and Responsible Person approval are validated.
            Initial commercial SKUs should use hemp seed oil only, not CBD, unless
            a qualified regulatory pathway is confirmed.
          </p>
        </div>
      </div>
    </div>
  );
}
