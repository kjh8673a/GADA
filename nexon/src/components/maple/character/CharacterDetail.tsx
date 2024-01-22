import useCharacterTab from "../../../hooks/maple/useCharacterTab";
import CharacterOwn from "./CharacterOwn/CharacterOwn";
import CharacterSkill from "./CharacterSkill/CharacterSkill";
import CharacterStatus from "./CharacterStatus/CharacterStatus";

const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  if (tabName === "CHARACTER") return <CharacterStatus />;
  if (tabName === "SKILL") return <CharacterSkill />;
  if (tabName === "ORG_CHARACTER") return <CharacterOwn />;

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;

