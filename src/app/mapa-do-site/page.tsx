import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { NAV_ITEMS } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the ROYER project site, with a one-line description of what each covers.",
};

const PAGE_DESCRIPTIONS: Record<string, string> = {
  "/": "Landing page: concept, product families, why aloe vera & botanicals, compliance-first approach, traceability, contact.",
  "/produtos": "Commercial catalogue of the six SKUs — positioning, hero ingredient, cosmetic-only claims.",
  "/formulas": "Full formulation dossier: % w/w formulas, ingredient chemistry, manufacturing process, testing plan, cost summary.",
  "/investidores": "Angel investment plan: market opportunity, unit economics, roadmap, use of funds, risk factors.",
  "/projeto-laboratorio": "Full technical laboratory project: layout, flows, GMP, equipment, QC, documentation, roadmap.",
  "/compliance": "Live compliance dashboard: PIF, CPSR, CPNP, Responsible Person, GMP, labels, claims, and more.",
  "/custos": "Editable per-SKU cost and margin calculator.",
  "/rastreabilidade": "Batch traceability system: architecture, data model, mock batch records.",
};

export default function MapaDoSitePage() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container>
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Mapa do site" }]} />
        <SectionHeading
          eyebrow="Site map"
          title="Every page, one line each."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {NAV_ITEMS.map((item) => (
            <GlassCard key={item.href} light>
              <a href={item.href} className="font-display text-lg text-ink hover:text-lab-green">
                {item.label} <span className="text-xs text-ink-soft/60">({item.href})</span>
              </a>
              <p className="mt-2 text-sm text-ink-soft">{PAGE_DESCRIPTIONS[item.href]}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
