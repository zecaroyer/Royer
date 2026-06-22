import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Table, THead, Th, Tr, Td } from "@/components/ui/Table";
import { StatusPill, type ComplianceStatus } from "@/components/ui/StatusPill";
import Badge, { marginTone } from "@/components/ui/Badge";
import FormulationDisclaimerBox from "@/components/ui/FormulationDisclaimerBox";
import RegulatoryHoldBox from "@/components/ui/RegulatoryHoldBox";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TldrCallout from "@/components/ui/TldrCallout";
import CopyLinkButton from "@/components/ui/CopyLinkButton";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import { SKUS } from "@/data/skus";
import { FORMULAS, formulaTotalPercentage, type Formula } from "@/data/formulas";
import { getChemistry, INGREDIENT_CHEMISTRY } from "@/data/ingredientChemistry";
import { getPackaging } from "@/data/packaging";
import { getTestingPlan, getTestDefinition } from "@/data/testingPlan";
import {
  computeSkuEconomics,
  RAW_MATERIAL_COST_PER_KG,
  DENSITY_G_PER_ML,
  DEFAULT_SKU_ASSUMPTIONS,
} from "@/data/skuCosts";

export const metadata: Metadata = {
  title: "Product Formulas & SKU Economics",
  description:
    "Six draft cosmetic formulation concepts with full INCI breakdown, ingredient chemistry, manufacturing process, testing plan and per-unit economics. Cosmetics only — no medical claims, CBD on regulatory hold.",
};

function ingredientCostPerUnit(formula: Formula, volumeMl: number, percentage: number, chemistryId: string) {
  const costPerKg = RAW_MATERIAL_COST_PER_KG[chemistryId] ?? 0;
  return (percentage / 100) * costPerKg * (volumeMl / 1000) * DENSITY_G_PER_ML;
}

const SCROLLSPY_ITEMS = [
  ...SKUS.map((s) => ({ id: s.id, label: `${s.code} · ${s.name}` })),
  { id: "chemistry", label: "Ingredient chemistry reference" },
];

