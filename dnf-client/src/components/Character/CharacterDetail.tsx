import useCharacterTab from "../../hooks/useCharacterTab";
import CharacterStat from "./Stat/CharacterStat";

const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  if (tabName === "STAT") return <CharacterStat />;
  // if (tabName === "EQUIPMENT") return < />;
  // if (tabName === "BUFF") return < />;
  // if (tabName === "SKILL") return < />;
  // if (tabName === "AVATAR") return < />;
  // if (tabName === "INSIGNIA") return < />;
  // if (tabName === "TALISMAN") return < />;

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;
