import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetails";
import { SERVICE_DETAILS, URLS } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, mainServicesSchema } from "@/lib/schema";

// Copy: "2. Services (Executive Search)" in the client's Website Content document.

export const metadata: Metadata = {
  alternates: { canonical: "/services/" },
  title: { absolute: "FMCG Executive Search Northern Ireland, Ireland and United Kingdom | Bell Recruitment" },
  description: "Confidential FMCG executive search in Northern Ireland since 1999. Search begins within 24 hours.",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services/" }])} />
      <JsonLd data={mainServicesSchema()} />
      <PageHero
        eyebrow="Our service"
        title="FMCG Executive Search in Northern Ireland, Ireland and United Kingdom"
        image="/images/handshake-bg.webp"
      >
        For the hires that decide how your FMCG business performs with customers, the best candidates are usually
        already in a good job and not applying anywhere. We find them, approach them directly and assess each one
        before you meet them. Julie Bell founded Bell Recruitment after a decade at Pepsi, 7UP, Ballygowan and
        Budweiser.
      </PageHero>

      {SERVICE_DETAILS.map((d, i) => (
        <section className={`section${i === 0 ? " section-alt" : ""}`} key={d.title}>
          <div className="container">
            <ServiceDetail item={d} />
          </div>
        </section>
      ))}

      <CtaBand
        title="Tell us about the role you need to fill"
        image="/images/warehouse-aisle.jpg"
        buttons={[{ label: "Discuss a vacancy", href: URLS.contact }]}
      />
    </>
  );
}
