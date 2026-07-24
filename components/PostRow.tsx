import { PostMeta, TAG_COLORS, formatDate } from "@/lib/posts";

export default function PostRow({ post }: { post: PostMeta }) {
  const colors = TAG_COLORS[post.tag] ?? { bg: "#E3E7DF", fg: "#3E4438" };

  return (
    <a href={`/blog/${post.slug}`} className="post-row">
      <span
        className="tag"
        style={{ background: colors.bg, color: colors.fg }}
      >
        {post.tag}
      </span>
      <span className="post-title">{post.title}</span>
      <span className="post-date">{formatDate(post.date)}</span>
    </a>
  );
}
