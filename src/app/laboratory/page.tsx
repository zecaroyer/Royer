import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import ComplianceWarningBox from "@/components/ui/ComplianceWarningBox";
import FlowDiagram from "@/components/ui/FlowDiagram";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TldrCallout from "@/components/ui/TldrCallout";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import DocumentationTable from "@/components/DocumentationTable";
import { Table, THead, Th, Tr, Td } from "@/components/ui/Table";
import { LAB_ZONES } from "@/data/labZones";
import {
  PRODUCTION_FLOW,
  PERSONNEL_FLOW,
  RAW_MATERIAL_FLOW,
  FINISHED_PRODUCT_FLOW,
  WASTE_FLOW,
} from "@/data/flows";
import { EQUIPMENT_LIST, type EquipmentCategory } from "@/data/equipment";
import { SOP_LIST } from "@/data/sops";
import { ROADMAP } from "@/data/roadmap";
import { RISK_REGISTER, type RiskLevel } from "@/data/risks";
import { VALIDATION_CHECKLIST } from "@/data/validationChecklist";
import { SKUS } from "@/data/skus";
import { DEFAULT_SKU_ASSUMPTIONS, computeSkuEconomics } from "@/data/skuCosts";

export const metadata: Metadata = {
  title: "Laboratory Project",
  description:
    "Full technical concept for the ROYER cosmetics manufacturing laboratory: layout, flows, GMP, equipment, QC, documentation, traceability, cost model and roadmap.",
};

const TOC = [
  { id: "summary", label: "Executive summary" },
  { id: "regulatory-pathway", label: "Regulatory pathway" },
  { id: "layout", label: "Laboratory layout" },
  { id: "flows", label: "Process flows" },
  { id: "air-quality", label: "Air quality" },
  { id: "equipment", label: "Equipment" },
  { id: "qc-plan", label: "QC plan" },
  { id: "documentation", label: "Documentation" },
  { id: "traceability", label: "Traceability" },
  { id: "compliance-software", label: "Compliance software" },
  { id: "cost-model", label: "Cost model" },
  { id: "roadmap", label: "Roadmap" },
  { id: "risks", label: "Risk register" },
  { id: "checklist", label: "Validation checklist" },
];

const RISK_LEVEL_CLASS: Record<RiskLevel, string> = {
  Low: "text-lab-green border-lab-green/40 bg-lab-green/5",
  Medium: "text-amber-700 border-amber-500/40 bg-amber-500/5",
  High: "text-orange-700 border-orange-500/40 bg-orange-500/5",
  Critical: "text-red-700 border-red-500/40 bg-red-500/5",
};

