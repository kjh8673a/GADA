import React, { useEffect, useState } from "react";
import StyledInput from "../../style/StyledInput";
import { CheckButton, NameSearch } from "../../style/dnfContainer";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import useLocalStorage from "../../hooks/useLocalStorage";

const SearchInput = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>("");
  const { searchClickName, searchEnterName, changeHandler } = useSearch();
  const { addRecentSearch } = useLocalStorage();
  useEffect(
    () => setNickname(searchParams.get("input") as string),
    [searchParams, setNickname]
  );
  return (
    <NameSearch>
      <StyledInput
        $width={400}
        type="text"
        value={nickname}
        placeholder="닉네임(12자이내) 입력"
        onChange={(e) => changeHandler(setNickname, e)}
        onKeyDown={(e) => {
          searchEnterName(navigate, e, nickname);
          if (e.key === "Enter") {
            addRecentSearch(nickname);
          }
        }}
      />
      <CheckButton
        src="/assets/search_button.png"
        alt="search"
        onClick={() => {
          searchClickName(navigate, nickname);
          addRecentSearch(nickname);
        }}
      />
    </NameSearch>
  );
};

export default SearchInput;
