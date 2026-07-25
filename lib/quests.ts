import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { QuestCategory } from "./quest-meta";

export type { QuestCategory } from "./quest-meta";
export { QUEST_CATEGORIES, QUEST_CATEGORY_COLORS } from "./quest-meta";

const QUESTS_DIR = path.join(process.cwd(), "content/quest");

export type QuestMeta = {
  slug: string;
  title: string;
  date: string;
  category: QuestCategory;
  source?: string;
};

export type Quest = QuestMeta & {
  content: string;
};

export function getAllQuests(): QuestMeta[] {
  const files = fs.readdirSync(QUESTS_DIR).filter((f) => f.endsWith(".md"));

  const quests = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(QUESTS_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      category: data.category as QuestCategory,
      source: data.source as string | undefined,
    };
  });

  return quests.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getQuestBySlug(slug: string): Quest {
  const fullPath = path.join(QUESTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as QuestCategory,
    source: data.source as string | undefined,
    content,
  };
}
