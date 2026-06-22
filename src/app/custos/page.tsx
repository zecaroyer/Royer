import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "Cost Calculator",
  description:
    "Editable cost and production economics model for the six real SKUs: raw material, packaging, labour, QC, and regulatory allocation, D2C and wholesale margin, minimum retail price, and batch profit.",
};

export default function CustosPage() {
  return (
    <>
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Início", href: "/" }, { label: "Custos" }]} />
          <p className="section-eyebrow text-gold-light">Cost calculator</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            SKU economics, fully editable.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            Real per-unit economics for the six SKUs defined on /formulas — raw
            material, packaging, labour, QC and regulatory allocation rolled into a
            total COGS, with D2C and wholesale margin, minimum retail price for 60/65/70%
            margin targets, and batch profit at 500/1,000/5,000 units. Every number is a
            placeholder pending real supplier quotations.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="How to read this page"
            title="Change any assumption — every SKU recalculates instantly."
            description="Global assumptions (labour, QC budget, regulatory allocation, wastage, distributor margin) apply across all six SKUs. Retail price, packaging cost and raw material cost are editable per SKU. Defaults reflect rough Portuguese small-batch cosmetics economics and are not quotations."
          />
          <div className="mt-10">
            <CostCalculator />
          </div>
        </Container>
      </section>
    </>
  );
}
