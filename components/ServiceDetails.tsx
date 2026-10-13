import type { SERVICE_DETAILS } from "@/lib/content";

type ServiceDetailItem = (typeof SERVICE_DETAILS)[number];

// One service: centred title and explanation, then one card per "How it works" step.
// Each card is a <details>, so clicking it opens the explanation (works without JavaScript).
// The "Choose ... when" list sits under the cards.
export default function ServiceDetail({ item }: { item: ServiceDetailItem }) {
  return (
    <article className="service-detail">
      <header className="service-detail-head">
        <h2>{item.title}</h2>
        <p className="service-detail-tagline">{item.tagline}</p>
        {item.intro.map((t) => (
          <p className="lead" key={t}>
            {t}
          </p>
        ))}
      </header>
      <div className="service-acc-grid">
        {item.steps.map((st, i) => (
          <details className="service-acc" key={st.lead}>
            <summary>
              <span className="service-acc-num">{i + 1}</span>
              <span className="service-acc-title">{st.lead.replace(/\.$/, "")}</span>
              <i className="fas fa-plus" aria-hidden="true" />
            </summary>
            <p>{st.text}</p>
          </details>
        ))}
      </div>
      <div className="service-choose">
        <h3>Choose {item.title} when</h3>
        <ul className="tick-list">
          {item.chooseWhen.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
