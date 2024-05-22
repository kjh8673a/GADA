import useCharacterTab from "../../hooks/useCharacterTab";
<<<<<<< HEAD
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
=======
import AvatarCreature from "./AvatarCreature/AvatarCreature";
import BuffEquip from "./BuffEquip/BuffEquip";
import Equipment from "./Equipment/Equipment";
import Flag from "./Flag/Flag";
import Stat from "./Stat/Stat";
import CharacterTalisman from "./Talisman/Talisman";
const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  if (tabName === "STAT") return <Stat />;
  if (tabName === "EQUIPMENT") return <Equipment />;
  if (tabName === "BUFF") return <BuffEquip />;
  if (tabName === "AVATAR") return <AvatarCreature />;
  if (tabName === "FLAG") return <Flag />;
>>>>>>> dnf/release
  if (tabName === "TALISMAN") return <CharacterTalisman />;

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;
