// ============================================================
// Altaria Urbana — content blocks
// ExpedienteCard · ServiceCard · SegmentCard · OpportunityCard
// BlogCard · KPIBlock · ProcessTimeline · FAQAccordion
// ============================================================

const { useState: useStateBlocks } = React;

// ---------- Expediente Altaria — signature dossier card ----------
function ExpedienteCard({ refCode = "EA-0823", date = "22.05.26", title, rows = [], status = "go", score = 78, mapThumb = true }) {
  return (
    <div className="ex-card">
      <div className="ex-card__hd">
        <Eyebrow>Expediente Altaria</Eyebrow>
        <span className="ex-card__ref">{refCode} · {date}</span>
      </div>
      <div className="ex-card__body">
        <div className="ex-card__title-row">
          <h3 className="ex-card__title">{title}</h3>
          {mapThumb ? (
            <svg className="ex-card__map" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="80" height="60" fill="#EAE2D4"/>
              <g stroke="#6E5A46" strokeOpacity=".55" strokeWidth=".5" fill="none">
                <path d="M0 22 H80 M0 36 H80 M22 0 V60 M48 0 V60"/>
                <path d="M22 22 L48 36 L80 22 M0 36 L22 48 L48 22" strokeOpacity=".8" strokeWidth=".8"/>
              </g>
              <circle cx="36" cy="32" r="3.2" fill="#6E5A46"/>
            </svg>
          ) : null}
        </div>
        <div className="ex-card__rows">
          {rows.map((r, i) => (
            <div className="ex-card__row" key={i}>
              <span className="ex-card__k">{r.k}</span>
              <span className="ex-card__v">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="ex-card__ft">
        <StatusBadge status={status} />
        <ScoreBadge value={score} />
      </div>
      <style>{`
        .ex-card { background: var(--blanco-calido); border: 1px solid var(--line); border-radius: var(--radius-card); overflow: hidden; box-shadow: var(--shadow-2); transition: box-shadow var(--dur-base) var(--ease-standard); }
        .ex-card:hover { box-shadow: var(--shadow-3); }
        .ex-card__hd { padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line); }
        .ex-card__ref { font-family: var(--font-mono); font-size: 11px; color: var(--fg-3); letter-spacing: 0.04em; }
        .ex-card__body { padding: 20px 22px 16px; }
        .ex-card__title-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 18px; }
        .ex-card__title { font-family: var(--font-serif); font-size: 22px; line-height: 1.18; letter-spacing: -0.008em; margin: 0 0 18px; color: var(--fg-1); font-weight: 400; flex: 1; }
        .ex-card__map { width: 72px; height: 54px; border-radius: 4px; border: 1px solid var(--line); flex-shrink: 0; }
        .ex-card__rows { display: flex; flex-direction: column; }
        .ex-card__row { display: flex; justify-content: space-between; padding: 10px 0; border-top: 1px solid var(--line); font-size: 13px; }
        .ex-card__row:first-child { border-top: 0; padding-top: 0; }
        .ex-card__k { color: var(--fg-3); }
        .ex-card__v { color: var(--fg-1); font-weight: 500; font-family: var(--font-mono); font-size: 12.5px; }
        .ex-card__ft { display: flex; justify-content: space-between; align-items: center; padding: 14px 22px; background: #F0EBE0; border-top: 1px solid var(--line); }
      `}</style>
    </div>
  );
}

// ---------- ServiceCard — line-of-business ----------
function ServiceCard({ tag, title, body, cta, onClick }) {
  return (
    <div className="sv-card">
      <div className="sv-card__tag"><Eyebrow>{tag}</Eyebrow></div>
      <h3 className="sv-card__title">{title}</h3>
      <p className="sv-card__body">{body}</p>
      <a className="sv-card__cta" onClick={onClick}>{cta} <Icon name="arrow" size={14}/></a>
      <style>{`
        .sv-card { display: flex; flex-direction: column; gap: 14px; padding: 32px 30px; background: var(--blanco-calido); border: 1px solid var(--line); border-radius: var(--radius-card); transition: border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard); height: 100%; }
        .sv-card:hover { border-color: var(--line-strong); box-shadow: var(--shadow-2); }
        .sv-card__title { font-family: var(--font-serif); font-size: 26px; line-height: 1.15; letter-spacing: -0.01em; margin: 0; font-weight: 400; color: var(--fg-1); }
        .sv-card__body { font-size: 15px; line-height: 1.6; color: var(--fg-2); margin: 0; }
        .sv-card__cta { margin-top: auto; padding-top: 12px; display: inline-flex; align-items: center; gap: 8px; color: var(--fg-1); font-size: 13.5px; font-weight: 500; cursor: pointer; text-decoration: none; border-top: 1px solid var(--line); padding-block: 14px 0; }
        .sv-card__cta:hover { color: var(--tierra-profunda); }
      `}</style>
    </div>
  );
}

// ---------- SegmentCard — propietario, promotor, inversor… ----------
function SegmentCard({ index, segment, line }) {
  return (
    <div className="sg-card">
      <div className="sg-card__ix">{index}</div>
      <h4 className="sg-card__title">{segment}</h4>
      <p className="sg-card__line">{line}</p>
      <style>{`
        .sg-card { padding: 28px 26px; border: 1px solid var(--line); border-radius: var(--radius-card); background: transparent; display: flex; flex-direction: column; gap: 8px; transition: background var(--dur-base); }
        .sg-card:hover { background: var(--blanco-calido); }
        .sg-card__ix { font-family: var(--font-mono); font-size: 11px; color: var(--tierra-profunda); letter-spacing: 0.1em; margin-bottom: 6px; }
        .sg-card__title { font-family: var(--font-sans); font-size: 17px; font-weight: 600; color: var(--fg-1); margin: 0; }
        .sg-card__line { font-size: 14px; line-height: 1.55; color: var(--fg-2); margin: 0; }
      `}</style>
    </div>
  );
}

// ---------- OpportunityCard ----------
function OpportunityCard({ name, location, type, status, surface, target, risk, doc, score, summary, onClick }) {
  const riskMap = { Bajo: "go", Medio: "hold", Alto: "nogo", Pendiente: "neutral" };
  return (
    <article className="op-card" onClick={onClick}>
      <div className="op-card__hero">
        <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="420" height="120" fill="#D8CCBB"/>
          <g stroke="#6E5A46" strokeOpacity=".42" strokeWidth=".7" fill="none">
            <path d="M0 92 L70 78 L140 84 L220 66 L290 72 L360 58 L420 64"/>
            <path d="M0 102 L70 90 L140 96 L220 80 L290 86 L360 72 L420 78"/>
            <path d="M0 112 L70 102 L140 108 L220 92 L290 98 L360 84 L420 90"/>
          </g>
          <g stroke="#263238" strokeOpacity=".12" strokeWidth=".5" fill="none">
            <path d="M40 0 V120 M120 0 V120 M210 0 V120 M310 0 V120 M380 0 V120"/>
            <path d="M0 30 H420 M0 60 H420"/>
          </g>
        </svg>
      </div>
      <div className="op-card__body">
        <div className="op-card__meta">
          <span>{type} · {location}</span>
          <span className="op-card__status">{status}</span>
        </div>
        <h3 className="op-card__title">{name}</h3>
        <p className="op-card__summary">{summary}</p>
        <div className="op-card__grid">
          <div><div className="k">Superficie</div><div className="v">{surface}</div></div>
          <div><div className="k">Perfil</div><div className="v">{target}</div></div>
          <div><div className="k">Estado doc.</div><div className="v">{doc}</div></div>
          <div><div className="k">Score</div><div className="v">{score} / 100</div></div>
        </div>
        <div className="op-card__ft">
          <StatusBadge status={riskMap[risk] || "neutral"}>{risk === "Pendiente" ? "Pendiente" : `Riesgo ${risk.toLowerCase()}`}</StatusBadge>
          <span className="op-card__cta">Solicitar información <Icon name="arrow" size={14}/></span>
        </div>
      </div>
      <style>{`
        .op-card { background: var(--blanco-calido); border: 1px solid var(--line); border-radius: var(--radius-card); overflow: hidden; cursor: pointer; transition: border-color var(--dur-base), box-shadow var(--dur-base); display: flex; flex-direction: column; }
        .op-card:hover { border-color: var(--line-strong); box-shadow: var(--shadow-2); }
        .op-card__hero { height: 110px; overflow: hidden; }
        .op-card__hero svg { width: 100%; height: 100%; display: block; }
        .op-card__body { padding: 18px 22px 18px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .op-card__meta { display: flex; justify-content: space-between; font-size: 11px; color: var(--fg-3); letter-spacing: 0.1em; text-transform: uppercase; }
        .op-card__status { color: var(--tierra-profunda); font-weight: 500; }
        .op-card__title { font-family: var(--font-serif); font-size: 20px; line-height: 1.22; letter-spacing: -0.008em; margin: 0; color: var(--fg-1); font-weight: 400; }
        .op-card__summary { font-size: 13.5px; line-height: 1.55; color: var(--fg-2); margin: 4px 0 8px; }
        .op-card__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 18px; padding-block: 10px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: 6px; }
        .op-card__grid .k { font-size: 10.5px; color: var(--fg-3); letter-spacing: 0.08em; text-transform: uppercase; }
        .op-card__grid .v { font-size: 13px; color: var(--fg-1); font-family: var(--font-mono); margin-top: 2px; }
        .op-card__ft { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 8px; }
        .op-card__cta { font-size: 12.5px; font-weight: 500; color: var(--fg-1); display: inline-flex; align-items: center; gap: 6px; }
      `}</style>
    </article>
  );
}

// ---------- BlogCard ----------
function BlogCard({ category, title, excerpt, readTime = "5 min", date }) {
  return (
    <article className="bl-card">
      <div className="bl-card__meta">
        <span>{category}</span>
        <span>{readTime}</span>
      </div>
      <h3 className="bl-card__title">{title}</h3>
      <p className="bl-card__excerpt">{excerpt}</p>
      <div className="bl-card__ft">
        <span className="bl-card__date">{date}</span>
        <span className="bl-card__cta">Leer →</span>
      </div>
      <style>{`
        .bl-card { padding: 30px 0 24px; border-top: 1px solid var(--line-strong); display: flex; flex-direction: column; gap: 12px; cursor: pointer; transition: opacity var(--dur-base); }
        .bl-card:hover { opacity: 0.85; }
        .bl-card__meta { display: flex; justify-content: space-between; font-size: 11px; color: var(--fg-3); letter-spacing: 0.12em; text-transform: uppercase; }
        .bl-card__title { font-family: var(--font-serif); font-size: 24px; line-height: 1.2; letter-spacing: -0.008em; margin: 0; color: var(--fg-1); font-weight: 400; }
        .bl-card__excerpt { font-size: 14.5px; line-height: 1.6; color: var(--fg-2); margin: 0; }
        .bl-card__ft { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 12.5px; color: var(--fg-2); }
        .bl-card__cta { font-weight: 500; color: var(--fg-1); }
      `}</style>
    </article>
  );
}

// ---------- KPIBlock ----------
function KPIBlock({ items }) {
  return (
    <div className="kpi-block">
      {items.map((k, i) => (
        <div className="kpi-block__cell" key={i}>
          <div className="kpi-block__v">{k.v}</div>
          <div className="kpi-block__k">{k.k}</div>
        </div>
      ))}
      <style>{`
        .kpi-block { display: grid; grid-template-columns: repeat(${items.length}, 1fr); border-top: 1px solid var(--line-strong); border-bottom: 1px solid var(--line-strong); }
        .kpi-block__cell { padding: 28px 22px; border-right: 1px solid var(--line); }
        .kpi-block__cell:last-child { border-right: 0; }
        .kpi-block__v { font-family: var(--font-serif); font-size: 38px; line-height: 1; letter-spacing: -0.01em; color: var(--fg-1); font-weight: 400; }
        .kpi-block__k { font-size: 12px; color: var(--fg-3); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 10px; }
        @media (max-width: 760px) { .kpi-block { grid-template-columns: 1fr 1fr; } .kpi-block__cell:nth-child(2n) { border-right: 0; } .kpi-block__cell:nth-child(-n+2) { border-bottom: 1px solid var(--line); } }
      `}</style>
    </div>
  );
}

// ---------- ProcessTimeline ----------
function ProcessTimeline({ steps }) {
  return (
    <ol className="pt">
      {steps.map((s, i) => (
        <li className="pt__step" key={i}>
          <div className="pt__ix">{String(i + 1).padStart(2, "0")}</div>
          <div className="pt__main">
            <h4 className="pt__title">{s.title}</h4>
            <p className="pt__body">{s.body}</p>
          </div>
        </li>
      ))}
      <style>{`
        .pt { list-style: none; padding: 0; margin: 0; counter-reset: step; }
        .pt__step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; padding: 28px 0; border-top: 1px solid var(--line); align-items: start; }
        .pt__step:first-child { border-top: 1px solid var(--line-strong); }
        .pt__step:last-child { border-bottom: 1px solid var(--line-strong); }
        .pt__ix { font-family: var(--font-mono); font-size: 12px; color: var(--tierra-profunda); letter-spacing: 0.1em; padding-top: 6px; }
        .pt__title { font-family: var(--font-serif); font-size: 24px; line-height: 1.18; letter-spacing: -0.008em; margin: 0 0 10px; color: var(--fg-1); font-weight: 400; }
        .pt__body { font-size: 15px; line-height: 1.62; color: var(--fg-2); margin: 0; max-width: 620px; }
      `}</style>
    </ol>
  );
}

// ---------- FAQAccordion ----------
function FAQAccordion({ items }) {
  const [open, setOpen] = useStateBlocks(0);
  return (
    <div className="faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={i}>
            <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              <span>{it.q}</span>
              <span className="faq__icon"><Icon name={isOpen ? "minus" : "plus"} size={18}/></span>
            </button>
            {isOpen ? <div className="faq__a">{it.a}</div> : null}
          </div>
        );
      })}
      <style>{`
        .faq__item { border-top: 1px solid var(--line); }
        .faq__item:last-child { border-bottom: 1px solid var(--line); }
        .faq__q { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 22px 4px; background: transparent; border: 0; cursor: pointer; font-family: var(--font-sans); font-size: 17px; font-weight: 500; color: var(--fg-1); text-align: left; gap: 24px; }
        .faq__icon { color: var(--tierra-profunda); }
        .faq__a { padding: 0 4px 22px; font-size: 15px; line-height: 1.65; color: var(--fg-2); max-width: 760px; }
      `}</style>
    </div>
  );
}

Object.assign(window, { ExpedienteCard, ServiceCard, SegmentCard, OpportunityCard, BlogCard, KPIBlock, ProcessTimeline, FAQAccordion });
