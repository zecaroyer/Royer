"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  DEFAULT_SKU_ASSUMPTIONS,
  SKU_ECONOMICS_INPUTS,
  computeFormulaCostPerKg,
  computeSkuEconomics,
  type GlobalSkuCostAssumptions,
} from "@/data/skuCosts";
import { SKUS, type SkuId } from "@/data/skus";
import { FORMULAS } from "@/data/formulas";
import { SKU_PACKAGING } from "@/data/packaging";
import GlassCard from "@/components/ui/GlassCard";
import BarChart from "@/components/ui/BarChart";
import Badge, { marginTone } from "@/components/ui/Badge";

type SkuOverrideState = {
  retailPriceExVat: number;
  packagingCostPerUnit: number;
  formulaCostPerKg: number;
};

function defaultOverrides(): Record<SkuId, SkuOverrideState> {
  const result = {} as Record<SkuId, SkuOverrideState>;
  for (const sku of SKUS) {
    const input = SKU_ECONOMICS_INPUTS.find((i) => i.skuId === sku.id)!;
    const packaging = SKU_PACKAGING.find((p) => p.skuId === sku.id)!;
    const formula = FORMULAS.find((f) => f.skuId === sku.id)!;
    result[sku.id] = {
      retailPriceExVat: input.retailPriceExVat,
      packagingCostPerUnit:
        packaging.containerCostEur +
        packaging.capOrClosureCostEur +
        packaging.labelCostEur +
        (packaging.includeBox ? packaging.boxCostEur : 0),
      formulaCostPerKg: computeFormulaCostPerKg(formula),
    };
  }
  return result;
}

