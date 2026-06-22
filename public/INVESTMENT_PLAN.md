# ROYER — Angel Investment Plan

**Status: technical and commercial draft, pre-seed stage.** This document is not
legal, financial, or investment advice, and is not an offer to sell securities.
Every market, cost, and projection figure below is either (a) a third-party
market-research estimate with its source cited, or (b) a placeholder modelling
assumption computed from `src/data/skuCosts.ts` and explicitly marked as such.
Final figures require real supplier quotes, a qualified accountant/financial
advisor, and properly negotiated legal terms (term sheet, SAFE/equity
documentation) before any capital changes hands.

---

## 1. The ask, in one paragraph

ROYER is raising a **pre-seed round of €300,000** (placeholder target, see §9) to
take six fully-specified, compliance-mapped cosmetic formulas from draft to first
commercial shipment in Portugal, then into EU distribution via a single CPNP
notification per SKU. The product, regulatory pathway, lab design, and unit
economics are already modelled in detail (this repository); the round funds
turning that model into a licensed, GMP-compliant, revenue-generating operation.

---

## 2. The opportunity

- Portugal's skincare products market is estimated at **USD 478.35M in 2025**,
  projected to reach **USD 660.38M by 2034** (CAGR ~3.65%, 2026–2034).
- Portugal's broader beauty & personal care market is estimated at **USD
  1,528.19M in 2025**, projected to reach **USD 2,177.49M by 2034** (CAGR ~4.01%).
- The natural/organic cosmetics segment specifically is growing faster than the
  category average — independent estimates put natural cosmetics CAGR at
  **~5.40% (2024–2029)**, driven by ingredient transparency, plant-based
  formulation demand, and sustainable packaging expectations.
- These are third-party desk-research estimates (IMARC Group, Market Research
  Future market outlooks), not ROYER's own primary research — treat them as
  directional, not as a substantiated TAM/SAM/SOM model. A proper market study
  is on the regulatory/commercial validation checklist below.

**Where ROYER sits in this:** a premium, compliance-first, Portuguese-manufactured
botanical skincare line built on aloe vera and hemp seed oil — positioned above
mass-market natural cosmetics on formulation transparency (full INCI + chemistry
disclosure, published on `/formulas`) and below ultra-luxury on price, with
EU-wide reach through a single Responsible Person and CPNP notification per SKU.

---

## 3. The product

Six SKUs, already formulated to exact percentage (see `FORMULATION_DOSSIER.md`
and `/formulas`):

| SKU | Format | Hero ingredient | Retail (ex. VAT) |
|---|---|---|---|
| Aloe Vera Daily Face Cream | 50 ml pump jar | Aloe Barbadensis Leaf Juice | €24.90 |
| Rosehip + Jojoba Premium Face Oil | 30 ml dropper | Rosa Canina Fruit Oil | €29.90 |
| Aloe + Olive Body Cream | 200 ml jar | Olea Europaea Fruit Oil | €26.90 |
| Coconut + Aloe Hand Cream | 75 ml tube | Cocos Nucifera Oil | €12.90 |
| Hemp Seed + Calendula Botanical Balm | 50 ml tin | Cannabis Sativa Seed Oil (seed only — no CBD) | €19.90 |
| Aloe Botanical Gel-Cream | 100 ml jar | Aloe Barbadensis Leaf Juice | €18.90 |

Every SKU is cosmetics-only under EU Regulation (EC) 1223/2009 — no medical,
medicinal-cannabis, or supplement claim anywhere in the range. The one
cannabis-plant ingredient used (hemp seed oil) is held to a stricter internal bar
than the law requires: see the CBD/Cannabinoid Regulatory Hold on `/compliance`
and `/formulas`.

**Why this is a differentiator, not just a disclaimer:** most early-stage natural
cosmetics brands treat compliance as a late-stage cost centre. ROYER has built
the compliance, traceability, and cost-modelling infrastructure *before* writing
a single label — a working `/compliance` dashboard, a batch traceability data
model, and a live per-SKU margin calculator (`/custos`) — which materially
de-risks the regulatory-submission phase of this raise for an investor.

---

## 4. Business model & unit economics

Direct-to-consumer (D2C) e-commerce as the primary channel, with a wholesale
track (spas, concept stores, pharmacies) at a **30% distributor margin**
(placeholder assumption, `src/data/skuCosts.ts`).

Computed from the live cost model (`DEFAULT_SKU_ASSUMPTIONS`, all placeholder
inputs pending real supplier quotes):

