import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "Cost Calculator",
  description:
    "Editable cost and production economics model for four packaging scenarios: 30 ml premium face cream, 50 ml face cream, 100 ml body cream and 250 ml lotion.",
};

export default function CustosPage() {
  return (
    <>
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <p className="section-eyebrow text-gold-light">Cost calculator</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Production economics, fully editable.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            Four packaging scenarios — 30 ml premium face cream, 50 ml face cream,
            100 ml body cream and 250 ml lotion — built from the same editable assumption
            set. Every number is a placeholder pending real supplier quotations.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="How to read this page"
            title="Change any assumption — every scenario recalculates instantly."
            description="Packaging, formula, labour, QC, regulatory allocation, wastage and margin inputs are shared across all four scenarios. Retail price is editable per scenario. Defaults reflect rough Portuguese small-batch cosmetics economics and are not quotations."
          />
          <div className="mt-10">
            <CostCalculator />
          </div>
        </Container>
      </section>
    </>
  );
}
