// ============================================================
// Altaria Urbana — App shell (router + mount)
// ============================================================

const { useState: useStateApp, useEffect: useEffectApp } = React;

const ROUTES = {
  home:       { label: "Inicio",          Component: window.HomePage },
  suelo:      { label: "Altaria Suelo",   Component: window.SueloPage },
  desarrollo: { label: "Altaria Desarrollo", Component: window.DesarrolloPage },
  comerc:     { label: "Comercialización", Component: window.ComercPage },
  gestoras:   { label: "Gestoras",         Component: window.GestorasPage },
  compradores:{ label: "Compradores",      Component: window.CompradoresPage },
  oport:      { label: "Oportunidades",    Component: window.OportunidadesPage },
  blog:       { label: "Blog",             Component: window.BlogPage },
  contacto:   { label: "Contacto",         Component: window.ContactoPage },
};

function App() {
  const initial = (typeof window !== "undefined" && window.location.hash || "#home").replace("#", "");
  const [route, setRoute] = useStateApp(ROUTES[initial] ? initial : "home");

  useEffectApp(() => {
    const onHash = () => {
      const r = window.location.hash.replace("#", "") || "home";
      if (ROUTES[r]) setRoute(r);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (r) => {
    if (!ROUTES[r]) r = "home";
    window.location.hash = r;
    setRoute(r);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const Page = ROUTES[route].Component;

  return (
    <div data-screen-label={`${route.toUpperCase()} · Altaria Urbana`}>
      <Navbar current={route} onNavigate={navigate} />
      {Page ? <Page navigate={navigate} /> : <div className="container section">Página no encontrada.</div>}
      <Footer onNavigate={navigate} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