function RiskBadge({ level }: { level: RiskLevel }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${RISK_LEVEL_CLASS[level]}`}>
      {level}
    </span>
  );
}

const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  "Production",
  "Quality Control",
  "Utilities",
  "Documentation & IT",
  "Safety & Facilities",
];

export default function LaboratoryPage() {
  return (
    <>
      <ReadingProgress />
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Home", href: "/" }, { label: "Laboratory Project" }]} />
          <p className="section-eyebrow text-gold-light">Technical project</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Laboratory project — full technical concept
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            A complete, draft-stage blueprint for the manufacturing laboratory: layout,
            flows, hygiene zoning, equipment, QC, documentation and the implementation
            roadmap. Every section marked for expert validation must be confirmed before
            construction or regulatory submission.
          </p>
          <p className="mt-3 text-xs text-cream/45">Draft last updated: June 2026</p>
          <ScrollSpyNav items={TOC} />
        </Container>
      </section>

      {/* Executive summary */}
      <section id="summary" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="01 · Executive summary"
            title="A small-batch cosmetics laboratory, scoped for compliance from day one."
            description="The project proposes a single-site cosmetics manufacturing laboratory in Portugal, producing aloe vera and botanical creams/lotions at pilot-to-small-commercial scale (hundreds to low thousands of units per batch). The facility is scoped against EU Cosmetics Regulation (EC) 1223/2009 and ISO 22716 GMP from the outset, rather than retrofitting compliance after construction."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <GlassCard light>
              <p className="section-eyebrow text-gold">Scope</p>
              <p className="mt-2 text-sm text-ink-soft">Cosmetics only — creams and lotions for face and body.</p>
            </GlassCard>
            <GlassCard light>
              <p className="section-eyebrow text-gold">Scale</p>
              <p className="mt-2 text-sm text-ink-soft">Pilot to small-commercial batches, 400–650 units per batch.</p>
            </GlassCard>
            <GlassCard light>
              <p className="section-eyebrow text-gold">Standard</p>
              <p className="mt-2 text-sm text-ink-soft">ISO 22716-aligned GMP — not a pharmaceutical cleanroom.</p>
            </GlassCard>
          </div>
          <TldrCallout>
            A 13-zone, ISO 22716-aligned laboratory in Portugal, built across six
            roadmap phases over 12 months — from legal foundations to first
            commercial batch — with a full equipment list, QC plan, and risk
            register already mapped out below.
          </TldrCallout>
        </Container>
      </section>

      {/* Regulatory pathway */}
      <section id="regulatory-pathway" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="02 · Regulatory pathway"
            title="The path from formula to market, in order."
            description="Each step gates the next. No step is skipped, and CBD/cannabinoid ingredients are excluded from the pathway until a dedicated legal review clears them."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ol className="space-y-3">
              {[
                "Formulation with cosmetics-only INCI ingredients (aloe vera, hemp seed oil, approved botanicals).",
                "Safety assessment and Cosmetic Product Safety Report (CPSR) by a qualified safety assessor.",
                "Product Information File (PIF) compiled and version-controlled per SKU.",
                "Label and claims legal review against Reg. (EC) 1223/2009 and Infarmed guidance.",
                "CPNP notification filed and confirmed before market placement.",
                "INFARMED cosmetic entity registration maintained for the manufacturing/Responsible Person entity.",
                "GMP manufacturing under ISO 22716 with full batch traceability from the first commercial batch.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3 rounded-xl border border-ink/10 bg-white/60 p-4 text-sm text-ink-soft">
                  <span className="font-display text-gold">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <ComplianceWarningBox />
          </div>
        </Container>
      </section>

      {/* Laboratory layout */}
      <section id="layout" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="03 · Laboratory layout concept"
            title="Thirteen functional zones, each with a defined hygiene level."
            description="Zoning follows a one-directional logic: raw materials and personnel enter through controlled points and finished goods exit through a separate, equally controlled path, minimising cross-contamination risk."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LAB_ZONES.map((zone) => (
              <GlassCard key={zone.id} light className="flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base text-ink">{zone.name}</h3>
                  <span className="flex-shrink-0 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[0.65rem] font-medium text-gold">
                    {zone.hygieneLevel}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{zone.function}</p>
                <ul className="mt-3 space-y-1 text-xs text-ink-soft/80">
                  {zone.keyControls.map((c) => (
                    <li key={c} className="flex gap-1.5">
                      <span className="text-gold">·</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Process flows */}
      <section id="flows" className="pattern-gold-lattice bg-deep-2 py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="04 · Production, personnel, material & waste flows"
            title="Five flows that keep people, materials and waste from crossing paths."
          />
          <div className="mt-10 space-y-12">
            <FlowBlock title="Production flow" steps={PRODUCTION_FLOW} />
            <FlowBlock title="Personnel flow" steps={PERSONNEL_FLOW} />
            <FlowBlock title="Raw material flow" steps={RAW_MATERIAL_FLOW} />
            <FlowBlock title="Finished product flow" steps={FINISHED_PRODUCT_FLOW} />
            <FlowBlock title="Waste flow" steps={WASTE_FLOW} />
          </div>
        </Container>
      </section>

      {/* Air quality */}
      <section id="air-quality" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="05 · Air quality concept"
            title="A cosmetics GMP controlled environment — not a pharmaceutical cleanroom."
            description="The facility is scoped to ISO 22716 expectations for a cosmetics production environment. No pharmaceutical-grade cleanroom classification is claimed; HEPA filtration appears only as an optional, risk-justified upgrade for sensitive operations."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Filtered HVAC", "Mechanical filtration of supply air to production zones."],
              ["Pressure cascade", "Positive pressure in production/filling relative to corridors, where zoning requires it."],
              ["Temperature & humidity monitoring", "Continuous logging with defined alert thresholds."],
              ["Differential pressure checks", "Periodic verification where pressure cascades are in place."],
              ["Cleaning schedule", "Zone-specific frequency and method, logged per SOP-009."],
              ["Environmental monitoring", "Surface swabs and microbiological monitoring; particulate monitoring only if justified by process risk."],
              ["Pest control", "Scheduled inspection by a licensed contractor."],
              ["Restricted access", "Production zones limited to gowned, authorised personnel."],
              ["Optional HEPA upgrade", "Local HEPA filtration for weighing/filling of sensitive materials, if risk assessment justifies it."],
            ].map(([title, body]) => (
              <GlassCard key={title} light>
                <h3 className="font-display text-base text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{body}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Equipment */}
      <section id="equipment" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="06 · Equipment list"
            title="Equipment grouped by function."
            description="A baseline equipment list for pilot-to-small-commercial scale. Final specification, capacity and supplier selection require engineering and supplier validation."
          />
          <div className="mt-10 space-y-10">
            {EQUIPMENT_CATEGORIES.map((category) => (
              <div key={category}>
                <h3 className="mb-3 font-display text-lg text-ink">{category}</h3>
                <Table>
                  <THead>
                    <Th>Equipment</Th>
                    <Th>Zone</Th>
                    <Th>Purpose</Th>
                  </THead>
                  <tbody>
                    {EQUIPMENT_LIST.filter((e) => e.category === category).map((e) => (
                      <Tr key={e.id}>
                        <Td className="font-medium text-ink">{e.name}</Td>
                        <Td>{e.zone}</Td>
                        <Td>
                          {e.purpose}
                          {e.notes && <span className="mt-1 block text-xs text-gold">{e.notes}</span>}
                        </Td>
                      </Tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* QC plan */}
      <section id="qc-plan" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="07 · Quality control plan"
            title="What gets tested, and when."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["In-process checks", "pH, viscosity, appearance and odour during mixing and filling."],
              ["Finished product release", "Full specification check before quarantine is lifted."],
              ["Microbiological limits", "Total viable count and specified pathogen absence per batch or scheduled frequency."],
              ["Preservative efficacy (challenge testing)", "Required for every preservative system before CPSR approval."],
              ["Stability testing", "Real-time and accelerated protocols supporting shelf-life and PAO claims."],
              ["Retention samples", "Representative sample of every batch retained for the shelf-life period plus margin."],
            ].map(([title, body]) => (
              <GlassCard key={title} light>
                <h3 className="font-display text-base text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{body}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Documentation plan */}
      <section id="documentation" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="08 · Documentation plan"
            title="Thirty controlled SOPs covering the full operation."
            description="Each SOP is a placeholder title and purpose at this stage — full procedures require drafting and QA approval before use."
          />
          <div className="mt-10">
            <DocumentationTable sops={SOP_LIST} />
          </div>
          <Button href="/sops" variant="ghost" className="mt-8">
            Open the six per-SKU manufacturing SOPs →
          </Button>
        </Container>
      </section>

      {/* Traceability */}
      <section id="traceability" className="bg-botanical-dark py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="09 · Traceability system"
            title="One batch number, traceable end to end."
            description="The full data model, mock batch records and software architecture live on the dedicated traceability page. In summary: every finished unit traces back through packaging lot, manufacturing batch, formula version and raw material lot to its originating supplier — and forward to the customer or distributor who received it."
          />
          <Button href="/traceability" variant="outline" className="mt-8">
            Open the traceability system →
          </Button>
        </Container>
      </section>

      {/* Compliance software modules */}
      <section id="compliance-software" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="10 · Compliance software modules"
            title="The same data model, rendered as a compliance workflow."
            description="Suppliers, raw material lots, formulas, batches and QC results feed directly into the regulatory modules — PIF, CPSR, CPNP, labels, claims, complaints, recalls and CAPA — tracked on the compliance dashboard."
          />
          <Button href="/compliance" variant="ghost" className="mt-8">
            Open compliance dashboard →
          </Button>
        </Container>
      </section>

      {/* Cost model */}
      <section id="cost-model" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="11 · Cost model"
            title="Six real SKUs, fully editable."
            description="Headline figures below use the default placeholder assumptions for the six SKUs defined on /formulas. Open the calculator to adjust every input — packaging, raw material, labour, QC, regulatory allocation, wastage and margins."
          />
          <div className="mt-10">
            <Table>
              <THead>
                <Th>SKU</Th>
                <Th>Total COGS / unit</Th>
                <Th>D2C margin</Th>
                <Th>Wholesale margin</Th>
              </THead>
              <tbody>
                {SKUS.map((sku) => {
                  const econ = computeSkuEconomics(sku.id, DEFAULT_SKU_ASSUMPTIONS);
                  return (
                    <Tr key={sku.id}>
                      <Td className="font-medium text-ink">{sku.code} · {sku.name}</Td>
                      <Td>€{econ.totalCogsPerUnit.toFixed(2)}</Td>
                      <Td>{econ.grossMarginD2cPct.toFixed(0)}%</Td>
                      <Td>{econ.grossMarginWholesalePct.toFixed(0)}%</Td>
                    </Tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <Button href="/costs" variant="ghost" className="mt-8">
            Open the cost calculator →
          </Button>
        </Container>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="12 · Implementation roadmap"
            title="Six phases from legal foundations to commercial launch."
          />
          <div className="mt-10 space-y-4">
            {ROADMAP.map((phase, i) => (
              <GlassCard key={phase.phase} light>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg text-ink">
                    {i + 1}. {phase.phase}
                  </h3>
                  <span className="section-eyebrow text-gold">{phase.duration}</span>
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
        </Container>
      </section>

      {/* Risk register */}
      <section id="risks" className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="13 · Risk register"
            title="Ten risks tracked from project start."
          />
          <div className="mt-10">
            <Table>
              <THead>
                <Th>ID</Th>
                <Th>Category</Th>
                <Th>Risk</Th>
                <Th>Likelihood</Th>
                <Th>Impact</Th>
                <Th>Mitigation</Th>
              </THead>
              <tbody>
                {RISK_REGISTER.map((r) => (
                  <Tr key={r.id}>
                    <Td className="font-mono text-xs text-gold">{r.id}</Td>
                    <Td className="font-medium text-ink">{r.category}</Td>
                    <Td>{r.risk}</Td>
                    <Td><RiskBadge level={r.likelihood} /></Td>
                    <Td><RiskBadge level={r.impact} /></Td>
                    <Td>{r.mitigation}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>

      {/* Validation checklist */}
      <section id="checklist" className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="14 · Validation checklist"
            title="Nothing here is approved until it's checked off by the right expert."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {VALIDATION_CHECKLIST.map((group) => (
              <GlassCard key={group.category} light>
                <h3 className="font-display text-base text-ink">{group.category}</h3>
                <ul className="mt-3 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border border-ink/25" />
                      <span className="flex-1">{item.item}</span>
                      {item.requiresExpert && (
                        <span className="flex-shrink-0 rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-amber-700">
                          Expert
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function FlowBlock({ title, steps }: { title: string; steps: { title: string; detail?: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 font-display text-lg text-cream">{title}</h3>
      <FlowDiagram steps={steps} light />
    </div>
  );
}
