import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { IWeaponTypes } from "../../../../@types/maple/WeaponTypes";
import { atomCharacterWeapon } from "../../../../atoms/maple/characterWeaponState";
import PetItem from "./PetItem";

const StyledUl = styled.ul`
  width: 320px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1140px) {
    width: 100%;
    flex-direction: column;
  }
`;

const PetList = () => {
  const { pet } = useRecoilValue<IWeaponTypes>(atomCharacterWeapon);

  return (
    <StyledUl>
      <PetItem
        petIcon={pet?.pet_1_icon}
        petNickname={pet?.pet_1_nickname}
        petName={pet?.pet_1_name}
        petWeapon={pet?.pet_1_equipment}
      />
      <PetItem
        petIcon={pet?.pet_2_icon}
        petNickname={pet?.pet_2_nickname}
        petName={pet?.pet_2_name}
        petWeapon={pet?.pet_2_equipment}
      />
      <PetItem
        petIcon={pet?.pet_3_icon}
        petNickname={pet?.pet_3_nickname}
        petName={pet?.pet_3_name}
        petWeapon={pet?.pet_3_equipment}
      />
    </StyledUl>
  );
};

export default PetList;

