import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import StatCard from "@/components/ui/StatCard";
import ComplianceWarningBox from "@/components/ui/ComplianceWarningBox";
import { StatusPill, type ComplianceStatus } from "@/components/ui/StatusPill";
import { Table, THead, Th, Tr, Td } from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import RegulatoryHoldBox from "@/components/ui/RegulatoryHoldBox";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Tooltip from "@/components/ui/Tooltip";
import { COMPLIANCE_MODULES, COMPLIANCE_SUMMARY } from "@/data/compliance";
import { SKUS } from "@/data/skus";
import { FORMULAS } from "@/data/formulas";

export const metadata: Metadata = {
  title: "Compliance Dashboard",
  description:
    "Status of every cosmetics regulatory module for the ROYER project: PIF, CPSR, CPNP, Responsible Person, GMP/ISO 22716, labels, claims, batch records, suppliers, complaints, recalls and CAPA.",
};

const STATUS_LEGEND: ComplianceStatus[] = ["draft", "needs-review", "ready-for-validation", "approved"];

export default function CompliancePage() {
  return (
    <>
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Home", href: "/" }, { label: "Compliance" }]} />
          <p className="section-eyebrow text-gold-light">Compliance dashboard</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Every regulatory module, one screen.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            This dashboard is a status mockup, not a certification. Every module shown
            here still requires real work from a qualified regulatory consultant and
            safety assessor before it can move to “Approved”.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {STATUS_LEGEND.map((s) => (
              <StatusPill key={s} status={s} light />
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="Modules tracked" value={String(COMPLIANCE_SUMMARY.totalModules)} />
            <StatCard label="Draft" value={String(COMPLIANCE_SUMMARY.draft)} />
            <StatCard label="Needs expert review" value={String(COMPLIANCE_SUMMARY.needsReview)} />
            <StatCard label="Approved" value={String(COMPLIANCE_SUMMARY.approved)} hint="None yet — by design" />
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <ComplianceWarningBox />
          <p className="mt-6 text-xs text-ink-soft/70">
            Glossary: <Tooltip term="PIF" definition="Product Information File — the technical file kept available to authorities per product (Art. 11)." />,{" "}
            <Tooltip term="CPSR" definition="Cosmetic Product Safety Report — the safety assessment signed by a qualified safety assessor (Annex I)." />,{" "}
            <Tooltip term="CPNP" definition="Cosmetic Product Notification Portal — mandatory EU-wide notification before market placement (Art. 13)." />,{" "}
            <Tooltip term="GMP" definition="Good Manufacturing Practice — the EN ISO 22716 framework for cosmetics production." />.
          </p>
        </Container>
      </section>

      <section className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Module cards"
            title="Twelve modules, tracked individually."
            description="Each card states the regulatory basis, current status, owner and the next concrete action required."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMPLIANCE_MODULES.map((m) => (
              <GlassCard key={m.id} light className="flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg text-ink">{m.title}</h3>
                </div>
                <p className="mt-1 text-xs text-gold">{m.regulatoryBasis}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{m.description}</p>
                <div className="mt-4">
                  <StatusPill status={m.status} />
                </div>
                <div className="mt-4 border-t border-ink/10 pt-3 text-xs text-ink-soft">
                  <p>
                    <span className="font-medium text-ink">Owner:</span> {m.owner}
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-ink">Next action:</span> {m.nextAction}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Compliance matrix"
            title="The same data, as a single audit-ready table."
          />
          <div className="mt-10">
            <Table>
              <THead>
                <Th>Module</Th>
                <Th>Regulatory basis</Th>
                <Th>Status</Th>
                <Th>Owner</Th>
                <Th>Next action</Th>
              </THead>
              <tbody>
                {COMPLIANCE_MODULES.map((m) => (
                  <Tr key={m.id}>
                    <Td className="font-medium text-ink">{m.title}</Td>
                    <Td>{m.regulatoryBasis}</Td>
                    <Td><StatusPill status={m.status} /></Td>
                    <Td>{m.owner}</Td>
                    <Td>{m.nextAction}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </section>

      <section className="bg-cream-2 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Formulation compliance"
            title="Per-formula compliance, down to pH and microbiological risk."
            description="Drawn directly from the formulation data behind /formulas. Nothing here is approved — every column reflects draft-stage status pending expert review."
          />
          <div className="mt-10">
            <Table>
              <THead>
                <Th>SKU</Th>
                <Th>Formula status</Th>
                <Th>INCI verification</Th>
                <Th>Restricted substances</Th>
                <Th>Allergen declaration</Th>
                <Th>Preservative validation</Th>
                <Th>Target pH</Th>
                <Th>Microbiological risk</Th>
                <Th>Stability testing</Th>
                <Th>Packaging compatibility</Th>
                <Th>CPSR</Th>
                <Th>PIF</Th>
                <Th>CPNP</Th>
              </THead>
              <tbody>
                {SKUS.map((sku) => {
                  const formula = FORMULAS.find((f) => f.skuId === sku.id)!;
                  const fc = formula.formulationCompliance;
                  return (
                    <Tr key={sku.id}>
                      <Td className="font-medium text-ink">{sku.code}<span className="block text-xs text-ink-soft">{sku.name}</span></Td>
                      <Td><StatusPill status={formula.status} /></Td>
                      <Td>{fc.inciVerificationNeeded ? <Badge label="Needed" tone="warn" /> : <Badge label="Not needed" tone="good" />}</Td>
                      <Td><StatusPill status={fc.restrictedSubstancesCheck} /></Td>
                      <Td><StatusPill status={fc.allergenDeclarationCheck} /></Td>
                      <Td><StatusPill status={fc.preservativeSystemValidation} /></Td>
                      <Td className="text-xs">{formula.targetPh}</Td>
                      <Td><Badge label={fc.microbiologicalRisk} tone={fc.microbiologicalRisk === "Low" ? "good" : fc.microbiologicalRisk === "Medium" ? "warn" : "bad"} /></Td>
                      <Td>{fc.stabilityTestingRequired ? <Badge label="Required" tone="warn" /> : <Badge label="Not required" tone="good" />}</Td>
                      <Td>{fc.packagingCompatibilityRequired ? <Badge label="Required" tone="warn" /> : <Badge label="Not required" tone="good" />}</Td>
                      <Td><StatusPill status={fc.cpsrStatus} /></Td>
                      <Td><StatusPill status={fc.pifStatus} /></Td>
                      <Td><StatusPill status={fc.cpnpStatus} /></Td>
                    </Tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <p className="mt-4 text-xs text-ink-soft/70">
            Full per-ingredient chemistry, manufacturing process and testing plan: see{" "}
            <a className="underline" href="/formulas">/formulas</a>.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="CBD / cannabinoid hold"
            title="One SKU uses hemp seed oil. None use CBD."
          />
          <div className="mt-8">
            <RegulatoryHoldBox />
          </div>
        </Container>
      </section>
    </>
  );
}