export default function FormulasPage() {
  return (
    <>
      <ReadingProgress />
      <section className="bg-botanical-dark py-20 text-cream lg:py-24">
        <Container>
          <Breadcrumb light items={[{ label: "Início", href: "/" }, { label: "Fórmulas" }]} />
          <p className="section-eyebrow text-gold-light">Product formulation</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl sm:text-5xl">
            Six draft formulas, fully costed and chemistry-referenced.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-cream/75">
            Percentage formulas by weight (w/w), ingredient chemistry, manufacturing
            process, testing plan and per-unit economics for the first six SKUs under
            consideration. Cosmetics only — every claim restriction and regulatory hold
            below is binding on how these formulas may be marketed.
          </p>
          <p className="mt-3 text-xs text-cream/45">Draft last updated: June 2026</p>
          <ScrollSpyNav items={SCROLLSPY_ITEMS} />
        </Container>
      </section>

      <section className="bg-cream py-12 lg:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <FormulationDisclaimerBox />
            <RegulatoryHoldBox />
          </div>
          <TldrCallout>
            Six cosmetic formulas, each summing to exactly 100.00% w/w, with full
            INCI/chemistry breakdown, manufacturing steps, testing plan, and
            live per-unit cost/margin — all draft-stage, none yet validated by a
            qualified cosmetic chemist or safety assessor.
          </TldrCallout>
        </Container>
      </section>

      {SKUS.map((sku, index) => {
        const formula = FORMULAS.find((f) => f.skuId === sku.id)!;
        const packaging = getPackaging(sku.id);
        const testingPlan = getTestingPlan(sku.id);
        const econ = computeSkuEconomics(sku.id, DEFAULT_SKU_ASSUMPTIONS);
        const total = formulaTotalPercentage(formula);

        return (
          <section
            key={sku.id}
            id={sku.id}
            className={index % 2 === 0 ? "bg-cream-2 py-16 lg:py-20" : "bg-cream py-16 lg:py-20"}
          >
            <Container>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-gold/20 bg-cream-2 sm:h-24 sm:w-24">
                    <Image
                      src={sku.imagePath}
                      alt={sku.imageAlt}
                      fill
                      sizes="96px"
                      placeholder="blur"
                      blurDataURL={sku.imageBlurDataUrl}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <p className="section-eyebrow text-gold">{sku.code} · {formula.formulaCode}</p>
                      <CopyLinkButton anchorId={sku.id} />
                    </div>
                    <h2 className="mt-2 font-display text-3xl text-ink">{sku.name}</h2>
                    <p className="mt-2 max-w-2xl text-ink-soft">{sku.positioning}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StatusPill status={formula.status} />
                  <span className="text-xs text-ink-soft">{sku.format}</span>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                {/* Formulation table */}
                <div>
                  <h3 className="mb-3 font-display text-base text-ink">Formulation (% w/w)</h3>
                  <Table>
                    <THead>
                      <Th>Ingredient</Th>
                      <Th>Phase</Th>
                      <Th>% w/w</Th>
                      <Th>Function</Th>
                      <Th>€/kg</Th>
                      <Th>€/unit</Th>
                      <Th>Chemistry</Th>
                    </THead>
                    <tbody>
                      {formula.ingredients.map((row) => {
                        const chem = getChemistry(row.chemistryId);
                        const costPerKg = RAW_MATERIAL_COST_PER_KG[row.chemistryId] ?? 0;
                        const costPerUnit = ingredientCostPerUnit(formula, sku.volumeMl, row.percentage, row.chemistryId);
                        return (
                          <Tr key={row.chemistryId + row.inciName}>
                            <Td className="font-medium text-ink">
                              {row.commonName}
                              <span className="mt-0.5 block text-xs italic text-ink-soft/70">{row.inciName}</span>
                            </Td>
                            <Td className="text-xs">{row.phase}</Td>
                            <Td className="font-mono text-xs">
                              {row.isQs ? `${row.percentage.toFixed(2)}% (q.s.)` : `${row.percentage.toFixed(2)}%`}
                            </Td>
                            <Td className="text-xs">{row.function}</Td>
                            <Td className="text-xs">€{costPerKg.toFixed(2)}</Td>
                            <Td className="text-xs">€{costPerUnit.toFixed(3)}</Td>
                            <Td className="text-xs">
                              {chem?.molecularFormula ? (
                                <span className="font-mono text-gold">{chem.molecularFormula}</span>
                              ) : (
                                <Badge label="Complex mixture" tone="neutral" />
                              )}
                            </Td>
                          </Tr>
                        );
                      })}
                      <Tr className="bg-gold/5 font-medium">
                        <Td className="text-ink" colSpan={2}>Total</Td>
                        <Td className="font-mono text-ink">{total.toFixed(2)}%</Td>
                        <Td colSpan={4} />
                      </Tr>
                    </tbody>
                  </Table>
                  {formula.phAdjusterNote && (
                    <p className="mt-3 text-xs text-ink-soft/70">* {formula.phAdjusterNote}</p>
                  )}

                  <h3 className="mb-3 mt-10 font-display text-base text-ink">Manufacturing process</h3>
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
                  <Link
                    href={`/sops#${sku.id}`}
                    className="mt-3 inline-flex items-center text-xs font-medium text-lab-green hover:underline"
                  >
                    Full manufacturing SOP (purpose, scope, IPC, safety) →
                  </Link>

                  <h3 className="mb-3 mt-10 font-display text-base text-ink">Claim restrictions</h3>
                  <ul className="space-y-2">
                    {formula.claimRestrictions.map((c) => (
                      <li key={c} className="flex gap-2 text-sm text-ink-soft">
                        <span className="mt-0.5 text-red-500">⚑</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  {formula.manufacturingNotes.length > 0 && (
                    <>
                      <h3 className="mb-3 mt-10 font-display text-base text-ink">Manufacturing notes</h3>
                      <ul className="space-y-2">
                        {formula.manufacturingNotes.map((n) => (
                          <li key={n} className="flex gap-2 text-sm text-ink-soft">
                            <span className="mt-0.5 text-gold">·</span>
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Summary panel */}
                <div className="space-y-5">
                  <GlassCard light>
                    <p className="section-eyebrow text-gold">Texture target</p>
                    <dl className="mt-3 space-y-2 text-sm">
                      <div className="flex justify-between gap-2">
                        <dt className="text-ink-soft">Target pH</dt>
                        <dd className="text-right font-medium text-ink">{formula.targetPh}</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-ink-soft">Viscosity / texture</dt>
                        <dd className="text-right font-medium text-ink">{formula.targetViscosity}</dd>
                      </div>
                    </dl>
                  </GlassCard>

                  <GlassCard light>
                    <p className="section-eyebrow text-gold">Packaging assumption</p>
                    <p className="mt-2 text-sm font-medium text-ink">{packaging.containerType}</p>
                    <p className="mt-1 text-xs text-ink-soft">{packaging.packagingCompatibilityNotes}</p>
                  </GlassCard>

                  <GlassCard light>
                    <p className="section-eyebrow text-gold">Cost &amp; margin (placeholder)</p>
                    <dl className="mt-3 space-y-1.5 text-sm">
                      <Row label="Formula cost" value={`€${econ.formulaCostPerKg.toFixed(2)}/kg`} />
                      <Row label="Raw material / unit" value={`€${econ.rawMaterialCostPerUnit.toFixed(2)}`} />
                      <Row label="Packaging / unit" value={`€${econ.packagingCostPerUnit.toFixed(2)}`} />
                      <Row label="Labour / unit" value={`€${econ.labourCostPerUnit.toFixed(2)}`} />
                      <Row label="QC allocation / unit" value={`€${econ.qcAllocationPerUnit.toFixed(2)}`} />
                      <Row label="Regulatory allocation / unit" value={`€${econ.regulatoryAllocationPerUnit.toFixed(2)}`} />
                      <Row label="Total COGS / unit" value={`€${econ.totalCogsPerUnit.toFixed(2)}`} strong />
                      <Row label="Retail price (ex. VAT)" value={`€${econ.retailPriceExVat.toFixed(2)}`} />
                    </dl>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge label={`D2C margin ${econ.grossMarginD2cPct.toFixed(0)}%`} tone={marginTone(econ.grossMarginD2cPct)} />
                      <Badge label={`Wholesale margin ${econ.grossMarginWholesalePct.toFixed(0)}%`} tone={marginTone(econ.grossMarginWholesalePct)} />
                    </div>
                    <p className="mt-2 text-xs text-ink-soft/70">
                      Full editable model: see <a className="underline" href="/custos">/custos</a>.
                    </p>
                  </GlassCard>

                  <GlassCard light>
                    <p className="section-eyebrow text-gold">Compliance status</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge label={`INCI verification: ${formula.formulationCompliance.inciVerificationNeeded ? "needed" : "n/a"}`} tone="warn" />
                      <Badge label={`Microbiological risk: ${formula.formulationCompliance.microbiologicalRisk}`} tone={formula.formulationCompliance.microbiologicalRisk === "Low" ? "good" : "warn"} />
                    </div>
                    <div className="mt-3 space-y-1.5 text-sm">
                      <StatusRow label="Restricted substances" status={formula.formulationCompliance.restrictedSubstancesCheck} />
                      <StatusRow label="Allergen declaration" status={formula.formulationCompliance.allergenDeclarationCheck} />
                      <StatusRow label="Preservative system" status={formula.formulationCompliance.preservativeSystemValidation} />
                      <StatusRow label="CPSR" status={formula.formulationCompliance.cpsrStatus} />
                      <StatusRow label="PIF" status={formula.formulationCompliance.pifStatus} />
                      <StatusRow label="CPNP" status={formula.formulationCompliance.cpnpStatus} />
                    </div>
                  </GlassCard>

                  <GlassCard light>
                    <p className="section-eyebrow text-gold">Testing required</p>
                    <ul className="mt-2 space-y-1.5">
                      {testingPlan.requiredTests.map((t) => (
                        <li key={t} className="text-sm text-ink-soft">
                          <span className="text-gold">·</span> {getTestDefinition(t).label}
                        </li>
                      ))}
                    </ul>
                    {testingPlan.notes && <p className="mt-2 text-xs text-ink-soft/70">{testingPlan.notes}</p>}
                  </GlassCard>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Ingredient chemistry reference */}
      <section id="chemistry" className="bg-botanical-dark py-16 text-cream lg:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="Ingredient chemistry reference"
            title="Pure compounds get a molecular formula. Complex botanicals don't get one invented."
            description="Molecular formulas are shown only for pure/simple compounds (e.g. water, glycerin, citric acid, squalane). Complex natural oils, extracts and emulsifier blends are stated explicitly as complex mixtures with no single molecular formula — with a typical fatty-acid profile where useful."
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-gold/20">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead className="bg-deep-2 text-cream">
                <tr>
                  <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide">INCI name</th>
                  <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide">Common name</th>
                  <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide">Function</th>
                  <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide">Formula / CAS</th>
                  <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide">Typical chemistry</th>
                  <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide">Major fatty acids</th>
                </tr>
              </thead>
              <tbody>
                {INGREDIENT_CHEMISTRY.map((ing) => (
                  <tr key={ing.id} className="border-b border-cream/10 last:border-0 even:bg-white/[0.03]">
                    <td className="px-4 py-3 align-top font-medium text-cream">{ing.inciName}</td>
                    <td className="px-4 py-3 align-top text-cream/75">{ing.commonName}</td>
                    <td className="px-4 py-3 align-top text-cream/75">{ing.function}</td>
                    <td className="px-4 py-3 align-top">
                      {ing.molecularFormula && (
                        <span className="block font-mono text-gold-light">{ing.molecularFormula}</span>
                      )}
                      {ing.casNumber && <span className="block text-xs text-cream/60">CAS {ing.casNumber}</span>}
                    </td>
                    <td className="px-4 py-3 align-top text-xs text-cream/65">{ing.typicalChemistry}</td>
                    <td className="px-4 py-3 align-top text-xs text-cream/65">
                      {ing.fattyAcidProfile?.join("; ") ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {INGREDIENT_CHEMISTRY.some((i) => i.note) && (
            <div className="mt-6 space-y-1.5 text-xs text-cream/60">
              {INGREDIENT_CHEMISTRY.filter((i) => i.note).map((i) => (
                <p key={i.id}>
                  <span className="text-gold-light">{i.inciName}:</span> {i.note}
                </p>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

function Row({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex justify-between gap-2">
      <dt className="text-ink-soft">{label}</dt>
      <dd className={`text-right ${strong ? "font-semibold text-ink" : "font-medium text-ink"}`}>{value}</dd>
    </div>
  );
}

function StatusRow({ label, status }: { label: string; status: ComplianceStatus }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-ink-soft">{label}</span>
      <StatusPill status={status} />
    </div>
  );
}
