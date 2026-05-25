// ============================================================
// Altaria Urbana — placeholder pages
// Compact stubs for routes not in the v1 priority set
// (Desarrollo, Comercialización, Gestoras, Compradores, Blog, Sobre)
// ============================================================

function PlaceholderPage({ navigate, eyebrow, title, lead, services = [], bullets = [], cta }) {
  return (
    <main>
      <section className="page-hero topo-bg">
        <div className="container">
          <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ marginTop: 18, maxWidth: 920 }}>{title}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ maxWidth: 720, marginTop: 22 }}>{lead}</p>
          </Reveal>
          {cta ? (
            <Reveal delay={240}>
              <div style={{ marginTop: 32 }}>
                <Button variant="primary" size="lg" onClick={() => navigate("contacto")} icon={<Icon name="arrow" size={16}/>}>
                  {cta}
                </Button>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      {services.length ? (
        <section className="section section--muted">
          <div className="container">
            <div className="section-head">
              <div className="ix">Qué incluye</div>
              <h2>Entregables y método.</h2>
            </div>
            <div className="ph-grid">
              {services.map((s, i) => (
                <Reveal key={i}><SegmentCard index={String(i + 1).padStart(2, "0")} segment={s.t} line={s.b} /></Reveal>
              ))}
            </div>
          </div>
          <style>{`.ph-grid { display: grid; grid-template-columns: repeat(${Math.min(services.length, 4)}, 1fr); gap: 14px; } @media (max-width: 900px) { .ph-grid { grid-template-columns: 1fr 1fr; } }`}</style>
        </section>
      ) : null}

      {bullets.length ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="ix">Análisis incluido</div>
              <h2>Lo que estudiamos antes de recomendar Go / Hold / No-Go.</h2>
            </div>
            <ul className="ph-list">
              {bullets.map((b, i) => (
                <li key={i}><span className="ix">{String(i + 1).padStart(2, "0")}</span><span>{b}</span></li>
              ))}
            </ul>
          </div>
          <style>{`.ph-list { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--line-strong); max-width: 720px; } .ph-list li { display: grid; grid-template-columns: 60px 1fr; gap: 16px; padding: 16px 4px; border-bottom: 1px solid var(--line); font-size: 16px; color: var(--fg-1); } .ph-list .ix { font-family: var(--font-mono); font-size: 12px; color: var(--tierra-profunda); letter-spacing: 0.1em; padding-top: 4px; }`}</style>
        </section>
      ) : null}

      {cta ? (
        <section className="section">
          <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
            <Button variant="primary" size="lg" onClick={() => navigate("contacto")} icon={<Icon name="arrow" size={16}/>}>{cta}</Button>
            <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
              <Disclaimer>
                Altaria no sustituye la validación técnica, jurídica o administrativa definitiva. Nuestro trabajo ordena hipótesis, riesgos y escenarios para acelerar la decisión profesional.
              </Disclaimer>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

function DesarrolloPage({ navigate }) {
  return (
    <PlaceholderPage
      navigate={navigate}
      eyebrow="Línea de negocio · 02"
      title="Convertimos incertidumbre en escenarios de decisión."
      lead="Estudios de viabilidad urbanística, económica, comercial y operativa para entender qué puede hacerse con un activo y qué riesgos deben resolverse antes de avanzar."
      bullets={[
        "Situación urbanística y planeamiento aplicable",
        "Usos compatibles y limitaciones",
        "Edificabilidad estimada y aprovechamiento",
        "Riesgos y condicionantes documentales",
        "Escenarios de producto y plan B",
        "Comparables de mercado",
        "Cronograma preliminar",
        "Recomendación Go / Hold / No-Go",
      ]}
      cta="Solicitar estudio preliminar"
    />
  );
}

function ComercPage({ navigate }) {
  return (
    <PlaceholderPage
      navigate={navigate}
      eyebrow="Línea de negocio · 03"
      title="No basta con publicar. Hay que preparar la operación para que el comprador correcto la entienda."
      lead="Dossiers, landings de oportunidad, campañas B2B selectivas, CRM de contactos y seguimiento estructurado con promotores, inversores y operadores."
      services={[
        { t: "Dossier comercial", b: "Narrativa, escenarios y comparables." },
        { t: "Landing de oportunidad", b: "Página dedicada con seguimiento de leads." },
        { t: "Campaña B2B selectiva", b: "Identificación y contacto del comprador objetivo." },
        { t: "CRM y reporting", b: "Pipeline, scoring y reporte semanal de avance." },
      ]}
      cta="Preparar comercialización"
    />
  );
}

function GestorasPage({ navigate }) {
  return (
    <PlaceholderPage
      navigate={navigate}
      eyebrow="Solución especializada"
      title="Suelo filtrado y compradores finales para gestoras de cooperativas."
      lead="Ayudamos a gestoras de cooperativas a encontrar, analizar y presentar suelo viable, con la posibilidad de aportar pipeline de compradores finales interesados."
      services={[
        { t: "Ficha preliminar cooperativa", b: "Encaje urbanístico, edificabilidad útil, riesgos y tipología posible." },
        { t: "Dossier cooperativo", b: "Escenarios, cronograma, comparables, plan B y narrativa para decisión." },
        { t: "Captación de compradores", b: "Landing, formulario, base de datos, scoring y seguimiento." },
        { t: "Soporte técnico-comercial", b: "Un puente entre suelo, mercado, gestora y comprador final." },
      ]}
      cta="Quiero recibir suelo filtrado"
    />
  );
}

function CompradoresPage({ navigate }) {
  return (
    <PlaceholderPage
      navigate={navigate}
      eyebrow="Vivienda cooperativa"
      title="Accede a futuros proyectos de vivienda cooperativa con información clara desde el inicio."
      lead="Apúntate a la lista de interés para recibir proyectos filtrados según tu zona, presupuesto y tipo de vivienda. Sin presión comercial y con información honesta de cada fase."
      services={[
        { t: "Precio potencialmente ajustado", b: "Acceso a vivienda a precio de coste con transparencia." },
        { t: "Participación en decisiones", b: "Modelo cooperativo con voz en cada fase." },
        { t: "Información estructurada", b: "Cronograma, riesgos y compromisos explicados desde el inicio." },
        { t: "Comunidad desde el inicio", b: "Vecinos identificados antes de la entrada." },
      ]}
      cta="Apuntarme a la lista de interés"
    />
  );
}

function BlogPage({ navigate }) {
  const posts = [
    { c: "Guías para propietarios", t: "Qué documentación debe tener un suelo antes de salir al mercado", e: "Una checklist práctica para evitar que una oportunidad se bloquee por falta de información básica.", d: "May 2026", r: "6 min" },
    { c: "Promotores", t: "Por qué un promotor descarta una oportunidad en menos de cinco minutos", e: "Los criterios mínimos que necesita un comprador profesional para seguir analizando.", d: "Abr 2026", r: "4 min" },
    { c: "Metodología", t: "Ficha preliminar, dossier y data room: diferencias clave", e: "Tres niveles de información para convertir activos opacos en decisiones ordenadas.", d: "Abr 2026", r: "8 min" },
    { c: "Cooperativas", t: "Cuándo un suelo encaja para una cooperativa de viviendas", e: "Factores urbanísticos, económicos y comerciales que una gestora debe revisar.", d: "Mar 2026", r: "7 min" },
    { c: "Viabilidad", t: "Go, Hold o No-Go: cómo decidir antes de invertir más tiempo", e: "Un sistema simple para no confundir intuición con oportunidad real.", d: "Mar 2026", r: "5 min" },
    { c: "Comercialización", t: "Comercialización estructurada: más allá de publicar un anuncio", e: "Cómo preparar una narrativa, un target y un seguimiento profesional.", d: "Feb 2026", r: "6 min" },
  ];
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Reveal><Eyebrow>Estudios · análisis · guías</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ marginTop: 18, maxWidth: 900 }}>
              Mirar el suelo con criterio antes que con prisa.
            </h1>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="bp-grid">
            {posts.map((p, i) => (
              <BlogCard key={i} category={p.c} title={p.t} excerpt={p.e} date={p.d} readTime={p.r}/>
            ))}
          </div>
        </div>
        <style>{`.bp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 56px; } @media (max-width: 820px) { .bp-grid { grid-template-columns: 1fr; } }`}</style>
      </section>
    </main>
  );
}

Object.assign(window, { DesarrolloPage, ComercPage, GestorasPage, CompradoresPage, BlogPage });
