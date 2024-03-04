import React from "react";
import styled from "styled-components";
import { TSearchCharacter } from "../../@types/SearchTypes";
import SearchCharacterText from "./SearchCharacterText";
import FameBox from "./FameBox";
import useSearch from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";

interface Props {
  data: TSearchCharacter;
}

// 높이 px 고정
const StyledBox = styled.div`
  position: relative;
  background-image: url("${process.env
    .PUBLIC_URL}/assets/search_character_bg.svg");
  background-color: black;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  &:hover {
    transition: 0.2s;
    cursor: pointer;
    transform: scale(1.05);
  }
  height: 18rem;
`;

const CharacterImg = styled.img``;

const SearchCharacterItem: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const { characterClickHandler } = useSearch();
  return (
    <StyledBox
      onClick={() =>
        characterClickHandler(navigate, data.characterName, data.serverName)
      }
    >
      <CharacterImg src={data.characterImage} alt={"character image"} />
      <SearchCharacterText
        serverName={data.serverName}
        characterName={data.characterName}
        jobGrowName={data.jobGrowName}
        level={data.level}
      />
      <FameBox fame={data.fame} />
    </StyledBox>
  );
};

export default SearchCharacterItem;
