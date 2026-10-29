import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: { absolute: "Contact FMCG Recruiters in Belfast | Bell Recruitment" },
  description: `Contact Bell Recruitment in Belfast to discuss an FMCG hire or your next role. Call ${CONTACT.phone} or email ${CONTACT.email}.`,
  alternates: { canonical: "/contact-us/" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact us", path: "/contact-us/" }])} />
      <PageHero eyebrow="Get in touch" title="Contact our FMCG recruitment team in Belfast" image="/images/contact-banner.jpg" imagePosition="50% 30%">
        Whether you&rsquo;re hiring or looking for your next role, we&rsquo;d love to hear from you.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="contact-card contact-card-solo">
            <Image
              src="/images/employer-meeting.jpg"
              alt="Two people talking through a hiring brief"
              width={1200}
              height={1200}
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectPosition: "50% 38%" }}
            />
            <div className="body">
              <h3>Speak to Julie directly</h3>
              <div className="contact-item">
                <Icon name="phone" />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </div>
              <div className="contact-item">
                <Icon name="envelope" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="contact-item">
                <Icon name="location-dot" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="social-row">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                  <Icon name="linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
