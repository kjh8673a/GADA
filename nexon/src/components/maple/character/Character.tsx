import { useParams } from "react-router-dom";
import CenteredBox from "../../../style/CenteredBox";
import CharacterDetail from "./CharacterDetail";
import CharacterSummary from "./CharacterSummary/CharacterSummary";
import CharacterTab from "./CharacterTab";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userNickName } from "../../../atoms/maple/characterName";
import useCharacterBasic from "../../../hooks/maple/useCharacterBasic";

const Character = () => {
  const params = useParams();
  const { getCharacterBasic } = useCharacterBasic();
  const setUserName = useSetRecoilState(userNickName);

  useEffect(() => {
    setUserName(params.Charactername as string);
  }, [setUserName, params.Charactername]);

  useEffect(() => {
    getCharacterBasic(params.Charactername as string);
  }, [getCharacterBasic, params.Charactername]);

  return (
    <CenteredBox>
      {/* 여기에 조회된 캐릭터 정보 표시 */}
      <CharacterSummary />
      {/* 아래에는 탭 표시 */}
      <CharacterTab />
      {/* 아래에는 데이터 표시 */}
      <CharacterDetail />
    </CenteredBox>
  );
};

export default Character;