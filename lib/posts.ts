import fs from "fs";
import path from "path";
import matter from "gray-matter";

export { formatDate } from "./date";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(POSTS_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      tag: data.tag as string,
      excerpt: data.excerpt as string,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    tag: data.tag as string,
    excerpt: data.excerpt as string,
    content,
  };
}

export const TAG_COLORS: Record<string, { bg: string; fg: string }> = {
  "9 to 5": { bg: "#E3E7DF", fg: "#3E4438" },
  tinkering: { bg: "#DFE6E9", fg: "#2E4650" },
  "the rest": { bg: "#E9E3E7", fg: "#43333C" },
};
