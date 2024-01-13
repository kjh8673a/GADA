import useCharacterTab from "../../../hooks/maple/useCharacterTab";
import CharacterStatus from "./CharacterStatus/CharacterStatus";

const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  if (tabName === "CHARACTER") return <CharacterStatus />;

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;

