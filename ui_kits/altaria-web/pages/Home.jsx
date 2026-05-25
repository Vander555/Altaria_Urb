// ============================================================
// Altaria Urbana — Home page
// ============================================================

function HomePage({ navigate }) {
  return (
    <main>
      {/* HERO */}
      <section className="home-hero topo-bg">
        <div className="container home-hero__inner">
          <div className="home-hero__left">
            <Reveal><Eyebrow>Altaria Urbana · estructura inmobiliaria</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h1 className="display" style={{ marginTop: 18, marginBottom: 22 }}>
                Estructuramos oportunidades inmobiliarias para que el mercado pueda decidir.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="lead" style={{ maxWidth: 560, marginBottom: 32 }}>
                Ordenamos suelo, activos y proyectos con criterio técnico, trazabilidad documental y visión comercial para conectar propietarios, promotores, inversores y gestoras con oportunidades mejor preparadas.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button variant="primary" size="lg" onClick={() => navigate("contacto")} icon={<Icon name="arrow" size={16}/>}>
                  Solicitar diagnóstico inicial
                </Button>
                <Button variant="secondary" size="lg" onClick={() => navigate("suelo")}>
                  Ver cómo trabajamos
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={420} className="home-hero__right">
            <ExpedienteCard
              refCode="EA-0823"
              date="22.05.26"
              title="Suelo residencial en área metropolitana"
              rows={[
                { k: "Activo analizado", v: "Bahía de Cádiz" },
                { k: "Riesgo documental", v: "Medio" },
                { k: "Encaje urbanístico", v: "En revisión" },
                { k: "Comprador objetivo", v: "Promotor / Gestora" },
              ]}
              status="hold"
              score={68}
            />
          </Reveal>
        </div>
        <style>{`
          .home-hero { padding-block: clamp(64px, 10vw, 120px) clamp(56px, 10vw, 96px); position: relative; overflow: hidden; }
          .home-hero__inner { display: grid; grid-template-columns: 1.3fr 1fr; gap: var(--space-8); align-items: center; }
          @media (max-width: 980px) { .home-hero__inner { grid-template-columns: 1fr; } .home-hero__right { max-width: 420px; } }
        `}</style>
      </section>

      {/* PROBLEMA */}
      <section className="section section--muted">
        <div className="container">
          <div className="section-head">
            <div className="ix">01 · Problema de mercado</div>
            <h2>El problema no es solo encontrar suelo. Es entenderlo, documentarlo y convertirlo en una oportunidad real.</h2>
          </div>
          <p className="lead" style={{ maxWidth: 760, marginBottom: 48 }}>
            Muchos activos no avanzan porque llegan al mercado con información incompleta, precio mal defendido, urbanismo poco claro, documentación dispersa o una narrativa comercial débil. Altaria reduce ese ruido.
          </p>
          <div className="problem-grid">
            {[
              { i: "01", t: "Activos opacos", b: "Suelos con valor potencial que el mercado no entiende." },
              { i: "02", t: "Documentación dispersa", b: "Notas, planos, catastro, cargas y normativa sin ordenar." },
              { i: "03", t: "Decisiones lentas", b: "Promotores e inversores descartan rápido cuando falta claridad." },
              { i: "04", t: "Comercialización débil", b: "Publicar un activo no equivale a estructurar una oportunidad." },
            ].map(c => (
              <Reveal key={c.i}><SegmentCard index={c.i} segment={c.t} line={c.b} /></Reveal>
            ))}
          </div>
        </div>
        <style>{`.problem-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; } @media (max-width: 920px) { .problem-grid { grid-template-columns: 1fr 1fr; } }`}</style>
      </section>

      {/* QUÉ HACE ALTARIA — process */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="ix">02 · Método</div>
            <h2>De activo confuso a expediente comercializable.</h2>
          </div>
          <ProcessTimeline steps={[
            { title: "Captamos", body: "Identificamos activos, propietarios y oportunidades con potencial real, descartando ruido desde el primer contacto." },
            { title: "Ordenamos", body: "Centralizamos documentación, titularidad, catastro, planeamiento y cargas. Damos trazabilidad desde el primer expediente." },
            { title: "Analizamos", body: "Estudiamos escenarios, usos compatibles, compradores objetivo y viabilidad inicial. Hipótesis separadas de hechos." },
            { title: "Estructuramos", body: "Creamos fichas, dossiers, data rooms y la narrativa que necesita una decisión profesional." },
            { title: "Comercializamos", body: "Conectamos el activo con el promotor, inversor, gestora o comprador adecuado. Con seguimiento y reporting." },
          ]} />
        </div>
      </section>

      {/* LÍNEAS DE NEGOCIO */}
      <section className="section section--inverse">
        <div className="container">
          <div className="section-head">
            <div className="ix">03 · Líneas de negocio</div>
            <h2 style={{ color: "var(--fg-on-inverse)" }}>Una capa de inteligencia entre el activo y la decisión.</h2>
          </div>
          <div className="lines-grid">
            <ServiceCard tag="Altaria Suelo" title="Suelo mejor ordenado, mejor explicado, mejor dirigido."
              body="Captación, análisis, estructuración y comercialización de suelo residencial, terciario, urbanizable o finalista."
              cta="Ver Altaria Suelo" onClick={() => navigate("suelo")} />
            <ServiceCard tag="Altaria Desarrollo" title="Convertimos incertidumbre en escenarios de decisión."
              body="Estudios de viabilidad urbanística, económica, comercial y operativa para entender qué puede hacerse con un activo."
              cta="Ver Altaria Desarrollo" onClick={() => navigate("desarrollo")} />
            <ServiceCard tag="Altaria Comercialización" title="Preparamos la operación para que el comprador correcto la entienda."
              body="Dossiers, landings, campañas, CRM, contacto directo, negociación y seguimiento estructurado."
              cta="Ver Comercialización" onClick={() => navigate("comerc")} />
            <ServiceCard tag="Gestoras de Cooperativas" title="Suelo filtrado y compradores finales para gestoras."
              body="Suelo viable, fichas cooperativas, escenarios y captación de compradores finales para acelerar proyectos."
              cta="Ver solución para gestoras" onClick={() => navigate("gestoras")} />
          </div>
        </div>
        <style>{`
          .lines-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
          .section--inverse .sv-card { background: rgba(255,255,255,0.03); border-color: var(--line-on-inverse); }
          .section--inverse .sv-card:hover { background: rgba(255,255,255,0.05); border-color: var(--arena-calida); box-shadow: none; }
          .section--inverse .sv-card__title { color: var(--fg-on-inverse); }
          .section--inverse .sv-card__body { color: var(--fg-on-inverse-2); }
          .section--inverse .sv-card__cta { color: var(--arena-calida); border-top-color: var(--line-on-inverse); }
          .section--inverse .sv-card__cta:hover { color: var(--marfil-tecnico); }
          .section--inverse .eyebrow { color: var(--arena-calida); }
          @media (max-width: 820px) { .lines-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* SEGMENTOS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="ix">04 · Segmentos</div>
            <h2>Una metodología para cada decisión.</h2>
          </div>
          <div className="seg-grid">
            <SegmentCard index="01" segment="Propietarios" line="Ordenar el activo antes de venderlo." />
            <SegmentCard index="02" segment="Promotores" line="Recibir expedientes, no ruido." />
            <SegmentCard index="03" segment="Inversores" line="Analizar escenarios, riesgos y plan B." />
            <SegmentCard index="04" segment="Gestoras" line="Acceder a suelo filtrado y compradores finales." />
            <SegmentCard index="05" segment="Compradores" line="Apuntarse a proyectos cooperativos con información clara." />
          </div>
        </div>
        <style>{`.seg-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; } @media (max-width: 980px) { .seg-grid { grid-template-columns: 1fr 1fr; } }`}</style>
      </section>

      {/* KPIs */}
      <section className="section section--tight section--muted">
        <div className="container">
          <div className="section-head">
            <div className="ix">05 · Plazos de método</div>
            <h2>Tiempos como método, no como promesa.</h2>
          </div>
          <KPIBlock items={[
            { v: "0–48 h", k: "Triage inicial" },
            { v: "7–10 d", k: "Ficha preliminar" },
            { v: "14–21 d", k: "Dossier completo" },
            { v: "100%", k: "Trazabilidad documental" },
          ]} />
          <div style={{ marginTop: 28 }}>
            <Disclaimer>
              Los plazos son objetivos operativos internos y pueden variar según documentación, complejidad urbanística y validación técnica.
            </Disclaimer>
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      <section className="section section--inverse home-cta parcel-bg">
        <div className="container" style={{ textAlign: "center", maxWidth: 820 }}>
          <Reveal><Eyebrow style={{ color: "var(--arena-calida)" }}>Diagnóstico inicial</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 style={{ color: "var(--fg-on-inverse)", marginTop: 18, marginBottom: 20, fontSize: "clamp(32px, 4vw, 48px)" }}>
              ¿Tienes un suelo o activo que el mercado no está entendiendo?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead" style={{ color: "var(--fg-on-inverse-2)", marginBottom: 32, maxWidth: 680, marginInline: "auto" }}>
              Podemos revisarlo de forma preliminar y decirte con honestidad si merece análisis, estructuración o comercialización.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Button variant="inverse" size="lg" onClick={() => navigate("contacto")} icon={<Icon name="arrow" size={16}/>}>
              Solicitar diagnóstico
            </Button>
          </Reveal>
        </div>
        <style>{`.home-cta { text-align: center; }`}</style>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="ix">06 · Estudios destacados</div>
            <h2>Mirar el suelo con criterio antes que con prisa.</h2>
          </div>
          <div className="blog-grid">
            <BlogCard category="Guías para propietarios" date="May 2026" readTime="6 min"
              title="Cómo saber si un suelo está preparado para salir al mercado"
              excerpt="Una checklist práctica para evitar que una oportunidad se bloquee por falta de información básica." />
            <BlogCard category="Promotores" date="Abr 2026" readTime="4 min"
              title="Qué mira un promotor antes de estudiar una oportunidad"
              excerpt="Los criterios mínimos que necesita un comprador profesional para seguir analizando un activo." />
            <BlogCard category="Cooperativas" date="Abr 2026" readTime="7 min"
              title="Cooperativas de vivienda: cuándo el suelo encaja y cuándo no"
              excerpt="Factores urbanísticos, económicos y comerciales que una gestora debe revisar antes de comprometerse." />
          </div>
          <div style={{ marginTop: 36 }}>
            <Button variant="secondary" onClick={() => navigate("blog")} icon={<Icon name="arrow" size={14}/>}>Ver todos los estudios</Button>
          </div>
        </div>
        <style>{`.blog-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 36px; } @media (max-width: 920px) { .blog-grid { grid-template-columns: 1fr; } }`}</style>
      </section>

      {/* FAQ */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <div className="ix">07 · Preguntas frecuentes</div>
            <h2>Lo que sí hacemos. Lo que no.</h2>
          </div>
          <FAQAccordion items={[
            { q: "¿Altaria compra suelo?", a: "No en la fase inicial. Altaria estructura, analiza y comercializa oportunidades. La compra o coinversión solo se estudiaría en escenarios futuros muy concretos." },
            { q: "¿Altaria actúa como promotora?", a: "No. Altaria no asume obligaciones de promoción, construcción ni gestión de fondos de terceros salvo estructura jurídica específica y revisada." },
            { q: "¿Trabajáis con propietarios particulares?", a: "Sí, especialmente si tienen suelo o activos con complejidad documental, urbanística o comercial." },
            { q: "¿Qué entregáis?", a: "Fichas preliminares, análisis, dossiers, data rooms, campañas, formularios, CRM y reporting." },
            { q: "¿La primera revisión tiene coste?", a: "Puede existir una revisión inicial breve sin compromiso, pero los análisis documentales y técnicos completos deben presupuestarse." },
          ]} />
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomePage });
