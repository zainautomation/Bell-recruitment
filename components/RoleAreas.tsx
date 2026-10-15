import type { ROLE_AREAS } from "@/lib/content";

// "Roles we recruit": one card per area with a short description. Three per row; a lone last card
// spans the full row.
export default function RoleAreas({ items }: { items: typeof ROLE_AREAS }) {
  return (
    <div className="role-areas">
      {items.map((r) => (
        <article className="role-area" key={r.title}>
          <h3>{r.title}</h3>
          <p>{r.text}</p>
        </article>
      ))}
    </div>
  );
}
