import Icon from "@/components/Icon";
export type ServiceCardItem = { icon: string; title: string; text: string };

// "Our Services" as cards on a dark band. Laid out for seven items (four, then three).
export default function ServiceCards({ items }: { items: ServiceCardItem[] }) {
  return (
    <div className="svc-grid">
      {items.map((c) => (
        <div className="svc-card" key={c.title}>
          <div className="svc-icon">
            <Icon name={c.icon} />
          </div>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
}
