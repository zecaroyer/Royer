import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import FlowDiagram from "@/components/ui/FlowDiagram";
import { Table, THead, Th, Tr, Td } from "@/components/ui/Table";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { TRACEABILITY_FLOW, MOCK_BATCH_RECORDS } from "@/data/traceability";
import { ENTITIES, ENTITY_GROUPS } from "@/data/entities";

export const metadata: Metadata = {
  title: "Traceability System",
  description:
    "Batch traceability architecture, visual flow from supplier to customer/complaint/recall, a mock batch record table, and the underlying data model.",
};

const QC_STATUS_CLASS: Record<string, string> = {
  Pass: "text-lab-green border-lab-green/40 bg-lab-green/5",
  Pending: "text-amber-700 border-amber-500/40 bg-amber-500/5",
  Hold: "text-red-700 border-red-500/40 bg-red-500/5",
};

const RELEASE_STATUS_CLASS: Record<string, string> = {
  Released: "text-lab-green border-lab-green/40 bg-lab-green/5",
  Quarantine: "text-amber-700 border-amber-500/40 bg-amber-500/5",
  Blocked: "text-red-700 border-red-500/40 bg-red-500/5",
};

function Pill({ label, className }: { label: string; className: string }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${className}`}>
      {label}
    </span>
  );
}

const ARCHITECTURE_LAYERS = [
  {
    title: "Capture layer",
    body: "Barcode/QR scanning at goods-in, weighing, filling, packaging and shipment captures lot and batch identifiers at the moment work happens, instead of relying on end-of-day data entry.",
  },
  {
    title: "Core data model",
    body: "A relational schema (documented below, designed to map directly onto PostgreSQL via Prisma) links every supplier, lot, formula version, batch and shipment by foreign key — see the entity list below.",
  },
  {
    title: "Compliance layer",
    body: "PIF, CPSR and CPNP status records reference the same formula and batch identifiers, so a regulatory question and a traceability question are answered from one source of truth.",
  },
  {
    title: "Reporting & recall layer",
    body: "Forward trace (lot → customer) and backward trace (customer → lot → supplier) queries power complaint handling, recall scoping and routine audit exports.",
  },
];

export default function TraceabilityPage() {
  return (
    <>
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Home", href: "/" }, { label: "Traceability" }]} />
          <p className="section-eyebrow text-gold-light">Traceability</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Traceability &amp; quality system
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            No backend exists yet. This page documents the intended software architecture
            and data model so it can be implemented directly against PostgreSQL/Prisma in
            a later phase, without redesign.
          </p>
        </Container>
      </section>

      {/* Architecture */}
      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Software architecture"
            title="Four layers, one shared batch identifier."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ARCHITECTURE_LAYERS.map((layer) => (
              <GlassCard key={layer.title} light>
                <h3 className="font-display text-base text-ink">{layer.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{layer.body}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual flow */}
      <section className="bg-deep-2 py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="Visual flow"
            title="Supplier to customer — and back, if a complaint or recall requires it."
          />
          <div className="mt-10 overflow-x-auto">
            <FlowDiagram steps={TRACEABILITY_FLOW} light />
          </div>
        </Container>
      </section>

      {/* Mock batch record table */}
      <section className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Mock batch records"
            title="What a batch record looks like once the system is live."
            description="Illustrative data only — no real production has taken place yet."
          />
          <div className="mt-10">
            <Table>
              <THead>
                <Th>Batch number</Th>
                <Th>Formula</Th>
                <Th>Mfg. date</Th>
                <Th>Qty (units)</Th>
                <Th>Raw material lots</Th>
                <Th>QC status</Th>
                <Th>Release status</Th>
                <Th>Distributor ref.</Th>
              </THead>
              <tbody>
                {MOCK_BATCH_RECORDS.map((b) => (
                  <Tr key={b.batchNumber}>
                    <Td className="font-mono text-xs text-gold">{b.batchNumber}</Td>
                    <Td className="font-medium text-ink">{b.formula}</Td>
                    <Td>{b.manufacturingDate}</Td>
                    <Td>{b.quantityUnits}</Td>
                    <Td>{b.rawMaterialLots.join(", ")}</Td>
                    <Td><Pill label={b.qcStatus} className={QC_STATUS_CLASS[b.qcStatus]} /></Td>
                    <Td><Pill label={b.releaseStatus} className={RELEASE_STATUS_CLASS[b.releaseStatus]} /></Td>
                    <Td>{b.distributorRef}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>

      {/* Data model */}
      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Data model"
            title="Twenty-eight entities, grouped by function."
            description="Written as a conceptual model now, so it can become a PostgreSQL schema managed by Prisma without rethinking the relationships."
          />
          <div className="mt-10 space-y-12">
            {ENTITY_GROUPS.map((group) => (
              <div key={group}>
                <h3 className="mb-4 font-display text-lg text-ink">{group}</h3>
                <div className="grid gap-5 lg:grid-cols-2">
                  {ENTITIES.filter((e) => e.group === group).map((entity) => (
                    <GlassCard key={entity.id} light>
                      <h4 className="font-display text-base text-ink">{entity.name}</h4>
                      <p className="mt-1 text-sm text-ink-soft">{entity.description}</p>
                      <div className="mt-3 overflow-x-auto">
                        <table className="w-full text-xs">
                          <tbody>
                            {entity.fields.map((f) => (
                              <tr key={f.name} className="border-b border-ink/8 last:border-0">
                                <td className="py-1 pr-2 font-mono text-gold">{f.name}</td>
                                <td className="py-1 pr-2 text-ink-soft">{f.type}</td>
                                <td className="py-1 text-ink-soft/70">{f.notes ?? ""}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {entity.relations.length > 0 && (
                        <p className="mt-3 text-xs text-ink-soft/70">
                          <span className="font-medium text-ink-soft">Relates to:</span>{" "}
                          {entity.relations.join(", ")}
                        </p>
                      )}
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
