import styled from "styled-components";
import CharacterInfo from "./CharacterInfo";
import { ICharacterComparisonData } from "../../../../@types/maple/CharacterComparisionTypes";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 4px;
  padding: 16px 0;
`;

const StyledVersus = styled.img`
  width: 64px;
  height: 64px;
  margin: 32px;
`;

interface Props {
  data: ICharacterComparisonData | undefined;
}

const CharacterBox: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <CharacterInfo type="left" data={data?.data?.left_character?.character_basic_info} />
      <StyledVersus src={`${process.env.PUBLIC_URL}/assets/player-versus-player.png`} alt="image-versus" />
      <CharacterInfo type="right" data={data?.data?.right_character?.character_basic_info} />
    </StyledBox>
  );
};

export default CharacterBox;

