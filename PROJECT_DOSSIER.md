# Project Dossier — ROYER Cosmetics

**Status: technical and commercial draft.** This document is not legal advice.
Final validation of every regulatory, safety, and labelling matter described here
must be performed by a qualified regulatory consultant, a qualified cosmetic safety
assessor, and the competent Portuguese/EU authorities where applicable (INFARMED,
EU CPNP). Nothing in this dossier should be relied upon as a compliance guarantee.

---

## 0. Positioning statement

ROYER is a project to design, build, and operate a cosmetics
manufacturing laboratory in Portugal producing skincare creams and lotions based on
aloe vera, hemp seed oil, and a small number of well-characterised botanical
extracts.

The project is, and must remain, **a cosmetics project under Regulation (EC) No
1223/2009** — not a medicinal cannabis project, not a supplement project, and not a
medical device or therapeutic project. Concretely, this means:

- No product, label, or marketing material may state or imply that a product
  treats, cures, prevents, or relieves any disease or medical condition (pain,
  inflammation, eczema, arthritis, anxiety, insomnia, wounds, or any other
  condition).
- No CBD or other cannabinoid ingredient naturally derived from cannabis extracts,
  tinctures, resin, flowers, or leaves is used, sourced, or marketed until a
  dedicated legal/regulatory review confirms — in writing — that it is permitted
  under Portuguese and EU cosmetics rules. As of this draft, such ingredients are
  treated as **likely prohibited in Portuguese cosmetic products** and are excluded
  from formulation by default.
- Hemp seed oil (*Cannabis sativa* seed oil), cold-pressed from the seed and free
  of cannabinoid carry-over when properly sourced and documented, is the project's
  default botanical route alongside aloe vera — subject to supplier specification
  and compliance verification for every lot.

---

## 1. Executive summary

The project proposes a single-site cosmetics manufacturing laboratory in Portugal,
producing aloe vera and botanical creams/lotions at pilot-to-small-commercial scale
(roughly 400–650 finished units per batch across four packaging formats). The
facility, documentation system, and software architecture are scoped against EU
Cosmetics Regulation (EC) No 1223/2009 and ISO 22716 GMP from the outset.

Four initial product families anchor the range:

1. **Aloe Vera Gel-Cream** — face & body, 30–100 ml.
2. **Hemp Seed Oil Body Cream** — body, 100–250 ml.
3. **Botanical Facial Cream Line** — face, 30–50 ml (aloe vera + calendula + green
   tea extract).
4. **Botanical Body Lotion** — body, 250 ml (aloe vera + lavender + chamomile
   extract, used for fragrance/sensory character only).

Every claim associated with these products is a cosmetic, sensory-level claim
(function, feel, finish) — never a medical or therapeutic statement.

---

## 2. Regulatory framework (assumptions to verify)

This project assumes, and every final formula/label/claim must verify against, the
following framework:

- **Regulation (EC) No 1223/2009** — the EU Cosmetics Regulation: product
  definition, Responsible Person obligations, safety assessment, PIF, labelling,
  and claims (Articles 4–5, 11, 13, 19, 20, 25; Annex I).
- **EN ISO 22716:2007** — Good Manufacturing Practice (GMP) guidelines for
  cosmetics: personnel, premises, equipment, raw materials, production, QC,
  finished products, deviations, complaints, recalls.
- **CPNP** — the EU Cosmetic Product Notification Portal; mandatory notification
  before placing any product on the EU market.
- **Product Information File (PIF)** — per Article 11, the technical file kept
  available to authorities per product.
- **Cosmetic Product Safety Report (CPSR)** — per Annex I, the safety assessment
  signed by a qualified safety assessor.
- **Responsible Person** — a legal entity established in the EU, formally
  designated and accountable for each product's compliance (Articles 4–5).
- **INFARMED** — the Portuguese authority with cosmetic entity registration
  obligations for manufacturers/importers/distributors operating in Portugal.