export default function CostCalculator() {
  const [assumptions, setAssumptions] = useState<GlobalSkuCostAssumptions>(() => ({
    ...DEFAULT_SKU_ASSUMPTIONS,
  }));
  const [overrides, setOverrides] = useState<Record<SkuId, SkuOverrideState>>(defaultOverrides);

  function resetDefaults() {
    setAssumptions({ ...DEFAULT_SKU_ASSUMPTIONS });
    setOverrides(defaultOverrides());
  }

  function updateAssumption<K extends keyof GlobalSkuCostAssumptions>(key: K, value: number) {
    setAssumptions((prev) => ({ ...prev, [key]: value }));
  }

  function updateOverride<K extends keyof SkuOverrideState>(skuId: SkuId, key: K, value: number) {
    setOverrides((prev) => ({ ...prev, [skuId]: { ...prev[skuId], [key]: value } }));
  }

  const economics = useMemo(
    () =>
      SKUS.map((sku) => ({
        sku,
        econ: computeSkuEconomics(sku.id, assumptions, overrides[sku.id]),
      })),
    [assumptions, overrides]
  );

  return (
    <div className="space-y-12">
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl text-ink">Global assumptions</h2>
          <button
            onClick={resetDefaults}
            className="rounded-full border border-ink/15 px-4 py-1.5 text-xs font-medium text-ink-soft hover:bg-ink/5"
          >
            Reset to default assumptions
          </button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AssumptionGroup title="Labour">
            <NumberField label="Hourly rate" value={assumptions.labourRatePerHour} step={0.1} unit="€/h" onChange={(v) => updateAssumption("labourRatePerHour", v)} />
          </AssumptionGroup>
          <AssumptionGroup title="QC & testing">
            <NumberField label="QC budget / batch" value={assumptions.qcTestingBudgetPerBatch} step={10} unit="€" onChange={(v) => updateAssumption("qcTestingBudgetPerBatch", v)} />
          </AssumptionGroup>
          <AssumptionGroup title="Regulatory allocation (per SKU, one-off)">
            <NumberField label="Safety assessment" value={assumptions.safetyAssessmentPerSku} step={50} unit="€" onChange={(v) => updateAssumption("safetyAssessmentPerSku", v)} />
            <NumberField label="PIF / CPSR" value={assumptions.pifCpsrPerSku} step={50} unit="€" onChange={(v) => updateAssumption("pifCpsrPerSku", v)} />
          </AssumptionGroup>
          <AssumptionGroup title="Operational">
            <NumberField label="Wastage" value={assumptions.wastagePct} step={0.5} unit="%" onChange={(v) => updateAssumption("wastagePct", v)} />
            <NumberField label="Distributor margin" value={assumptions.distributorMarginPct} step={1} unit="%" onChange={(v) => updateAssumption("distributorMarginPct", v)} />
          </AssumptionGroup>
        </div>
      </div>

      <div>
        <h2 className="mb-5 font-display text-xl text-ink">Total COGS per unit, by SKU</h2>
        <GlassCard light>
          <BarChart
            unit="€"
            data={economics.map(({ sku, econ }) => ({
              label: `${sku.code} · ${sku.name}`,
              value: Number(econ.totalCogsPerUnit.toFixed(2)),
              formatted: `€${econ.totalCogsPerUnit.toFixed(2)}`,
            }))}
          />
        </GlassCard>
      </div>

      <div className="space-y-6">
        <h2 className="font-display text-xl text-ink">Per-SKU economics</h2>
        {economics.map(({ sku, econ }) => (
          <GlassCard key={sku.id} light>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg text-ink">{sku.code} · {sku.name}</h3>
              <span className="text-xs text-ink-soft">{sku.format}</span>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr]">
              <div className="space-y-2.5">
                <p className="section-eyebrow text-gold">Editable inputs</p>
                <NumberField label="Retail price (ex. VAT)" value={overrides[sku.id].retailPriceExVat} step={0.1} unit="€" onChange={(v) => updateOverride(sku.id, "retailPriceExVat", v)} />
                <NumberField label="Packaging cost / unit" value={overrides[sku.id].packagingCostPerUnit} step={0.05} unit="€" onChange={(v) => updateOverride(sku.id, "packagingCostPerUnit", v)} />
                <NumberField label="Raw material cost" value={overrides[sku.id].formulaCostPerKg} step={0.1} unit="€/kg" onChange={(v) => updateOverride(sku.id, "formulaCostPerKg", v)} />
              </div>

              <div className="space-y-1.5 text-sm">
                <p className="section-eyebrow text-gold">COGS breakdown</p>
                <Row label="Raw material / unit" value={`€${econ.rawMaterialCostPerUnit.toFixed(2)}`} />
                <Row label="Packaging / unit" value={`€${econ.packagingCostPerUnit.toFixed(2)}`} />
                <Row label="Labour / unit" value={`€${econ.labourCostPerUnit.toFixed(2)}`} />
                <Row label="QC allocation / unit" value={`€${econ.qcAllocationPerUnit.toFixed(2)}`} />
                <Row label="Regulatory allocation / unit" value={`€${econ.regulatoryAllocationPerUnit.toFixed(2)}`} />
                <Row label="Total COGS / unit" value={`€${econ.totalCogsPerUnit.toFixed(2)}`} strong />
              </div>

              <div className="space-y-2.5">
                <p className="section-eyebrow text-gold">Margins &amp; pricing</p>
                <Row label="Trade price (to distributor)" value={`€${econ.tradePrice.toFixed(2)}`} />
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge label={`D2C margin ${econ.grossMarginD2cPct.toFixed(0)}%`} tone={marginTone(econ.grossMarginD2cPct)} />
                  <Badge label={`Wholesale margin ${econ.grossMarginWholesalePct.toFixed(0)}%`} tone={marginTone(econ.grossMarginWholesalePct)} />
                </div>
                <p className="pt-2 text-xs font-medium text-ink-soft">Min. retail price (ex. VAT) for target margin</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {econ.minRetailForMargin.map((m) => (
                    <div key={m.targetPct} className="rounded-lg border border-ink/10 bg-white/60 py-1.5">
                      <p className="text-[0.65rem] text-ink-soft/70">{m.targetPct}%</p>
                      <p className="text-sm font-medium text-ink">€{m.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 border-t border-ink/10 pt-4">
              <p className="mb-2 text-xs font-medium text-ink-soft">Batch profit (D2C / wholesale)</p>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {econ.batchProfit.map((b) => (
                  <div key={b.units} className="rounded-lg border border-ink/10 bg-white/60 py-2">
                    <p className="text-ink-soft/70">{b.units.toLocaleString()} units</p>
                    <p className="mt-1 font-medium text-lab-green">€{b.d2cProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    <p className="text-ink-soft">€{b.wholesaleProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })} wholesale</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <p className="rounded-2xl border border-amber-500/40 bg-amber-500/[0.06] p-5 text-sm text-amber-800">
        Every figure above is a placeholder assumption for modelling purposes only. Replace
        each input with a real, dated supplier quotation, labour cost, and regulatory fee
        before using this model for financial decisions or investor figures.
      </p>
    </div>
  );
}

function AssumptionGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <GlassCard light>
      <p className="section-eyebrow text-gold">{title}</p>
      <div className="mt-3 space-y-3">{children}</div>
    </GlassCard>
  );
}

function NumberField({
  label,
  value,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-3 text-sm text-ink-soft">
      <span>{label}</span>
      <span className="flex items-center gap-1">
        <input
          type="number"
          value={value}
          step={step}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-20 rounded-lg border border-ink/15 bg-white/70 px-2 py-1 text-right text-sm text-ink"
        />
        <span className="text-xs text-ink-soft/70">{unit}</span>
      </span>
    </label>
  );
}

function Row({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-ink-soft">{label}</span>
      <span className={strong ? "font-semibold text-ink" : "font-medium text-ink"}>{value}</span>
    </div>
  );
}
