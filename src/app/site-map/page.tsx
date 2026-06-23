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
  "/products": "Commercial catalogue of the six SKUs — positioning, hero ingredient, cosmetic-only claims.",
  "/formulas": "Full formulation dossier: % w/w formulas, ingredient chemistry, manufacturing process, testing plan, cost summary.",
  "/investors": "Angel investment plan: market opportunity, unit economics, roadmap, use of funds, risk factors.",
  "/laboratory": "Full technical laboratory project: layout, flows, GMP, equipment, QC, documentation, roadmap.",
  "/compliance": "Live compliance dashboard: PIF, CPSR, CPNP, Responsible Person, GMP, labels, claims, and more.",
  "/costs": "Editable per-SKU cost and margin calculator.",
  "/traceability": "Batch traceability system: architecture, data model, mock batch records.",
  "/white-paper": "Full project thesis: dated roadmap from January 2027, architecture, engineering, chemical installation, funding phases.",
  "/marketing-plan": "Go-to-market plan: positioning, channels, content strategy, ASMR concept films, launch sequencing.",
};

const EXTRA_PAGES = [
  { href: "/sops", label: "Manufacturing SOPs", description: "Per-SKU manufacturing Standard Operating Procedures: purpose, scope, responsibilities, safety, equipment, IPC and procedure." },
];

export default function SiteMapPage() {
  const allPages = [...NAV_ITEMS, ...EXTRA_PAGES];

  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Site Map" }]} />
        <SectionHeading
          eyebrow="Site map"
          title="Every page, one line each."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {allPages.map((item) => (
            <GlassCard key={item.href} light>
              <a href={item.href} className="font-display text-lg text-ink hover:text-lab-green">
                {item.label} <span className="text-xs text-ink-soft/60">({item.href})</span>
              </a>
              <p className="mt-2 text-sm text-ink-soft">
                {PAGE_DESCRIPTIONS[item.href] ?? ("description" in item ? item.description : "")}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
