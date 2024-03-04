import React, { Suspense } from "react";
import CenteredBox from "../../style/CenteredBox";
import CharacterFetchContainer from "./CharacterFetchContainer";
import Loading from "../common/Loading";
import useCharacter from "../../hooks/useCharacter";
import { useSearchParams } from "react-router-dom";

const Character = () => {
  const [searchParams] = useSearchParams();
  const { fetchCharacterInfo, isValid } = useCharacter();
  return (
    <CenteredBox>
      {isValid(searchParams.get("server"), searchParams.get("character")) ? (
        <Suspense fallback={<Loading text="로딩중 입니다" play={true} />}>
          <CharacterFetchContainer
            characterData={fetchCharacterInfo(
              searchParams.get("server")!,
              searchParams.get("character")!
            )}
          />
        </Suspense>
      ) : (
        "캐릭터명과 서버명이 올바른지 확인해주세요."
      )}
    </CenteredBox>
  );
};

export default Character;
