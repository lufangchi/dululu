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
      </div>

      <div className="post-body intro-bio">
        <p>Hi, I&apos;m Fangchi.</p>
        <p>
          I&apos;m a product data scientist based in San Francisco. I
          currently work on analytics across safety and integrity products
          and policies, where decisions about people are shaped by both
          human judgment and technology at scale. I&apos;m curious about how
          we measure and evaluate complex systems, and how our definition of
          success shapes what we optimize for.
        </p>
        <p>
          I grew up in Beijing and studied in Shenzhen and New York. Outside
          of work, I enjoy climbing without chasing grades, baking,
          crocheting, walking through parks, meditation, and films by Wong
          Kar-wai.
        </p>
        <p>
          I keep this site as a playground for collecting things I build,
          learn, and notice—and as a place to practice living more
          mindfully.
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
