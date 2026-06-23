# Manufacturing SOPs — ROYER

**Status: draft, not yet effective.** Every SOP below requires review and formal
approval by a qualified cosmetic chemist and Quality Assurance before any batch is
manufactured against it. This document is not legal advice and does not constitute
GMP certification.

This document covers the **per-SKU manufacturing SOPs** only. The 30 general
facility-wide SOPs (supplier qualification, cleaning, calibration, training,
deviations, complaints, recalls, document control, etc.) are listed in
`PROJECT_DOSSIER.md` §10 and on `/laboratory#documentation`
(`src/data/sops.ts`).

Live, interactive version of everything below: `/sops`. Source data:
`src/data/manufacturingSops.ts` (SOP structure) + `src/data/formulas.ts`
(procedure steps, single source of truth — never duplicated by hand).

---

## SOP-MFG-SKU01 — Aloe Vera Daily Face Cream

**1. Purpose** — To define the standardised manufacturing procedure for the Aloe
Vera Daily Face Cream, ensuring batch-to-batch consistency, ISO 22716 GMP
compliance, and full traceability.

**2. Scope** — Applies to all personnel involved in weighing, mixing/
emulsification, filling, and packaging of this SKU, for all batch sizes defined on
the current batch manufacturing record.

**3. Responsibilities**

| Role | Responsibility |
|---|---|
| Production Operator | Executes the procedure exactly as written; records parameters in real time on the BMR. |
| Production Supervisor | Verifies line clearance before batch start; reviews and co-signs the completed BMR. |
| QC Analyst | Performs in-process and finished-product testing against specification; records results. |
| Quality Assurance / Responsible Person | Reviews the closed batch record, approves any deviation, and issues final batch disposition. |

**4. Procedure** — Phase A (water) → Phase B (oil) → emulsify → cool → add
heat-sensitive ingredients → pH adjust → homogenise → fill → batch record → QC
release → retain sample. Full step detail: `/formulas#sku-01` and
`FORMULATION_DOSSIER.md`.

**5. In-process controls**

| Stage | Parameter | Target |
|---|---|---|
| After Phase A/B combination | Appearance | Homogeneous emulsion, no separation |
| After cool-down, before pH adjustment | pH | 5.0–5.5 |
| After final homogenisation | Viscosity/texture | Light-to-medium cream; spreadable, fast-absorbing, low residue |
| During filling | Fill weight | Within ± tolerance on the BMR |

**6. Safety precautions** — Standard PPE throughout; heat-resistant gloves at
75–80°C; Sodium Hydroxide handled per SDS with face shield and chemical-resistant
gloves.

**7. Equipment required** — Stainless steel benches, precision scales,
heating/melting jacketed vessel, high-shear homogenizer, calibrated pH meter,
rotational viscometer, semi-automatic cream filling machine, capping machine,
label printer & applicator, batch/lot coding printer.

**8. Documentation required** — BMR, line clearance checklist, equipment cleaning
log, calibration record, retention sample log, deviation report (if applicable).

**9. Revision history** — v0.1, June 2026, initial draft pending QA approval.

---

## SOP-MFG-SKU02 — Rosehip + Jojoba Premium Face Oil

**1. Purpose** — Standardised manufacturing procedure for the anhydrous Rosehip +
Jojoba Premium Face Oil.

**2. Scope** — Oil blending, filling, and packaging of this SKU.

**3. Responsibilities** — Same four roles as SOP-MFG-SKU01.

**4. Procedure** — Blend liquid oils → add antioxidants below 40°C → fill at room
temperature → QC release → retain sample. Full detail: `/formulas#sku-02`.

**5. In-process controls**

| Stage | Parameter | Target |
|---|---|---|
| After oil blending | Appearance | Clear, homogeneous; no particulates |
| After antioxidant addition | Odour | Matches reference standard, no rancid notes |
| During filling | Fill weight | Within ± tolerance on the BMR |

**6. Safety precautions** — Standard PPE; no heating phase above 40°C; handle
glass dropper bottles carefully during filling/capping.

**7. Equipment required** — Stainless steel benches, precision scales, low-shear
mixer/paddle stirrer, semi-automatic dropper-bottle filling line, label printer &
applicator, batch/lot coding printer.

**8–9.** Same documentation set and revision status as SOP-MFG-SKU01.

---

## SOP-MFG-SKU03 — Aloe + Olive Body Cream