| SKU | Unit COGS | Trade price | D2C gross margin | Wholesale gross margin |
|---|---|---|---|---|
| Aloe Vera Daily Face Cream | €3.96 | €17.43 | 84.1% | 77.3% |
| Rosehip + Jojoba Premium Face Oil | €5.15 | €20.93 | 82.8% | 75.4% |
| Aloe + Olive Body Cream | €4.34 | €18.83 | 83.9% | 76.9% |
| Coconut + Aloe Hand Cream | €2.56 | €9.03 | 80.2% | 71.7% |
| Hemp Seed + Calendula Botanical Balm | €3.40 | €13.93 | 82.9% | 75.6% |
| Aloe Botanical Gel-Cream | €3.44 | €13.23 | 81.8% | 74.0% |

**Read this with appropriate scepticism.** Gross margins in the 80%+ range are a
function of low modelled raw-material costs relative to premium retail pricing —
they do not yet account for real customer acquisition cost, returns, sampling,
freight, or actual (vs. modelled) wastage. Treat these as upper-bound unit
economics to be stress-tested against real marketing spend once trading begins.
Live, editable version: `/custos`.

---

## 5. Go-to-market

1. **Portugal first.** Direct e-commerce launch plus a small number of curated
   concept-store/spa wholesale partners in Lisbon/Porto, leaning on the "Feito
   em Portugal" / EU-manufactured story.
2. **EU expansion via CPNP.** Once a SKU is notified on the EU Cosmetic Product
   Notification Portal under one Responsible Person, it is sellable EU-wide
   without per-country re-notification — the single biggest structural advantage
   of getting the regulatory pathway right from day one.
3. **Hero-SKU-led content.** The Rosehip + Jojoba Face Oil and the Hemp Seed
   Balm (hero ingredient + "no CBD" clarity) are the two SKUs with the most
   organic content/PR angle — ingredient transparency and the compliance-first
   story are the brand's content pillars, not influencer-style claims.
4. **Wholesale as a margin-accretive, not volume-led, channel** in year one —
   used to build retail credibility ahead of a larger D2C push.

---

## 6. Traction to date (pre-seed reality check)

This is a **pre-revenue, pre-formulation-lock, pre-regulatory-submission**
project. What exists today, concretely, in this repository:

- Six SKUs fully specified to exact % w/w formula, each summing to 100.00%.
- A full ingredient chemistry reference (INCI, function, CAS where commonly
  available, molecular formula only where chemically honest to give one).
- A manufacturing process per formula (emulsion vs. anhydrous), a testing plan
  per SKU, and explicit claim restrictions.
- A working compliance dashboard tracking PIF, CPSR, CPNP, Responsible Person,
  GMP/ISO 22716, labels, claims, batch records, supplier qualification,
  complaints, recalls, and CAPA — all currently "Draft" or "Needs Expert
  Review" by design, because nothing has been validated by a real expert yet.
- A full laboratory layout, GMP zoning, equipment list, and 12-month
  implementation roadmap (`PROJECT_DOSSIER.md`, `/projeto-laboratorio`).
- A live, editable cost/margin calculator per SKU (`/custos`).
- Brand identity (ROYER) and AI-generated concept product photography
  (`/produtos`) — concept renders, not final packaging.

In other words: the round buys execution of an already-designed plan, not
discovery of what to build.

---

## 7. Roadmap (12 months to commercial launch)

| Phase | Duration | Focus |
|---|---|---|
| 0 — Legal & Regulatory Foundations | Months 1–2 | Regulatory consultant, Responsible Person, CBD legal opinion, INFARMED registration scoping |
| 1 — Formulation & Lab Pilot | Months 2–5 | Bench-scale formulation, stability/challenge testing started, draft CPSR opened |
| 2 — Facility Fit-Out | Months 4–8 | Zoning build-out, HVAC/water/utilities, equipment, GMP documentation drafted |
| 3 — Pilot Batches & Validation | Months 7–9 | Pilot batches, environmental monitoring baseline, calibration/cleaning validation, mock recall |
| 4 — Regulatory Submission & Launch Readiness | Months 9–11 | CPSR finalised, label legal review, CPNP notification, PIF completed |
| 5 — Commercial Launch | Month 12+ | First commercial release, D2C live, complaint/CAPA processes live |

Full detail: `/projeto-laboratorio`.

---

## 8. Illustrative financial projections

**Steady-state unit-economics run rate** (all 6 SKUs simultaneously at their
modelled annual volume forecast — i.e. a *mature*, not a *launch-year*, scenario):

- Total modelled annual volume: **22,200 units/year**
- Total annual D2C revenue (ex. VAT): **€475,180**
- Total annual D2C gross profit: **€393,281**
- Total annual wholesale-channel revenue: **€332,626**
- Total annual wholesale-channel gross profit: **€250,727**

**Illustrative ramp** (placeholder business judgement, not a market-validated
forecast):

