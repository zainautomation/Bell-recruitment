import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content";
import Icon from "@/components/Icon";

// Blog cards for the Home page, the Blogs page and the "more articles" row under each article.
// Each card links to its article at /blogs/<slug>/.
export default function BlogCards({ posts = BLOG_POSTS, swipe = true }: { posts?: typeof BLOG_POSTS; swipe?: boolean }) {
  return (
    <div className={`${posts.length === 2 ? "card-grid-2" : "card-grid-3"}${swipe ? " mobile-swipe" : ""}`}>
      {posts.map((post) => (
        <article className="blog-card" key={post.slug}>
          <Link href={`/blogs/${post.slug}/`} className="blog-card-link">
            <Image src={post.image} alt={post.alt} width={800} height={500} sizes="(max-width: 900px) 100vw, 380px" />
            <div className="body">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="blog-card-more">
                Read the article <Icon name="arrow-right" />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
