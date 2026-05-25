# Altaria Urbana — Design System

> **Estructuramos oportunidades inmobiliarias.**
> Suelo, activos y proyectos explicados con claridad para que el mercado pueda decidir.

This is the complete brand & design system for **Altaria Urbana**, a Spanish real-estate strategic development firm. It contains tokens (color, type, spacing), brand assets (logos, identity), content/tone guidelines, and a high-fidelity UI kit recreating the Altaria Urbana website.

---

## What Altaria Urbana is

Altaria Urbana is **not** a traditional real-estate agency. It positions itself as a **layer of intelligence, analysis and structured commercialization** between the opaque real-estate asset and the professional decision. The firm structures land, assets and projects so that owners, developers, investors and housing-cooperative management companies (*gestoras de cooperativas*) can understand, analyze, market and execute them with less uncertainty.

**Tagline (corporate):** *Suelo, hogar y futuro.*
**Claim (commercial):** *Estructuramos oportunidades inmobiliarias.*
**Domain:** altariaurbana.com (planned)
**Geography:** Spain — Andalucía focus (Bahía de Cádiz, Sevilla área metropolitana).

### Audience segments
1. **Propietarios** — landowners wanting to order their asset before selling.
2. **Promotores** — developers who want filed dossiers, not noise.
3. **Inversores** — investors evaluating scenarios, risks, plan B.
4. **Gestoras de Cooperativas** — cooperative-housing managers needing filtered land + end buyers.
5. **Compradores finales** — end buyers interested in cooperative housing.

### Service lines
- **Altaria Suelo** — land sourcing, analysis, structuring, commercialization.
- **Altaria Desarrollo** — urbanistic / economic / commercial viability studies.
- **Altaria Comercialización** — dossiers, landings, B2B campaigns, CRM, follow-up.
- **Gestoras de Cooperativas** — filtered land + end-buyer pipeline.

### Source materials (provided)
- `uploads/ALTARIA_URBANA_BRIEF_CLAUDE_DESIGN.md` — full design + product brief (architecture of pages, copy, forms, data model, components, mock data).
- `uploads/Altaria_Mini_Brand_Book.txt` — brand DNA, positioning, color palette, typography, logo rules.
- `uploads/Identidad corporativa minimalista ALTARIA.png` — visual identity sheet (logo variants, color palette, applications).
- `uploads/Imagen portada rrss.png` — social-media cover render (urban / parcelling reference).
- `uploads/index.html.txt` — **NOT used** (unrelated VEX hero specification; flagged as irrelevant during exploration).

No codebase, Figma file or live site existed at design time. All UI in this system is built from the brief + brand book.

---

## CONTENT FUNDAMENTALS

**Language.** Spanish (Spain). Castellano sobrio. No anglicismos innecesarios. Some bilingual technical terms are kept (*data room*, *scoring*, *checklist*) because the audience uses them.

**Voice.** *Firme, clara, ambiciosa, confiable.* Like a senior consultant who has seen many bad dossiers and refuses to add to the pile. Honest about uncertainty, allergic to hype.

**Tone.** Sobrio, directo, sereno, con visión de largo plazo. Never excited, never urgent. Confident through precision, not adjectives.

**Person.** Default to **nosotros** ("Estructuramos…", "Ordenamos…") — the firm as a team. Use **tú** (informal) when addressing the reader directly in CTAs ("¿Tienes un suelo que el mercado no está entendiendo?"). Never *usted*; never *vosotros*.

**Casing.** Sentence case for headings and buttons. UPPERCASE reserved for eyebrows and category labels (`EXPEDIENTE ALTARIA`, `GO / HOLD / NO-GO`). Title Case is never used.

**Punctuation.** Spanish punctuation including ¿ ¡. Em dashes — like this — used sparingly for clarifying asides. Lists prefer single-noun openers ("Captamos.", "Ordenamos.", "Analizamos.").

**Sentence shape.**
- Headlines: declarative, complete sentences, no orphan adjectives. *"De activo confuso a expediente comercializable."*
- Subheads: explain the method, not the benefit. *"Ordenamos suelo, activos y proyectos con criterio técnico, trazabilidad documental y visión comercial."*
- Body copy: prefers verbs over nouns. "Reducimos el ruido" beats "Reducción del ruido".

**Emoji & symbols.** **Never.** No emoji anywhere — neither in marketing copy nor in UI. The closest thing is the **Go / Hold / No-Go** status badge (a colored dot + label).

