import useCharacterTab from "../../../hooks/maple/useCharacterTab";
import CharacterOwn from "./CharacterOwn/CharacterOwn";
import CharacterSkill from "./CharacterSkill/CharacterSkill";
import CharacterStatus from "./CharacterStatus/CharacterStatus";
import CharacterSynergy from "./CharacterSynergy/CharacterSynergy";
import CharacterUnion from "./CharacterUnion/CharacterUnion";

const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  if (tabName === "CHARACTER") return <CharacterStatus />;
  if (tabName === "UNION") return <CharacterUnion />;
  if (tabName === "SKILL") return <CharacterSkill />;
  if (tabName === "ORG_CHARACTER") return <CharacterOwn />;
  if (tabName === "SYNERGY") return <CharacterSynergy />;

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;

