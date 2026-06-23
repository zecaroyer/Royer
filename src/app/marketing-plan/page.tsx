import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TldrCallout from "@/components/ui/TldrCallout";
import ComplianceWarningBox from "@/components/ui/ComplianceWarningBox";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import { SKUS } from "@/data/skus";
import { POSITIONING_PILLARS, CHANNEL_MIX, CONTENT_PILLARS, ASMR_CONCEPTS } from "@/data/marketingPlan";
import { DATED_ROADMAP } from "@/data/whitePaper";

export const metadata: Metadata = {
  title: "Marketing Plan",
  description:
    "ROYER Cosmetics go-to-market plan: positioning, channel mix, content strategy, the ASMR product-film concept library, and launch sequencing for the 6-SKU range.",
};

const TOC = [
  { id: "positioning", label: "Positioning" },
  { id: "channels", label: "Channels" },
  { id: "content", label: "Content strategy" },
  { id: "asmr", label: "Concept films" },
  { id: "launch", label: "Launch sequencing" },
  { id: "guardrails", label: "Compliance guardrails" },
];

const launchPhase = DATED_ROADMAP.find((p) => p.id === "phase-5");

export default function MarketingPlanPage() {
  return (
    <>
      <ReadingProgress />
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Home", href: "/" }, { label: "Marketing Plan" }]} />
          <p className="section-eyebrow text-gold-light">Program: ROYER Cosmetics</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Six SKUs, one premium story, deployed to market.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            How the range gets positioned, where it gets sold, what content carries it,
            and when each piece turns on — sequenced against the dated roadmap on the
            white paper.
          </p>
          <p className="mt-3 text-xs text-cream/45">Draft last updated: June 2026</p>
          <ScrollSpyNav items={TOC} />
        </Container>
      </section>

      <section className="bg-cream py-12 lg:py-16">
        <Container>
          <TldrCallout>
            Premium-not-pharmacy positioning, D2C-led with paid social as the primary
            acquisition channel, a sensory/ASMR product-film library across all 6 SKUs
            (six concept films already drafted below), and a launch sequence tied to
            Phase 5 of the white paper&apos;s roadmap — every claim still gated through
            /compliance before it ships.
          </TldrCallout>
        </Container>
      </section>

      {/* Positioning */}
      <section id="positioning" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="01 · Positioning"
            title="Premium, not pharmacy."
            description="Three pillars the brand has to hold consistently across every channel."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {POSITIONING_PILLARS.map((p) => (
              <GlassCard key={p.title} light>
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Channels */}
      <section id="channels" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="02 · Channel mix"
            title="Where the range gets sold and discovered."
          />
          <div className="mt-10 space-y-3">
            {CHANNEL_MIX.map((c) => (
              <div key={c.name} className="flex flex-wrap gap-3 rounded-xl border border-ink/10 bg-white/60 p-4 text-sm">
                <span className="font-medium text-ink">{c.name}</span>
                <span className="text-ink-soft">— {c.role}</span>
              </div>
            ))}
          </div>
          <Button href="/costs" variant="ghost" className="mt-8">
            See D2C vs. wholesale margin assumptions →
          </Button>
        </Container>
      </section>

      {/* Content strategy */}
      <section id="content" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="03 · Content strategy"
            title="Three content pillars, one consistent voice."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CONTENT_PILLARS.map((c) => (
              <GlassCard key={c.title} light>
                <h3 className="font-display text-lg text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ASMR concept films */}
      <section id="asmr" className="bg-botanical-dark py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="04 · Concept films"
            title="Six sensory product films, one per SKU."
            description="AI-generated concept films — not footage of a real customer, and not a testimonial: the voiceover describes texture and sensation in the moment only, deliberately with no results claim, no ingredient claim, and no implied real-person endorsement, so it doesn't trigger the claims-substantiation requirements a genuine testimonial would. I have not been able to listen to the generated audio myself — review every voiceover for stray claims before any real campaign use."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ASMR_CONCEPTS.map((concept) => {
              const sku = SKUS.find((s) => s.id === concept.skuId)!;
              return (
                <GlassCard key={concept.skuId} className="flex flex-col">
                  <div className="relative -mx-6 -mt-6 mb-4 aspect-[9/16] overflow-hidden rounded-t-2xl bg-deep-2">
                    <video
                      src={concept.videoPath}
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-2 right-2 rounded-full bg-deep/80 px-2.5 py-1 text-[0.6rem] font-medium text-cream/90 backdrop-blur-sm">
                      AI concept film — not a real customer
                    </span>
                  </div>
                  <p className="section-eyebrow text-gold-light">{sku.code} · {sku.name}</p>
                  <p className="mt-2 text-sm text-cream/70">{concept.mood}</p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Launch sequencing */}
      <section id="launch" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="05 · Launch sequencing"
            title="Marketing turns on as compliance turns green, not before."
          />
          {launchPhase && (
            <GlassCard light className="mt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg text-ink">{launchPhase.phase}</h3>
                <span className="section-eyebrow text-gold">{launchPhase.window}</span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">
                Public marketing (paid social, content publishing, wholesale outreach)
                begins only once every milestone below is real, not draft:
              </p>
              <ul className="mt-3 space-y-1.5">
                {launchPhase.milestones.map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-ink-soft">
                    <span className="text-gold">·</span>
                    {m}
                  </li>
                ))}
              </ul>
            </GlassCard>
          )}
          <Button href="/white-paper#roadmap" variant="ghost" className="mt-8">
            See the full dated roadmap →
          </Button>
        </Container>
      </section>

      {/* Compliance guardrails */}
      <section id="guardrails" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="06 · Compliance guardrails"
            title="No claim ships without a substantiation file behind it."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ul className="space-y-2.5 text-sm text-ink-soft">
              <li className="flex gap-2"><span className="text-gold">—</span> Every marketing claim — ad copy, video voiceover, influencer brief — is cosmetic/sensory only and substantiated before publication, per /compliance.</li>
              <li className="flex gap-2"><span className="text-gold">—</span> No testimonial, real or AI-generated, claims a result, cure, or skin transformation.</li>
              <li className="flex gap-2"><span className="text-gold">—</span> Any AI-generated marketing asset (image or video) is labelled as a concept asset, not real product photography or customer footage.</li>
              <li className="flex gap-2"><span className="text-gold">—</span> CBD/cannabinoid language is excluded from all marketing copy by the same hold that applies to the formulas — see /compliance.</li>
            </ul>
            <ComplianceWarningBox compact />
          </div>
        </Container>
      </section>
    </>
  );
}