**Numbers & metrics.** Always honest, always framed as *methodology*, never as promises:
- ✓ `0–48 h: triage inicial`, `7–10 días: ficha preliminar`, `14–21 días: dossier completo`
- ✓ `100% trazabilidad documental`
- ✗ Never `+200% rentabilidad`, `mejor oportunidad del mercado`, `rentabilidad garantizada`.

Every quantitative claim that could be read as a promise carries a legal disclaimer immediately below (see Disclaimers).

**Disclaimers (required).** Any opportunity, KPI or projection on the site must be paired with a legal note. Boilerplate:
> *La información presentada por Altaria Urbana tiene carácter preliminar, orientativo y no vinculante. Toda oportunidad queda sujeta a verificación documental, urbanística, jurídica, técnica y comercial.*

**Words to avoid.**
- *"Garantizado", "exclusivo", "única oportunidad", "rentabilidad asegurada"* (legal risk + tone mismatch)
- *"Tu casa de tus sueños", "tejado", "llaves en mano"* (traditional-realtor cliché)
- *"Disruptivo", "innovador", "sinergias"* (consultancy-speak hype)

**Words we own.** *Estructurar · ordenar · trazabilidad · expediente · ficha · dossier · scoring · Go / Hold / No-Go · viabilidad · criterio · oportunidad · encaje urbanístico*.

### Worked examples

| Type | Bad | Altaria |
|---|---|---|
| Hero headline | "Tu próxima inversión te espera" | "Estructuramos oportunidades inmobiliarias para que el mercado pueda decidir." |
| Service card | "Vendemos suelo rápido" | "Suelo mejor ordenado, mejor explicado y mejor dirigido." |
| CTA button | "¡Empieza ahora!" | "Solicitar diagnóstico" |
| Status | "Disponible 🔥" | "Estado: Dossier preliminar" |
| Metric | "+50% más rápido" | "0–48 h: triage inicial" |

---

## VISUAL FOUNDATIONS

### Mood
*Consultora estratégica · firma de arquitectura · PropTech sobria · dossier institucional.* Closer to a JLL / Arup report than to Idealista or a developer landing page.

### Color
- **Grafito Mineral `#263238`** dominates: text, primary buttons, dark sections. Treat as the brand's "black".
- **Marfil Técnico `#F5F1EA`** is the canvas. White (`#FFFFFF`) is rare — only inside elevated cards over arena bands.
- **Tierra Profunda `#6E5A46`** is the accent: eyebrows, link underlines, the brown of the logo's terrain band, hover affordances.
- **Arena Cálida `#D8CCBB`** is the transition tone — section bands, muted backgrounds, subtle dividers.
- **Verde Horizonte `#6F7F6A`** signals *habitabilidad / futuro / Go*. Used most sparingly. Never larger than grafito.

**Rules.** Grafito > marfil > tierra/arena > verde. Never invert the order. Never gradients (no purple-to-blue, no fades). The only allowed gradient is a hairline 1-stop fade for image protection (top of full-bleed images, `rgba(38,50,56,0) → rgba(38,50,56,0.4)`).

**Status colors** (Go / Hold / No-Go) are tinted from the brand palette — `verde-horizonte`, a sand-mustard `#C2A661`, a terracotta `#9C5A4E`. Never traffic-light green/yellow/red.

### Typography
Brand spec calls for **Söhne** (sans) + **Tiempos Text** (serif). Both are paid; the brand book itself recommends **Manrope + Literata** as the free substitutes — that's what we ship with. Numerics use **JetBrains Mono** for tabular figures in dossier cards.

Hierarchy: serif (Literata) handles **display, h1, h2, blockquotes, opener moments**; sans (Manrope) handles **h3 onwards, all UI, body text**. The two are paired vertically — never serif and sans on the same line as decorative juxtaposition.

Letter-spacing: subtle negative tracking (`-0.012em` on h1, `-0.015em` on display) for editorial poise. Eyebrows use heavy positive tracking (`0.16em`) and UPPERCASE.

### Spacing & layout
4 / 8 / 12-column grids with **generous whitespace**. Section vertical padding is `--space-9` (96px) at desktop, `--space-7` (48px) on mobile. The brand book is explicit: *"Mucho espacio en blanco."*

Page max width: **1240px**. Container padding clamps from 20px (mobile) to 48px (desktop). Multi-column blocks default to gap `--space-6` (32px).

