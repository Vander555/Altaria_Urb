---
name: altaria-urbana-design
description: Use this skill to generate well-branded interfaces and assets for Altaria Urbana — a Spanish real-estate strategic-development firm that structures land, assets and opportunities for owners, developers, investors and housing-cooperative managers. Contains essential design guidelines (colors, type, fonts, iconography), brand assets (logos, identity), content/tone rules in Spanish, and a UI kit recreating the Altaria Urbana website. Use for both production code and throwaway prototypes/mocks.
user-invocable: true
---

# Altaria Urbana — design skill

You are about to design for **Altaria Urbana**. Before producing anything:

1. **Read `README.md`** in this skill. It contains the company context, the CONTENT FUNDAMENTALS (voice, tone, casing, words to use and avoid — Spanish, *castellano sobrio*), the VISUAL FOUNDATIONS (color, type, spacing, motion, hover/press, cards, "Expediente Altaria" signature pattern) and the ICONOGRAPHY rules.
2. **Inspect `colors_and_type.css`** — every token (`--grafito-mineral`, `--tierra-profunda`, `--arena-calida`, `--marfil-tecnico`, `--verde-horizonte`, plus full semantic / spacing / shadow / motion vars and `h1…body` styles). Use these; never invent colors or font sizes.
3. **Look at `ui_kits/altaria-web/`** — the website prototype + reusable React components (`ExpedienteCard`, `ServiceCard`, `OpportunityCard`, `KPIBlock`, `ProcessTimeline`, `FAQAccordion`, `Navbar`, `Footer`, etc.). Lift them directly when you can; only build new patterns if none exists.
4. **Check `assets/`** for logos. Use `altaria-logo-horizontal-color.png` by default; `altaria-logo-on-dark.png` on grafito backgrounds; `altaria-isotipo.png` for favicons/avatars.

## Output modes

- **Visual artifacts** (slides, mocks, throwaway prototypes, landing pages, dossier mocks): copy assets out of this skill into your output folder and produce static HTML (or HTML + JSX) that the user can open and view. Link `colors_and_type.css` directly.
- **Production code** (React + Tailwind, Next.js, etc.): copy assets and treat the tokens / rules in this skill as the source of truth. Convert tokens to Tailwind config or CSS-in-JS as needed, but keep the values identical.

## Non-negotiables

- **Language: Spanish (Spain).** Never English in user-facing copy unless the user is clearly anglophone.
- **No emoji.** Anywhere. Use the typographic glyph set (`→ · — ↓ ↗`) instead.
- **No promises.** No "rentabilidad garantizada", "mejor oportunidad", "exclusivo". Methodology language only.
- **No traditional-realtor tropes.** No houses, keys, skylines, sunsets, smiling-stock-couples.
- **Always pair quantitative claims with a `<Disclaimer>`** ("información preliminar, orientativa y no vinculante…").
- **The signature pattern is the *Expediente Altaria* card** — use it whenever you need to show an asset, opportunity, dossier, or "what we deliver" moment.

## If the user invokes this skill without further guidance

Ask them what they want to design or build (e.g. a new section for the web, a dossier template, a deck for investors, a landing for cooperative buyers). Ask 3–5 focused questions about audience, format, length, and whether they want variations. Then act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.
