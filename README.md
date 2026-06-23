# ROYER — Botanical Cosmetics Laboratory Project

A local Next.js project presenting a technical and commercial draft for a Portuguese
cosmetics manufacturing laboratory built around aloe vera, hemp seed oil, and
selected botanicals. The project is positioned strictly as **cosmetics**, under EU
and Portuguese cosmetics law — never as medicine, medical cannabis, a supplement, or
a therapeutic treatment.

See [`PROJECT_DOSSIER.md`](./PROJECT_DOSSIER.md) for the full technical/regulatory
plan, [`FORMULATION_DOSSIER.md`](./FORMULATION_DOSSIER.md) for the six draft SKU
formulas, ingredient chemistry, manufacturing process and cost/margin model,
[`SOP_MANUFACTURING.md`](./SOP_MANUFACTURING.md) for the per-SKU manufacturing
SOPs, [`INVESTMENT_PLAN.md`](./INVESTMENT_PLAN.md) for the angel investment plan,
and [`CLAUDE.md`](./CLAUDE.md) for the project rules that future AI-assisted
sessions on this repo should follow. All four dossiers are mirrored under
`public/` so the in-app "Download .md" links work — keep both copies in sync
when editing.

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

## Public vs. private content

Only `/` and `/products` are public. Everything else — `/formulas`,
`/investors`, `/laboratory`, `/compliance`, `/costs`, `/traceability`,
`/sops`, `/site-map`, and the four root dossiers — sits behind a login at
`/admin/login` (default credentials `admin@royer.com` / `Royer2026`,
overridable via the `ADMIN_EMAIL` / `ADMIN_PASSWORD` / `ADMIN_SESSION_TOKEN`
env vars). This is a **draft-stage access gate**, not a production
authentication system: there's still no backend/database, so it's a single
shared password checked in a Route Handler, behind one unsigned session
cookie, with no per-user accounts, rate limiting, or audit log. It keeps
casual visitors off internal/financial pages — it is not a security boundary
for anything genuinely sensitive. See `src/proxy.ts` and
`src/lib/adminAuth.ts`.

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
    products/                # /products — commercial SKU catalogue
    formulas/                # /formulas — formulation, chemistry & testing dossier
    investors/               # /investors — angel investment plan
    laboratory/              # /laboratory — full technical project
    compliance/              # /compliance — compliance dashboard
    costs/                   # /costs — SKU cost & margin calculator
    traceability/            # /traceability — traceability system
    sops/                    # /sops — per-SKU manufacturing SOPs
    site-map/                # /site-map — human-readable site map
    admin/login/             # /admin/login — data-room login page (public)
    api/admin-login/         # POST: verifies credentials, sets session cookie
    api/admin-logout/        # POST: clears session cookie
    layout.tsx               # root layout: fonts, NavBar, Footer, JSON-LD, skip link
    globals.css              # design tokens, focus/scroll/print/reduced-motion styles
    not-found.tsx, error.tsx # branded 404 and error boundary
    sitemap.ts, manifest.ts, icon.svg  # SEO/PWA metadata (Next.js file conventions)
  proxy.ts                   # gates private routes/dossiers, redirects to /admin/login
  components/
    layout/                  # NavBar, Footer (both auth-aware via an isAdmin prop)
    admin/                   # LoginForm (client component)
    ui/                      # GlassCard, SectionHeading, StatusPill, Badge, Table,
                              # FlowDiagram, BarChart, Accordion, Button, Breadcrumb,
                              # Tooltip, TldrCallout, CopyLinkButton,
                              # RegulatoryHoldBox, FormulationDisclaimerBox, etc.
    ContactFormMockup.tsx, NewsletterSignup.tsx
    CostCalculator.tsx        # client-side SKU economics calculator (/costs)
    BotanicalArt.tsx, ScrollToTop.tsx, ReadingProgress.tsx, ScrollSpyNav.tsx,
    RevealOnScroll.tsx, StatsCounter.tsx
  data/                      # typed content: compliance matrix, equipment, risks,
                              # facility SOPs, lab zones, flows, roadmap,
                              # traceability, faq, investment plan, entity/data-model
                              # definitions, and the formulation module — skus.ts,
                              # formulas.ts, ingredientChemistry.ts, packaging.ts,
                              # testingPlan.ts, skuCosts.ts, manufacturingSops.ts
  lib/
    nav.ts                   # PUBLIC_NAV_ITEMS / PRIVATE_NAV_ITEMS
    adminAuth.ts              # server-only credential check + session-cookie helpers
PROJECT_DOSSIER.md           # full technical & regulatory dossier (English)
FORMULATION_DOSSIER.md       # six SKU formulas, chemistry, process, cost model
SOP_MANUFACTURING.md         # per-SKU manufacturing SOPs (purpose, scope, IPC, safety)
INVESTMENT_PLAN.md           # angel investment plan (market, unit economics, ask)
CLAUDE.md                    # compliance-first project rules for AI sessions
public/*.md                  # web-servable copies of the three dossiers above
```

All page content is driven by typed data files under `src/data/`. There is no
backend yet — `src/data/entities.ts` documents the data model as it is intended to
be implemented later (PostgreSQL via Prisma), and the cost calculator on `/costs`
runs entirely client-side against editable assumptions in `src/data/skuCosts.ts`
and `src/data/packaging.ts`.

## Deployment notes

- The app is no longer fully static: the root layout reads the admin session
  cookie via `cookies()` to decide what NavBar/Footer render, which opts every
  route into dynamic (per-request) rendering, and `src/proxy.ts` gates the
  private routes server-side. Needs a Node-capable host (Vercel, a Node server
  via `npm run start`, or Netlify's Next.js runtime) — a static export will not
  work for the login gate.
- `next.config.ts` pins `turbopack.root` to this project directory — keep that if
  you move or nest this project inside another workspace with its own lockfile.
- Optional env vars: `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_TOKEN`
  override the defaults in `src/lib/adminAuth.ts` — set these on the hosting
  platform before relying on the login for anything beyond a draft-stage gate.
  The contact form on `/` is a front-end mockup only; wire it to a real endpoint
  (email service, CRM, API route) before relying on it commercially.

## Next steps

1. Engage a qualified regulatory consultant and cosmetic safety assessor — start
   from the gaps tracked on `/compliance` and the validation checklist on
   `/laboratory`.
2. Obtain a written legal opinion on the CBD/cannabinoid ingredient question before
   any such ingredient is sourced, tested, or mentioned beyond this draft.
3. Replace every placeholder figure in `src/data/skuCosts.ts` and `src/data/packaging.ts`
   with real, dated supplier quotations and labour costs.
4. Once a backend is needed, implement the schema described in `src/data/entities.ts`
   (PostgreSQL + Prisma is the assumed target) and wire the contact form and
   compliance/traceability dashboards to real data.
5. Re-run `npm run lint` and `npm run build` after any change before deploying.
