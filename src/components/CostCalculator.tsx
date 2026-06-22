"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  COST_SCENARIOS,
  DEFAULT_ASSUMPTIONS,
  computeScenarioEconomics,
  type CostAssumptions,
  type CostScenario,
} from "@/data/costs";
import GlassCard from "@/components/ui/GlassCard";
import BarChart from "@/components/ui/BarChart";

function cloneAssumptions(a: CostAssumptions): CostAssumptions {
  return JSON.parse(JSON.stringify(a));
}

function cloneScenarios(s: CostScenario[]): CostScenario[] {
  return JSON.parse(JSON.stringify(s));
}

export default function CostCalculator() {
  const [assumptions, setAssumptions] = useState<CostAssumptions>(() =>
    cloneAssumptions(DEFAULT_ASSUMPTIONS)
  );
  const [scenarios, setScenarios] = useState<CostScenario[]>(() => cloneScenarios(COST_SCENARIOS));

  function resetDefaults() {
    setAssumptions(cloneAssumptions(DEFAULT_ASSUMPTIONS));
    setScenarios(cloneScenarios(COST_SCENARIOS));
  }

  function updateAssumption<G extends keyof CostAssumptions>(
    group: G,
    key: keyof CostAssumptions[G],
    value: number
  ) {
    setAssumptions((prev) => {
      const next = cloneAssumptions(prev);
      (next[group] as Record<keyof CostAssumptions[G], number>)[key] = value;
      return next;
    });
  }

  function updateScenarioPrice(id: string, retailPriceTarget: number) {
    setScenarios((prev) => prev.map((s) => (s.id === id ? { ...s, retailPriceTarget } : s)));
  }

  const economics = useMemo(
    () => scenarios.map((s) => ({ scenario: s, econ: computeScenarioEconomics(s, assumptions) })),
    [scenarios, assumptions]
  );

  return (
    <div className="space-y-12">
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl text-ink">Assumptions</h2>
          <button
            onClick={resetDefaults}
            className="rounded-full border border-ink/15 px-4 py-1.5 text-xs font-medium text-ink-soft hover:bg-ink/5"
          >
            Reset to default assumptions
          </button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AssumptionGroup title="Packaging (€/unit)">
            <NumberField label="Cap" value={assumptions.packaging.capCost} step={0.01} unit="€" onChange={(v) => updateAssumption("packaging", "capCost", v)} />
            <NumberField label="Label" value={assumptions.packaging.labelCost} step={0.01} unit="€" onChange={(v) => updateAssumption("packaging", "labelCost", v)} />
            <NumberField label="Box" value={assumptions.packaging.boxCost} step={0.01} unit="€" onChange={(v) => updateAssumption("packaging", "boxCost", v)} />
          </AssumptionGroup>

          <AssumptionGroup title="Formula raw materials (€/ml)">
            <NumberField label="Aloe vera base" value={assumptions.formulaPerMl.aloeVeraBase} step={0.001} unit="€" onChange={(v) => updateAssumption("formulaPerMl", "aloeVeraBase", v)} />
            <NumberField label="Botanical extracts" value={assumptions.formulaPerMl.botanicalExtracts} step={0.001} unit="€" onChange={(v) => updateAssumption("formulaPerMl", "botanicalExtracts", v)} />
            <NumberField label="Preservatives" value={assumptions.formulaPerMl.preservatives} step={0.001} unit="€" onChange={(v) => updateAssumption("formulaPerMl", "preservatives", v)} />
            <NumberField label="Emulsifiers" value={assumptions.formulaPerMl.emulsifiers} step={0.001} unit="€" onChange={(v) => updateAssumption("formulaPerMl", "emulsifiers", v)} />
            <NumberField label="Fragrance (allergen-controlled)" value={assumptions.formulaPerMl.fragranceAllergenControlled} step={0.001} unit="€" onChange={(v) => updateAssumption("formulaPerMl", "fragranceAllergenControlled", v)} />
          </AssumptionGroup>

          <AssumptionGroup title="Labour">
            <NumberField label="Hourly rate" value={assumptions.labour.hourlyRate} step={0.1} unit="€/h" onChange={(v) => updateAssumption("labour", "hourlyRate", v)} />
            <NumberField label="Labour hours / batch" value={assumptions.labour.batchLabourHours} step={0.5} unit="h" onChange={(v) => updateAssumption("labour", "batchLabourHours", v)} />
            <NumberField label="Filling/packaging labour" value={assumptions.labour.fillingPackagingPerUnit} step={0.01} unit="€/unit" onChange={(v) => updateAssumption("labour", "fillingPackagingPerUnit", v)} />
          </AssumptionGroup>

          <AssumptionGroup title="Quality control">
            <NumberField label="QC tests / batch" value={assumptions.qc.testsCostPerBatch} step={5} unit="€" onChange={(v) => updateAssumption("qc", "testsCostPerBatch", v)} />
          </AssumptionGroup>

          <AssumptionGroup title="Regulatory allocation (per SKU, one-off)">
            <NumberField label="Safety assessment" value={assumptions.regulatory.safetyAssessmentPerSku} step={50} unit="€" onChange={(v) => updateAssumption("regulatory", "safetyAssessmentPerSku", v)} />
            <NumberField label="PIF / CPSR" value={assumptions.regulatory.pifCpsrPerSku} step={50} unit="€" onChange={(v) => updateAssumption("regulatory", "pifCpsrPerSku", v)} />
          </AssumptionGroup>

          <AssumptionGroup title="Operational targets">
            <NumberField label="Wastage" value={assumptions.operational.wastagePct} step={0.5} unit="%" onChange={(v) => updateAssumption("operational", "wastagePct", v)} />
            <NumberField label="Target manufacturer margin" value={assumptions.operational.targetManufacturerMarginPct} step={1} unit="%" onChange={(v) => updateAssumption("operational", "targetManufacturerMarginPct", v)} />
            <NumberField label="Distributor margin" value={assumptions.operational.distributorMarginPct} step={1} unit="%" onChange={(v) => updateAssumption("operational", "distributorMarginPct", v)} />
          </AssumptionGroup>
        </div>
      </div>

      <div>
        <h2 className="mb-5 font-display text-xl text-ink">Unit cost comparison</h2>
        <GlassCard light>
          <BarChart
            unit="€"
            data={economics.map(({ scenario, econ }) => ({
              label: scenario.name,
              value: Number(econ.fullyLoadedUnitCost.toFixed(2)),
              formatted: `€${econ.fullyLoadedUnitCost.toFixed(2)}`,
            }))}
          />
        </GlassCard>
      </div>

      <div>
        <h2 className="mb-5 font-display text-xl text-ink">Scenario detail</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {economics.map(({ scenario, econ }) => (
            <GlassCard key={scenario.id} light>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg text-ink">{scenario.name}</h3>
                <span className="text-xs text-ink-soft">{scenario.containerType}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <Metric label="Unit cost (fully loaded)" value={`€${econ.fullyLoadedUnitCost.toFixed(2)}`} />
                <Metric label="Batch cost" value={`€${econ.batchDirectCost.toFixed(0)}`} />
                <Metric label="Good units / batch" value={`${econ.goodUnitsPerBatch}`} />
                <Metric label="Trade price (to distributor)" value={`€${econ.tradePrice.toFixed(2)}`} />
                <Metric
                  label="Manufacturer margin"
                  value={`${econ.manufacturerMarginPct.toFixed(0)}%`}
                  accent={econ.meetsTargetMargin ? "good" : "warn"}
                />
                <Metric
                  label="Break-even"
                  value={
                    Number.isFinite(econ.breakEvenUnits)
                      ? `${econ.breakEvenUnits} units / ${econ.breakEvenBatches} batches`
                      : "Not reachable at this price"
                  }
                />
              </div>

              <div className="mt-4 border-t border-ink/10 pt-4">
                <NumberField
                  label="Retail price (to consumer)"
                  value={scenario.retailPriceTarget}
                  step={0.5}
                  unit="€"
                  onChange={(v) => updateScenarioPrice(scenario.id, v)}
                />
              </div>

              <p className="mt-3 text-xs text-ink-soft/70">
                Annual volume forecast used for regulatory amortisation:{" "}
                {scenario.annualVolumeUnitsForecast.toLocaleString()} units/year (placeholder).
              </p>
            </GlassCard>
          ))}
        </div>
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

function Metric({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: "good" | "warn";
}) {
  return (
    <div>
      <p className="text-xs text-ink-soft/70">{label}</p>
      <p
        className={`font-medium ${
          accent === "good" ? "text-lab-green" : accent === "warn" ? "text-amber-700" : "text-ink"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