- **Portuguese labelling and claims compliance** — language, mandatory content, and
  claims substantiation aligned with Infarmed guidance and Regulation (EU)
  655/2013 on common claims criteria.
- **Batch traceability, complaints, recalls, CAPA, deviations, supplier
  qualification, and CoA/SDS management** — operational obligations under ISO
  22716 and Article 25 (market surveillance / withdrawal / recall).

None of the above removes the need for a named regulatory consultant and safety
assessor to confirm applicability to the project's actual formulas, claims, and
corporate structure.

---

## 3. Regulatory pathway

1. Formulate using cosmetics-only INCI ingredients (aloe vera, hemp seed oil,
   approved botanicals) — no cannabinoid-bearing ingredient until cleared.
2. Commission the Cosmetic Product Safety Report (CPSR) from a qualified safety
   assessor.
3. Compile the Product Information File (PIF) per SKU, version-controlled.
4. Legal review of label and every claim against Regulation (EC) 1223/2009 and
   Infarmed guidance.
5. File CPNP notification and obtain confirmation before market placement.
6. Maintain INFARMED cosmetic entity registration for the manufacturing/Responsible
   Person entity.
7. Manufacture under ISO 22716 GMP with full batch traceability from the first
   commercial batch onward.

---

## 4. Laboratory layout concept

Thirteen functional zones, each with a defined hygiene level (Standard, Controlled,
or Controlled+). Zoning follows a one-directional logic so that raw materials,
personnel, and finished goods do not cross uncontrolled paths.

| Zone | Function | Hygiene level |
|---|---|---|
| Reception / Quarantine — Raw Materials | Intake inspection and quarantine hold | Standard |
| Sampling / Weighing Room | Sampling and precision weighing | Controlled |
| Water / Preparation Area | Water qualification, phase pre-preparation | Controlled |
| Mixing / Emulsification Room | Heating, emulsification, homogenisation | Controlled+ |
| Filling Room | Filling and capping | Controlled+ |
| Packaging / Labelling Room | Secondary packaging, labelling, batch coding | Controlled |
| Finished Goods Quarantine | Hold pending QC disposition | Standard |
| Released Finished Goods Storage | FEFO storage of released stock | Standard |
| QC Bench / Lab | In-process & finished product testing | Controlled |
| Cleaning / Washing Area | Cleaning of utensils and mobile equipment | Controlled |
| Waste Area | Segregated waste holding | Standard |
| Staff Changing / PPE Area | Gowning transition point | Controlled |
| Office / Documentation Archive | Administration, controlled document archive | Standard |

## 5. Process flows

**Production flow:** Raw material release → Weighing & sampling → Mixing/
emulsification → In-process QC → Filling & capping → Labelling & coding → FG
quarantine → Release & storage.

**Personnel flow:** Entry/changing area → Handwashing → Gowning → Production zones
(one-directional) → De-gowning via changing area.

**Raw material flow:** Goods-in → Sampling → CoA/SDS check → Release decision →
Approved storage.

**Finished product flow:** Filled & packed → FG quarantine → QC release → Released
storage → Shipment.

**Waste flow:** Generation → Segregation (general/recyclable/hazardous) → Waste
area → Scheduled collection by a licensed operator → Disposal record filed.

## 6. Air quality concept

The facility is scoped to **ISO 22716 cosmetics GMP expectations**, not a
pharmaceutical cleanroom classification — no sterile/cleanroom claim is made
unless a future process risk assessment justifies it.

- Filtered HVAC supplying production zones.
- Positive pressure in production/filling relative to corridors, where zoning
  requires it.
- Continuous temperature and humidity monitoring with defined alert thresholds.
- Differential pressure checks where pressure cascades are in place.
- Documented cleaning schedule per zone (see SOP-009).
- Environmental monitoring plan: surface swabs and microbiological monitoring as
  routine; particulate monitoring only if justified by process risk.
- Scheduled pest control by a licensed contractor.
- Restricted access to production zones (gowned, authorised personnel only).
- HEPA filtration as an **optional upgrade** for weighing/filling of sensitive
  materials — not assumed by default.

