import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { BLOG_POSTS } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FMCG Recruitment Insights and Career Advice",
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
          <div className="card-grid-3 mobile-swipe">
            {BLOG_POSTS.map((post) => (
              <article className="blog-card" key={post.title}>
                <Image src={post.image} alt={post.alt} width={800} height={500} sizes="(max-width: 900px) 100vw, 380px" />
                <div className="body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
