import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getQuestBySlug, QUEST_CATEGORY_COLORS } from "@/lib/quests";
import { formatDate } from "@/lib/posts";

const QUESTS_DIR = path.join(process.cwd(), "content/quest");

export function generateStaticParams() {
  return fs
    .readdirSync(QUESTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export default async function QuestEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quest = getQuestBySlug(slug);
  const colors = QUEST_CATEGORY_COLORS[quest.category];

  return (
    <>
      <a href="/quest" className="back-link">
        ← back to side quest
      </a>
      <div className="post-header">
        <h1>{quest.title}</h1>
        <div className="post-meta">
          <span
            className="tag"
            style={{ background: colors.bg, color: colors.fg }}
          >
            {quest.category}
          </span>
          <span className="post-date">{formatDate(quest.date)}</span>
          {quest.source && <span className="post-date">— {quest.source}</span>}
        </div>
      </div>
      <div className="post-body">
        <MDXRemote source={quest.content} />
      </div>
    </>
  );
}
