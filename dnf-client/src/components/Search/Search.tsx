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
        <Suspense fallback={<Loading text="로딩중입니다" play={true} />}>
          <SearchFetchContainer
            searchCharacters={fetchSearchCharacters(
              searchParams.get("input") as string
            )}
          />
        </Suspense>
      ) : (
        <Loading text="닉네임은 12자이내만 검색 가능합니다." play={false} />
      )}
    </CenteredBox>
  );
};

export default Search;
