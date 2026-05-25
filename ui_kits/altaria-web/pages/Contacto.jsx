// ============================================================
// Altaria Urbana — Contacto / Diagnóstico page
// ============================================================

const { useState: useStateContact } = React;

function ContactoPage({ navigate }) {
  const [form, setForm] = useStateContact({
    nombre: "", empresa: "", telefono: "", email: "",
    perfil: "", tipo: "", provincia: "", descripcion: "",
    urgencia: "", docs: [], rgpd: false, comercial: false,
  });
  const [sent, setSent] = useStateContact(false);

  const change = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const toggleDoc = (d) => setForm(f => ({
    ...f, docs: f.docs.includes(d) ? f.docs.filter(x => x !== d) : [...f.docs, d]
  }));
  const submit = (e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (sent) {
    return (
      <main>
        <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
          <div className="container" style={{ maxWidth: 680, textAlign: "center" }}>
            <Eyebrow>Solicitud recibida</Eyebrow>
            <h1 style={{ marginTop: 22, marginBottom: 22 }}>Gracias. Revisaremos la información.</h1>
            <p className="lead">
              Si encaja con nuestro foco, te propondremos el siguiente paso: revisión inicial, análisis, ficha o reunión. La respuesta inicial suele llegar en 0–48 h.
            </p>
            <div style={{ marginTop: 36 }}>
              <Button variant="secondary" onClick={() => { setSent(false); navigate("home"); }}>
                Volver al inicio
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal><Eyebrow>Diagnóstico inicial · contacto</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ marginTop: 18 }}>
              Cuéntanos qué activo, proyecto o necesidad quieres ordenar.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ maxWidth: 700, marginTop: 22 }}>
              Si encaja con nuestro foco, te propondremos el siguiente paso. La respuesta inicial suele llegar en 0–48 h.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <form className="contact-form" onSubmit={submit}>
            <div className="ct-section">
              <div className="ct-section__h">
                <span className="ix">01</span>
                <h3>Quién eres</h3>
              </div>
              <div className="ct-grid">
                <Field label="Nombre y apellidos" name="nombre" value={form.nombre} onChange={change("nombre")} required />
                <Field label="Empresa" name="empresa" value={form.empresa} onChange={change("empresa")} />
                <Field label="Email" name="email" type="email" value={form.email} onChange={change("email")} required />
                <Field label="Teléfono" name="telefono" type="tel" value={form.telefono} onChange={change("telefono")} />
                <Select label="Tipo de perfil" name="perfil" value={form.perfil} onChange={change("perfil")} required
                  options={["Propietario", "Promotor", "Inversor", "Gestora de cooperativas", "Comprador final", "Técnico / colaborador", "Otro"]} />
                <Field label="Provincia / municipio" name="provincia" value={form.provincia} onChange={change("provincia")} placeholder="Sevilla, Cádiz, …" />
              </div>
            </div>

            <div className="ct-section">
              <div className="ct-section__h">
                <span className="ix">02</span>
                <h3>Qué quieres ordenar</h3>
              </div>
              <div className="ct-grid">
                <Select label="Tipo de activo o necesidad" name="tipo" value={form.tipo} onChange={change("tipo")} required
                  options={["Suelo residencial", "Suelo terciario", "Activo inmobiliario", "Proyecto cooperativo", "Comercialización", "Análisis de viabilidad", "Captación de compradores"]} />
                <Select label="Urgencia" name="urgencia" value={form.urgencia} onChange={change("urgencia")}
                  options={["Baja", "Media", "Alta"]} />
                <div className="ct-grid__wide">
                  <Field label="Breve descripción" name="descripcion" type="textarea" value={form.descripcion} onChange={change("descripcion")}
                    placeholder="Cuéntanos lo esencial: ubicación, superficie, estado documental, contexto…" hint="Mínimo: ubicación + qué quieres conseguir. No envíes documentos por ahora." />
                </div>
              </div>
            </div>

            <div className="ct-section">
              <div className="ct-section__h">
                <span className="ix">03</span>
                <h3>¿Qué documentación dispones?</h3>
              </div>
              <div className="ct-doc-grid">
                {["Nota simple", "Catastro", "Planeamiento", "Fotos", "Tasación previa", "Ninguna"].map(d => (
                  <Checkbox key={d} checked={form.docs.includes(d)} onChange={() => toggleDoc(d)}>{d}</Checkbox>
                ))}
              </div>
            </div>

            <div className="ct-section">
              <div className="ct-section__h">
                <span className="ix">04</span>
                <h3>Consentimientos</h3>
              </div>
              <div className="ct-checks">
                <Checkbox checked={form.rgpd} onChange={(e) => setForm(f => ({ ...f, rgpd: e.target.checked }))}>
                  Acepto la <a>política de privacidad</a> y el tratamiento de mis datos conforme al RGPD. *
                </Checkbox>
                <Checkbox checked={form.comercial} onChange={(e) => setForm(f => ({ ...f, comercial: e.target.checked }))}>
                  Acepto recibir comunicaciones comerciales relevantes (puedes darte de baja en cualquier momento).
                </Checkbox>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap", alignItems: "center" }}>
              <Button type="submit" variant="primary" size="lg" icon={<Icon name="arrow" size={16}/>}>
                Enviar solicitud
              </Button>
              <span style={{ fontSize: 13, color: "var(--fg-3)" }}>Respuesta inicial en 0–48 h</span>
            </div>
          </form>

          <aside className="contact-aside">
            <div className="ct-aside-card">
              <Eyebrow>Cómo seguimos</Eyebrow>
              <ol className="ct-flow">
                <li><span className="ix">01</span><div><strong>Triage inicial</strong><span>0–48 h. Decidimos si encaja.</span></div></li>
                <li><span className="ix">02</span><div><strong>Llamada breve</strong><span>15–20 min. Confirmamos contexto.</span></div></li>
                <li><span className="ix">03</span><div><strong>Propuesta de siguiente paso</strong><span>Revisión, análisis, ficha o dossier.</span></div></li>
              </ol>
            </div>
            <div className="ct-aside-direct">
              <Eyebrow>Contacto directo</Eyebrow>
              <div className="ct-direct-row"><Icon name="mail" size={16}/><span>hola@altariaurbana.com</span></div>
              <div className="ct-direct-row"><Icon name="phone" size={16}/><span>+34 — — — — —</span></div>
              <div className="ct-direct-row"><Icon name="linkedin" size={16}/><span>linkedin.com/company/altaria-urbana</span></div>
            </div>
            <Disclaimer eyebrow="Tratamiento RGPD">
              Tus datos serán tratados por Altaria Urbana con la finalidad de gestionar tu solicitud. No los cederemos a terceros sin tu consentimiento. Puedes ejercer tus derechos escribiendo a privacidad@altariaurbana.com.
            </Disclaimer>
          </aside>
        </div>
      </section>

      <style>{`
        .contact-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: var(--space-8); align-items: start; }
        @media (max-width: 980px) { .contact-layout { grid-template-columns: 1fr; } }
        .contact-form { display: flex; flex-direction: column; gap: 40px; }
        .ct-section__h { display: flex; gap: 14px; align-items: baseline; padding-bottom: 14px; border-bottom: 1px solid var(--line-strong); margin-bottom: 22px; }
        .ct-section__h .ix { font-family: var(--font-mono); font-size: 12px; color: var(--tierra-profunda); letter-spacing: 0.1em; }
        .ct-section__h h3 { margin: 0; font-family: var(--font-serif); font-weight: 400; font-size: 22px; letter-spacing: -0.008em; }
        .ct-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px 22px; }
        .ct-grid__wide { grid-column: 1 / -1; }
        .ct-doc-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        @media (max-width: 720px) { .ct-grid, .ct-doc-grid { grid-template-columns: 1fr; } }
        .ct-checks { display: flex; flex-direction: column; gap: 14px; }
        .contact-aside { display: flex; flex-direction: column; gap: 24px; position: sticky; top: 92px; }
        .ct-aside-card { padding: 24px 26px; background: var(--blanco-calido); border: 1px solid var(--line); border-radius: var(--radius-card); }
        .ct-flow { list-style: none; padding: 0; margin: 18px 0 0; display: flex; flex-direction: column; gap: 18px; }
        .ct-flow li { display: grid; grid-template-columns: 40px 1fr; gap: 14px; }
        .ct-flow .ix { font-family: var(--font-mono); font-size: 11px; color: var(--tierra-profunda); letter-spacing: 0.1em; padding-top: 3px; }
        .ct-flow strong { display: block; font-size: 14px; font-weight: 600; color: var(--fg-1); margin-bottom: 2px; }
        .ct-flow span { font-size: 13px; color: var(--fg-2); }
        .ct-aside-direct { padding: 24px 26px; background: transparent; border: 1px solid var(--line); border-radius: var(--radius-card); }
        .ct-direct-row { display: flex; align-items: center; gap: 10px; padding-block: 8px; font-size: 13.5px; color: var(--fg-1); border-top: 1px solid var(--line); }
        .ct-direct-row:nth-child(2) { border-top: 0; margin-top: 14px; }
      `}</style>
    </main>
  );
}

Object.assign(window, { ContactoPage });
