import styled from "styled-components";
import CharacterInfo from "./CharacterInfo";
import useFetch from "../../../../hooks/useFetch";
import { getCharacterComparisonData } from "../../../../api/Character/Camparison";
import { useParams } from "react-router-dom";
import { ICharacterComparisonData } from "../../../../@types/maple/CharacterComparisionTypes";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledVersus = styled.img`
  width: 64px;
  height: 64px;
  margin: 32px;
`;

const CharacterBox = () => {
  const { characters } = useParams();
  const result = useFetch<ICharacterComparisonData, string>(getCharacterComparisonData, characters || "");

  return (
    <StyledBox>
      <CharacterInfo type="left" data={result?.data.left_character.character_basic_info} />
      <StyledVersus src={`${process.env.PUBLIC_URL}/assets/player-versus-player.png`} alt="image-versus" />
      <CharacterInfo type="right" data={result?.data.right_character.character_basic_info} />
    </StyledBox>
  );
};

export default CharacterBox;

