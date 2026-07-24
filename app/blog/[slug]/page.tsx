import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, formatDate, TAG_COLORS } from "@/lib/posts";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export function generateStaticParams() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const colors = TAG_COLORS[post.tag] ?? { bg: "#E3E7DF", fg: "#3E4438" };

  return (
    <>
      <a href="/blog" className="back-link">
        ← back to all posts
      </a>
      <div className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span
            className="tag"
            style={{ background: colors.bg, color: colors.fg }}
          >
            {post.tag}
          </span>
          <span className="post-date">{formatDate(post.date)}</span>
        </div>
      </div>
      <div className="post-body">
        <MDXRemote source={post.content} />
      </div>
    </>
  );
}
