import useCharacterTab from "../../../hooks/maple/useCharacterTab";

const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;

