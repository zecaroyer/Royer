@AGENTS.md

# Project rules — ROYER

This is a **cosmetics** project, not a medicinal cannabis, supplement, or
therapeutic project. Every future change must keep it that way.

## Non-negotiable compliance rules

1. **Cosmetics only.** Position every product, page, and copy change as a
   cosmetic under EU Regulation (EC) No 1223/2009. Never imply this is a
   medicine, medical cannabis product, food supplement, or medical device.
2. **No medical/therapeutic claims, ever.** Do not write or accept copy that
   claims a product treats, cures, prevents, or relieves pain, inflammation,
   eczema, arthritis, anxiety, insomnia, wounds, disease, or any medical
   condition. Acceptable language is cosmetic/sensory only: hydrates, nourishes,
   softens, smooths, refreshes, daily comfort, fragrance, finish, texture.
3. **CBD/cannabinoid ingredients are excluded by default.** Any ingredient
   naturally derived from cannabis extracts, tinctures, resin, flowers, or leaves
   must not be added to formulas, copy, or data files as if approved. Treat it as
   likely prohibited in Portuguese cosmetic products until a named legal/
   regulatory expert clears it in writing. Hemp seed oil (*Cannabis sativa* seed
   oil) is the default safe botanical route — keep the `ComplianceWarningBox`
   component visible wherever CBD/cannabinoids are even mentioned.
4. **Never invent legal certainty.** Every regulatory statement is a draft
   pending expert validation. Use hedged, verifiable language ("under current
   interpretation", "subject to confirmation") instead of definitive legal claims.
   Mark anything requiring expert sign-off visibly (see `requiresExpert` flags in
   `src/data/validationChecklist.ts` and the `StatusPill` statuses in
   `src/data/compliance.ts`).
5. **Keep the standard disclaimer intact and visible.** The exact sentence —
   "This is a technical and commercial draft. It is not legal advice. Final
   validation must be performed by a qualified regulatory consultant, safety
   assessor, and competent Portuguese/EU authorities where needed." — must stay
   in the footer (`src/components/layout/Footer.tsx`) and on `/` via
   `DisclaimerBar`. Do not remove or water it down.
6. **All cost figures are placeholders.** `src/data/skuCosts.ts` and
   `src/data/packaging.ts` hold modelling assumptions, not real quotes. If you
   change a number there, it is still a placeholder — do not present it as a real
   supplier price without a citation.
7. **Formulas are draft concepts, not finished products.** Every formula in
   `src/data/formulas.ts` needs the standard formulation disclaimer
   (`FormulationDisclaimerBox`) visible wherever it's shown: review by a
   qualified cosmetic chemist, stability/microbiological/challenge testing,
   CPSR, PIF, CPNP, label review, claims substantiation and Responsible Person
   validation, all still pending.
8. **Never invent a molecular formula for a complex natural ingredient.**
   `src/data/ingredientChemistry.ts` gives a molecular formula only to
   pure/simple compounds (water, glycerin, tocopherol, citric acid, sodium
   hydroxide, panthenol, bisabolol, squalane). Every botanical oil/extract/
   emulsifier blend must say "complex natural mixture... no single molecular
   formula" — adding a fatty-acid profile where useful instead. If you add a new
   ingredient, follow this same rule.
9. **Every formula must sum to exactly 100.00% w/w.** `formulaTotalPercentage()`
   in `src/data/formulas.ts` is the check — re-verify it after editing any
   ingredient row, including the Aqua/q.s. remainder.
10. **Don't invent team bios or market certainty.** `INVESTMENT_PLAN.md` and
    `/investidores` deliberately leave "Team" as a placeholder rather than
    inventing founder credentials, and cite every market-size figure to a named
    third-party source. Keep that pattern for any future investor-facing copy.
11. **Root dossiers are mirrored into `public/`.** `PROJECT_DOSSIER.md`,
    `FORMULATION_DOSSIER.md`, `INVESTMENT_PLAN.md`, and `SOP_MANUFACTURING.md`
    each have a copy under `public/` so the in-app "Download .md" links work. If
    you edit one at the root, copy the change into `public/` too (or vice versa)
    — they are not auto-synced.
12. **Manufacturing SOPs never duplicate the procedure.** `src/data/
    manufacturingSops.ts` holds the SOP scaffolding (purpose, scope,
    responsibilities, safety, equipment, IPC, documentation); the actual
    step-by-step procedure is always read from `formula.manufacturingProcess`
    in `src/data/formulas.ts`. Don't hand-copy steps into the SOP file — it
    will drift out of sync with the approved formula.

## Working conventions

- Content lives in typed data files under `src/data/`; pages render that data
  rather than hardcoding long lists inline. Add new structured content there
  first, then consume it from the relevant `src/app/**/page.tsx`.
- Reusable UI lives in `src/components/ui/`. Check there before adding a new
  one-off component for cards, tables, pills, flows, or charts.
- `StatusPill`, and any component meant to render on the dark `bg-botanical-dark`
  / `bg-deep-2` sections, needs a `light`/dark-aware variant — verify contrast
  on dark backgrounds before shipping (this project has previously shipped a
  contrast bug here; check screenshots, don't assume).
- No backend exists yet. `src/data/entities.ts` is the intended PostgreSQL/Prisma
  data model — keep it in sync with any new dashboard or traceability feature
  before treating it as implemented.
- This version of Next.js may differ from training-data assumptions — read
  `node_modules/next/dist/docs/` for any unfamiliar API before using it (see
  `AGENTS.md`).
- Before declaring a UI change done, run `npm run lint` and `npm run build`, and
  visually check the affected routes (a headless-browser screenshot check is the
  minimum bar — this project has no automated visual regression tests yet).
