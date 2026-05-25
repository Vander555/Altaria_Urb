// ============================================================
// Altaria Urbana — Navbar & Footer
// ============================================================

const { useState: useStateNav } = React;

function Navbar({ current, onNavigate }) {
  const [open, setOpen] = useStateNav(false);
  const links = [
    { id: "home",      label: "Inicio" },
    { id: "suelo",     label: "Suelo" },
    { id: "desarrollo", label: "Desarrollo" },
    { id: "comerc",    label: "Comercialización" },
    { id: "gestoras",  label: "Gestoras" },
    { id: "oport",     label: "Oportunidades" },
    { id: "blog",      label: "Blog" },
  ];
  const go = (id) => { onNavigate(id); setOpen(false); };
  return (
    <header className="nav-wrap">
      <div className="container">
        <div className="nav">
          <a className="nav__brand" onClick={() => go("home")} href="#home">
            <Logo variant="color" height={28} />
          </a>
          <nav className="nav__links">
            {links.map(l => (
              <a key={l.id}
                 className={`nav__link ${current === l.id ? "is-active" : ""}`}
                 onClick={() => go(l.id)} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav__cta">
            <Button variant="primary" size="sm" onClick={() => go("contacto")} icon={<Icon name="arrow" size={14} />}>
              Solicitar diagnóstico
            </Button>
          </div>
          <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Menú">
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
        {open ? (
          <div className="nav__mobile">
            {links.map(l => (
              <a key={l.id} onClick={() => go(l.id)} href={`#${l.id}`} className="nav__mlink">{l.label}</a>
            ))}
            <Button variant="primary" onClick={() => go("contacto")}>Solicitar diagnóstico →</Button>
          </div>
        ) : null}
      </div>

      <style>{`
        .nav-wrap {
          position: sticky; top: 0; z-index: 50;
          background: rgba(245, 241, 234, 0.86);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .nav {
          display: flex; align-items: center; justify-content: space-between;
          padding-block: 14px;
          gap: var(--space-5);
        }
        .nav__brand { display: flex; align-items: center; cursor: pointer; }
        .nav__links {
          display: flex; gap: 28px;
          font-size: 13.5px; color: var(--fg-2);
        }
        .nav__link {
          text-decoration: none; color: inherit; cursor: pointer;
          padding-block: 4px;
          border-bottom: 1px solid transparent;
          transition: color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard);
        }
        .nav__link:hover { color: var(--fg-1); }
        .nav__link.is-active { color: var(--fg-1); border-bottom-color: var(--tierra-profunda); }
        .nav__cta { display: flex; }
        .nav__burger {
          display: none;
          background: transparent; border: 0; cursor: pointer; color: var(--fg-1);
        }
        .nav__mobile {
          display: flex; flex-direction: column; gap: 6px;
          padding: 12px 0 18px;
          border-top: 1px solid var(--line);
        }
        .nav__mlink {
          padding: 10px 4px;
          font-size: 16px; color: var(--fg-1);
          text-decoration: none;
          border-bottom: 1px solid var(--line);
        }
        @media (max-width: 920px) {
          .nav__links, .nav__cta { display: none; }
          .nav__burger { display: inline-flex; }
        }
      `}</style>
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="ft">
      <div className="container">
        <div className="ft__top">
          <div className="ft__brand">
            <Logo variant="dark" height={48} />
            <p style={{ marginTop: 18, maxWidth: 380, color: "var(--fg-on-inverse-2)", fontSize: 14 }}>
              Estructuramos oportunidades inmobiliarias con claridad, trazabilidad y criterio técnico-comercial.
            </p>
            <p style={{ marginTop: 14, color: "var(--arena-calida)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18 }}>
              Suelo, hogar y futuro.
            </p>
          </div>
          <div className="ft__col">
            <h4>Servicios</h4>
            <a onClick={() => onNavigate("suelo")}>Altaria Suelo</a>
            <a onClick={() => onNavigate("desarrollo")}>Altaria Desarrollo</a>
            <a onClick={() => onNavigate("comerc")}>Altaria Comercialización</a>
            <a onClick={() => onNavigate("gestoras")}>Gestoras de Cooperativas</a>
          </div>
          <div className="ft__col">
            <h4>Segmentos</h4>
            <a>Propietarios</a>
            <a>Promotores</a>
            <a>Inversores</a>
            <a>Gestoras</a>
            <a>Compradores</a>
          </div>
          <div className="ft__col">
            <h4>Empresa</h4>
            <a>Sobre Altaria</a>
            <a onClick={() => onNavigate("oport")}>Oportunidades</a>
            <a onClick={() => onNavigate("blog")}>Blog & estudios</a>
            <a onClick={() => onNavigate("contacto")}>Contacto</a>
          </div>
          <div className="ft__col">
            <h4>Contacto</h4>
            <a><Icon name="mail" size={14}/> hola@altariaurbana.com</a>
            <a><Icon name="phone" size={14}/> +34 — — — — —</a>
            <a><Icon name="linkedin" size={14}/> LinkedIn</a>
          </div>
        </div>
        <div className="ft__bottom">
          <div>© 2026 Altaria Urbana</div>
          <div className="ft__legal">
            <a>Aviso legal</a>
            <a>Política de privacidad</a>
            <a>Política de cookies</a>
          </div>
        </div>
      </div>
      <style>{`
        .ft { background: var(--bg-inverse); color: var(--fg-on-inverse); padding-block: 80px 28px; margin-top: 64px; }
        .ft__top { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr; gap: var(--space-7); padding-bottom: 56px; border-bottom: 1px solid var(--line-on-inverse); }
        .ft__col { display: flex; flex-direction: column; gap: 10px; }
        .ft__col h4 { font-family: var(--font-sans); font-size: 12px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--arena-calida); margin: 0 0 8px; }
        .ft__col a { display: inline-flex; align-items: center; gap: 8px; color: var(--fg-on-inverse-2); font-size: 14px; text-decoration: none; cursor: pointer; transition: color 220ms; }
        .ft__col a:hover { color: var(--fg-on-inverse); }
        .ft__bottom { display: flex; justify-content: space-between; padding-top: 22px; font-size: 12px; color: var(--fg-on-inverse-2); }
        .ft__legal { display: flex; gap: 22px; }
        .ft__legal a { color: inherit; text-decoration: none; cursor: pointer; }
        .ft__legal a:hover { color: var(--fg-on-inverse); }
        @media (max-width: 920px) {
          .ft__top { grid-template-columns: 1fr 1fr; }
          .ft__bottom { flex-direction: column; gap: 12px; }
        }
      `}</style>
    </footer>
  );
}

Object.assign(window, { Navbar, Footer });
