import Link from "next/link";
import { PUBLIC_NAV_ITEMS, PRIVATE_NAV_ITEMS } from "@/lib/nav";

export default function Footer({ isAdmin }: { isAdmin: boolean }) {
  return (
    <footer className="border-t border-gold/20 bg-deep text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl tracking-[0.12em] text-cream">
              ROYER Cosmetics
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Botanical cosmetics laboratory project — aloe vera, hemp seed oil and
              plant-derived skincare. Positioned strictly as cosmetics under EU and
              Portuguese law. No medicines, no medical cannabis, no supplements, no
              therapeutic claims.
            </p>
          </div>

          <div>
            <p className="section-eyebrow text-gold-light">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm">
              {PUBLIC_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="border-b border-transparent transition-colors hover:border-gold/40 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
              {isAdmin ? (
                <>
                  {PRIVATE_NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="border-b border-transparent transition-colors hover:border-gold/40 hover:text-cream">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/sops" className="border-b border-transparent transition-colors hover:border-gold/40 hover:text-cream">
                      Manufacturing SOPs
                    </Link>
                  </li>
                  <li>
                    <Link href="/site-map" className="border-b border-transparent transition-colors hover:border-gold/40 hover:text-cream">
                      Site Map
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link href="/admin/login" className="border-b border-transparent text-gold-light transition-colors hover:border-gold/40 hover:text-cream">
                    Data room login
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <p className="section-eyebrow text-gold-light">Regulatory references</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>EU Cosmetics Regulation (EC) 1223/2009</li>
              <li>ISO 22716:2007 / EN ISO 22716</li>
              <li>CPNP · PIF · CPSR</li>
              <li>INFARMED (Portugal)</li>
            </ul>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <div className="rounded-xl border border-gold/25 bg-white/5 p-5 text-xs leading-relaxed text-cream/65">
          <p className="font-semibold text-gold-light">Legal notice</p>
          <p className="mt-2">
            This is a technical and commercial draft. It is not legal advice. Final
            validation must be performed by a qualified regulatory consultant, safety
            assessor, and competent Portuguese/EU authorities where needed. CBD or other
            cannabinoids naturally derived from cannabis extracts, tinctures, resin,
            flowers or leaves may be prohibited in Portuguese cosmetic products and
            require dedicated legal and regulatory validation before any use is
            considered. Nothing on this site constitutes a medical, therapeutic, or
            supplement claim.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} ROYER Cosmetics — Project draft for internal,
            investor and regulatory review purposes only.
          </p>
          <a href="#main-content" className="text-xs text-cream/50 hover:text-cream">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
