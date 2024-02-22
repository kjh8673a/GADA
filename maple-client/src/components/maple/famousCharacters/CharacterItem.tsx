import { useNavigate } from "react-router-dom";
import { FamousCharacterType } from "../../../@types/maple/FamousCharacterType";
import styled from "styled-components";

const StyledLi = styled.li`
  padding: 4px 8px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: var(--third-bg-color);
  }
`;

const StyledRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  margin-right: 8px;
  background-color: var(--primary-bg-color);
`;

const StyledName = styled.span`
  margin-right: 8px;
`;

const StyledWorld = styled.span`
  font-size: 0.7rem;
  color: rgb(254, 199, 99);
  margin-right: 8px;
`;

const StyledLevel = styled.span`
  font-size: 0.7rem;
`;

interface Props {
  data: FamousCharacterType;
}

const CharacterItem: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const searchCharacter = () => {
    navigate(`/Character/${data.character_name}`);
  };

  return (
    <StyledLi onClick={searchCharacter}>
      <StyledRank>{data.rank}</StyledRank>
      <StyledName>{data.character_name}</StyledName>
      <StyledWorld>{data.world_name}</StyledWorld>
      <StyledLevel>Lv. {data.character_level}</StyledLevel>
    </StyledLi>
  );
};

export default CharacterItem;

