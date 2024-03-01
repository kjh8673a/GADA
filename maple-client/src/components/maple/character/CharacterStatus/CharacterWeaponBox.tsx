import styled from "styled-components";
import CharacterWeapons from "./CharacterWeapons";
import PetWeapons from "./PetWeapons";

const StyledBox = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 1140px) {
    width: 100%;
  }
`;

const CharacterWeaponBox = () => {
  return (
    <StyledBox>
      <CharacterWeapons />
      <PetWeapons />
    </StyledBox>
  );
};

export default CharacterWeaponBox;

