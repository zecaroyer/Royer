export type FlowStep = {
  title: string;
  detail?: string;
};

export default function FlowDiagram({
  steps,
  light = false,
}: {
  steps: FlowStep[];
  light?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
      {steps.map((step, i) => (
        <div key={step.title} className="flex flex-1 items-center gap-2 lg:flex-col">
          <div
            className={`flex h-full w-full flex-col justify-center rounded-xl border px-4 py-3 text-sm ${
              light
                ? "border-gold/25 bg-white/5 text-cream"
                : "border-gold/30 bg-cream-2 text-ink"
            }`}
          >
            <span className="section-eyebrow text-gold">{`0${i + 1}`.slice(-2)}</span>
            <span className="mt-1 font-medium">{step.title}</span>
            {step.detail && (
              <span className={`mt-1 text-xs ${light ? "text-cream/60" : "text-ink-soft"}`}>
                {step.detail}
              </span>
            )}
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className={`flex-shrink-0 text-lg ${light ? "text-gold-light/60" : "text-gold/60"} lg:rotate-0`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="lg:hidden">
                <path d="M12 4v16M6 14l6 6 6-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" className="hidden lg:block">
                <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
