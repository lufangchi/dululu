export type QuestCategory = "lines" | "crafts" | "reading" | "other";

export const QUEST_CATEGORIES: QuestCategory[] = [
  "lines",
  "crafts",
  "reading",
  "other",
];

export const QUEST_CATEGORY_COLORS: Record<
  QuestCategory,
  { bg: string; fg: string }
> = {
  lines: { bg: "#EDE3D8", fg: "#5B4632" },
  crafts: { bg: "#DFE6E9", fg: "#2E4650" },
  reading: { bg: "#E3E7DF", fg: "#3E4438" },
  other: { bg: "#E9E3E7", fg: "#43333C" },
};
