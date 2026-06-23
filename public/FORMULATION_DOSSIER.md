# Formulation Dossier — ROYER Cosmetics

**All formulas are draft cosmetic formulation concepts only.** They require review
by a qualified cosmetic chemist, stability testing, microbiological testing,
preservative efficacy/challenge testing where applicable, CPSR, PIF, CPNP
notification, label review, claims substantiation and Responsible Person validation
before being placed on the market. This document is not legal advice.

This is a **cosmetics** dossier under EU Regulation (EC) No 1223/2009 — not a
medicinal, medical-cannabis, or food-supplement dossier. No formula, process step,
or claim language in this document should be read as a medical or therapeutic
statement.

## CBD / Cannabinoid Regulatory Hold

> CBD or cannabinoid-containing cosmetic SKUs must not be commercialised until the
> exact ingredient origin, INCI status, THC absence, supplier documentation,
> Portuguese market position, INFARMED interpretation, CPSR safety assessment and
> Responsible Person approval are validated. Initial commercial SKUs should use
> hemp seed oil only, not CBD, unless a qualified regulatory pathway is confirmed.

Only one SKU in this dossier (SKU-05) uses *Cannabis Sativa Seed Oil* (hemp seed
oil), and only as a cold-pressed cosmetic emollient. **No SKU contains, claims, or
implies CBD.**

---

## How to read this dossier

- Percentages are **% w/w** (weight by weight) and every formula sums to exactly
  **100.00%**.
- The **Aqua** row (where present) is the calculated **q.s.** (quantum satis)
  remainder — i.e. "as much as needed" to reach 100%.
- **Citric Acid / Sodium Hydroxide** (pH adjusters) are dosed q.s. in a small,
  variable, near-negligible amount and are noted as a footnote rather than carried
  as their own percentage line.
- Cost figures (€/kg, €/unit, margins) are **placeholder assumptions** — see
  `src/data/skuCosts.ts`, `src/data/packaging.ts` and the live calculator at
  `/costs`. None of them are real supplier quotations.
- Full interactive versions of everything below live at `/formulas` (formulation +
  chemistry + testing) and `/costs` (editable economics).

---

## SKU-01 — Aloe Vera Daily Face Cream (50 ml)

**Positioning:** Light daily botanical face cream. **Format:** 50 ml airless pump
jar. **Type:** Oil-in-water emulsion.

### Formula (FORM-SKU01-v0.1)

| Ingredient (INCI) | % w/w | Function |
|---|---|---|
| Aqua | 38.20% (q.s.) | Solvent / continuous phase |
| Aloe Barbadensis Leaf Juice | 35.00% | Humectant / botanical base |
| Glycerin | 4.00% | Humectant |
| Simmondsia Chinensis Seed Oil | 5.00% | Emollient |
| Rosa Canina Fruit Oil | 3.00% | Emollient, antioxidant-rich |
| Caprylic/Capric Triglyceride | 6.00% | Lightweight emollient |
| Cetearyl Olivate and Sorbitan Olivate | 5.00% | Emulsifier (O/W) |
| Cetearyl Alcohol | 2.00% | Co-emulsifier, thickener |
| Xanthan Gum | 0.30% | Rheology modifier |
| Tocopherol | 0.30% | Antioxidant |
| Preservative system | 1.00% | Antimicrobial preservation |
| Parfum (allergen-controlled, optional) | 0.20% | Fragrance (or fragrance-free) |
| **Total** | **100.00%** | |

\* Citric Acid / Sodium Hydroxide dosed q.s. to reach target pH 5.0–5.5; negligible
mass already accounted for within the Aqua phase above.

**Target pH:** 5.0–5.5. **Target viscosity/texture:** Light-to-medium cream,
spreadable, fast-absorbing, low residue.

### Manufacturing process (emulsion)

1. Phase A (water) — disperse Xanthan Gum into glycerin, add water and Aloe juice; heat to 75–80°C.
2. Phase B (oil) — combine oils, emulsifier and Cetearyl Alcohol; heat to 75–80°C.
3. Emulsify Phase B into Phase A under high-shear homogenisation.
4. Cool with mixing to ≤40°C.
5. Below 40°C, add Tocopherol and the preservative system.
6. Adjust pH with Citric Acid / Sodium Hydroxide; record final pH.
7. Final low-shear homogenisation.
8. Fill into qualified packaging.
9. Complete the batch manufacturing record.
10. QC release (pH, viscosity, appearance, odour, microbiological sample).
11. Retain a representative sample.

