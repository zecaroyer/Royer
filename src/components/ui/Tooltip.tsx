"use client";

import { ReactNode, useState } from "react";

export default function Tooltip({ term, definition }: { term: ReactNode; definition: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-block border-b border-dotted border-gold/60 cursor-help"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
    >
      {term}
      {open && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-lg border border-gold/30 bg-deep px-3 py-2 text-xs font-normal normal-case text-cream shadow-xl"
        >
          {definition}
        </span>
      )}
    </span>
  );
}
