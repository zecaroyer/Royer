type BadgeTone = "neutral" | "good" | "warn" | "bad" | "info" | "gold";

const TONE_CLASS: Record<BadgeTone, string> = {
  neutral: "text-ink-soft border-ink-soft/30 bg-ink-soft/5",
  good: "text-lab-green border-lab-green/40 bg-lab-green/5",
  warn: "text-amber-700 border-amber-500/40 bg-amber-500/5",
  bad: "text-red-700 border-red-500/40 bg-red-500/5",
  info: "text-sky-700 border-sky-500/40 bg-sky-500/5",
  gold: "text-gold border-gold/40 bg-gold/10",
};

export default function Badge({ label, tone = "neutral" }: { label: string; tone?: BadgeTone }) {
  return (
    <span
      className={`label-tag inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] ${TONE_CLASS[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

export function marginTone(marginPct: number): BadgeTone {
  if (marginPct >= 65) return "good";
  if (marginPct >= 50) return "warn";
  return "bad";
}