**1. Purpose** — Standardised manufacturing procedure for the Aloe + Olive Body
Cream emulsion.

**2–3.** Same scope structure and responsibilities as SOP-MFG-SKU01.

**4. Procedure** — Same eleven-step emulsion process as SKU-01. Full detail:
`/formulas#sku-03`.

**5. In-process controls** — pH target 5.0–5.5; viscosity/texture target "Rich,
dense body cream; slow-melting, occlusive after-feel"; same appearance and fill
weight checks as SOP-MFG-SKU01.

**6. Safety precautions** — Same as SOP-MFG-SKU01.

**7. Equipment required** — Same as SOP-MFG-SKU01.

**8–9.** Same documentation set and revision status as SOP-MFG-SKU01.

---

## SOP-MFG-SKU04 — Coconut + Aloe Hand Cream

**1. Purpose** — Standardised manufacturing procedure for the Coconut + Aloe Hand
Cream emulsion.

**2–3.** Same scope structure and responsibilities as SOP-MFG-SKU01.

**4. Procedure** — Same eleven-step emulsion process as SKU-01. Full detail:
`/formulas#sku-04`.

**5. In-process controls** — pH target 5.0–5.5; viscosity/texture target "Medium
cream, fast absorption, suited to a tube format"; same appearance and fill weight
checks as SOP-MFG-SKU01.

**6. Safety precautions** — Same as SOP-MFG-SKU01.

**7. Equipment required** — Same as SOP-MFG-SKU01.

**8–9.** Same documentation set and revision status as SOP-MFG-SKU01.

---

## SOP-MFG-SKU05 — Hemp Seed + Calendula Botanical Balm

**1. Purpose** — Standardised manufacturing procedure for the anhydrous Hemp Seed
+ Calendula Botanical Balm.

**2. Scope** — Oil/wax blending, filling, and packaging of this SKU. Positioning
must remain strictly cosmetic — no medical-cannabis or pain-relief framing
anywhere in batch documentation, labels, or artwork.

**3. Responsibilities** — Same four roles as SOP-MFG-SKU01.

**4. Procedure** — Blend oils → melt wax/butter at 65–70°C → combine → add
antioxidants below 40°C → fill while fluid → cool/set → QC release → retain
sample. Full detail: `/formulas#sku-05`.

**5. In-process controls**

| Stage | Parameter | Target |
|---|---|---|
| After wax/butter melt-in | Appearance | Fully melted, homogeneous, no solid particles |
| Before filling | Pour temperature | Fluid enough to fill cleanly; recorded on BMR |
| After cooling/setting | Appearance/texture | Smooth, uniform set; no graininess or cracking |

**6. Safety precautions** — Standard PPE; heat-resistant gloves at 65–70°C.
**Cannabis Sativa Seed Oil lot must be verified released — including
cannabinoid/THC absence confirmation — before use.** See the CBD/Cannabinoid
Regulatory Hold on `/compliance`.

**7. Equipment required** — Stainless steel benches, precision scales,
heating/melting jacketed vessel, low-shear mixer, semi-automatic tin-filling
line, label printer & applicator, batch/lot coding printer.

**8. Documentation required** — Standard set plus **cannabinoid/THC absence
certificate for the Cannabis Sativa Seed Oil lot used**.

**9. Revision history** — v0.1, June 2026, initial draft pending QA approval.

---

## SOP-MFG-SKU06 — Aloe Botanical Gel-Cream

**1. Purpose** — Standardised manufacturing procedure for the Aloe Botanical
Gel-Cream emulsion.

**2–3.** Same scope structure and responsibilities as SOP-MFG-SKU01.

**4. Procedure** — Same eleven-step emulsion process as SKU-01. Full detail:
`/formulas#sku-06`.

**5. In-process controls** — pH target 5.0–5.5; viscosity/texture target "Light
gel-cream; fresh, low-tack, quick-absorbing"; same appearance and fill weight
checks as SOP-MFG-SKU01.

**6. Safety precautions** — Same as SOP-MFG-SKU01.

**7. Equipment required** — Same as SOP-MFG-SKU01.

**8–9.** Same documentation set and revision status as SOP-MFG-SKU01.

---

This is a technical and commercial draft. It is not legal advice. Final validation
must be performed by a qualified regulatory consultant, safety assessor, and
competent Portuguese/EU authorities where needed.
