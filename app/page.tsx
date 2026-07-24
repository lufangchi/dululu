import { getAllPosts } from "@/lib/posts";
import PostRow from "@/components/PostRow";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      <div className="intro">
        <h1>Data scientist, new to SF. Writing it down as I go.</h1>
        <p>
          A running log of the job, the side builds, and the rest of life —
          mostly so I remember, partly so someone else finds it useful.
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
