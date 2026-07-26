import { getAllPosts } from "@/lib/posts";
import PostRow from "@/components/PostRow";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      <div className="intro">
        <h1>Collecting questions along the way. Writing down as I go :)</h1>
        <p>
          Product data scientist in San Francisco, still working out how to
          measure things that are hard to measure.{" "}
          <a href="/about">more about me →</a>
        </p>
      </div>

      <p className="section-title">latest</p>
      <div className="post-list">
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
