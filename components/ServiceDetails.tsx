import type { SERVICE_DETAILS } from "@/lib/content";

type ServiceDetailItem = (typeof SERVICE_DETAILS)[number];

// One service as a two-column block on the red band. Left: title, tagline, intro and the
// "Choose ... when" box. Right: the numbered "How it works" steps. The two columns end at
// about the same height, so there is no empty space.
export default function ServiceDetail({ item }: { item: ServiceDetailItem }) {
  return (
    <article className="service-detail">
      <div className="service-detail-intro">
        <h2>{item.title}</h2>
        <p className="service-detail-tagline">{item.tagline}</p>
        {item.intro.map((t) => (
          <p className="lead" key={t}>
            {t}
          </p>
        ))}
        <div className="service-choose">
          <h3>Choose {item.title} when</h3>
          <ul className="tick-list">
            {item.chooseWhen.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service-detail-points">
        <h3>How it works</h3>
        <ol className="num-list">
          {item.steps.map((st) => (
            <li key={st.lead}>
              <strong>{st.lead}</strong> {st.text}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
