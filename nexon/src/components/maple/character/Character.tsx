import { useParams } from "react-router-dom";
import CenteredBox from "../../../style/CenteredBox";
import { Suspense, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userNickName } from "../../../atoms/maple/characterName";
import useCharacterBasic from "../../../hooks/maple/useCharacterBasic";
import Loading from "../../common/Loading";
import CharacterFetchContainer from "./CharacterFetchContainer";
import FetchErrorBoundary from "../../common/FetchErrorBoundary";
import DeferredComponent from "../../common/DeferredComponent";

const Character = () => {
  const params = useParams();
  const setUserName = useSetRecoilState(userNickName);
  const { getCharacterBasic } = useCharacterBasic();

  useEffect(() => {
    getCharacterBasic(params.Charactername as string);
  }, [params.Charactername, getCharacterBasic]);

  useEffect(() => {
    setUserName(params.Charactername as string);
  }, [setUserName, params.Charactername]);

  return (
    <CenteredBox>
      <FetchErrorBoundary errorMsg="조회된 캐릭터가 없습니다.">
        <Suspense
          fallback={
            <DeferredComponent>
              <Loading text="캐릭터 정보를 조회 중 입니다" />
            </DeferredComponent>
          }
        >
          <CharacterFetchContainer />
        </Suspense>
      </FetchErrorBoundary>
    </CenteredBox>
  );
};

export default Character;

