import styled from "styled-components";
import CharacterStatusBox from "./CharacterStatusBox";
import CharacterWeaponBox from "./CharacterWeaponBox";
import CharacterSymbols from "./CharacterSymbols";

const StyledBox = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CharacterStatus = () => {
  return (
    <StyledBox>
      <CharacterStatusBox />
      <CharacterWeaponBox />
      <CharacterSymbols />
    </StyledBox>
  );
};

export default CharacterStatus;

