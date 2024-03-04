import React, { useState } from "react";
import {
  CheckButton,
  MainImg,
  NameSearch,
  DnfContainer,
} from "../style/dnfContainer";
import { useNavigate } from "react-router-dom";
import StyledInput from "../style/StyledInput";
import useSearch from "../hooks/useSearch";

const Dnf = () => {
  const [nickname, setNickname] = useState<string>("");
  const navigate = useNavigate();
  const { searchClickName, searchEnterName, changeHandler } = useSearch();

  return (
    <DnfContainer>
      <MainImg src="/assets/danzin.png" alt="Danzin" />
      <NameSearch>
        <StyledInput
          $width={400}
          type="text"
          placeholder="닉네임(2 ~ 12자) 입력"
          onChange={(e) => changeHandler(setNickname, e)}
          onKeyDown={(e) => searchEnterName(navigate, e, nickname)}
        />
        <CheckButton
          src="/assets/search_button.png"
          alt="search"
          onClick={(e) => searchClickName(navigate, e, nickname)}
        />
      </NameSearch>
    </DnfContainer>
  );
};

export default Dnf;
