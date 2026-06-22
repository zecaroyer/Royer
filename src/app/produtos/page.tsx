import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import RegulatoryHoldBox from "@/components/ui/RegulatoryHoldBox";
import { SKUS } from "@/data/skus";
import { SKU_ECONOMICS_INPUTS } from "@/data/skuCosts";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Commercial catalogue of the six Aloe Lab Portugal SKUs — cosmetic positioning, hero ingredient and cosmetic-only claims. Regulatory validation required before any sale.",
};

export default function ProdutosPage() {
  return (
    <>
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <p className="section-eyebrow text-gold-light">Product catalogue</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Six SKUs. Cosmetics only.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            A commercial preview of the first range — aloe vera, hemp seed oil, and a
            small set of well-characterised botanicals. No medical claims. No medical
            cannabis. No supplements. Every SKU below is a draft pending full
            regulatory validation — see the badge on each card.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKUS.map((sku) => {
              const econInput = SKU_ECONOMICS_INPUTS.find((e) => e.skuId === sku.id)!;
              return (
                <GlassCard key={sku.id} light className="flex flex-col">
                  <p className="section-eyebrow text-gold">{sku.code} · {sku.format}</p>
                  <h3 className="mt-3 font-display text-xl text-ink">{sku.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{sku.positioning}</p>

                  <div className="mt-4 rounded-xl border border-lab-green/20 bg-lab-green/5 px-3 py-2 text-xs">
                    <span className="font-medium text-lab-green">Hero ingredient</span>
                    <p className="mt-0.5 text-ink-soft">{sku.heroIngredient}</p>
                  </div>

                  {sku.usesHempSeedOil && (
                    <div className="mt-3">
                      <Badge label="Hemp seed oil — no CBD" tone="info" />
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {sku.cosmeticClaims.map((claim) => (
                      <span
                        key={claim}
                        className="rounded-full border border-ink/15 bg-white/60 px-2.5 py-1 text-xs text-ink-soft"
                      >
                        {claim}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex-1" />

                  <p className="text-sm text-ink-soft">
                    From <span className="font-display text-lg text-ink">€{econInput.retailPriceExVat.toFixed(2)}</span>{" "}
                    <span className="text-xs">(ex. VAT, indicative)</span>
                  </p>

                  <div className="mt-3">
                    <Badge label="Regulatory validation required before sale" tone="bad" />
                  </div>

                  <Link
                    href={`/formulas#${sku.id}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-lab-green hover:underline"
                  >
                    View full formula & dossier →
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Positioning guardrails"
            title="What this catalogue is — and isn't."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ul className="space-y-2.5 text-sm text-ink-soft">
              <li className="flex gap-2"><span className="text-gold">—</span> Every product is a cosmetic under Regulation (EC) 1223/2009: cleansing, perfuming, protecting, or keeping skin in good condition.</li>
              <li className="flex gap-2"><span className="text-gold">—</span> No claim treats, cures, prevents, or relieves any disease or medical condition.</li>
              <li className="flex gap-2"><span className="text-gold">—</span> No product is marketed as containing or delivering CBD — hemp seed oil is the only cannabis-plant-derived ingredient used, and only as a cosmetic emollient.</li>
              <li className="flex gap-2"><span className="text-gold">—</span> Prices shown are indicative, ex. VAT, and pending final cost validation — see /custos.</li>
            </ul>
            <RegulatoryHoldBox />
          </div>
        </Container>
      </section>
    </>
  );
}
