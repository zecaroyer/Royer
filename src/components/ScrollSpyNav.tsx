"use client";

import { useEffect, useState } from "react";

export type ScrollSpyItem = {
  id: string;
  label: string;
};

export default function ScrollSpyNav({ items }: { items: ScrollSpyItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="mt-10 flex flex-wrap gap-2" aria-label="On this page">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={active === item.id ? "true" : undefined}
          className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
            active === item.id
              ? "border-gold bg-gold/20 text-gold-light"
              : "border-gold/30 bg-white/5 text-cream/80 hover:bg-white/10"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