**Manufacturing notes:** Add Rosehip Oil and Tocopherol only below 40°C to protect
oxidation-sensitive fatty acids. A fragrance-free variant is the lower-risk default
for allergen declaration.

**Suggested packaging:** 50 ml airless pump jar + cap + label (+ box). Packaging
compatibility test required against the emulsifier system.

**Testing required:** real-time stability, accelerated stability, freeze/thaw,
centrifuge, microbiological limits, preservative efficacy/challenge, packaging
compatibility, pH drift, viscosity monitoring, odour/colour change, CoA/SDS
collection.

**Cost/margin model (placeholder):** raw material + packaging + labour + QC +
regulatory allocation → total COGS/unit. Target retail (ex. VAT) **€24.90**; target
COGS ceiling **€8.00**; target gross margin **>65%**. See `/costs` for live figures.

---

## SKU-02 — Rosehip + Jojoba Premium Face Oil (30 ml)

**Positioning:** Premium anhydrous facial oil. **Format:** 30 ml amber/opaque glass
dropper bottle. **Type:** Anhydrous oil blend.

### Formula (FORM-SKU02-v0.1)

| Ingredient (INCI) | % w/w | Function |
|---|---|---|
| Simmondsia Chinensis Seed Oil | 45.00% | Primary emollient carrier |
| Caprylic/Capric Triglyceride | 25.00% | Lightweight emollient |
| Rosa Canina Fruit Oil | 15.00% | Emollient, antioxidant-rich |
| Olea Europaea Fruit Oil | 8.00% | Emollient |
| Squalane | 5.00% | Emollient |
| Tocopherol | 0.70% | Antioxidant / oxidation control |
| Bisabolol | 0.30% | Sensory finish, fragrance component |
| Parfum (natural, or fragrance-free) | 1.00% max | Fragrance (or fragrance-free) |
| **Total** | **100.00%** | |

**Target pH:** Not applicable (anhydrous). **Target viscosity/texture:** Light-to-
medium oil, fast spreading, non-tacky finish.

### Manufacturing process (anhydrous, liquid)

1. Blend all liquid oils at room temperature or with gentle warming.
2. Add Tocopherol and Bisabolol once the blend is at or below 40°C.
3. Fill at room temperature into qualified packaging.
4. QC release (appearance, odour, oxidative stability indicators).
5. Retain a representative sample.

**Manufacturing notes:** No water phase and no antimicrobial preservative —
oxidation control via Tocopherol is the primary stability lever. Amber/opaque glass
recommended to limit light-driven oxidation of the rosehip oil fraction.

**Suggested packaging:** 30 ml amber/opaque glass dropper bottle + dropper closure
+ label (+ box).

**Testing required:** real-time stability, accelerated stability, packaging
compatibility, odour/colour change, heavy metals/pesticide screening, CoA/SDS
collection. *No microbiological/challenge testing by default — anhydrous, no water
phase.*

**Cost/margin model (placeholder):** target retail (ex. VAT) **€29.90**; target
COGS ceiling **€9.00**; target gross margin **>70%**.

---

## SKU-03 — Aloe + Olive Body Cream (200 ml)

**Positioning:** Rich botanical body cream. **Format:** 200 ml PP jar. **Type:**
Oil-in-water emulsion.

### Formula (FORM-SKU03-v0.1)

| Ingredient (INCI) | % w/w | Function |
|---|---|---|
| Aqua | 45.10% (q.s.) | Solvent / continuous phase |
| Aloe Barbadensis Leaf Juice | 25.00% | Humectant / botanical base |
| Glycerin | 4.00% | Humectant |
| Olea Europaea Fruit Oil | 6.00% | Emollient |
| Cocos Nucifera Oil | 4.00% | Emollient |
| Butyrospermum Parkii Butter | 5.00% | Emollient, occlusive |
| Cetearyl Olivate and Sorbitan Olivate | 5.00% | Emulsifier (O/W) |
| Cetearyl Alcohol | 2.50% | Co-emulsifier, thickener |
| Glyceryl Stearate Citrate | 1.50% | Emulsifier (mild, anionic) |
| Xanthan Gum | 0.30% | Rheology modifier |
| Tocopherol | 0.30% | Antioxidant |
| Preservative system | 1.00% | Antimicrobial preservation |
| Parfum (allergen-controlled, optional) | 0.30% | Fragrance (or fragrance-free) |
| **Total** | **100.00%** | |

\* Citric Acid / Sodium Hydroxide dosed q.s. to target pH 5.0–5.5.

