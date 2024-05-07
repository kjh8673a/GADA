import React, { Suspense } from "react";
import CenteredBox from "../../style/CenteredBox";
import Loading from "../common/Loading";
import SearchFetchContainer from "./SearchFetchContainer";
import useSearch from "../../hooks/useSearch";
import SearchInput from "./SearchInput";
import { useSearchParams } from "react-router-dom";
import RecentSearch from "./RecentSearch";
import useFetch from "../../hooks/useFetch";
import { getSearchCharacters } from "../../api/Character";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { isValidInput } = useSearch();
  const { fetchWrapper } = useFetch();
  return (
    <CenteredBox gap={15}>
      <SearchInput />
      <RecentSearch />
      {isValidInput(searchParams.get("input")) ? (
        <Suspense fallback={<Loading text="로딩중입니다" play={true} />}>
          <SearchFetchContainer
            searchCharacters={fetchWrapper(
              getSearchCharacters,
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
