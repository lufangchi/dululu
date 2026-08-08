import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import PostRow from "@/components/PostRow";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      <div className="intro">
        <Image
          src="/headshot.jpg"
          alt="Fangchi"
          width={112}
          height={112}
          quality={100}
          className="intro-avatar"
          priority
        />
        <h1>Collecting questions and writing down as I go :)</h1>
      </div>

      <div className="post-body intro-bio">
        <p>Hi, I&apos;m Fangchi.</p>
        <p>
          I&apos;m a product data scientist based in San Francisco. I
          currently work on analytics for safety and integrity systems,
          where tech operates at scale while human judgment remains
          essential. I&apos;m curious about how we measure and evaluate
          complex autonomous systems broadly, where defining success is part
          of the optimization process.
        </p>
        <p>
          I grew up in Beijing and studied in Shenzhen and New York. Outside
          of work, I enjoy climbing without pushing grades, baking,
          crocheting, walking through parks, meditation, and films by Wong
          Kar-wai.
        </p>
        <p>
          I keep this site as a practice ground for collecting things I
          build, learn, and notice, and to practice living more mindfully.
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
