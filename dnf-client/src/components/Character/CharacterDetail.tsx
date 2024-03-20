import useCharacterTab from "../../hooks/useCharacterTab";
import CharacterSkill from "./Skill/CharacterSkill";
import CharacterStat from "./Stat/CharacterStat";
import CharacterTalisman from "./Talisman/Talisman";

const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  if (tabName === "STAT") return <CharacterStat />;
  // if (tabName === "EQUIPMENT") return < />;
  // if (tabName === "BUFF") return < />;
  if (tabName === "SKILL") return <CharacterSkill />;
  // if (tabName === "AVATAR") return < />;
  // if (tabName === "INSIGNIA") return < />;
  if (tabName === "TALISMAN") return <CharacterTalisman />;

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;