## 7. Hygiene / GMP framework (ISO 22716-aligned)

Gowning and PPE per zone; handwash stations at zone entry points; documented
cleaning SOPs and equipment cleaning logs; line clearance before every batch
changeover; batch manufacturing records (BMR) per batch; equipment calibration and
preventive maintenance programmes; structured training and competency records;
deviation and CAPA management; supplier qualification with CoA/SDS management;
retention samples per batch; stability testing and preservative efficacy (challenge)
testing per formula; microbiological limits testing plan; documented complaint
handling and recall procedure. The full SOP list is in §10.

## 8. Equipment list (baseline)

Grouped by function — final specification and supplier selection require
engineering and supplier validation:

- **Production:** stainless steel benches, floor scale, high-shear homogenizer/
  mixer, heating/melting jacketed vessel, mobile jacketed holding tanks,
  semi-automatic cream filling machine, capping machine, label printer/applicator,
  batch/lot coding printer.
- **Quality control:** precision scales (0.001–1 g), calibrated pH meter,
  rotational viscometer, microbiology incubator or outsourced microbiology testing.
- **Utilities:** water purification/deionised water system (or qualified external
  supplier with CoA per delivery), pharmaceutical-grade refrigerator, optional
  local HEPA-filtered unit for sensitive weighing/filling.
- **Documentation & IT:** barcode/QR scanner, batch-record computer/tablet
  terminal, locked document archive/controlled document cabinet.
- **Safety & facilities:** dedicated colour-coded cleaning equipment, PPE stock,
  fire/spill/eyewash safety equipment, segregated waste bins.

(See `src/data/equipment.ts` for the full structured list rendered on
`/laboratory`.)

## 9. Quality control plan

- In-process checks: pH, viscosity, appearance, odour during mixing and filling.
- Finished product release: full specification check before quarantine is lifted.
- Microbiological limits: total viable count and specified pathogen absence per
  batch or scheduled frequency.
- Preservative efficacy (challenge) testing: required for every preservative
  system before CPSR approval.
- Stability testing: real-time and accelerated protocols supporting shelf-life and
  PAO (Period After Opening) claims.
- Retention samples: representative sample of every batch retained for the
  shelf-life period plus margin.

## 10. Documentation plan (SOPs)

Thirty controlled SOPs are scoped across: raw material reception and supplier
qualification; sampling, weighing, mixing, filling, labelling, and line clearance;
equipment cleaning, calibration, and maintenance; gowning and personnel/material
flow; environmental monitoring and pest control; in-process/finished product QC,
stability, and challenge testing; retention samples; batch manufacturing record
control; deviation management and CAPA; complaint handling and recall/withdrawal;
PIF/CPSR maintenance, CPNP notification, claims substantiation, and label/artwork
approval; training records; and document control itself.

(Full list with codes and purpose: `src/data/sops.ts`, rendered on
`/laboratory`.)

## 11. Rastreabilidade / traceability system

**Visual flow:** Supplier → Raw Material Lot → Formula/BOM → Manufacturing Batch →
QC Release → Packaging Lot → Finished Product Lot → Customer/Distributor →
Complaint/Recall (and back).

**Architecture (four layers):**

1. **Capture layer** — barcode/QR scanning at goods-in, weighing, filling,
   packaging, and shipment, capturing lot/batch identifiers at the point of work.
2. **Core data model** — a relational schema (documented in §12) linking supplier,
   lot, formula version, batch, and shipment by foreign key.
3. **Compliance layer** — PIF, CPSR, and CPNP status records reference the same
   formula and batch identifiers as the traceability data.
4. **Reporting & recall layer** — forward trace (lot → customer) and backward
   trace (customer → lot → supplier) queries power complaint handling, recall
   scoping, and audit exports.

No backend exists yet. This is documented so it can be implemented directly
against PostgreSQL via Prisma without redesign.

## 12. Compliance software modules & data model

