// ============================================================
// Altaria Urbana — primitives
// Button · Eyebrow · StatusBadge · Field · Logo · Disclaimer
// ============================================================

const { useState, useEffect, useRef } = React;

function Button({ variant = "primary", size = "md", as = "button", href, children, onClick, type, icon, iconRight = true }) {
  const cls = `btn btn--${variant} ${size === "lg" ? "btn--lg" : size === "sm" ? "btn--sm" : ""}`;
  const content = (
    <>
      {icon && !iconRight ? <span style={{ display: "inline-flex" }}>{icon}</span> : null}
      <span>{children}</span>
      {icon && iconRight ? <span style={{ display: "inline-flex" }}>{icon}</span> : null}
    </>
  );
  if (as === "a" || href) {
    return <a href={href || "#"} className={cls} onClick={onClick}>{content}</a>;
  }
  return <button type={type || "button"} className={cls} onClick={onClick}>{content}</button>;
}

function Eyebrow({ children, style }) {
  return <span className="eyebrow" style={style}>{children}</span>;
}

function StatusBadge({ status, children }) {
  const map = { go: "Go", hold: "Hold", nogo: "No-Go", neutral: "" };
  const label = children || map[status] || "";
  return (
    <span className={`badge badge--${status}`}>
      {status !== "neutral" ? <span className="badge__dot"></span> : null}
      {label}
    </span>
  );
}

function ScoreBadge({ value, max = 100 }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)",
      letterSpacing: "0.06em",
    }}>
      Score {value}/{max}
    </span>
  );
}

function Field({ label, name, type = "text", placeholder, value, onChange, required, hint, children }) {
  return (
    <div className="field">
      {label ? <label className="field__label" htmlFor={name}>{label}{required ? " *" : ""}</label> : null}
      {children ? children : type === "textarea" ? (
        <textarea id={name} name={name} className="field__textarea" placeholder={placeholder} value={value || ""} onChange={onChange} />
      ) : (
        <input id={name} name={name} type={type} className="field__input" placeholder={placeholder} value={value || ""} onChange={onChange} />
      )}
      {hint ? <span className="field__hint">{hint}</span> : null}
    </div>
  );
}

function Select({ label, name, options, value, onChange, required, hint }) {
  return (
    <div className="field">
      {label ? <label className="field__label">{label}{required ? " *" : ""}</label> : null}
      <select className="field__select" name={name} value={value || ""} onChange={onChange}>
        <option value="">Selecciona…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {hint ? <span className="field__hint">{hint}</span> : null}
    </div>
  );
}

function Checkbox({ name, checked, onChange, children }) {
  return (
    <label className="check">
      <input type="checkbox" name={name} checked={!!checked} onChange={onChange} />
      <span className="check__box"></span>
      <span>{children}</span>
    </label>
  );
}

function Logo({ variant = "color", height = 28 }) {
  const R = (typeof window !== "undefined" && window.__resources) || {};
  const map = {
    color: R.logoColor || "../../assets/altaria-logo-horizontal-color.png",
    iso: R.logoIso || "../../assets/altaria-isotipo.png",
    dark: R.logoDark || "../../assets/altaria-logo-on-dark.png",
    mono: R.logoMono || "../../assets/altaria-logo-monochrome.png",
  };
  return <img src={map[variant]} alt="Altaria Urbana" style={{ height, display: "block", width: "auto" }} />;
}

function Disclaimer({ children, eyebrow = "Información preliminar" }) {
  return (
    <div style={{
      borderLeft: "2px solid var(--tierra-profunda)",
      padding: "8px 0 8px 18px",
      maxWidth: 640,
    }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>{eyebrow}</div>
      <p style={{
        fontSize: 13, lineHeight: 1.6, color: "var(--fg-2)",
        fontStyle: "italic", margin: 0,
      }}>
        {children}
      </p>
    </div>
  );
}

// Reveal-on-mount wrapper (timed stagger — no IntersectionObserver to avoid iframe edge-cases)
function Reveal({ children, delay = 0, style, className = "" }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={`reveal ${shown ? "in" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}

// Lucide icon helper — minimal inline SVG set
function Icon({ name, size = 18, stroke = 1.5, color = "currentColor" }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    down: <><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></>,
    plus: <><path d="M12 5v14"/><path d="M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    check: <><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>,
    map: <><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M9 4v13"/><path d="M15 7v13"/></>,
    layers: <><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></>,
    file: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></>,
    folder: <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>,
    compass: <><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    building: <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></>,
    search: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
    ruler: <path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-5.6-5.6a1 1 0 0 1 0-1.4L14.3 1.7a1 1 0 0 1 1.4 0l5.6 5.6a1 1 0 0 1 0 1.4Z M14.5 12.5l-2 -2 M12 15l-1.5 -1.5 M9.5 17.5l-2 -2 M17 10l-2 -2"/>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    sliders: <><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></>,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
}

Object.assign(window, { Button, Eyebrow, StatusBadge, ScoreBadge, Field, Select, Checkbox, Logo, Disclaimer, Reveal, Icon });
