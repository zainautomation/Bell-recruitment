import Link from "next/link";
import FaqList from "@/components/FaqList";
import { CASE_STUDY as c, URLS } from "@/lib/content";

// The Crust & Crumb case study: headline numbers, background, challenge, approach, the roles filled,
// outcome, questions and a closing call to action. All wording lives in CASE_STUDY in lib/content.ts.
export default function CaseStudy() {
  return (
    <article className="case-study">
      <header className="cs-head">
        <div className="section-label">{c.label}</div>
        <h2>{c.title}</h2>
        <p className="cs-subtitle">{c.subtitle}</p>
      </header>

      <div className="cs-stats">
        {c.stats.map((s) => (
          <div className="cs-stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <h3 className="cs-h">{c.about.title}</h3>
      <p className="cs-text">{c.about.text}</p>
      <ul className="cs-sites">
        {c.about.sites.map((s) => (
          <li key={s.name}>
            <strong>{s.name}</strong>
            <span>{s.region}</span>
          </li>
        ))}
      </ul>

      <h3 className="cs-h">{c.challenge.title}</h3>
      <p className="cs-text">{c.challenge.text}</p>
      <p className="cs-text">{c.challenge.intro}</p>
      <div className="cs-challenges">
        {c.challenge.items.map((it, i) => (
          <div className="cs-challenge" key={it.title}>
            <span className="cs-num">{String(i + 1).padStart(2, "0")}</span>
            <h4>{it.title}</h4>
            <p>{it.text}</p>
          </div>
        ))}
      </div>

      <h3 className="cs-h">{c.approach.title}</h3>
      <p className="cs-text">{c.approach.text}</p>
      <ol className="num-list cs-steps">
        {c.approach.steps.map((st) => (
          <li key={st.lead}>
            <strong>{st.lead}</strong> {st.text}
          </li>
        ))}
      </ol>

      <h3 className="cs-h">{c.roles.title}</h3>
      <div className="cs-roles">
        {c.roles.items.map((r) => (
          <div className="cs-role" key={r.title}>
            <h4>{r.title}</h4>
            <div className="cs-role-body">
              <p>{r.text}</p>
              <ul className="cs-points">
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h3 className="cs-h">{c.outcome.title}</h3>
      <p className="cs-text">{c.outcome.text}</p>
      <div className="cs-placed">
        {c.outcome.placed.map((p) => (
          <div className="cs-placed-item" key={p.title}>
            <strong>
              <i className="fas fa-check" aria-hidden="true" /> {p.title}
            </strong>
            <span>{p.text}</span>
          </div>
        ))}
      </div>
      <p className="cs-text">{c.outcome.closing}</p>

      <h3 className="cs-h">Frequently asked questions</h3>
      <FaqList items={c.faqs} />

      <div className="cs-cta">
        <h3>{c.cta.title}</h3>
        <p>{c.cta.text}</p>
        <p>
          <Link href={URLS.contact}>{c.cta.linkLabel}</Link>
          {c.cta.after}
        </p>
      </div>
    </article>
  );
}
