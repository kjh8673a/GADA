import React, { Suspense } from "react";
import CenteredBox from "../../style/CenteredBox";
import { useRecoilState } from "recoil";
import { atomCharacterName } from "../../atoms/characterName";
import Loading from "../common/Loading";
import SearchFetchContainer from "./SearchFetchContainer";
import useSearch from "../../hooks/useSearch";
import SearchInput from "./SearchInput";

const Search = () => {
  const [characterName] = useRecoilState(atomCharacterName);
  const { fetchSearchCharacters } = useSearch();

  return (
    <CenteredBox>
      <SearchInput />
      {characterName && (
        <Suspense fallback={<Loading text="캐릭터 정보를 조회 중 입니다" />}>
          <SearchFetchContainer
            searchCharacters={fetchSearchCharacters(characterName)}
          />
        </Suspense>
      )}
    </CenteredBox>
  );
};

export default Search;
