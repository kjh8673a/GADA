import styled from "styled-components";
import CharacterWeapons from "./CharacterWeapons";
import PetWeapons from "./PetWeapons";

const StyledBox = styled.div`
  width: 320px;
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

