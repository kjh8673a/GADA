import React, { Suspense, useRef } from "react";
import {
  CheckButton,
  MainImg,
  NameSearch,
  DnfContainer,
} from "../style/dnfContainer";
import { useNavigate } from "react-router-dom";
import StyledInput from "../style/StyledInput";
import useSearch from "../hooks/useSearch";
import useLocalStorage from "../hooks/useLocalStorage";
import useCharacter from "../hooks/useCharacter";
import PopularCharacters from "./PopularCharacters";
import PopularCharactersSkeleton from "./PopularCharactersSkeleton";
import Bookmark from "./Bookmark";

const Dnf = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { fetchPopularCharacters } = useCharacter();
  const { searchClickName, searchEnterName } = useSearch();
  const { addRecentSearch } =
    useLocalStorage();
  const popularCharactersData = fetchPopularCharacters();

  return (
    <DnfContainer>
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
        <PopularCharacters data={popularCharactersData} />
      </Suspense>
    </DnfContainer>
  );
};

export default Dnf;
