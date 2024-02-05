import React from "react";
import styled from "styled-components";
import { CharacterType } from "../../../../@types/maple/CharacterSearch";
import CharacterInfo from "./CharacterInfo";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { TabNameType } from "../../../../@types/maple/TabTypes";
import { atomTabName } from "../../../../atoms/maple/characterTabState";
import { userNickName } from "../../../../atoms/maple/characterName";

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
`;

const CharacterInfoBox = styled.div`
  display: flex;
  padding: 8px;
`;

const CharacterImg = styled.img`
  width: 100px;
  heigth: 105px;
`;

const StyledButton = styled.button`
  background-color: #323b44;
  color: #eee;
  font-size: 0.8rem;
  font-weigth: 700;
  display: flex;
  justify-content: center;
  padding: 4px 24px;
  margin: 8px 0;
  border-radius: 16px;
  box-shadow: rgb(51, 51, 51, 0.2), 0px 1px 4px, rgba(225, 225, 225, 0.2), 0px 0px 0px 3px;

  &:hover {
    cursor: pointer;
  }
`;

const CharacterBox: React.FC<Props> = ({ character }) => {
  const navigate = useNavigate();
  const [, setTabName] = useRecoilState<TabNameType>(atomTabName);
  const [, setUserName] = useRecoilState(userNickName);
  const searchCharacter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.value;
    setTabName("CHARACTER");
    setUserName(target);
    navigate(`/Character/${target}`);
  };

  return (
    <CBox>
      <CharacterInfoBox>
        <CharacterImg src={character.character_image} />
        <CharacterInfo character={character} />
      </CharacterInfoBox>
      <StyledButton onClick={searchCharacter} value={character.character_name}>
        캐릭터 상세보기
      </StyledButton>
    </CBox>
  );
};

export default CharacterBox;
