import { getAllPosts } from "@/lib/posts";
import PostRow from "@/components/PostRow";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      <div className="intro">
        <h1>Collecting questions along the way. Writing down as I go :)</h1>
        <p>
          A log of builds, books, lines that stuck, and whatever else seemed
          worth writing down.
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