| Year | Stage | Illustrative revenue (ex. VAT) | Notes |
|---|---|---|---|
| Year 1 | Build, regulatory, first shipments in final 1–2 months | €20,000–€40,000 | Mostly pre-revenue; roadmap Phases 0–5 |
| Year 2 | First full commercial year, ramping | €190,000–€285,000 | ~40–60% of modelled steady-state run rate |
| Year 3 | Steady-state at modelled volumes | up to ~€475,000 (D2C) / ~€333,000 (wholesale-weighted) | Full run-rate ceiling at current 6-SKU, single-market scope |

These figures assume the placeholder cost/price model holds and say nothing
about customer acquisition cost, channel mix, or competitive response — they are
a unit-economics ceiling, not a sales forecast. A real Year 1–3 P&L requires a
financial model built by/with the investor, incorporating CAC, headcount, and
financing costs, which is explicitly out of scope for this document.

---

## 9. The ask & use of funds

**Target raise: €300,000** (placeholder starting point for negotiation — not a
fixed valuation or instrument). Suggested instrument: SAFE or convertible note,
final terms subject to legal counsel on both sides.

| Allocation | % | Approx. € | Covers |
|---|---|---|---|
| Regulatory & compliance | 10% | €30,000 | Safety assessor, CPSR/PIF/CPNP costs across 6 SKUs (~€25,800 modelled, §8 of `/custos`), legal/regulatory consultant fees |
| Facility fit-out & equipment | 30% | €90,000 | Lab zoning, HVAC/water utilities, core equipment list (`/projeto-laboratorio#equipment`) |
| Initial production & inventory | 15% | €45,000 | First commercial batches across all 6 SKUs, packaging, raw materials |
| Brand, content & launch marketing | 20% | €60,000 | Real product photography, e-commerce build, launch campaign |
| Team & operations | 20% | €60,000 | Founder/operator runway, contract labour, admin |
| Contingency / working capital | 5% | €15,000 | Buffer against the cost-model placeholders above turning out higher in reality |

This allocation is a starting proposal, not a budget — every line item above
still needs a real, dated quote (see the Supplier Quote Checklist in
`FORMULATION_DOSSIER.md`) before it should be treated as a committed figure.

---

## 10. Risk factors

The full risk register (10 risks, likelihood/impact/mitigation/owner) lives at
`/projeto-laboratorio#risks` and `src/data/risks.ts`. The risks most relevant to
an investor, summarised:

1. **Regulatory — CBD/cannabinoid ingredient risk.** Mitigated by design: no
   cannabinoid-bearing ingredient is in any formula; hemp seed oil is the only
   cannabis-plant ingredient, and a dedicated regulatory hold gates any future
   change to that position.
2. **Claims risk.** Marketing language drifting into medical/therapeutic
   territory is the single most common compliance failure mode in this category
   — mitigated by the claims-substantiation workflow already built into
   `/compliance`.
3. **Timing risk.** Placing product on the market before CPNP/CPSR completion —
   mitigated by a hard launch-checklist gate (`/projeto-laboratorio#checklist`).
4. **Cost-model risk.** Every cost figure in this plan is a placeholder; real
   supplier quotes could materially change the unit economics in §4 and §8.
5. **Execution risk.** This plan assumes a founding team capable of running
   regulatory, production, and commercial workstreams in parallel — see §11.

---

## 11. Team

*To be completed by the founder(s).* This document deliberately does not invent
team bios, credentials, or prior track record — an investor will want real names,
real CVs, and real references here, not placeholder text. At minimum, an angel
round of this size typically expects a named:

- Founder/CEO with commercial or operational ownership.
- Regulatory affairs lead or named external consultant relationship.
- Qualified cosmetic safety assessor relationship (named firm or individual).
- Production/manufacturing lead or co-packing partner relationship.

---

## 12. Why this, why now

- The regulatory and formulation groundwork — typically the slowest, most
  expensive part of a cosmetics launch to get *right* — is already mapped to a
  level of detail (exact % formulas, chemistry references, testing plans, a
  working compliance dashboard) that most pre-seed cosmetics raises do not have.
- Portugal's EU membership means one Responsible Person and one CPNP
  notification unlocks the full EU single market — the round is sized for a
  Portugal-first launch with a structurally low-cost path to EU scale.
- The natural/organic cosmetics segment is growing faster than the category
  average (§2), and ROYER's ingredient-transparency positioning is built for
  that buyer specifically.

## 13. Related documents

- `PROJECT_DOSSIER.md` / `/projeto-laboratorio` — full laboratory & regulatory plan.
- `FORMULATION_DOSSIER.md` / `/formulas` — six formulas, chemistry, manufacturing, testing.
- `/compliance` — live compliance status dashboard.
- `/custos` — live, editable per-SKU cost & margin calculator.
- `/rastreabilidade` — batch traceability system design.

---

This is a technical and commercial draft. It is not legal, financial, or
investment advice and is not an offer to sell securities. Final terms,
valuation, and figures must be set with qualified legal and financial counsel,
and every cost/market assumption above must be validated before being relied
upon by an investor.
