import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubmitForm from "@/components/SubmitForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "CV Upload",
  description:
    "Upload your CV to register with Bell Recruitment, a specialist FMCG recruitment firm in Belfast. We check it against the roles we are working on.",
  alternates: { canonical: "/cv-upload/" },
};

export default function CvUploadPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Upload your CV", path: "/cv-upload/" }])} />
      <PageHero
        eyebrow="For candidates"
        title="Let's find your next opportunity. Send us your CV"
        image="/images/employer-meeting.jpg"
        imagePosition="50% 35%"
      >
        Many of our FMCG roles are filled before they&rsquo;re ever advertised. Register with us and be first in line.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="form-panel form-panel-solo">
            <h2>Upload your CV</h2>
            <p>Every CV is personally reviewed by our team.</p>
            <SubmitForm
              endpoint="/api/cv-upload/"
              submitLabel="Upload CV"
              successMessage="your CV has been submitted"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+44..." />
                </div>
                <div className="form-group">
                  <label htmlFor="linkedin">LinkedIn</label>
                  <input id="linkedin" name="linkedin" type="text" placeholder="linkedin.com/in/..." />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cv">Upload CV *</label>
                <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" required />
                <p className="form-note">Accepted formats: PDF, DOC, DOCX. Max size 5MB.</p>
              </div>
            </SubmitForm>
          </div>
        </div>
      </section>
    </>
  );
}
