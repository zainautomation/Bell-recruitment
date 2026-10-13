import type { SERVICE_DETAILS } from "@/lib/content";

// Executive Search and Recruitment side by side: tagline, intro, numbered "How it works"
// steps and a "Choose ... when" list. Cards are white so they read well on the dark band.
export default function ServiceDetails({ items }: { items: typeof SERVICE_DETAILS }) {
  return (
    <div className="service-details">
      {items.map((d) => (
        <article className="service-detail" key={d.title}>
          <h2>{d.title}</h2>
          <p className="service-detail-tagline">{d.tagline}</p>
          {d.intro.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <h3>How it works</h3>
          <ol className="num-list">
            {d.steps.map((st) => (
              <li key={st.lead}>
                <strong>{st.lead}</strong> {st.text}
              </li>
            ))}
          </ol>
          <h3>Choose {d.title} when</h3>
          <ul className="tick-list">
            {d.chooseWhen.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
