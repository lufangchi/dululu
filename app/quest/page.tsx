import { getAllQuests } from "@/lib/quests";
import QuestList from "@/components/QuestList";

export const metadata = {
  title: "side quest — fangchi",
};

export default function QuestIndex() {
  const quests = getAllQuests();

  return (
    <>
      <p className="section-title">side quest</p>
      <p className="quest-note">still placeholders, come back later :)</p>
      <QuestList quests={quests} />
    </>
  );
}
