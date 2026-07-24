import { getAllPosts } from "@/lib/posts";
import PostRow from "@/components/PostRow";

export const metadata = {
  title: "blog — fangchi",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <p className="section-title">all posts</p>
      <div className="post-list">
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
