# Altaria Urbana — Website UI kit

High-fidelity prototype of the Altaria Urbana corporate website built from the brand book + product brief. **Multi-page click-thru** with hash routing — open `index.html` and navigate from the top bar or from any in-page CTA.

## Pages implemented (v1)

| Route | Page | State |
|---|---|---|
| `#home` | **Inicio** — hero · problema · método · líneas de negocio · segmentos · KPIs · CTA · blog · FAQ | Full |
| `#suelo` | **Altaria Suelo** — qué resolvemos · qué entregamos · expediente sample · CTA | Full |
| `#oport` | **Oportunidades** — catálogo con filtros (tipo / provincia / estado / riesgo) | Full |
| `#contacto` | **Contacto / Diagnóstico** — formulario completo con consentimiento RGPD | Full |
| `#desarrollo` | Altaria Desarrollo | Stub (placeholder template) |
| `#comerc` | Altaria Comercialización | Stub |
| `#gestoras` | Gestoras de Cooperativas | Stub |
| `#compradores` | Compradores finales | Stub |
| `#blog` | Blog & estudios | Lista de 6 posts ficticios |

All stubs use the same shared `PlaceholderPage` component, so they're already on-brand and easy to expand.

## Component library

Under `components/`, exported on `window` so every script-tag file shares them:

**`primitives.jsx`** — `Button` · `Eyebrow` · `StatusBadge` (go/hold/no-go) · `ScoreBadge` · `Field` · `Select` · `Checkbox` · `Logo` · `Disclaimer` · `Reveal` (scroll-in animation) · `Icon` (inline Lucide-style set).

**`nav.jsx`** — `Navbar` (sticky, blurred marfil, mobile burger) · `Footer` (dark grafito, 5-column).

**`blocks.jsx`** — `ExpedienteCard` (signature dossier card with parcel-map thumbnail) · `ServiceCard` · `SegmentCard` · `OpportunityCard` · `BlogCard` · `KPIBlock` · `ProcessTimeline` · `FAQAccordion`.

## Mock data

- **3 oportunidades canónicas del brief** + 3 ampliaciones (6 total).
- **6 artículos de blog** ficticios.
- Formulario de contacto totalmente operativo a nivel UI (envío simulado, pantalla de confirmación).

## What's intentionally not here

- No backend / CRM connection (per brief — only modeled at the form level).
- No real opportunity detail page (clicking opens nothing — would need its own template).
- No login / member area.
- No `/sobre` page (stubbed in nav but not implemented).

## How to extend

- Add a route: drop a `<Component>Page.jsx` in `pages/`, export to `window`, register in `app.jsx` ROUTES.
- New section blocks: prefer building on `SegmentCard`, `ServiceCard` or `ExpedienteCard` rather than inventing new patterns — those three carry the brand.
- Color overrides: never inline-color; always use a CSS var from `colors_and_type.css`.
- Copy edits: text is plain in JSX strings, directly editable in the chat-driven editor.

## Tech notes

- React 18 via UMD CDN.
- Babel Standalone for in-browser JSX (prototype only — pre-compile for production).
- No bundler. No Tailwind. Pure CSS using the design tokens.
- All assets reference `../../assets/` (project root).
