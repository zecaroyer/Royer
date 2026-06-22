import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import StatCard from "@/components/ui/StatCard";
import ComplianceWarningBox from "@/components/ui/ComplianceWarningBox";
import { StatusPill, type ComplianceStatus } from "@/components/ui/StatusPill";
import { Table, THead, Th, Tr, Td } from "@/components/ui/Table";
import { COMPLIANCE_MODULES, COMPLIANCE_SUMMARY } from "@/data/compliance";

export const metadata: Metadata = {
  title: "Compliance Dashboard",
  description:
    "Status of every cosmetics regulatory module for the Aloe Lab Portugal project: PIF, CPSR, CPNP, Responsible Person, GMP/ISO 22716, labels, claims, batch records, suppliers, complaints, recalls and CAPA.",
};

const STATUS_LEGEND: ComplianceStatus[] = ["draft", "needs-review", "ready-for-validation", "approved"];

export default function CompliancePage() {
  return (
    <>
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
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
    </>
  );
}
