import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import ComplianceWarningBox from "@/components/ui/ComplianceWarningBox";
import DisclaimerBar from "@/components/ui/DisclaimerBar";
import FlowDiagram from "@/components/ui/FlowDiagram";
import ContactFormMockup from "@/components/ContactFormMockup";
import BotanicalArt from "@/components/BotanicalArt";
import RevealOnScroll from "@/components/RevealOnScroll";
import StatsCounter from "@/components/StatsCounter";
import NewsletterSignup from "@/components/NewsletterSignup";
import Accordion from "@/components/ui/Accordion";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import { PRODUCT_FAMILIES, POSITIONING_NOTES } from "@/data/productFamilies";
import { TRACEABILITY_FLOW } from "@/data/traceability";
import { HOME_FAQ } from "@/data/faq";

const TOC = [
  { id: "stats", label: "At a glance" },
  { id: "concept", label: "Concept" },
  { id: "product-families", label: "Product families" },
  { id: "why-aloe", label: "Why aloe vera" },
  { id: "compliance-approach", label: "Compliance" },
  { id: "traceability", label: "Traceability" },
  { id: "production", label: "Made in Portugal" },
  { id: "dossiers", label: "Dossiers" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <ReadingProgress />
      {/* Hero */}
      <section className="relative overflow-hidden bg-botanical-dark text-cream">
        <BotanicalArt className="pointer-events-none absolute -right-24 top-0 h-[140%] w-[480px] text-gold/10" />
        <Container className="relative py-24 lg:py-32">
          <p className="section-eyebrow text-gold-light">
            Botanical Cosmetics Laboratory · Portugal
          </p>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            A premium botanical skincare laboratory, built on aloe vera and a
            compliance-first foundation.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream/75">
            ROYER is a technical and commercial project for a cosmetics
            manufacturing laboratory in Portugal — combining aloe vera, hemp seed oil
            and selected botanicals into elegant skincare, under strict EU cosmetics
            regulation. No medicines. No medical cannabis. No therapeutic claims.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="solid">
              Request project dossier
            </Button>
            <Button href="#contact" variant="outline">
              Book technical meeting
            </Button>
            <Link
              href="/laboratory"
              className="text-sm font-medium text-cream/80 underline-offset-4 hover:text-cream hover:underline"
            >
              See laboratory project →
            </Link>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <GlassCard>
              <p className="section-eyebrow text-gold-light">Regulatory anchor</p>
              <p className="mt-2 text-cream/85">EU Cosmetics Regulation (EC) 1223/2009</p>
            </GlassCard>
            <GlassCard>
              <p className="section-eyebrow text-gold-light">Manufacturing standard</p>
              <p className="mt-2 text-cream/85">ISO 22716 GMP-aligned facility concept</p>
            </GlassCard>
            <GlassCard>
              <p className="section-eyebrow text-gold-light">Positioning</p>
              <p className="mt-2 text-cream/85">Cosmetics only — never medicine or supplement</p>
            </GlassCard>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gold/15 pt-6 text-xs text-cream/55">
            <span>🇪🇺 EU single market</span>
            <span>🇵🇹 Manufactured in Portugal</span>
            <span>ISO 22716 GMP-aligned</span>
            <span>Reg. (EC) 1223/2009</span>
            <span>Cosmetics only — no medical claims</span>
          </div>

          <ScrollSpyNav items={TOC} />

          <div className="mt-10 flex justify-center sm:hidden lg:flex lg:justify-start" aria-hidden="true">
            <a href="#stats" className="animate-bounce text-cream/40 hover:text-cream/70">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Container>
      </section>

      <DisclaimerBar />

      {/* Stats */}
      <section id="stats" className="bg-deep-2 py-14 text-cream">
        <Container>
          <StatsCounter
            stats={[
              { label: "SKUs formulated", value: 6 },
              { label: "Data-model entities", value: 28 },
              { label: "Compliance modules tracked", value: 12 },
              { label: "Medical/therapeutic claims made", value: 0 },
            ]}
          />
        </Container>
      </section>

      {/* Concept */}
      <section id="concept" className="bg-cream py-20 lg:py-28">
        <Container>
          <RevealOnScroll className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Concept"
              title="A Portuguese laboratory designed around one plant, done properly."
              description="The project starts from a simple premise: aloe vera, hemp seed oil and a small set of well-understood botanicals, formulated into a tight range of premium creams and lotions — manufactured locally in Portugal under a compliance-first operating model rather than retrofitted onto one later."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard label="Core plant" value="Aloe Vera" hint="Leaf juice base across the range" />
              <StatCard label="Secondary route" value="Hemp Seed Oil" hint="Subject to compliance verification" />
              <StatCard label="Manufacturing standard" value="ISO 22716" hint="GMP-aligned, not pharma-sterile" />
              <StatCard label="Market scope" value="EU / Portugal" hint="CPNP-notified, INFARMED-registered" />
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Product families */}
      <section id="product-families" className="bg-cream-2 py-20 lg:py-28">
        <Container>
          <RevealOnScroll>
          <SectionHeading
            eyebrow="Product families"
            title="A focused range, not a catalogue."
            description="Four product families anchor the initial range. Every claim below is a cosmetic, sensory-level claim — function, feel and finish — never a medical or therapeutic statement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_FAMILIES.map((family) => (
              <GlassCard key={family.id} light className="flex flex-col">
                <p className="section-eyebrow text-gold">{family.format}</p>
                <h3 className="mt-3 font-display text-xl text-ink">{family.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {family.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {family.cosmeticClaims.map((claim) => (
                    <span
                      key={claim}
                      className="rounded-full border border-lab-green/25 bg-lab-green/5 px-2.5 py-1 text-xs text-lab-green"
                    >
                      {claim}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
          <ul className="mt-10 space-y-2 text-sm text-ink-soft">
            {POSITIONING_NOTES.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="text-gold">—</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <Button href="/products" variant="ghost" className="mt-8">
            See the full 6-SKU catalogue →
          </Button>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Why aloe vera and botanicals */}
      <section id="why-aloe" className="bg-botanical-dark py-20 text-cream lg:py-28">
        <Container>
          <RevealOnScroll>
          <SectionHeading
            light
            eyebrow="Why aloe vera & botanicals"
            title="A raw material strategy built for sourcing reliability and EU acceptance."
            description="Aloe vera and hemp seed oil are both well characterised, widely traded cosmetic raw materials with established INCI status and a mature European supplier base — which keeps sourcing, specification and regulatory acceptance comparatively straightforward."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <GlassCard>
              <h3 className="font-display text-lg text-cream">Established cosmetic status</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Aloe Barbadensis leaf juice and Cannabis Sativa seed oil are recognised
                INCI ingredients with extensive use history in EU cosmetics.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-lg text-cream">Mature supplier base</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Multiple qualified EU and international suppliers exist for both
                ingredients, supporting supplier qualification and CoA/SDS continuity.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-lg text-cream">Sensory & formulation versatility</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Both ingredients perform well across gel-creams, body creams and
                lotions, giving one coherent raw-material story across the range.
              </p>
            </GlassCard>
          </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Compliance-first approach */}
      <section id="compliance-approach" className="bg-cream py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Compliance-first approach"
            title="Regulatory work is not an afterthought — it gates everything else."
            description="Every formula, label and claim passes through the same compliance pipeline before it can reach the market. The dedicated dashboard tracks the status of each regulatory module end to end."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-3 text-sm leading-relaxed text-ink-soft">
              {[
                "Safety assessment and Cosmetic Product Safety Report (CPSR) per formula, signed by a qualified safety assessor.",
                "Product Information File (PIF) compiled and kept current per SKU.",
                "CPNP notification before any product is placed on the market.",
                "A formally designated Responsible Person established in the EU.",
                "Compliant Portuguese labelling and a claims substantiation file for every statement made.",
                "GMP manufacturing aligned with ISO 22716 and full batch traceability from raw material to customer.",
              ].map((line) => (
                <div key={line} className="flex gap-3 rounded-xl border border-ink/10 bg-white/60 p-4">
                  <span className="mt-0.5 text-gold">✓</span>
                  <span>{line}</span>
                </div>
              ))}
              <Button href="/compliance" variant="ghost" className="mt-2">
                Open compliance dashboard →
              </Button>
            </div>
            <ComplianceWarningBox />
          </div>
        </Container>
      </section>

      {/* Traceability by batch */}
      <section id="traceability" className="bg-deep-2 py-20 text-cream lg:py-28">
        <Container>
          <SectionHeading
            light
            eyebrow="Traceability by batch"
            title="Every jar can be traced back to its source, and forward to its customer."
            description="A single batch number connects supplier, raw material lot, formula version, manufacturing batch, QC release, packaging lot and final shipment — the backbone of any future complaint or recall."
          />
          <div className="mt-12 overflow-x-auto">
            <FlowDiagram steps={TRACEABILITY_FLOW} light />
          </div>
          <Button href="/traceability" variant="outline" className="mt-10">
            Explore the traceability system →
          </Button>
        </Container>
      </section>

      {/* Portuguese production */}
      <section id="production" className="bg-cream-2 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Portuguese production"
              title="Manufactured in Portugal, built for the EU single market."
              description="The laboratory concept is designed to operate as a cosmetics manufacturing entity registered with INFARMED, exporting across the EU under one CPNP notification per product and one Responsible Person."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard label="Registration" value="INFARMED" hint="Cosmetic entity registration in Portugal" />
              <StatCard label="Market access" value="CPNP" hint="Single EU notification portal" />
              <StatCard label="Quality system" value="ISO 22716" hint="GMP-aligned documentation" />
              <StatCard label="Origin" value="Made in Portugal" hint="Local manufacturing narrative" />
            </div>
          </div>
        </Container>
      </section>

      {/* Download dossiers */}
      <section id="dossiers" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Go deeper"
            title="Read the full technical dossiers."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href="/PROJECT_DOSSIER.md" className="group rounded-2xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-gold/40">
              <p className="font-medium text-ink">Project Dossier</p>
              <p className="mt-1 text-xs text-ink-soft">Laboratory, GMP, equipment, roadmap</p>
              <span className="mt-3 inline-block text-xs text-lab-green group-hover:underline">Download .md →</span>
            </a>
            <a href="/FORMULATION_DOSSIER.md" className="group rounded-2xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-gold/40">
              <p className="font-medium text-ink">Formulation Dossier</p>
              <p className="mt-1 text-xs text-ink-soft">Six formulas, chemistry, testing</p>
              <span className="mt-3 inline-block text-xs text-lab-green group-hover:underline">Download .md →</span>
            </a>
            <a href="/SOP_MANUFACTURING.md" className="group rounded-2xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-gold/40">
              <p className="font-medium text-ink">Manufacturing SOPs</p>
              <p className="mt-1 text-xs text-ink-soft">Per-SKU procedure, safety, IPC</p>
              <span className="mt-3 inline-block text-xs text-lab-green group-hover:underline">Download .md →</span>
            </a>
            <a href="/INVESTMENT_PLAN.md" className="group rounded-2xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-gold/40">
              <p className="font-medium text-ink">Investment Plan</p>
              <p className="mt-1 text-xs text-ink-soft">Market, unit economics, the ask</p>
              <span className="mt-3 inline-block text-xs text-lab-green group-hover:underline">Download .md →</span>
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-cream-2 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked"
            title="The questions everyone asks first."
          />
          <div className="mt-10 max-w-3xl">
            <Accordion items={HOME_FAQ.map((f) => ({ id: f.question, title: f.question, content: f.answer }))} />
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-botanical-dark py-20 text-cream lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                light
                eyebrow="Contact"
                title="Request the project dossier or book a technical meeting."
                description="Leave your details and the area you're interested in — investment, partnership, regulatory review, or the full technical dossier. This form is a design mockup pending a real backend integration."
              />
              <div className="mt-8">
                <ComplianceWarningBox compact />
              </div>
              <div className="mt-8 border-t border-gold/15 pt-6">
                <p className="text-sm font-medium text-cream/85">Not ready to talk yet? Get notified at launch.</p>
                <div className="mt-3">
                  <NewsletterSignup />
                </div>
              </div>
            </div>
            <ContactFormMockup />
          </div>
        </Container>
      </section>
    </>
  );
}