**Target pH:** 5.0–5.5. **Target viscosity/texture:** Rich, dense body cream;
slow-melting, occlusive after-feel.

### Manufacturing process (emulsion)

Same eleven-step emulsion process as SKU-01 (Phase A/B → emulsify → cool → add
heat-sensitive ingredients → pH adjust → homogenise → fill → batch record → QC →
retain). **Note:** Shea Butter must be fully melted into Phase B to avoid a
grainy/waxy texture defect.

**Suggested packaging:** 200 ml PP jar + cap + label (no secondary box assumed).

**Testing required:** same panel as SKU-01 (full aqueous-emulsion testing plan,
including preservative efficacy/challenge testing).

**Cost/margin model (placeholder):** target retail (ex. VAT) **€26.90**; target
COGS ceiling **€10.50**; target gross margin **>60%**.

---

## SKU-04 — Coconut + Aloe Hand Cream (75 ml)

**Positioning:** Compact hand cream for daily use. **Format:** 75 ml laminate
tube. **Type:** Oil-in-water emulsion.

### Formula (FORM-SKU04-v0.1)

| Ingredient (INCI) | % w/w | Function |
|---|---|---|
| Aqua | 40.60% (q.s.) | Solvent / continuous phase |
| Aloe Barbadensis Leaf Juice | 30.00% | Humectant / botanical base |
| Glycerin | 5.00% | Humectant |
| Cocos Nucifera Oil | 6.00% | Emollient |
| Olea Europaea Fruit Oil | 4.00% | Emollient |
| Simmondsia Chinensis Seed Oil | 2.00% | Emollient |
| Cetearyl Olivate and Sorbitan Olivate | 5.00% | Emulsifier (O/W) |
| Cetearyl Alcohol | 3.00% | Co-emulsifier, thickener |
| Glyceryl Stearate Citrate | 1.50% | Emulsifier (mild, anionic) |
| Panthenol | 1.00% | Humectant / conditioning agent |
| Xanthan Gum | 0.30% | Rheology modifier |
| Tocopherol | 0.30% | Antioxidant |
| Preservative system | 1.00% | Antimicrobial preservation |
| Parfum (allergen-controlled, optional) | 0.30% | Fragrance (or fragrance-free) |
| **Total** | **100.00%** | |

\* Citric Acid / Sodium Hydroxide dosed q.s. to target pH 5.0–5.5.

**Target pH:** 5.0–5.5. **Target viscosity/texture:** Medium cream, fast
absorption, suited to a tube format.

### Manufacturing process (emulsion)

Same eleven-step emulsion process as SKU-01. **Note:** tube filling needs tighter
viscosity control than jar filling — confirm orifice/backpressure during line
trials; prioritise fast absorption and low tackiness in sensory trials.

**Suggested packaging:** 75 ml laminate tube + cap + label (no box assumed).

**Testing required:** same full aqueous-emulsion panel as SKU-01.

**Cost/margin model (placeholder):** target retail (ex. VAT) **€12.90**; target
COGS ceiling **€4.50**; target gross margin **>65%**.

---

## SKU-05 — Hemp Seed + Calendula Botanical Balm (50 ml)

**Positioning:** Waterless botanical balm — hemp seed oil, **no CBD**. **Format:**
50 ml metal tin. **Type:** Anhydrous balm.

### Formula (FORM-SKU05-v0.1)

| Ingredient (INCI) | % w/w | Function |
|---|---|---|
| Cannabis Sativa Seed Oil | 30.00% | Primary emollient carrier |
| Olea Europaea Fruit Oil | 25.00% | Emollient |
| Cocos Nucifera Oil | 15.00% | Emollient |
| Butyrospermum Parkii Butter | 10.00% | Emollient, occlusive |
| Cera Alba (or vegan wax alternative) | 13.00% | Structuring wax |
| Calendula Officinalis Flower Extract (in oil) | 4.00% | Botanical conditioning extract |
| Tocopherol | 0.70% | Antioxidant / oxidation control |
| Bisabolol | 0.30% | Sensory finish, fragrance component |
| Parfum (natural, or fragrance-free) | 2.00% max | Fragrance (or fragrance-free) |
| **Total** | **100.00%** | |

**Target pH:** Not applicable (anhydrous). **Target viscosity/texture:** Solid balm
at room temperature; melts on contact with skin.

### Manufacturing process (anhydrous, balm)

