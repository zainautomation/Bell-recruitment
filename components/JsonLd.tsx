// Renders structured data (JSON-LD) for search engines and AI answer engines.
// "<" is escaped so the data can never close the script tag early.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
