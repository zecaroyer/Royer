"use client";

import { useMemo, useState } from "react";
import { Table, THead, Th, Tr, Td } from "@/components/ui/Table";
import type { Sop } from "@/data/sops";

export default function DocumentationTable({ sops }: { sops: Sop[] }) {
  const areas = useMemo(() => {
    const counts = new Map<string, number>();
    for (const sop of sops) counts.set(sop.area, (counts.get(sop.area) ?? 0) + 1);
    return Array.from(counts.entries());
  }, [sops]);

  const [activeArea, setActiveArea] = useState<string | null>(null);
  const visible = activeArea ? sops.filter((s) => s.area === activeArea) : sops;

  return (
    <div>
      <nav className="flex flex-wrap gap-2" aria-label="Filter by area">
        <button
          type="button"
          onClick={() => setActiveArea(null)}
          aria-pressed={activeArea === null}
          className={`label-tag rounded-full border px-3.5 py-1.5 text-[0.65rem] transition-colors ${
            activeArea === null
              ? "border-gold bg-gold/12 text-ink"
              : "border-gold/25 bg-white/50 text-ink-soft hover:border-gold/50 hover:text-ink"
          }`}
        >
          All · {sops.length}
        </button>
        {areas.map(([area, count]) => (
          <button
            key={area}
            type="button"
            onClick={() => setActiveArea(area)}
            aria-pressed={activeArea === area}
            className={`label-tag rounded-full border px-3.5 py-1.5 text-[0.65rem] transition-colors ${
              activeArea === area
                ? "border-gold bg-gold/12 text-ink"
                : "border-gold/25 bg-white/50 text-ink-soft hover:border-gold/50 hover:text-ink"
            }`}
          >
            {area} · {count}
          </button>
        ))}
      </nav>

      <p className="mt-4 text-xs text-ink-soft/70">
        Showing {visible.length} of {sops.length} SOPs{activeArea ? ` — ${activeArea}` : ""}.
      </p>

      <div className="mt-4">
        <Table>
          <THead>
            <Th>Code</Th>
            <Th>Title</Th>
            <Th>Area</Th>
            <Th>Purpose</Th>
          </THead>
          <tbody>
            {visible.map((s) => (
              <Tr key={s.code}>
                <Td className="font-mono text-xs text-gold">{s.code}</Td>
                <Td className="font-medium text-ink">{s.title}</Td>
                <Td>{s.area}</Td>
                <Td>{s.purpose}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
