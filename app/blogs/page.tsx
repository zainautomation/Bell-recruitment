import type { Metadata } from "next";
import BlogCards from "@/components/BlogCards";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FMCG Recruitment Insights and Advice",
  description:
    "Hiring guides, career advice and FMCG market insights from Bell Recruitment, a specialist FMCG executive search and recruitment firm founded in 1999.",
  alternates: { canonical: "/blogs/" },
};

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Blogs", path: "/blogs/" }])} />
      <JsonLd data={blogSchema()} />
      <PageHero eyebrow="Insights" title="Blogs" image="/images/team-meeting.jpg">
        FMCG hiring and career advice from the Bell Recruitment team.
      </PageHero>

      <section className="section">
        <div className="container">
          <BlogCards />
        </div>
      </section>
    </>
  );
}
