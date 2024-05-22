import { useParams } from "react-router-dom";
import CenteredBox from "../../../style/CenteredBox";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userNickName } from "../../../atoms/maple/characterName";
import useCharacterBasic from "../../../hooks/maple/useCharacterBasic";
import CharacterFetchContainer from "./CharacterFetchContainer";
import FetchErrorBoundary from "../../common/FetchErrorBoundary";
import { userOwnCharacter } from "../../../atoms/maple/characterOwn";
import { isUpdated } from "../../../atoms/maple/characterUpdateState";
// import AdBoxHorizon from "../../adsense/AdBoxHorizon";

const Character = () => {
  const params = useParams();
  const setUserName = useSetRecoilState(userNickName);
  const setUpdate = useSetRecoilState(isUpdated);
  const resetCharacterList = useSetRecoilState(userOwnCharacter);
  const { getCharacterBasic } = useCharacterBasic();

  useEffect(() => {
    getCharacterBasic(params.Charactername as string);
    resetCharacterList([]);
    setUpdate(false);
  }, [params.Charactername, getCharacterBasic, resetCharacterList]);

  useEffect(() => {
    setUserName(params.Charactername as string);
  }, [setUserName, params.Charactername]);

  return (
    <CenteredBox>
      <FetchErrorBoundary errorMsg="조회된 캐릭터가 없습니다.">
        <CharacterFetchContainer />
      </FetchErrorBoundary>
    </CenteredBox>
  );
};

export default Character;

