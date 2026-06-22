"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <LeafMark />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-[0.18em] text-cream">
              ROYER
            </span>
            <span className="section-eyebrow text-[0.6rem] text-gold-light/80">Portugal</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                  active ? "text-gold-light" : "text-cream/75 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/projeto-laboratorio"
            className="whitespace-nowrap rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-sm font-medium text-gold-light transition-colors hover:bg-gold/20"
          >
            Pedir dossiê do projeto
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/15 bg-deep px-6 py-4 xl:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    pathname === item.href ? "text-gold-light" : "text-cream/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function LeafMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" className="text-gold-light">
      <path
        className="leaf-line"
        d="M20 36C20 36 8 30 8 16C8 8 14 4 20 4C26 4 32 8 32 16C32 30 20 36 20 36Z"
      />
      <path className="leaf-line" d="M20 34V6" />
      <path className="leaf-line" d="M20 12C16 14 13 17 12 21" />
      <path className="leaf-line" d="M20 20C24 22 27 25 28 29" />
    </svg>
  );
}
