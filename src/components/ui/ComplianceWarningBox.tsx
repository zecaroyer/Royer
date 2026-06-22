export default function ComplianceWarningBox({
  title = "CBD & cannabinoid ingredients — mandatory legal review",
  compact = false,
}: {
  title?: string;
  compact?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-amber-500/40 bg-amber-500/[0.06] p-6">
      <div className="flex items-start gap-3">
        <svg
          viewBox="0 0 24 24"
          className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M12 9v4M12 16.5h.01M10.3 3.86 1.8 18a1.6 1.6 0 0 0 1.37 2.4h17.66a1.6 1.6 0 0 0 1.37-2.4L13.7 3.86a1.6 1.6 0 0 0-2.8 0Z" />
        </svg>
        <div>
          <p className="font-medium text-amber-800">{title}</p>
          {!compact && (
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-ink-soft">
              <p>
                CBD and other cannabinoids <strong>naturally derived from cannabis
                extracts, tinctures, resin, flowers or leaves</strong> may be{" "}
                <strong>prohibited in Portuguese cosmetic products</strong> under current
                interpretation of applicable national and EU rules, irrespective of
                THC content. No ingredient in this category may be used, sourced,
                listed, or marketed until confirmed in writing by a qualified
                regulatory/legal specialist with current Infarmed and EU CosIng status.
              </p>
              <p>
                <strong>Hemp seed oil (Cannabis sativa seed oil)</strong> — cold-pressed
                from the seed only, with no cannabinoid carry-over when properly sourced
                and documented — is treated in this project as the safer starting
                ingredient route, subject to supplier specification, CoA verification,
                and confirmation against the applicable cosmetic ingredient
                requirements for each specific lot.
              </p>
              <p className="text-xs text-amber-700">
                This statement is not legal advice. It is a placeholder risk flag
                pending dedicated legal/regulatory validation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
