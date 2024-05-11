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

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 480px;
    gap: 12px;
  }

  @media (max-width: 1140px) {
    justify-content: space-around;
  }
`;

const StyledItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;

const CharacterStatus = () => {
  return (
    <StyledBox>
      <CharacterStatusBox />
      <StyledItemBox>
        <CharacterWeaponBox />
        <CharacterSymbols />
      </StyledItemBox>
    </StyledBox>
  );
};

export default CharacterStatus;

