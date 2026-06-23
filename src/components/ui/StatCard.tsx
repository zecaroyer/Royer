export default function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="card-accent-top rounded-2xl border border-gold/15 bg-cream-2 p-5 pt-6">
      <p className="section-eyebrow text-gold">{label}</p>
      <p className="mt-2.5 font-display text-[1.7rem] leading-tight text-ink">{value}</p>
      {hint && <p className="mt-1.5 text-xs text-ink-soft/80">{hint}</p>}
    </div>
  );
}
