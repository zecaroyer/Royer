export type BarDatum = {
  label: string;
  value: number;
  formatted?: string;
};

export default function BarChart({
  data,
  unit = "",
}: {
  data: BarDatum[];
  unit?: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.label}>
          <div className="mb-1 flex items-baseline justify-between text-xs text-ink-soft">
            <span>{d.label}</span>
            <span className="font-medium text-ink">{d.formatted ?? `${d.value}${unit}`}</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/8">
            <div
              className="h-full rounded-full bg-gradient-to-r from-lab-green to-gold"
              style={{ width: `${Math.max((d.value / max) * 100, 3)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
