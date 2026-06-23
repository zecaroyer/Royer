import Image from "next/image";
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
import { getSku } from "@/data/skus";
import LeafMark from "@/components/ui/LeafMark";

const HERO_SKU = getSku("sku-01");

const TOC = [
  { id: "stats", label: "At a glance" },
  { id: "story", label: "Our story" },
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
        <BotanicalArt className="pointer-events-none absolute -right-32 top-0 h-[160%] w-[520px] text-gold/[0.06]" />
        <Container className="relative grid gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
          <div>
            <p className="section-eyebrow text-gold-light">
              Botanical Cosmetics Laboratory · Portugal
            </p>
            <h1 className="mt-5 max-w-xl text-balance font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
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
              <Button href="/products" variant="solid">
                Explore the range
              </Button>
              <Button href="#contact" variant="outline">
                Investor &amp; partner inquiries
              </Button>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-gold/15 pt-6 text-xs text-cream/55">
              <span>EU single market</span>
              <span>Manufactured in Portugal</span>
              <span>ISO 22716 GMP-aligned</span>
              <span>Reg. (EC) 1223/2009</span>
              <span>Cosmetics only — no medical claims</span>
            </div>

            <p className="section-eyebrow mt-10 text-cream/40">Jump to</p>
            <ScrollSpyNav items={TOC} />

            <div className="mt-10 flex justify-center sm:hidden lg:flex lg:justify-start" aria-hidden="true">
              <a href="#stats" className="animate-bounce text-cream/40 hover:text-cream/70">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="glass-card relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image
                src={HERO_SKU.imagePath}
                alt={HERO_SKU.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 320px"
                placeholder="blur"
                blurDataURL={HERO_SKU.imageBlurDataUrl}
                className="object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-deep/80 px-2.5 py-1 text-[0.6rem] font-medium text-cream/90 backdrop-blur-sm">
                AI concept render — not final packaging
              </span>
            </div>
          </div>
        </Container>
      </section>

      <DisclaimerBar />

      {/* Stats */}
      <section id="stats" className="bg-deep-2 py-14 text-cream">
        <Container>
          <StatsCounter
            stats={[
              { label: "Signature SKUs", value: 6 },
              { label: "Hero botanicals", value: 2 },
              { label: "Compliance modules tracked", value: 12 },
              { label: "Medical claims made", value: 0 },
            ]}
          />
        </Container>
      </section>

      {/* Our story */}
      <section id="story" className="bg-cream-2 py-20 lg:py-24">
        <Container>
          <div className="divider-gold mb-10" />
          <SectionHeading
            align="center"
            eyebrow="Our story"
            title="One plant, taken seriously."
          />
          <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg leading-relaxed text-ink-soft">
            Most &ldquo;natural&rdquo; skincare either drowns a good ingredient in
            claims it can&apos;t back up, or buries real botanical quality under
            clinical, pharmacy-style branding. ROYER started from the opposite
            instinct: pick one well-understood plant, get the regulatory and
            manufacturing groundwork right first, and only then build a brand
            worth the shelf it&apos;s meant for.
          </p>
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
            {PRODUCT_FAMILIES.map((family) => {
              const sku = getSku(family.representativeSkuId);
              return (
                <GlassCard key={family.id} light className="flex flex-col">
                  <div className="relative -mx-6 -mt-6 mb-4 aspect-[4/3] overflow-hidden rounded-t-2xl bg-cream-2">
                    <Image
                      src={sku.imagePath}
                      alt={sku.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      placeholder="blur"
                      blurDataURL={sku.imageBlurDataUrl}
                      className="object-cover"
                    />
                  </div>
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
              );
            })}
          </div>
          <p className="mt-6 text-xs text-ink-soft/60">
            Product imagery: AI-generated concept renders, not photographs of final packaging.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            {POSITIONING_NOTES.map((note) => (
              <li key={note} className="flex gap-2">
                <LeafMark className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold" />
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
          <div className="divider-gold mb-10" />
          <RevealOnScroll>
          <SectionHeading
            light
            eyebrow="Why aloe vera & botanicals"
            title="A raw material strategy built for sourcing reliability and EU acceptance."
            description="Aloe vera and hemp seed oil are both well characterised, widely traded cosmetic raw materials with established INCI status and a mature European supplier base — which keeps sourcing, specification and regulatory acceptance comparatively straightforward."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <GlassCard>
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold-light" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="8" />
                <path d="M8.5 12.3 11 14.8l4.5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-3 font-display text-lg text-cream">Established cosmetic status</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Aloe Barbadensis leaf juice and Cannabis Sativa seed oil are recognised
                INCI ingredients with extensive use history in EU cosmetics.
              </p>
            </GlassCard>
            <GlassCard>
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold-light" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="6" cy="6.5" r="1.6" />
                <circle cx="18" cy="6.5" r="1.6" />
                <circle cx="12" cy="18" r="1.6" />
                <path d="M6 8.1 12 16.4M18 8.1 12 16.4M7.6 6.5h8.8" strokeLinecap="round" />
              </svg>
              <h3 className="mt-3 font-display text-lg text-cream">Mature supplier base</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Multiple qualified EU and international suppliers exist for both
                ingredients, supporting supplier qualification and CoA/SDS continuity.
              </p>
            </GlassCard>
            <GlassCard>
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold-light" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 3.5C12 3.5 6.5 11 6.5 15a5.5 5.5 0 0 0 11 0c0-4-5.5-11.5-5.5-11.5Z" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-3 font-display text-lg text-cream">Sensory & formulation versatility</h3>
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
          <div className="divider-gold mb-10" />
          <SectionHeading
            eyebrow="Compliance-first approach"
            title="Regulatory work is not an afterthought — it gates everything else."
            description="Every formula, label and claim passes through the same compliance pipeline before it can reach the market — tracked module by module on the dedicated dashboard."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <GlassCard light>
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 3.5 5 6.5V12c0 5 3.2 7.7 7 9 3.8-1.3 7-4 7-9V6.5L12 3.5Z" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-3 font-display text-base text-ink">Safety assessed</h3>
              <p className="mt-1.5 text-sm text-ink-soft">A Cosmetic Product Safety Report per formula, signed by a qualified safety assessor.</p>
            </GlassCard>
            <GlassCard light>
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M7 3.5h7l3 3V20H7V3.5Z" strokeLinejoin="round" />
                <path d="M14 3.5v3h3M9.5 12h5M9.5 15.5h5" strokeLinecap="round" />
              </svg>
              <h3 className="mt-3 font-display text-base text-ink">Notified before sale</h3>
              <p className="mt-1.5 text-sm text-ink-soft">CPNP notification and a designated EU Responsible Person, every time, before market placement.</p>
            </GlassCard>
            <GlassCard light>
              <LeafMark className="h-6 w-6 text-gold" />
              <h3 className="mt-3 font-display text-base text-ink">Traceable, GMP-made</h3>
              <p className="mt-1.5 text-sm text-ink-soft">ISO 22716-aligned manufacturing with full batch traceability, raw material to customer.</p>
            </GlassCard>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm leading-relaxed text-ink-soft">
                The full pipeline — PIF, CPNP, labelling and claims substantiation — is tracked
                module by module, with nothing marked &ldquo;approved&rdquo; until a named expert
                signs off.
              </p>
              <Button href="/compliance" variant="ghost" className="mt-4">
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
          <div className="divider-gold mb-10" />
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
          <div className="divider-gold mb-10" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Portuguese production"
              title="Made in Portugal, built for the EU single market."
              description="Every jar starts in Portugal and is built to sell freely across the EU — the registrations and notifications a cosmetics brand needs are designed in from day one, not bolted on later."
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

      {/* Dossiers / data room */}
      <section id="dossiers" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Go deeper"
            title="The full technical dossiers live in the data room."
            description="Formulas, the lab project, manufacturing SOPs and the investment plan are reserved for partners and the internal team — request access below."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-accent-top rounded-2xl border border-gold/15 bg-white/60 p-5 pt-6">
              <p className="font-medium text-ink">Project Dossier</p>
              <p className="mt-1 text-xs text-ink-soft">Laboratory, GMP, equipment, roadmap</p>
            </div>
            <div className="card-accent-top rounded-2xl border border-gold/15 bg-white/60 p-5 pt-6">
              <p className="font-medium text-ink">Formulation Dossier</p>
              <p className="mt-1 text-xs text-ink-soft">Six formulas, chemistry, testing</p>
            </div>
            <div className="card-accent-top rounded-2xl border border-gold/15 bg-white/60 p-5 pt-6">
              <p className="font-medium text-ink">Manufacturing SOPs</p>
              <p className="mt-1 text-xs text-ink-soft">Per-SKU procedure, safety, IPC</p>
            </div>
            <div className="card-accent-top rounded-2xl border border-gold/15 bg-white/60 p-5 pt-6">
              <p className="font-medium text-ink">Investment Plan</p>
              <p className="mt-1 text-xs text-ink-soft">Market, unit economics, the ask</p>
            </div>
          </div>
          <Button href="/admin/login" variant="ghost" className="mt-8">
            Request data room access →
          </Button>
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
          <div className="divider-gold mb-10" />
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                light
                eyebrow="Contact"
                title="Request the project dossier or just say hello."
                description="Leave your details and the area you're interested in — the products, investment, partnership, regulatory review, or the full technical dossier. This form is a design mockup pending a real backend integration."
              />
              <div className="mt-8">
                <ComplianceWarningBox compact />
              </div>
              <GlassCard className="mt-8">
                <p className="section-eyebrow text-gold-light">Not ready to talk yet?</p>
                <p className="mt-2 text-sm text-cream/85">Get notified when ROYER launches.</p>
                <div className="mt-4">
                  <NewsletterSignup />
                </div>
              </GlassCard>
            </div>
            <ContactFormMockup />
          </div>
        </Container>
      </section>
    </>
  );
}