Conceptual entities (28 total), grouped as follows — see `src/data/entities.ts`
for full field-level definitions, and `/traceability` for the rendered model:

- **Identity & access:** User, Role, AuditLog, TrainingRecord.
- **Supply chain:** Supplier, RawMaterial, RawMaterialLot, COASDSDocument.
- **Product development:** Formula, FormulaVersion, BOM.
- **Production:** ManufacturingBatch, BatchStep, Equipment, CleaningLog,
  CalibrationLog, PackagingLot, FinishedProductLot.
- **Quality control:** QCResult, EnvironmentalMonitoring.
- **Regulatory:** PIFDocument, CPSRStatus, CPNPStatus, LabelVersion,
  ClaimSubstantiation.
- **Quality assurance:** Deviation, CAPA, Complaint, RecallEvent.

The same entities power the compliance dashboard (`/compliance`) status cards for
PIF, CPSR, CPNP, Responsible Person, GMP/ISO 22716, Labels, Claims, Batch Records,
Supplier Qualification, Complaints, Recalls, and CAPA — each tracked with a status
of **Draft**, **Needs Expert Review**, **Ready for Validation**, or **Approved**.

## 13. Cost model (placeholder assumptions)

Four packaging scenarios are modelled in `src/data/costs.ts` and rendered live on
`/costs`: 30 ml premium face cream, 50 ml face cream, 100 ml body cream, and
250 ml lotion. The model computes, per scenario: formula cost/unit, packaging
cost/unit, batch direct cost, fully-loaded unit cost (including amortised safety
assessment and PIF/CPSR allocation), trade price, manufacturer gross margin, and a
break-even estimate (units/batches needed to recover the one-off regulatory
investment per SKU at the modelled contribution margin).

**Every figure is an explicit placeholder.** None of the packaging costs, raw
material costs, labour rates, QC costs, or regulatory fees in this model come from
real supplier quotations. Replace each input with a dated, real quote before using
this model for financial decisions or investor figures.

## 14. Implementation roadmap

| Phase | Duration | Focus |
|---|---|---|
| 0 — Legal & Regulatory Foundations | Months 1–2 | Regulatory consultant, Responsible Person, CBD legal opinion, INFARMED registration scoping |
| 1 — Formulation & Lab Pilot | Months 2–5 | Bench formulation, stability/challenge testing started, draft CPSR opened |
| 2 — Facility Fit-Out | Months 4–8 | Zoning build-out, HVAC/water/utilities, equipment, GMP documentation drafted |
| 3 — Pilot Batches & Validation | Months 7–9 | Pilot batches, environmental monitoring baseline, calibration/cleaning validation, mock recall |
| 4 — Regulatory Submission & Launch Readiness | Months 9–11 | CPSR finalised, label legal review, CPNP notification, PIF completed |
| 5 — Commercial Launch | Month 12+ | First commercial release, complaint/CAPA live, quarterly audit cadence |

## 15. Risk register (highlights)

Ten risks are tracked from project start in `src/data/risks.ts`, spanning:
regulatory ingredient risk (CBD/cannabinoids), claims drift toward medical
language, premature market placement before CPNP/CPSR completion, microbiological/
preservation risk, supply chain variability, cross-contamination/line clearance
failures, documentation completeness at inspection time, facility environmental
drift, cost-model divergence from real quotes, and Responsible Person designation
risk. Each risk has an assigned likelihood, impact, mitigation, and owner — see
`/laboratory` for the full table.

## 16. Validation checklist

Grouped by Legal & corporate, Formulation & safety, Documentation, Facility & GMP,
Labelling & claims, and Market access — every item that requires a qualified
external expert is explicitly flagged (`requiresExpert: true` in
`src/data/validationChecklist.ts`). Nothing on this checklist should be treated as
complete until checked off by the responsible named expert or authority.

---

## Closing statement

This is a technical and commercial draft. It is not legal advice. Final validation
must be performed by a qualified regulatory consultant, safety assessor, and
competent Portuguese/EU authorities where needed.