1. Blend liquid oils at room temperature or with gentle warming.
2. Melt Cera Alba and Butyrospermum Parkii Butter together at 65–70°C.
3. Combine the melted wax/butter phase into the oil blend.
4. Add Tocopherol and Bisabolol below 40°C.
5. Fill while still fluid, just above the wax setting point.
6. Allow to set undisturbed at controlled room temperature.
7. QC release (appearance, odour, oxidative stability indicators).
8. Retain a representative sample.

**Manufacturing notes:**
- Positioning must stay strictly cosmetic/botanical — no cannabis-leaf imagery, no
  medical-cannabis or pain-relief framing anywhere in artwork or copy.
- Cannabis Sativa Seed Oil lot must carry supplier documentation confirming
  cold-pressed seed origin and cannabinoid/THC absence before acceptance — see the
  CBD / Cannabinoid Regulatory Hold above.
- Vegan variant: substitute Cera Alba with Candelilla Wax (Euphorbia Cerifera) at
  an equivalent structuring dose; re-verify set point and texture.

**Suggested packaging:** 50 ml metal tin with integrated lid + label (no separate
closure cost).

**Testing required:** real-time stability, accelerated stability, packaging
compatibility, odour/colour change, heavy metals/pesticide screening, **cannabinoid/
THC absence verification**, CoA/SDS collection. *No microbiological/challenge
testing by default — anhydrous, no water phase.*

**Cost/margin model (placeholder):** target retail (ex. VAT) **€19.90**; target
COGS ceiling **€7.00**; target gross margin **>65%**.

---

## SKU-06 — Aloe Botanical Gel-Cream (100 ml)

**Positioning:** Light gel-cream, fresh botanical texture. **Format:** 100 ml PP
jar. **Type:** Oil-in-water emulsion (light).

### Formula (FORM-SKU06-v0.1)

| Ingredient (INCI) | % w/w | Function |
|---|---|---|
| Aqua | 33.80% (q.s.) | Solvent / continuous phase |
| Aloe Barbadensis Leaf Juice | 50.00% | Humectant / botanical base |
| Glycerin | 4.00% | Humectant |
| Panthenol | 1.50% | Humectant / conditioning agent |
| Simmondsia Chinensis Seed Oil | 2.00% | Emollient (light fraction) |
| Caprylic/Capric Triglyceride | 3.00% | Lightweight emollient |
| Cetearyl Olivate and Sorbitan Olivate | 3.00% | Emulsifier (O/W) |
| Xanthan Gum | 0.40% | Rheology modifier |
| Chamomilla Recutita Flower Extract (or Cucumis Sativus Fruit Extract) | 1.00% | Botanical conditioning extract |
| Tocopherol | 0.20% | Antioxidant |
| Preservative system | 1.00% | Antimicrobial preservation |
| Parfum-free or allergen-controlled aroma | 0.10% | Fragrance (or fragrance-free) |
| **Total** | **100.00%** | |

\* Citric Acid / Sodium Hydroxide dosed q.s. to target pH 5.0–5.5.

**Target pH:** 5.0–5.5. **Target viscosity/texture:** Light gel-cream; fresh,
low-tack, quick-absorbing.

### Manufacturing process (emulsion)

Same eleven-step emulsion process as SKU-01. **Note:** highest aloe vera content in
the range (50%) — verify viscosity stability across the shelf-life window given
aloe's variable solids content by supplier lot. Confirm allergen/INCI screening
before choosing between Chamomilla Recutita and Cucumis Sativus extract.

**Suggested packaging:** 100 ml PP jar + cap + label (no box assumed).

**Testing required:** same full aqueous-emulsion panel as SKU-01. Light gel-creams
are particularly sensitive to syneresis (water separation) — confirm jar seal
integrity across the stability test window.

**Cost/margin model (placeholder):** target retail (ex. VAT) **€18.90**; target
COGS ceiling **€6.50**; target gross margin **>65%**.

---

## Ingredient chemistry table

Molecular formulas are given **only** for pure/simple compounds. Complex natural
oils, extracts, and emulsifier blends are stated explicitly as complex mixtures —
no molecular formula is invented for them.

