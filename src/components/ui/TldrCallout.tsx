export default function TldrCallout({ children }: { children: string }) {
  return (
    <div className="mt-6 flex gap-3 rounded-2xl border border-gold/30 bg-gold/[0.06] p-4 text-sm">
      <span className="section-eyebrow flex-shrink-0 text-gold">TL;DR</span>
      <p className="text-ink-soft">{children}</p>
    </div>
  );
}
