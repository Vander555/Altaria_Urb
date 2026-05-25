// ============================================================
// Altaria Urbana — Oportunidades page (catálogo profesional)
// ============================================================

const { useState: useStateOp } = React;

const OPORTUNIDADES = [
  {
    id: 1, name: "Suelo residencial en área metropolitana",
    location: "Bahía de Cádiz", type: "Suelo residencial",
    status: "En análisis", surface: "12.400 m²", target: "Promotor / Gestora",
    risk: "Medio", doc: "En revisión", score: 68, province: "Cádiz",
    summary: "Activo en fase de revisión documental con potencial para desarrollo residencial sujeto a validación urbanística.",
  },
  {
    id: 2, name: "Activo terciario con potencial asistencial",
    location: "Andalucía Occidental", type: "Suelo terciario",
    status: "Dossier preliminar", surface: "19.600 m² edif. est.", target: "Operador / Inversor",
    risk: "Medio", doc: "Preliminar", score: 72, province: "Sevilla",
    summary: "Oportunidad orientada a operador especializado, pendiente de validación técnica y comercial.",
  },
  {
    id: 3, name: "Proyecto cooperativo en estudio",
    location: "Sevilla área metropolitana", type: "Cooperativa",
    status: "Captación de interés", surface: "Por definir", target: "Compradores / Gestora",
    risk: "Pendiente", doc: "Inicial", score: 58, province: "Sevilla",
    summary: "Lista de interés para compradores finales interesados en vivienda cooperativa con información estructurada desde el inicio.",
  },
  {
    id: 4, name: "Suelo finalista urbanizable, sector SUS-2",
    location: "Sevilla (área metropolitana)", type: "Suelo residencial",
    status: "Dossier disponible", surface: "18.200 m²", target: "Promotor / Cooperativa",
    risk: "Bajo", doc: "Completo", score: 84, province: "Sevilla",
    summary: "Activo con encaje urbanístico validado y comparables identificados. Disponible dossier completo para análisis profesional.",
  },
  {
    id: 5, name: "Solar urbano consolidado en casco histórico",
    location: "Jerez de la Frontera", type: "Suelo residencial",
    status: "En análisis", surface: "2.180 m²", target: "Promotor boutique",
    risk: "Medio", doc: "En revisión", score: 64, province: "Cádiz",
    summary: "Parcela en zona consolidada con potencial de rehabilitación. Validación urbanística en curso.",
  },
  {
    id: 6, name: "Suelo mixto residencial-terciario",
    location: "Málaga periferia", type: "Mixto",
    status: "Triage inicial", surface: "8.900 m²", target: "Inversor patrimonialista",
    risk: "Alto", doc: "Sin documentos", score: 42, province: "Málaga",
    summary: "Activo con potencial latente pero carga documental significativa. Recomendación inicial: análisis previo a comercialización.",
  },
];

function OportunidadesPage({ navigate }) {
  const [filters, setFilters] = useStateOp({ type: "", province: "", status: "", risk: "", target: "" });
  const filtered = OPORTUNIDADES.filter(o =>
    (!filters.type || o.type === filters.type) &&
    (!filters.province || o.province === filters.province) &&
    (!filters.status || o.status === filters.status) &&
    (!filters.risk || o.risk === filters.risk)
  );
  const onChange = (k) => (e) => setFilters(f => ({ ...f, [k]: e.target.value }));

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Reveal><Eyebrow>Catálogo profesional · información preliminar</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ marginTop: 18, maxWidth: 900 }}>
              Oportunidades inmobiliarias estructuradas.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ maxWidth: 720, marginTop: 22 }}>
              Activos en distintas fases de análisis, estructuración o comercialización. No es un portal inmobiliario — cada oportunidad lleva detrás un expediente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTROS */}
      <section className="section section--tight section--muted">
        <div className="container">
          <div className="op-filters">
            <div className="op-filters__lbl"><Icon name="sliders" size={16}/> Filtros</div>
            <div className="op-filters__row">
              <Select name="type" options={["Suelo residencial", "Suelo terciario", "Mixto", "Cooperativa", "Inversión"]}
                value={filters.type} onChange={onChange("type")} label="" />
              <Select name="province" options={["Cádiz", "Sevilla", "Málaga", "Granada", "Córdoba"]}
                value={filters.province} onChange={onChange("province")} label="" />
              <Select name="status" options={["En análisis", "Dossier preliminar", "Dossier disponible", "Captación de interés", "Comercialización", "Triage inicial"]}
                value={filters.status} onChange={onChange("status")} label="" />
              <Select name="risk" options={["Bajo", "Medio", "Alto", "Pendiente"]}
                value={filters.risk} onChange={onChange("risk")} label="" />
              <button className="op-filters__clear" onClick={() => setFilters({ type: "", province: "", status: "", risk: "", target: "" })}>
                Limpiar
              </button>
            </div>
          </div>
          <div className="op-filters__count">
            {filtered.length} {filtered.length === 1 ? "oportunidad" : "oportunidades"} · ordenadas por score
          </div>
        </div>
        <style>{`
          .op-filters { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding-bottom: 18px; border-bottom: 1px solid var(--line); }
          .op-filters__lbl { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--tierra-profunda); display: inline-flex; align-items: center; gap: 8px; font-weight: 500; }
          .op-filters__row { display: flex; gap: 10px; flex-wrap: wrap; flex: 1; }
          .op-filters .field { flex: 1; min-width: 140px; }
          .op-filters .field__select { background: var(--blanco-calido); }
          .op-filters__clear { background: transparent; border: 0; color: var(--fg-2); font-size: 12.5px; cursor: pointer; padding: 8px 4px; }
          .op-filters__clear:hover { color: var(--fg-1); }
          .op-filters__count { font-family: var(--font-mono); font-size: 12px; color: var(--fg-3); letter-spacing: 0.06em; margin-top: 16px; }
        `}</style>
      </section>

      {/* GRID */}
      <section className="section">
        <div className="container">
          <div className="op-grid">
            {filtered.sort((a, b) => b.score - a.score).map(o => (
              <Reveal key={o.id}><OpportunityCard {...o} /></Reveal>
            ))}
          </div>
          <div style={{ marginTop: 56 }}>
            <Disclaimer>
              La información publicada es preliminar, no constituye oferta vinculante y está sujeta a verificación documental, urbanística, jurídica y comercial. Los activos pueden retirarse del catálogo sin previo aviso.
            </Disclaimer>
          </div>
        </div>
        <style>{`.op-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; } @media (max-width: 1080px) { .op-grid { grid-template-columns: 1fr 1fr; } } @media (max-width: 720px) { .op-grid { grid-template-columns: 1fr; } }`}</style>
      </section>
    </main>
  );
}

Object.assign(window, { OportunidadesPage });
