import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TldrCallout from "@/components/ui/TldrCallout";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import { DATED_ROADMAP, FUNDING_ROUNDS } from "@/data/whitePaper";

export const metadata: Metadata = {
  title: "White Paper",
  description:
    "ROYER Cosmetics white paper: thesis, dated roadmap from January 2027, architecture, engineering, chemical/process installation, and the funding phases behind them.",
};

const TOC = [
  { id: "thesis", label: "Thesis" },
  { id: "roadmap", label: "Dated roadmap" },
  { id: "architecture", label: "Architecture" },
  { id: "engineering", label: "Engineering" },
  { id: "chemical-installation", label: "Chemical installation" },
  { id: "funding", label: "Funding phases" },
  { id: "risk", label: "Risk & governance" },
  { id: "conclusion", label: "Conclusion" },
];

export default function WhitePaperPage() {
  return (
    <>
      <ReadingProgress />
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Home", href: "/" }, { label: "White Paper" }]} />
          <p className="section-eyebrow text-gold-light">Program: ROYER Cosmetics</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            From inception to commercial launch — the full thesis.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            One document tying together why this project exists, what gets built and when,
            and how it gets funded — from where the project stands today through to a
            six-SKU commercial launch and beyond. Every date, figure and specification
            below is a draft planning target pending expert and investor validation, not
            a commitment.
          </p>
          <p className="mt-3 text-xs text-cream/45">Draft last updated: June 2026 · Timeline begins January 2027</p>
          <ScrollSpyNav items={TOC} />
        </Container>
      </section>

      <section className="bg-cream py-12 lg:py-16">
        <Container>
          <TldrCallout>
            ROYER Cosmetics turns a tightly-scoped six-SKU aloe vera and botanical
            skincare range into a licensed, GMP-compliant Portuguese manufacturer
            selling across the EU. Preparation runs now through December 2026;
            execution runs January 2027 (legal foundations) through commercial
            launch in December 2027, funded across three planning-stage rounds
            (pre-seed, seed, growth) — see the dated roadmap and funding phases below.
          </TldrCallout>
        </Container>
      </section>

      {/* Thesis */}
      <section id="thesis" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="01 · Thesis"
            title="Why one plant, formulated properly, manufactured transparently."
            description="The thesis in three parts: a sourcing thesis, a compliance thesis, and a brand thesis."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <GlassCard light>
              <h3 className="font-display text-lg text-ink">Sourcing thesis</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Aloe vera and hemp seed oil are mature, well-characterised cosmetic raw
                materials with established INCI status and a deep European supplier
                base. That keeps specification, qualification and regulatory acceptance
                comparatively low-risk compared to a novel or exotic ingredient story —
                see /laboratory for the supplier and sourcing detail.
              </p>
            </GlassCard>
            <GlassCard light>
              <h3 className="font-display text-lg text-ink">Compliance thesis</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Regulatory work gates every other workstream rather than following it.
                CPSR, PIF, CPNP, Responsible Person and claims substantiation are
                designed in from Phase 0, not retrofitted after a product already
                exists — see the live status on /compliance.
              </p>
            </GlassCard>
            <GlassCard light>
              <h3 className="font-display text-lg text-ink">Brand thesis</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The target customer values art, nature, self-care and well-being, and
                will pay a premium for it — so the brand has to read as boutique and
                considered, not clinical. Cosmetics-only positioning and premium
                presentation are treated as equally load-bearing, not as a marketing
                layer applied at the end.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Dated roadmap */}
      <section id="roadmap" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="02 · Dated roadmap"
            title="From preparation now to EU expansion in 2028."
            description="The same implementation phases tracked on /laboratory's roadmap, laid over a calendar starting January 2027 — the point at which legal and regulatory foundations begin in earnest. Every window is a planning target; phases overlap deliberately, mirroring how regulatory, formulation and facility workstreams really run in parallel."
          />
          <div className="mt-10 space-y-4">
            {DATED_ROADMAP.map((phase, i) => (
              <GlassCard key={phase.id} light>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg text-ink">
                    {i + 1}. {phase.phase}
                  </h3>
                  <span className="section-eyebrow text-gold">{phase.window}</span>
                </div>
                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {phase.milestones.map((m) => (
                    <li key={m} className="flex gap-2 text-sm text-ink-soft">
                      <span className="text-gold">·</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
          <Button href="/laboratory#roadmap" variant="ghost" className="mt-8">
            See the month-relative version on the laboratory project →
          </Button>
        </Container>
      </section>

      {/* Architecture */}
      <section id="architecture" className="bg-botanical-dark py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="03 · Architecture project"
            title="One site, thirteen zones, one-directional flow."
            description="The facility architecture concept is documented in full on /laboratory — this is the summary the rest of the thesis builds on."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <GlassCard>
              <h3 className="font-display text-base text-cream">Site concept</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                A single leased or fitted-out facility in Portugal, sized for
                pilot-to-small-commercial batches (400–650 units per batch), not a
                greenfield build. Location criteria: proximity to a Lisbon or Porto
                logistics corridor, adequate power/water utility capacity, and
                zoning that permits light cosmetics manufacturing.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-base text-cream">Zoning logic</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Thirteen functional zones (reception/quarantine through finished-goods
                dispatch) with a strict one-directional flow: raw materials and
                personnel enter through controlled points, finished goods exit through
                a separate path — full zone list and hygiene levels on /laboratory.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-base text-cream">Standard</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Scoped to ISO 22716 GMP for cosmetics, deliberately not to
                pharmaceutical cleanroom classification — HEPA filtration and
                pressure cascades appear only where a documented process-risk
                assessment justifies them.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Engineering */}
      <section id="engineering" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="04 · Engineering project"
            title="Utilities engineering: water, air, power, waste."
            description="The engineering scope that has to be right before any formulation work begins on-site."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink/10 bg-white/60 p-5">
              <p className="font-medium text-ink">Water system</p>
              <p className="mt-1.5 text-sm text-ink-soft">
                Purified/deionised water loop for aqueous-phase ingredients, with a
                qualified external supplier and certificate-of-analysis fallback if
                an in-house system isn&apos;t justified at pilot scale.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white/60 p-5">
              <p className="font-medium text-ink">Air & HVAC</p>
              <p className="mt-1.5 text-sm text-ink-soft">
                Filtered supply air to production zones, with a positive-pressure
                cascade only where zoning requires it. Continuous temperature/humidity
                monitoring with documented alert thresholds.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white/60 p-5">
              <p className="font-medium text-ink">Power & process heat</p>
              <p className="mt-1.5 text-sm text-ink-soft">
                Three-phase power sized for jacketed heating/cooling vessels and a
                high-shear homogenizer running concurrently with filling-line
                equipment — exact load to be confirmed by an electrical engineer
                against the final equipment list.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white/60 p-5">
              <p className="font-medium text-ink">Waste & wastewater</p>
              <p className="mt-1.5 text-sm text-ink-soft">
                Segregated general/recyclable/hazardous waste streams and a batch
                washout/wastewater path sized for cosmetic (non-industrial-solvent)
                cleaning agents only.
              </p>
            </div>
          </div>
          <Button href="/laboratory#equipment" variant="ghost" className="mt-8">
            See the full equipment list →
          </Button>
        </Container>
      </section>

      {/* Chemical & process installation */}
      <section id="chemical-installation" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="05 · Chemical & process installation"
            title="The batch process, as a plant installation rather than a recipe."
            description="Every formula on /formulas already specifies its own manufacturing steps. This is the facility-level installation those steps run on — the same process repeated across SKUs, not a separate process per product."
          />
          <ol className="mt-10 space-y-3">
            {[
              ["Intake & dispensing", "Raw materials received into quarantine, sampled, released, then weighed/dispensed on calibrated scales (bulk floor scale for drums/totes, precision bench scale for actives)."],
              ["Phase A — water phase vessel", "Jacketed stainless steel vessel (AISI 304/316) heats the aqueous phase to formula-specified temperature (typically 75–80°C) with agitation."],
              ["Phase B — oil phase vessel", "A second jacketed vessel melts waxes/butters and heats the oil phase to matching temperature ahead of combination."],
              ["Emulsification", "High-shear homogenizer combines Phase A and B under controlled shear and temperature to form the emulsion — the step that turns two heated phases into a stable cream or lotion."],
              ["Cool-down & holding", "Mobile jacketed holding tanks cool the bulk product under continued mixing to the formula's target fill temperature, with in-process pH/viscosity checks before release to filling."],
              ["Filling, capping, coding", "Semi-automatic filling machine doses the cooled bulk into jars/bottles/tubes/tins by weight or volume; capping machine applies consistent torque; batch/lot coding printer applies batch number and PAO/expiry."],
              ["Labelling & QC release", "Label printer/applicator applies the Regulation (EC) 1223/2009-compliant primary label; finished units held in quarantine until QC releases the batch against full specification."],
              ["Cleaning & changeover", "Zone-dedicated, colour-coded cleaning equipment and a documented line-clearance check before any new formula runs through the same vessels."],
            ].map(([title, body], i) => (
              <li key={title} className="flex gap-3 rounded-xl border border-ink/10 bg-white/60 p-4 text-sm">
                <span className="font-display text-gold">{i + 1}</span>
                <div>
                  <span className="font-medium text-ink">{title}.</span>{" "}
                  <span className="text-ink-soft">{body}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-ink-soft/70">
            This is a cosmetics batch process, not an industrial chemical plant — there
            is deliberately no explosion-proofing, hazmat bulk storage, or solvent
            recovery system in scope, since no formula on /formulas calls for one.
            If that ever changes, this section and the facility&apos;s safety case both
            need re-scoping before any ingredient is sourced.
          </p>
        </Container>
      </section>

      {/* Funding phases */}
      <section id="funding" className="bg-botanical-dark py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="06 · Funding phases"
            title="Three rounds, tied to de-risking milestones, not the calendar."
            description="Only the Pre-Seed figure is the same number already modelled on /investors. Seed and Growth are directional placeholders for planning conversations — not a term sheet."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {FUNDING_ROUNDS.map((round) => (
              <GlassCard key={round.id}>
                <p className="section-eyebrow text-gold-light">{round.name}</p>
                <p className="mt-2 font-display text-2xl text-cream">€{round.targetEur.toLocaleString()}</p>
                <p className="mt-1 text-xs text-cream/55">{round.window}</p>
                <p className="mt-3 text-sm text-cream/75">{round.instrument}</p>
                <p className="mt-3 text-xs text-cream/55">Unlocks: {round.unlocks}</p>
              </GlassCard>
            ))}
          </div>
          <Button href="/investors" variant="ghost" className="mt-8">
            Open the full angel investment plan →
          </Button>
        </Container>
      </section>

      {/* Risk & governance */}
      <section id="risk" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="07 · Risk & governance"
            title="What's already tracked, and where it lives."
            description="This thesis doesn't duplicate the risk register or the compliance dashboard — it points at them."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Button href="/laboratory#risks" variant="ghost">Full risk register (10 risks) →</Button>
            <Button href="/compliance" variant="ghost">Live compliance dashboard →</Button>
            <Button href="/laboratory#checklist" variant="ghost">Validation checklist →</Button>
            <Button href="/costs" variant="ghost">Editable cost & margin model →</Button>
          </div>
        </Container>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="08 · Conclusion"
            title="Nothing here is approved. Everything here is sequenced."
            description="The thesis holds if three things stay true: the sourcing stays boring and well-characterised, compliance keeps gating every workstream instead of trailing it, and the brand stays premium enough to support the margin the unit economics need. Every date, figure, architecture and engineering note above is a draft pending the named experts in /compliance and /laboratory signing off on their own section — this page sequences the plan, it does not substitute for any of that validation."
          />
        </Container>
      </section>
    </>
  );
}