| INCI name | Common name | Chemistry |
|---|---|---|
| Aqua | Water | H2O · CAS 7732-18-5 |
| Glycerin | Glycerol | C3H8O3 · CAS 56-81-5 |
| Tocopherol | Vitamin E | C29H50O2 · CAS 59-02-9 (alpha-tocopherol; commercial grade often a mixed-isomer blend, CAS 10191-41-9) |
| Citric Acid | Citric acid | C6H8O7 · CAS 77-92-9 |
| Sodium Hydroxide | Caustic soda / lye | NaOH · CAS 1310-73-2 |
| Panthenol | Pro-Vitamin B5 | C9H19NO4 · CAS 81-13-0 |
| Bisabolol | alpha-Bisabolol | C15H26O · CAS 515-69-7 |
| Squalane | Squalane (vegetal) | C30H62 · CAS 111-01-3 (fully saturated hydrocarbon — a defined single molecule despite plant origin) |
| Aloe Barbadensis Leaf Juice | Aloe vera juice | Complex natural mixture of polysaccharides (acemannan), amino acids, trace organic acids and minerals in water; no single molecular formula. CAS 85507-69-3 (extract). |
| Simmondsia Chinensis Seed Oil | Jojoba oil | Complex mixture of wax esters (not a triglyceride); no single molecular formula. CAS 61789-91-1. Major fatty acids: gondoic ~65–70%, erucic ~10–14%, oleic ~10–13%. |
| Rosa Canina Fruit Oil | Rosehip oil | Complex triglyceride/fatty acid mixture; no single molecular formula. CAS 84603-93-0. Major fatty acids: linoleic ~44%, alpha-linolenic ~32%, oleic ~14%. |
| Olea Europaea Fruit Oil | Olive oil | Complex triglyceride mixture; no single molecular formula. CAS 8001-25-0. Major fatty acids: oleic ~55–83%, linoleic ~4–21%, palmitic ~8–14%. |
| Cocos Nucifera Oil | Coconut oil | Complex triglyceride mixture; no single molecular formula. CAS 8001-31-8. Major fatty acids: lauric ~45–53%, myristic ~16–21%, palmitic ~8–11%. |
| Cannabis Sativa Seed Oil | Hemp seed oil | Complex triglyceride mixture; no single molecular formula. CAS 8023-98-1. Major fatty acids: linoleic ~50–60%, alpha-linolenic ~15–20%, oleic ~10–16%. Cold-pressed seed only — see CBD/Cannabinoid Regulatory Hold. |
| Butyrospermum Parkii Butter | Shea butter | Complex triglyceride/unsaponifiable mixture; no single molecular formula. CAS 91080-23-8. Major fatty acids: oleic ~40–55%, stearic ~35–45%. |
| Caprylic/Capric Triglyceride | Fractionated coconut oil (MCT) | Mixture of triglycerides of caprylic/capric fatty acids; no single molecular formula. CAS 73398-61-5. |
| Cetearyl Olivate and Sorbitan Olivate | Olive-derived emulsifier blend | Emulsifier blend; no single molecular formula; no single commonly cited CAS. |
| Cetearyl Alcohol | Cetyl/stearyl alcohol blend | Fatty alcohol mixture; no single molecular formula. CAS 8005-44-5. |
| Glyceryl Stearate Citrate | Glyceryl stearate citrate | Ester blend; no single molecular formula; no single commonly cited CAS. |
| Xanthan Gum | Xanthan gum | Polysaccharide, variable polymer structure; no single molecular formula. CAS 11138-66-2. |
| Calendula Officinalis Flower Extract | Calendula extract (in oil) | Complex natural mixture; no single molecular formula. CAS 84776-23-8. |
| Cera Alba | Beeswax | Complex natural mixture; no single molecular formula. CAS 8012-89-3. Vegan alternative: Candelilla Wax (CAS 8006-44-8). |
| Chamomilla Recutita Flower Extract | Chamomile extract | Complex natural mixture; no single molecular formula. CAS 84082-60-0. |
| Cucumis Sativus Fruit Extract | Cucumber extract | Complex natural mixture; no single molecular formula. CAS 89998-01-0. |
| Preservative system | Broad-spectrum preservative blend | Example reference only — exact INCI(s)/CAS to be selected and challenge-tested by the formulator/safety assessor. |
| Parfum | Fragrance / natural aroma | Allergen-controlled blend or fragrance-free option; no single CAS — composition is supplier-specific and must be disclosed via allergen declaration. |

Full reference table with all fields (function, chemistry type, fatty-acid
profiles): `/formulas#chemistry` and `src/data/ingredientChemistry.ts`.

---

## Label / claim warnings (apply to every SKU above)

1. No medical or therapeutic claims: no treatment, cure, prevention or relief of
   any disease or medical condition (pain, inflammation, eczema, arthritis,
   anxiety, insomnia, wounds, or otherwise).
