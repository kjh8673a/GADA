import { useParams } from "react-router-dom";
import { IStatType } from "../../../@types/maple/StatsTypes";
import { getMyStatus } from "../../../api/Character/Stats";
import useFetch from "../../../hooks/useFetch";
import CharacterDetail from "./CharacterDetail";
import CharacterInfo from "./CharacterInfo";
import CharacterSummary from "./CharacterSummary/CharacterSummary";
import CharacterTab from "./CharacterTab";
import { useCharacterData } from "../../../hooks/maple/useCharacterData";

const CharacterFetchContainer = () => {
  const { getCharacterStats, getCharacterWeapons } = useCharacterData();
  const params = useParams();

  const characterResult = useFetch<any, string>(getCharacterStats, params.Charactername as string);
  const weaponResult = useFetch<any, string>(getCharacterWeapons, params.Charactername as string);

  if (!characterResult || !weaponResult) return null;

  return (
    <>
      {/* 여기에 조회된 캐릭터 정보 표시 */}
      <CharacterSummary />
      {/* 아래에 안내문구 표시 */}
      <CharacterInfo />
      {/* 아래에는 탭 표시 */}
      <CharacterTab />
      {/* 아래에는 데이터 표시 */}
      <CharacterDetail />
    </>
  );
};

export default CharacterFetchContainer;

