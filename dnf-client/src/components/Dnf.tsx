import React, { useState } from "react";
import {
  CheckButton,
  MainImg,
  DnfConatiner,
  NameSearch,
} from "../style/dnfContainer";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { atomCharacterName } from "../atoms/characterName";
import StyledInput from "../style/StyledInput";

const Dnf = () => {
  const [nickname, setNickname] = useState<string>("");
  const [, setCharacterName] = useRecoilState<string>(atomCharacterName);
  const navigate = useNavigate();

  const SearchClickkName = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (1 < nickname.length && nickname.length < 13) {
      setCharacterName(nickname);
      navigate("/Search");
    }
  };

  const SearchEnterName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (1 < nickname.length && nickname.length < 13) {
        setCharacterName(nickname);
        navigate("/Search");
      }
    }
  };

  const searchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <DnfConatiner>
      <MainImg src="/assets/danzin.png" alt="Danzin" />
      <NameSearch>
        <StyledInput
          $width={400}
          type="text"
          placeholder="닉네임(2 ~ 12자) 입력"
          onChange={searchName}
          onKeyDown={SearchEnterName}
        />
        <CheckButton src="/assets/search_button.png" alt="search" onClick={SearchClickkName} />
      </NameSearch>
    </DnfConatiner>
  );
};

export default Dnf;