2. No claim implying CBD or cannabinoid content or effect — including for SKU-05,
   which uses hemp seed oil only.
3. Only cosmetic/sensory claims permitted: hydration, softness, smoothness, daily
   comfort, fragrance, finish, texture, antioxidant-rich formula.
4. Every public claim requires a dedicated claims substantiation file before use
   (see `/compliance`).
5. Labels must be in Portuguese, carry the full INCI ingredient list, batch
   number, PAO/expiry, and Responsible Person address, per Reg. (EC) 1223/2009
   Art. 19 and Infarmed guidance.

## Cost / margin model summary

| SKU | Retail (ex. VAT) target | COGS ceiling target | Margin floor target |
|---|---|---|---|
| SKU-01 Aloe Vera Daily Face Cream | €24.90 | < €8.00 | > 65% |
| SKU-02 Rosehip + Jojoba Premium Face Oil | €29.90 | < €9.00 | > 70% |
| SKU-03 Aloe + Olive Body Cream | €26.90 | < €10.50 | > 60% |
| SKU-04 Coconut + Aloe Hand Cream | €12.90 | < €4.50 | > 65% |
| SKU-05 Hemp Seed + Calendula Botanical Balm | €19.90 | < €7.00 | > 65% |
| SKU-06 Aloe Botanical Gel-Cream | €18.90 | < €6.50 | > 65% |

Live, editable model (raw material, packaging, labour, QC, regulatory allocation,
wastage, distributor margin, break-even by batch size): `/costs`. Every figure is
a placeholder pending real supplier quotations.

## Supplier quote checklist

Before any figure above is treated as real:

- [ ] Aloe Barbadensis Leaf Juice — stabilised, cosmetic-grade, CoA + SDS, MOQ, price/kg at target volume.
- [ ] Simmondsia Chinensis Seed Oil (jojoba) — refined/cold-pressed grade, CoA + SDS, price/kg.
- [ ] Rosa Canina Fruit Oil (rosehip) — cold-pressed, antioxidant-protected packaging, CoA + SDS, price/kg.
- [ ] Olea Europaea Fruit Oil (olive) — cosmetic grade, CoA + SDS, price/kg.
- [ ] Cocos Nucifera Oil (coconut) — refined, cosmetic grade, CoA + SDS, price/kg.
- [ ] Cannabis Sativa Seed Oil (hemp seed) — cold-pressed seed-only, cannabinoid/THC absence certificate, CoA + SDS, price/kg.
- [ ] Butyrospermum Parkii Butter (shea) — refined grade, CoA + SDS, price/kg.
- [ ] Cera Alba (beeswax) / Candelilla Wax (vegan alt.) — cosmetic grade, CoA + SDS, price/kg.
- [ ] Emulsifiers (Cetearyl Olivate and Sorbitan Olivate, Glyceryl Stearate Citrate), Cetearyl Alcohol, Xanthan Gum — CoA + SDS, price/kg.
- [ ] Preservative system — final INCI selection, challenge-test data, CoA + SDS, price/kg.
- [ ] Fragrance/allergen-controlled aroma — IFRA certificate, allergen declaration, price/kg.
- [ ] Primary packaging per SKU (jar/bottle/tube/tin, cap/closure, label, box) — unit price at target volume, lead time, MOQ.
- [ ] Contract laboratory for microbiology, challenge testing, and stability testing — price list, turnaround time.
- [ ] Filling/co-packing partner (if not in-house) — price per unit/batch, MOQ, lead time.

## Regulatory validation checklist (formulation-specific)

- [ ] Qualified cosmetic chemist review of all six draft formulas.
- [ ] CPSR opened and progressed per formula version (`/compliance`).
- [ ] PIF compiled per SKU.
- [ ] Stability testing (real-time + accelerated) initiated per formula.
- [ ] Preservative efficacy (challenge) testing completed for all four aqueous
      emulsions (SKU-01, 03, 04, 06).
- [ ] Cannabinoid/THC absence verification obtained for the SKU-05 hemp seed oil lot.
- [ ] Allergen declaration screening completed for every fragrance/aroma ingredient.
- [ ] Label artwork legally reviewed per SKU before print.
- [ ] Claims substantiation file opened for every public claim per SKU.
- [ ] CPNP notification filed and confirmed before any SKU is placed on the market.
- [ ] Responsible Person formally designated and established in the EU.

---

This is a technical and commercial draft. It is not legal advice. Final validation
must be performed by a qualified regulatory consultant, safety assessor, and
competent Portuguese/EU authorities where needed.
