"use client";

import { useState } from "react";
import {
  QUEST_CATEGORIES,
  QUEST_CATEGORY_COLORS,
  type QuestCategory,
} from "@/lib/quest-meta";
import type { QuestMeta } from "@/lib/quests";
import { formatDate } from "@/lib/date";

export default function QuestList({ quests }: { quests: QuestMeta[] }) {
  const [active, setActive] = useState<QuestCategory | "all">("all");

  const filtered =
    active === "all" ? quests : quests.filter((q) => q.category === active);

  return (
    <>
      <div className="quest-filters">
        <button
          className="chip"
          data-active={active === "all"}
          onClick={() => setActive("all")}
        >
          all
        </button>
        {QUEST_CATEGORIES.map((category) => {
          const colors = QUEST_CATEGORY_COLORS[category];
          const isActive = active === category;
          return (
            <button
              key={category}
              className="chip"
              data-active={isActive}
              style={isActive ? { background: colors.bg, color: colors.fg } : undefined}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="post-list">
        {filtered.map((quest) => {
          const colors = QUEST_CATEGORY_COLORS[quest.category];
          return (
            <a href={`/quest/${quest.slug}`} className="post-row" key={quest.slug}>
              <span
                className="tag"
                style={{ background: colors.bg, color: colors.fg }}
              >
                {quest.category}
              </span>
              <span className="post-title">{quest.title}</span>
              <span className="post-date">{formatDate(quest.date)}</span>
            </a>
          );
        })}
        {filtered.length === 0 && (
          <p className="quest-empty">nothing here yet.</p>
        )}
      </div>
    </>
  );
}
