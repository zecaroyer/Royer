"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, PUBLIC_NAV_ITEMS } from "@/lib/nav";
import LeafMark from "@/components/ui/LeafMark";

export default function NavBar({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const items = isAdmin ? NAV_ITEMS : PUBLIC_NAV_ITEMS;

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin-logout", { method: "POST" });
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <LeafMark className="text-gold-light" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-[0.18em] text-cream">
              ROYER
            </span>
            <span className="section-eyebrow text-[0.6rem] text-gold-light/80">Cosmetics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                  active ? "text-gold-light" : "text-cream/75 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          {isAdmin ? (
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="whitespace-nowrap rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-sm font-medium text-gold-light transition-colors hover:bg-gold/20 disabled:opacity-60"
            >
              {loggingOut ? "Logging out…" : "Log out"}
            </button>
          ) : (
            <Link
              href="/admin/login"
              className="whitespace-nowrap rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-sm font-medium text-gold-light transition-colors hover:bg-gold/20"
            >
              Data room login
            </Link>
          )}
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/15 bg-deep px-6 py-4 xl:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block min-h-[44px] py-2.5 text-sm font-medium ${active ? "text-gold-light" : "text-cream/80"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 border-t border-gold/15 pt-3">
              {isAdmin ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="block min-h-[44px] py-2.5 text-left text-sm font-medium text-gold-light disabled:opacity-60"
                >
                  {loggingOut ? "Logging out…" : "Log out"}
                </button>
              ) : (
                <Link
                  href="/admin/login"
                  onClick={() => setOpen(false)}
                  className="block min-h-[44px] py-2.5 text-sm font-medium text-gold-light"
                >
                  Data room login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
