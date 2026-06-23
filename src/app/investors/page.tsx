import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import StatCard from "@/components/ui/StatCard";
import Button from "@/components/ui/Button";
import BarChart from "@/components/ui/BarChart";
import { Table, THead, Th, Tr, Td } from "@/components/ui/Table";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactFormMockup from "@/components/ContactFormMockup";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import { SKUS } from "@/data/skus";
import { DEFAULT_SKU_ASSUMPTIONS, computeSkuEconomics } from "@/data/skuCosts";
import { ROADMAP } from "@/data/roadmap";
import {
  MARKET_STATS,
  USE_OF_FUNDS,
  TARGET_RAISE_EUR,
  FINANCIAL_RAMP,
  INVESTOR_RISK_HIGHLIGHTS,
} from "@/data/investment";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "ROYER angel investment plan: market opportunity, six-SKU unit economics, 12-month roadmap, use of funds, and risk factors for a Portuguese compliance-first botanical cosmetics brand.",
};

const TOC = [
  { id: "opportunity", label: "Opportunity" },
  { id: "unit-economics", label: "Unit economics" },
  { id: "roadmap", label: "Roadmap" },
  { id: "use-of-funds", label: "Use of funds" },
  { id: "financial-ramp", label: "Financial ramp" },
  { id: "risk", label: "Risk factors" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export default function InvestorsPage() {
  const economics = SKUS.map((sku) => ({ sku, econ: computeSkuEconomics(sku.id, DEFAULT_SKU_ASSUMPTIONS) }));

  return (
    <>
      <ReadingProgress />
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Home", href: "/" }, { label: "Investors" }]} />
          <p className="section-eyebrow text-gold-light">Angel investment plan</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Raising €{TARGET_RAISE_EUR.toLocaleString()} to take six finished
            formulas to market.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            The regulatory pathway, lab design, and unit economics are already
            modelled in detail. This round funds turning that plan into a
            licensed, GMP-compliant, revenue-generating operation in Portugal —
            then across the EU on a single CPNP notification per SKU.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact" variant="solid">Book an investor call</Button>
            <Button href="/INVESTMENT_PLAN.md" variant="outline">Download full plan (.md)</Button>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-cream/50">
            Technical and commercial draft, pre-seed stage. Not legal, financial,
            or investment advice; not an offer to sell securities. See the full
            disclaimer at the bottom of this page.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            <GlassCard>
              <p className="section-eyebrow text-gold-light">Raise target</p>
              <p className="mt-2 font-display text-xl text-cream">€{TARGET_RAISE_EUR.toLocaleString()}</p>
            </GlassCard>
            <GlassCard>
              <p className="section-eyebrow text-gold-light">Stage</p>
              <p className="mt-2 font-display text-xl text-cream">Pre-seed</p>
            </GlassCard>
            <GlassCard>
              <p className="section-eyebrow text-gold-light">Instrument</p>
              <p className="mt-2 font-display text-xl text-cream">SAFE / note</p>
            </GlassCard>
            <GlassCard>
              <p className="section-eyebrow text-gold-light">SKUs ready</p>
              <p className="mt-2 font-display text-xl text-cream">6 of 6</p>
            </GlassCard>
          </div>
          <p className="mt-2 text-xs text-cream/40">Draft last updated: June 2026</p>
          <ScrollSpyNav items={TOC} />
        </Container>
      </section>

      {/* Market opportunity */}
      <section id="opportunity" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="The opportunity"
            title="A growing market, and a transparency-led position within it."
            description="Third-party desk-research estimates — directional, not ROYER's own validated market study."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MARKET_STATS.map((m) => (
              <StatCard key={m.label} label={m.label} value={m.value} hint={`Source: ${m.source}`} />
            ))}
          </div>
        </Container>
      </section>

      {/* Product + unit economics */}
      <section id="unit-economics" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Six SKUs, already formulated"
            title="Unit economics, computed live from the same model used to run the business."
            description="All figures are placeholder cost assumptions pending real supplier quotes — see /costs to edit every input."
          />
          <div className="mt-10">
            <Table>
              <THead>
                <Th>SKU</Th>
                <Th>Retail (ex. VAT)</Th>
                <Th>Unit COGS</Th>
                <Th>D2C margin</Th>
                <Th>Wholesale margin</Th>
              </THead>
              <tbody>
                {economics.map(({ sku, econ }) => (
                  <Tr key={sku.id}>
                    <Td className="font-medium text-ink">{sku.code} · {sku.name}</Td>
                    <Td>€{econ.retailPriceExVat.toFixed(2)}</Td>
                    <Td>€{econ.totalCogsPerUnit.toFixed(2)}</Td>
                    <Td>{econ.grossMarginD2cPct.toFixed(0)}%</Td>
                    <Td>{econ.grossMarginWholesalePct.toFixed(0)}%</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </div>
          <p className="mt-4 text-xs text-ink-soft/70">
            Gross margins in this range reflect modelled raw-material cost only —
            they exclude customer acquisition cost, returns, and real-world
            wastage. Treat as an upper-bound ceiling, not a forecast.
          </p>
          <div className="mt-6 flex gap-3">
            <Button href="/products" variant="ghost">See the product catalogue →</Button>
            <Button href="/formulas" variant="ghost">See the full formulas →</Button>
          </div>
        </Container>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-botanical-dark py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="Roadmap"
            title="Twelve months from legal foundations to first commercial shipment."
          />
          <div className="mt-10 space-y-3">
            {ROADMAP.map((phase, i) => (
              <div key={phase.phase} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-gold/20 bg-white/5 p-4">
                <span className="font-medium text-cream">{i + 1}. {phase.phase}</span>
                <span className="section-eyebrow text-gold-light">{phase.duration}</span>
              </div>
            ))}
          </div>
          <Button href="/laboratory#roadmap" variant="outline" className="mt-6">
            Full roadmap detail →
          </Button>
        </Container>
      </section>

      {/* Use of funds */}
      <section id="use-of-funds" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Use of funds"
            title={`How the €${TARGET_RAISE_EUR.toLocaleString()} target raise would be allocated.`}
            description="A starting proposal for negotiation, not a fixed budget — every line still needs a real supplier quote."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <GlassCard light>
              <BarChart
                unit="%"
                data={USE_OF_FUNDS.map((u) => ({
                  label: u.allocation,
                  value: u.pct,
                  formatted: `${u.pct}% · €${u.amountEur.toLocaleString()}`,
                }))}
              />
            </GlassCard>
            <ul className="space-y-3">
              {USE_OF_FUNDS.map((u) => (
                <li key={u.allocation} className="rounded-xl border border-ink/10 bg-white/60 p-4 text-sm">
                  <p className="font-medium text-ink">{u.allocation} — {u.pct}%</p>
                  <p className="mt-1 text-ink-soft">{u.covers}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Financial ramp */}
      <section id="financial-ramp" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Illustrative financial ramp"
            title="A unit-economics ceiling, not a sales forecast."
          />
          <div className="mt-10">
            <Table>
              <THead>
                <Th>Year</Th>
                <Th>Stage</Th>
                <Th>Illustrative revenue (ex. VAT)</Th>
                <Th>Notes</Th>
              </THead>
              <tbody>
                {FINANCIAL_RAMP.map((r) => (
                  <Tr key={r.year}>
                    <Td className="font-medium text-ink">{r.year}</Td>
                    <Td>{r.stage}</Td>
                    <Td className="font-medium text-ink">{r.revenueRange}</Td>
                    <Td>{r.notes}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>

      {/* Risk */}
      <section id="risk" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Risk factors"
            title="What we already know could go wrong — and what's built to catch it."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {INVESTOR_RISK_HIGHLIGHTS.map((r) => (
              <GlassCard key={r.title} light>
                <h3 className="font-display text-base text-ink">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{r.mitigation}</p>
              </GlassCard>
            ))}
          </div>
          <Button href="/laboratory#risks" variant="ghost" className="mt-6">
            Full risk register →
          </Button>
        </Container>
      </section>

      {/* Team */}
      <section id="team" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Team"
            title="To be completed by the founder(s)."
            description="This page deliberately does not invent team bios or track record. An investor will want real names, real CVs, and real references — not placeholder text."
          />
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-botanical-dark py-20 text-cream lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              light
              eyebrow="Next step"
              title="Request the data room or book an investor call."
              description="Leave your details below. This form is a design mockup pending a real backend integration — for now, treat this page and the linked dossiers as the data room."
            />
            <ContactFormMockup defaultInterest="partnership" />
          </div>
        </Container>
      </section>

      <section className="bg-cream py-10">
        <Container>
          <p className="rounded-2xl border border-amber-500/40 bg-amber-500/[0.06] p-5 text-xs leading-relaxed text-amber-800">
            This is a technical and commercial draft. It is not legal, financial,
            or investment advice and is not an offer to sell securities. Final
            terms, valuation, and figures must be set with qualified legal and
            financial counsel, and every cost/market assumption above must be
            validated before being relied upon by an investor.
          </p>
        </Container>
      </section>
    </>
  );
}