### Backgrounds
- **Default**: flat marfil. No texture.
- **Section breaks**: arena cálida tinted band (`--arena-40`), no shadow.
- **Patterns** (sparingly): hairline parcel/topographic vector overlays at low opacity (~6%). Always vector, never raster.
- **Dark sections**: solid grafito mineral. White text. Used 1–2 times per page max (hero alt variant, CTA section).
- **Full-bleed images**: only renders or honest architectural photography. Warm light, natural materials, human scale. Never stock skylines or generic agency photos.

### Animation
- Minimal. Page is mostly static.
- Allowed: gentle fade-up on first-paint section entry (~`420ms ease-standard`, 12px translate), tab transitions, accordion expand. No bounces, no parallax, no marquee, no auto-playing carousels.
- Hover: opacity / color shift only, never scale or rotation.
- Standard easing: `cubic-bezier(0.2, 0.6, 0.2, 1)`. Standard duration: `220ms`.

### Hover & press states
- **Primary button (grafito)**: hover → tierra-profunda fill. Press → grafito-90.
- **Secondary (outlined)**: hover → fill grafito, text marfil. Press → grafito-90.
- **Card**: hover → border darkens (`line` → `line-strong`), shadow steps from `--shadow-1` to `--shadow-2`. No translate.
- **Link**: hover → underline color shifts to tierra-profunda.

