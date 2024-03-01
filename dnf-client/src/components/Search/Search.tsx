import React, { Suspense } from "react";
import CenteredBox from "../../style/CenteredBox";
import Loading from "../common/Loading";
import SearchFetchContainer from "./SearchFetchContainer";
import useSearch from "../../hooks/useSearch";
import SearchInput from "./SearchInput";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { fetchSearchCharacters, isValidInput } = useSearch();
  return (
    <CenteredBox>
      <SearchInput />
      {isValidInput(searchParams.get("input")) ? (
        <Suspense fallback={<Loading text="캐릭터 정보를 조회 중 입니다" />}>
          <SearchFetchContainer
            searchCharacters={fetchSearchCharacters(
              searchParams.get("input") as string
            )}
          />
        </Suspense>
      ) : (
        "캐릭터 이름은 2자이상 12자이하만 검색 가능합니다."
      )}
    </CenteredBox>
  );
};

export default Search;
