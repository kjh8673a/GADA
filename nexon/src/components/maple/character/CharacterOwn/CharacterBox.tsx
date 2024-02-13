import React from "react";
import styled from "styled-components";
import { CharacterType } from "../../../../@types/maple/CharacterSearch";
import CharacterInfo from "./CharacterInfo";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userNickName } from "../../../../atoms/maple/characterName";
import { atomTabName } from "../../../../atoms/maple/characterTabState";

interface Props {
  character: CharacterType;
}

const CBox = styled.div`
  display: flex;
  width: 240px;
  border: 3px solid #aaa;
  border-radius: 8px;
  border-style: ridge;
  margin: 8px;
  flex-direction: column;
  padding: 0 8px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--custom-shadow);

  &:hover {
    cursor: pointer;
    background-color: var(--primary-bg-color);
  }
`;

const CharacterInfoBox = styled.div`
  display: flex;
  padding: 8px;
`;

const CharacterImg = styled.img`
  width: 100px;
  heigth: 105px;
`;

const CharacterBox: React.FC<Props> = ({ character }) => {
  const navigate = useNavigate();
  const setUserName = useSetRecoilState(userNickName);
  const setTabname = useSetRecoilState(atomTabName);

  const searchCharacter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = character?.character_name;

    setUserName(target);
    setTabname("CHARACTER");
    navigate(`/Character/${target}`);
  };

  return (
    <CBox onClick={searchCharacter}>
      <CharacterInfoBox>
        <CharacterImg src={character.character_image} />
        <CharacterInfo character={character} />
      </CharacterInfoBox>
    </CBox>
  );
};

export default CharacterBox;

