# Aloe Lab Portugal — Botanical Cosmetics Laboratory Project

A local Next.js project presenting a technical and commercial draft for a Portuguese
cosmetics manufacturing laboratory built around aloe vera, hemp seed oil, and
selected botanicals. The project is positioned strictly as **cosmetics**, under EU
and Portuguese cosmetics law — never as medicine, medical cannabis, a supplement, or
a therapeutic treatment.

See [`PROJECT_DOSSIER.md`](./PROJECT_DOSSIER.md) for the full technical/regulatory
plan, [`FORMULATION_DOSSIER.md`](./FORMULATION_DOSSIER.md) for the six draft SKU
formulas, ingredient chemistry, manufacturing process and cost/margin model, and
[`CLAUDE.md`](./CLAUDE.md) for the project rules that future AI-assisted sessions
on this repo should follow.

## Compliance disclaimer

> This is a technical and commercial draft. It is not legal advice. Final validation
> must be performed by a qualified regulatory consultant, safety assessor, and
> competent Portuguese/EU authorities where needed.

CBD or other cannabinoids **naturally derived from cannabis extracts, tinctures,
resin, flowers or leaves may be prohibited in Portuguese cosmetic products** and
require dedicated legal/regulatory validation before any use is considered. Hemp
seed oil (*Cannabis sativa* seed oil) is treated throughout this project as the
safer starting ingredient route, subject to supplier and compliance verification.
No page on this site makes a medical, therapeutic, or supplement claim — see
`/compliance` for the live tracking of every regulatory module.

## Install

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & start (production)

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Project structure

```
src/
  app/
    page.tsx                 # / — landing page
    produtos/                # /produtos — commercial SKU catalogue
    formulas/                # /formulas — formulation, chemistry & testing dossier
    projeto-laboratorio/     # /projeto-laboratorio — full technical project
    compliance/              # /compliance — compliance dashboard
    custos/                  # /custos — SKU cost & margin calculator
    rastreabilidade/         # /rastreabilidade — traceability system
    layout.tsx               # root layout: fonts, NavBar, Footer
    globals.css              # design tokens (palette, fonts, glass-card utilities)
  components/
    layout/                  # NavBar, Footer
    ui/                      # GlassCard, SectionHeading, StatusPill, Badge, Table,
                              # FlowDiagram, BarChart, Accordion, Button,
                              # RegulatoryHoldBox, FormulationDisclaimerBox, etc.
    ContactFormMockup.tsx
    CostCalculator.tsx        # client-side SKU economics calculator (/custos)
    BotanicalArt.tsx
  data/                      # typed content: compliance matrix, equipment, risks,
                              # SOPs, lab zones, flows, roadmap, traceability,
                              # entity/data-model definitions, and the formulation
                              # module — skus.ts, formulas.ts, ingredientChemistry.ts,
                              # packaging.ts, testingPlan.ts, skuCosts.ts
  lib/
    nav.ts                   # shared navigation items
PROJECT_DOSSIER.md           # full technical & regulatory dossier (English)
FORMULATION_DOSSIER.md       # six SKU formulas, chemistry, process, cost model
CLAUDE.md                    # compliance-first project rules for AI sessions
```

All page content is driven by typed data files under `src/data/`. There is no
backend yet — `src/data/entities.ts` documents the data model as it is intended to
be implemented later (PostgreSQL via Prisma), and the cost calculator on `/custos`
runs entirely client-side against editable assumptions in `src/data/skuCosts.ts`
and `src/data/packaging.ts`.

## Deployment notes

- The app is a static-friendly Next.js App Router project (`next build` currently
  prerenders every route as static content — no server-only APIs are used).
- Any standard Next.js hosting target works (Vercel, a Node server via
  `npm run start`, or a static export if no future feature requires the Node
  runtime). Re-check `next build` output if you add dynamic routes or server
  actions later.
- `next.config.ts` pins `turbopack.root` to this project directory — keep that if
  you move or nest this project inside another workspace with its own lockfile.
- No environment variables or secrets are required for the current feature set.
  The contact form on `/` is a front-end mockup only; wire it to a real endpoint
  (email service, CRM, API route) before relying on it commercially.

## Next steps

1. Engage a qualified regulatory consultant and cosmetic safety assessor — start
   from the gaps tracked on `/compliance` and the validation checklist on
   `/projeto-laboratorio`.
2. Obtain a written legal opinion on the CBD/cannabinoid ingredient question before
   any such ingredient is sourced, tested, or mentioned beyond this draft.
3. Replace every placeholder figure in `src/data/skuCosts.ts` and `src/data/packaging.ts`
   with real, dated supplier quotations and labour costs.
4. Once a backend is needed, implement the schema described in `src/data/entities.ts`
   (PostgreSQL + Prisma is the assumed target) and wire the contact form and
   compliance/traceability dashboards to real data.
5. Re-run `npm run lint` and `npm run build` after any change before deploying.
