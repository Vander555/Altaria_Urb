// ============================================================
// Altaria Urbana — Altaria Suelo page
// ============================================================

function SueloPage({ navigate }) {
  return (
    <main>
      <section className="page-hero topo-bg">
        <div className="container">
          <Reveal><Eyebrow>Línea de negocio · 01</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ marginTop: 18, maxWidth: 920 }}>
              Suelo mejor ordenado, mejor explicado y mejor dirigido.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ maxWidth: 720, marginTop: 24 }}>
              Captamos, analizamos y estructuramos suelo residencial, terciario, urbanizable o finalista para convertirlo en una oportunidad legible para propietarios, promotores e inversores.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" onClick={() => navigate("contacto")} icon={<Icon name="arrow" size={16}/>}>
                Analizar mi suelo
              </Button>
              <Button variant="secondary" size="lg" onClick={() => navigate("oport")}>
                Ver oportunidades
              </Button>
            </div>
          </Reveal>
        </div>
        <style>{`.page-hero { padding-block: clamp(56px, 8vw, 96px); position: relative; }`}</style>
      </section>

      {/* QUÉ RESOLVEMOS */}
      <section className="section section--muted">
        <div className="container">
          <div className="section-head">
            <div className="ix">01 · Qué resolvemos</div>
            <h2>Los cinco bloqueos más comunes del suelo en venta.</h2>
          </div>
          <div className="suelo-resolve">
            {[
              { i: "01", t: "Suelos sin relato comercial", b: "Activos con potencial real que llegan al mercado sin una narrativa que el comprador profesional pueda procesar." },
              { i: "02", t: "Documentación incompleta", b: "Notas simples, catastro, planeamiento y cargas dispersos. La operación se cae en cuanto alguien pide la carpeta." },
              { i: "03", t: "Precio sin defensa", b: "Cifras sin comparables, sin escenario de salida y sin método. El comprador entiende rápido que no se sostiene." },
              { i: "04", t: "Comprador objetivo mal definido", b: "Se enseña a todos sin criterio. Termina llegando a quien no es y nunca a quien sí." },
              { i: "05", t: "Falta de estrategia de salida", b: "Sin plan B, sin secuencia, sin reporting. La operación se diluye con el tiempo." },
            ].map(c => (
              <Reveal key={c.i}>
                <SegmentCard index={c.i} segment={c.t} line={c.b} />
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`.suelo-resolve { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; } @media (max-width: 1080px) { .suelo-resolve { grid-template-columns: 1fr 1fr 1fr; } } @media (max-width: 720px) { .suelo-resolve { grid-template-columns: 1fr; } }`}</style>
      </section>

      {/* QUÉ ENTREGAMOS */}
      <section className="section">
        <div className="container suelo-deliver">
          <div>
            <div className="section-head" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
              <div className="ix">02 · Qué entregamos</div>
              <h2 style={{ margin: 0 }}>Siete entregables que convierten un activo en un expediente.</h2>
            </div>
            <p className="lead" style={{ maxWidth: 480 }}>
              Cada entregable está pensado para que un comprador profesional lo pueda leer y decidir en una sola sesión.
            </p>
          </div>
          <ol className="suelo-list">
            {[
              "Ficha de activo",
              "Checklist documental",
              "Análisis preliminar",
              "Scoring de oportunidad",
              "Data room",
              "Dossier comercial",
              "Estrategia de contacto a compradores",
            ].map((it, i) => (
              <li key={i}>
                <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                <span>{it}</span>
              </li>
            ))}
          </ol>
        </div>
        <style>{`
          .suelo-deliver { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-8); align-items: start; }
          @media (max-width: 920px) { .suelo-deliver { grid-template-columns: 1fr; } }
          .suelo-list { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--line-strong); }
          .suelo-list li { display: grid; grid-template-columns: 64px 1fr; gap: 16px; padding: 18px 4px; border-bottom: 1px solid var(--line); font-size: 17px; color: var(--fg-1); align-items: center; }
          .suelo-list .ix { font-family: var(--font-mono); font-size: 12px; color: var(--tierra-profunda); letter-spacing: 0.1em; }
        `}</style>
      </section>

      {/* SAMPLE EXPEDIENTE */}
      <section className="section section--inverse">
        <div className="container">
          <div className="section-head">
            <div className="ix" style={{ color: "var(--arena-calida)" }}>03 · Ejemplo de expediente</div>
            <h2 style={{ color: "var(--fg-on-inverse)" }}>Un activo, una página, una decisión.</h2>
          </div>
          <div className="suelo-sample">
            <div>
              <p className="lead" style={{ color: "var(--fg-on-inverse-2)", maxWidth: 500 }}>
                Cada ficha responde a las cinco preguntas que un promotor o un inversor hace antes de seguir analizando: qué es, dónde está, qué se puede hacer, qué riesgos tiene y cuál es el siguiente paso.
              </p>
              <ul className="suelo-checklist">
                {[
                  "Ubicación, superficie y referencia catastral",
                  "Encaje urbanístico preliminar y usos compatibles",
                  "Riesgos documentales identificados",
                  "Comprador objetivo y narrativa comercial",
                  "Recomendación Go / Hold / No-Go",
                ].map((c, i) => (
                  <li key={i}><Icon name="check" size={16} color="var(--arena-calida)"/><span>{c}</span></li>
                ))}
              </ul>
            </div>
            <ExpedienteCard
              refCode="EA-0824"
              date="22.05.26"
              title="Suelo finalista urbanizable, sector SUS-2"
              rows={[
                { k: "Municipio", v: "Sevilla (área metro.)" },
                { k: "Superficie", v: "18.200 m²" },
                { k: "Edificabilidad estimada", v: "0,9 m²/m²" },
                { k: "Comprador objetivo", v: "Promotor / Cooperativa" },
                { k: "Riesgo documental", v: "Bajo" },
              ]}
              status="go"
              score={84}
            />
          </div>
        </div>
        <style>{`
          .suelo-sample { display: grid; grid-template-columns: 1fr 420px; gap: var(--space-8); align-items: center; }
          @media (max-width: 980px) { .suelo-sample { grid-template-columns: 1fr; } }
          .suelo-checklist { list-style: none; padding: 0; margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }
          .suelo-checklist li { display: flex; gap: 12px; color: var(--fg-on-inverse-2); font-size: 14.5px; align-items: flex-start; }
          .suelo-checklist svg { margin-top: 2px; flex-shrink: 0; }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2>¿Tienes suelo que merece un dossier en vez de un anuncio?</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Revisamos el activo, identificamos los bloqueos y proponemos el siguiente paso con honestidad.
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate("contacto")} icon={<Icon name="arrow" size={16}/>}>
            Analizar mi suelo
          </Button>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
            <Disclaimer>
              La información presentada por Altaria Urbana tiene carácter preliminar, orientativo y no vinculante. Toda oportunidad queda sujeta a verificación documental, urbanística, jurídica, técnica y comercial.
            </Disclaimer>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { SueloPage });
