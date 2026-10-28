import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ButtonRow } from "@/components/ButtonLink";
import BlogCards from "@/components/BlogCards";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ARTICLES, readingMinutes } from "@/lib/articles";
import { BLOG_POSTS, URLS } from "@/lib/content";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

// Only the articles listed in BLOG_POSTS exist; any other address is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

function find(slug: string) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const article = ARTICLES[slug];
  return post && article ? { post, article } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = find((await params).slug);
  if (!found) return {};
  const { post, article } = found;
  const path = `/blogs/${post.slug}/`;
  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.description,
      url: path,
      publishedTime: article.published,
      images: [{ url: post.image, alt: post.alt }],
    },
  };
}

// Turns [anchor text](/path/) in the article text into internal links and **text** into bold.
function inline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link)
      return (
        <Link key={i} href={link[2]}>
          {link[1]}
        </Link>
      );
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    return bold ? <strong key={i}>{bold[1]}</strong> : part;
  });
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const found = find(slug);
  if (!found) notFound();
  const { post, article } = found;
  const others = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blogs", path: "/blogs/" },
          { name: post.title, path: `/blogs/${slug}/` },
        ])}
      />
      <JsonLd data={articleSchema(post, article)} />
      {article.faqs && <JsonLd data={faqSchema(article.faqs)} />}

      <PageHero eyebrow="Blog" title={post.title}>
        {post.excerpt}
      </PageHero>

      <section className="section">
        <div className="container-narrow article">
          <p className="article-meta">
            By Bell Recruitment &middot; Published <time dateTime={article.published}>{formatDate(article.published)}</time>{" "}
            &middot; {readingMinutes(article)} min read
          </p>

          <figure className="article-figure">
            <Image src={post.image} alt={post.alt} width={1200} height={750} sizes="(max-width: 900px) 100vw, 760px" priority />
          </figure>

          <div className="article-summary">
            <h2>Key takeaways</h2>
            <ul>
              {article.takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {article.intro.map((t) => (
            <p key={t}>{inline(t)}</p>
          ))}

          {article.sections.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              {s.blocks.map((b, i) => {
                if (b.type === "p") return <p key={i}>{inline(b.text)}</p>;
                if (b.type === "ul")
                  return (
                    <ul key={i}>
                      {b.items.map((it) => (
                        <li key={it}>{inline(it)}</li>
                      ))}
                    </ul>
                  );
                if (b.type === "ol")
                  return (
                    <ol key={i}>
                      {b.items.map((it) => (
                        <li key={it}>{inline(it)}</li>
                      ))}
                    </ol>
                  );
                return (
                  <div className="article-table-wrap" key={i}>
                    <table className="article-table">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">{b.heads[0]}</th>
                          <th scope="col">{b.heads[1]}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {b.rows.map(([label, a, c]) => (
                          <tr key={label}>
                            <th scope="row">{label}</th>
                            <td>{a}</td>
                            <td>{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          ))}

          {article.faqs && (
            <div>
              <h2>Frequently asked questions</h2>
              {article.faqs.map((f) => (
                <div key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          )}

          <div className="article-cta">
            <h2>{article.cta.title}</h2>
            <p>{article.cta.text}</p>
            <ButtonRow
              buttons={
                article.cta.buttons ?? [
                  { label: "Hire FMCG talent", href: URLS.hire, variant: "light" },
                  { label: "Upload your CV", href: URLS.cvUpload, variant: "outline" },
                ]
              }
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head-center">
            <div className="section-label">More from the blog</div>
            <h2>More from Bell Recruitment</h2>
          </div>
          <BlogCards posts={others} swipe={false} />
        </div>
      </section>
    </>
  );
}
