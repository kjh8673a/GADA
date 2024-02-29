import React, { useState } from "react";
import StyledInput from "../../style/StyledInput";
import { useRecoilState } from "recoil";
import { atomCharacterName } from "../../atoms/characterName";
import { CheckButton, NameSearch } from "../../style/dnfContainer";

const SearchInput = () => {
  const [characterName, setCharacterName] = useRecoilState(atomCharacterName);
  const [nickname, setNickname] = useState<string>(characterName);

  const SearchClickkName = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (1 < nickname.length && nickname.length < 13) {
      setCharacterName(nickname);
    }
  };

  const searchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const SearchEnterName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (1 < nickname.length && nickname.length < 13) {
        setCharacterName(nickname);
      }
    }
  };

  return (
    <NameSearch>
      <StyledInput
        $width={1140}
        type="text"
        value={nickname}
        placeholder="닉네임(2 ~ 12자) 입력"
        onChange={searchName}
        onKeyDown={SearchEnterName}
      />
      <CheckButton
        src="/assets/search_button.png"
        alt="search"
        onClick={SearchClickkName}
      />
    </NameSearch>
  );
};

export default SearchInput;
