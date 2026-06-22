import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TldrCallout from "@/components/ui/TldrCallout";
import CopyLinkButton from "@/components/ui/CopyLinkButton";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import FormulationDisclaimerBox from "@/components/ui/FormulationDisclaimerBox";
import { StatusPill } from "@/components/ui/StatusPill";
import { Table, THead, Th, Tr, Td } from "@/components/ui/Table";
import { SKUS } from "@/data/skus";
import { FORMULAS } from "@/data/formulas";
import { getManufacturingSop } from "@/data/manufacturingSops";

export const metadata: Metadata = {
  title: "Manufacturing SOPs",
  description:
    "Draft Standard Operating Procedures for manufacturing all six ROYER SKUs: purpose, scope, responsibilities, safety, equipment, in-process controls, procedure, and documentation requirements.",
};

const SCROLLSPY_ITEMS = SKUS.map((s) => {
  const sop = getManufacturingSop(s.id);
  return { id: s.id, label: `${sop.sopCode} · ${s.name}` };
});

export default function SopsPage() {
  return (
    <>
      <ReadingProgress />
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Início", href: "/" }, { label: "SOPs" }]} />
          <p className="section-eyebrow text-gold-light">Documentation plan</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Manufacturing SOPs for all six SKUs.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            One Standard Operating Procedure per SKU: purpose, scope, responsibilities,
            safety precautions, required equipment, in-process controls, the
            step-by-step procedure, and documentation requirements. Draft-stage —
            none of these are effective until reviewed and approved by a qualified
            cosmetic chemist and Quality Assurance.
          </p>
          <p className="mt-3 text-xs text-cream/45">Draft last updated: June 2026</p>
          <ScrollSpyNav items={SCROLLSPY_ITEMS} />
        </Container>
      </section>

      <section className="bg-cream py-12 lg:py-16">
        <Container>
          <FormulationDisclaimerBox />
          <TldrCallout>
            Six manufacturing SOPs, each built from the same approved formula data
            used on /formulas — so the procedure, target pH/viscosity, and
            in-process controls can never drift out of sync with the actual BOM.
            General facility SOPs (cleaning, calibration, training, etc.) are
            listed separately on /projeto-laboratorio#documentation.
          </TldrCallout>
        </Container>
      </section>

      {SKUS.map((sku, index) => {
        const sop = getManufacturingSop(sku.id);
        const formula = FORMULAS.find((f) => f.skuId === sku.id)!;

        return (
          <section
            key={sku.id}
            id={sku.id}
            className={index % 2 === 0 ? "bg-cream-2 py-16 lg:py-20" : "bg-cream py-16 lg:py-20"}
          >
            <Container>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="section-eyebrow text-gold">{sop.sopCode} · v{formula.version}</p>
                    <CopyLinkButton anchorId={sku.id} />
                  </div>
                  <h2 className="mt-2 font-display text-3xl text-ink">{sku.name}</h2>
                </div>
                <StatusPill status={sop.status} />
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-2 font-display text-base text-ink">1. Purpose</h3>
                    <p className="text-sm text-ink-soft">{sop.purpose}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-base text-ink">2. Scope</h3>
                    <p className="text-sm text-ink-soft">{sop.scope}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-display text-base text-ink">3. Responsibilities</h3>
                    <Table>
                      <THead>
                        <Th>Role</Th>
                        <Th>Responsibility</Th>
                      </THead>
                      <tbody>
                        {sop.responsibilities.map((r) => (
                          <Tr key={r.role}>
                            <Td className="font-medium text-ink">{r.role}</Td>
                            <Td>{r.responsibility}</Td>
                          </Tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="mb-3 font-display text-base text-ink">4. Procedure</h3>
                    <ol className="space-y-2.5">
                      {formula.manufacturingProcess.map((step, i) => (
                        <li key={step.step} className="flex gap-3 rounded-xl border border-ink/10 bg-white/60 p-3.5 text-sm">
                          <span className="font-display text-gold">{i + 1}</span>
                          <div>
                            <span className="font-medium text-ink">{step.step}.</span>{" "}
                            <span className="text-ink-soft">{step.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-3 text-xs text-ink-soft/70">
                      Full formula, BOM and chemistry: <Link href={`/formulas#${sku.id}`} className="underline">/formulas#{sku.id}</Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-display text-base text-ink">5. In-process controls (IPC)</h3>
                    <Table>
                      <THead>
                        <Th>Stage</Th>
                        <Th>Parameter</Th>
                        <Th>Target</Th>
                      </THead>
                      <tbody>
                        {sop.inProcessControls.map((c) => (
                          <Tr key={c.stage + c.parameter}>
                            <Td className="font-medium text-ink">{c.stage}</Td>
                            <Td>{c.parameter}</Td>
                            <Td>{c.target}</Td>
                          </Tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>

                <div className="space-y-5">
                  <GlassCard light>
                    <p className="section-eyebrow text-gold">6. Safety precautions</p>
                    <ul className="mt-3 space-y-2">
                      {sop.safetyPrecautions.map((s) => (
                        <li key={s} className="flex gap-2 text-sm text-ink-soft">
                          <span className="mt-0.5 text-amber-600">⚑</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  <GlassCard light>
                    <p className="section-eyebrow text-gold">7. Equipment required</p>
                    <ul className="mt-3 space-y-1.5">
                      {sop.equipmentRequired.map((e) => (
                        <li key={e} className="text-sm text-ink-soft">
                          <span className="text-gold">·</span> {e}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  <GlassCard light>
                    <p className="section-eyebrow text-gold">8. Documentation required</p>
                    <ul className="mt-3 space-y-1.5">
                      {sop.documentationRequired.map((d) => (
                        <li key={d} className="text-sm text-ink-soft">
                          <span className="text-gold">·</span> {d}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  <GlassCard light>
                    <p className="section-eyebrow text-gold">9. Revision history</p>
                    <ul className="mt-3 space-y-2">
                      {sop.revisionHistory.map((r) => (
                        <li key={r.version} className="text-sm text-ink-soft">
                          <span className="font-medium text-ink">v{r.version}</span> ({r.date}) — {r.change}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-botanical-dark py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="Related documentation"
            title="General facility SOPs and the full documentation plan."
            description="The 30 facility-wide SOPs (supplier qualification, cleaning, calibration, training, deviations, recalls, and more) are tracked separately."
          />
          <Link
            href="/projeto-laboratorio#documentation"
            className="mt-6 inline-flex items-center text-sm font-medium text-gold-light hover:underline"
          >
            Open the full documentation plan →
          </Link>
        </Container>
      </section>
    </>
  );
}