### Borders & dividers
- **Default border**: `1px solid var(--line)` (#D8D2C8 — gris-linea). All cards, inputs, tables.
- **Strong divider**: `1px solid var(--line-strong)` (#B6AE9F). Used on page-section separators.
- **Hairlines on dark**: `1px solid var(--line-on-inverse)` (#3D4A51).
- Border radii are restrained: 4–10px for buttons & cards, 14px for large containers, **never pill / never circle** except on the small Go/Hold/No-Go dot.

### Shadows
Three steps only — all mineral (grafito-tinted, no warmth, no glow):
- `--shadow-1`: 1px hairline + faint 2px halo (resting card)
- `--shadow-2`: 4px / 16px (hovered card)
- `--shadow-3`: 12px / 32px (modal, opened dossier)

No inner shadows. No drop-shadows on text. No blurry colored glows.

### Transparency & blur
Almost never. The only allowed use is the **image-protection gradient** at the top of full-bleed dark imagery (so a navbar with light text remains legible). No frosted-glass cards, no `backdrop-filter`. The "liquid glass" effect in the (unrelated) provided `index.html.txt` is **not** Altaria's style and is excluded.

### Imagery direction
- Warm natural light. Materials honest (stone, sand, vegetation, concrete).
- Human scale. People sometimes, never posed, never stock-smiling.
- No skylines. No keys. No little house icons. No drone shots of generic cities.
- Renders preferred over photos when showing future projects — but realistic, sober renders (cf. `assets/altaria-portada-rrss.png`), not glossy hyperrealism.

### Cards (the most-used element)
- Background: `--bg-elevated` (`#FAF8F4`).
- Border: `1px solid var(--line)`.
- Radius: `--radius-card` (8px).
- Shadow: `--shadow-1` resting, `--shadow-2` hovered.
- Padding: `--space-5` (24px) or `--space-6` (32px).
- Internal hierarchy: optional eyebrow → serif h3 → sans body → tertiary metadata row at bottom (separated by hairline).

### "Expediente Altaria" card pattern
A recurring motif in the brand. It's a card styled like a real dossier sheet:
- Eyebrow `EXPEDIENTE ALTARIA · 0823`
- Stack of label/value rows separated by hairlines
- A **Go / Hold / No-Go** badge in the footer
- Optionally a tiny parcel-map thumbnail in the upper-right corner

This pattern shows up on the home hero, in opportunity listings, in dossier previews. It is the brand's signature UI motif.

---

## ICONOGRAPHY

**System.** **Lucide** (lucide.dev) via CDN — chosen because its stroke weight, geometry and signage feel match the brand book's directive: *"iconografía lineal geométrica, más cercana a señalética arquitectónica que a iconos de app"*. Stroke weight: **1.5px**. Size defaults: **16, 20, 24px**.

> **⚠ Substitution flagged.** The brand book describes the icon style but doesn't ship an icon font or sprite. Lucide is the closest match (linear, geometric, signage-like, consistent 1.5px stroke). If you have a custom icon set, drop SVGs into `assets/icons/` and update `colors_and_type.css` / UI kit references.

**Color.** Always inherit `currentColor`. In light contexts: `--fg-1` (grafito) or `--fg-2`. In dark contexts: `--fg-on-inverse`. Accent (`--tierra-profunda`) only on a tiny number of micro-affordances (CTA arrow).

**Emoji.** Never used. Anywhere. (See Content Fundamentals.)

**Unicode characters as glyphs.** Allowed only for typographic marks: `→` (right arrow, used in CTAs and breadcrumbs), `·` (middle dot, separator in eyebrows: `OPORTUNIDADES · CÁDIZ`), `—` (em dash), `↓` (download), `↗` (external link). These are always Manrope, never icon-replacements.

**Logos.** See `assets/`:
- `altaria-logo-horizontal-color.png` — primary horizontal imagotipo (light backgrounds).
- `altaria-isotipo.png` — isotipo only (favicon, avatar, square contexts).
- `altaria-logo-monochrome.png` — single-color version (technical docs).
- `altaria-logo-on-dark.png` — application on dark background (the *aplicación sobre fondo oscuro* version).
- `altaria-logo-horizontal.png` — large hero version (high-res).
- `altaria-brand-book-full.png` — full identity sheet (reference).
- `altaria-portada-rrss.png` — social-media cover image / hero candidate (urbanism render).

**Logo rules** (from brand book):
- Horizontal imagotipo is the default everywhere.
- Safety margin = the inner height of the *A* glyph. Never crop closer.
- Below a certain size the strapline (`SUELO, HOGAR Y FUTURO.`) is dropped before further reduction; below that, isotipo only.
- Do not recolor. Do not deform. Do not place over noisy / low-contrast backgrounds.

---

## File index

```
/
├── README.md                       — this file
├── colors_and_type.css             — design tokens + semantic element styles
├── SKILL.md                        — Agent Skill manifest (Claude Code compatible)
│
├── assets/                         — brand assets (logos, identity sheet, imagery)
│   ├── altaria-logo-horizontal-color.png
│   ├── altaria-isotipo.png
│   ├── altaria-logo-monochrome.png
│   ├── altaria-logo-on-dark.png
│   ├── altaria-logo-horizontal.png
│   ├── altaria-brand-book-full.png
│   └── altaria-portada-rrss.png
│
├── preview/                        — Design System tab cards
│   ├── logo.html
│   ├── colors-primary.html
│   ├── colors-semantic.html
│   ├── colors-status.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-scale.html
│   ├── spacing.html
│   ├── radius-shadow.html
│   ├── buttons.html
│   ├── inputs.html
│   ├── card-expediente.html
│   ├── status-badges.html
│   ├── iconography.html
│   └── ...
│
├── ui_kits/
│   └── altaria-web/                — Altaria Urbana website (high-fi prototype)
│       ├── README.md
│       ├── index.html              — interactive multi-page navigation
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── Hero.jsx
│       │   ├── ExpedienteCard.jsx
│       │   ├── ServiceCard.jsx
│       │   ├── SegmentCard.jsx
│       │   ├── ProcessTimeline.jsx
│       │   ├── KPIBlock.jsx
│       │   ├── OpportunityCard.jsx
│       │   ├── BlogCard.jsx
│       │   ├── FAQAccordion.jsx
│       │   ├── ContactForm.jsx
│       │   ├── StatusBadge.jsx
│       │   ├── ScoreBadge.jsx
│       │   ├── Button.jsx
│       │   ├── Field.jsx
│       │   └── LegalDisclaimer.jsx
│       └── pages/
│           ├── Home.jsx
│           ├── AltariaSuelo.jsx
│           ├── Oportunidades.jsx
│           └── Contacto.jsx
```

No `slides/` directory — no deck template was provided.
No code-import was available, so all UI is built from brief + brand book.

---

## CAVEATS

- **Fonts substituted.** Söhne → Manrope. Tiempos Text → Literata. The brand book explicitly recommends these free alternatives, but if/when you license the originals, drop the `.woff2` files in `fonts/` and update the `@font-face` blocks in `colors_and_type.css`.
- **Icons substituted.** No custom icon set was provided; using Lucide via CDN as the closest geometric/signage match. Replace with your own if you commission one.
- **Logo rasters.** Logos are cropped from the identity-sheet PNG, not from native vector files. For production, the brand book notes the logo "should be redrawn in vector before registration, final web or signage" — please supply SVGs when available.
- **The provided `uploads/index.html.txt` describes an unrelated brand called VEX** (liquid-glass hero, video background). It was ignored as not applicable to Altaria Urbana. Flagged in case it was attached by mistake.
- **No live codebase or Figma** existed. The UI kit is a fresh, brief-driven recreation — not a copy of an existing screen. Iterate from here.
