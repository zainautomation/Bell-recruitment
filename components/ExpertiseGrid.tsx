// "Roles we recruit" as a grid of tiles with an arrow, each one linking to `href`.
export default function ExpertiseGrid({ items, href }: { items: string[]; href: string }) {
  return (
    <ul className="expertise-grid">
      {items.map((label) => (
        <li key={label}>
          <a href={href}>
            <span>{label}</span>
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
