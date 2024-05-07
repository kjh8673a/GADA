import React, { Suspense, useRef } from "react";
import {
  CheckButton,
  MainImg,
  NameSearch,
} from "../style/dnfContainer";
import { useNavigate } from "react-router-dom";
import StyledInput from "../style/StyledInput";
import useSearch from "../hooks/useSearch";
import useLocalStorage from "../hooks/useLocalStorage";
import PopularCharacters from "./PopularCharacters";
import PopularCharactersSkeleton from "./PopularCharactersSkeleton";
import Bookmark from "./Bookmark";
import useFetch from "../hooks/useFetch";
import { getPopularCharacters } from "../api/Character";
import CenteredBox from "../style/CenteredBox";

const Dnf = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { searchClickName, searchEnterName } = useSearch();
  const { addRecentSearch } =
    useLocalStorage();
  const { fetchWrapper } = useFetch();

  return (
    <CenteredBox gap={0}>
      <MainImg src="/assets/danzin.png" alt="Danzin" />
      <NameSearch>
        <StyledInput
          inputRef={inputRef}
          $width={400}
          type="text"
          placeholder="닉네임(12자이내) 입력"
          onKeyDown={(e) => {
            searchEnterName(navigate, e, e.currentTarget.value);
            if (e.key === "Enter") {
              addRecentSearch(e.currentTarget.value);
            }
          }}
        />
        <CheckButton
          src="/assets/search_button.png"
          alt="search"
          onClick={() => {
            searchClickName(navigate, inputRef.current?.value as string);
            addRecentSearch(inputRef.current?.value as string);
          }}
        />
      </NameSearch>
      <Bookmark />
      <Suspense fallback={<PopularCharactersSkeleton />}>
        <PopularCharacters data={fetchWrapper(getPopularCharacters)} />
      </Suspense>
    </CenteredBox>
  );
};

export default Dnf;
