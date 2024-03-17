import useCharacterTab from "../../hooks/useCharacterTab";
import BuffEquip from "./BuffEquip/BuffEquip";
import Equipment from "./Equipment/Equipment";
import Stat from "./Stat/Stat";

const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  if (tabName === "STAT") return <Stat />;
  if (tabName === "EQUIPMENT") return <Equipment />;
  if (tabName === "BUFF") return <BuffEquip />;
  // if (tabName === "SKILL") return < />;
  // if (tabName === "AVATAR") return < />;
  // if (tabName === "INSIGNIA") return < />;
  // if (tabName === "TALISMAN") return < />;

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;
