"use client";

import { useEffect, useRef, useState } from "react";

export type CountStat = {
  label: string;
  value: number;
  suffix?: string;
};

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 900;
          const start = performance.now();
          function tick(now: number) {
            const progress = Math.min(1, (now - start) / duration);
            setDisplay(Math.round(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: { stats: CountStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="font-display text-3xl text-gold-light sm:text-4xl">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-1 text-xs text-cream/65">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
