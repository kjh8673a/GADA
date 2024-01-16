import styled from "styled-components";
import CharacterStatusBox from "./CharacterStatusBox";
import CharacterWeapons from "./CharacterWeapons";
import PetWeapons from "./PetWeapons";

const StyledBox = styled.div`
  width: 1140px;
  min-height: 800px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CharacterStatus = () => {
  return (
    <StyledBox>
      <CharacterStatusBox />
      <CharacterWeapons />
      <PetWeapons />
    </StyledBox>
  );
};

export default CharacterStatus;

