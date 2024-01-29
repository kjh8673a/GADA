import styled from "styled-components";
import { IWeaponDataType } from "../../../../@types/maple/WeaponTypes";
import WeaponBox from "./WeaponBox";

const StyledLi = styled.li`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSlotName = styled.div`
  width: 80px;
  box-sizing: border-box;
  font-weight: 800;
  font-size: 0.9rem;
  margin: 2px 8px;
  text-align: center;
`;

interface Props {
  leftWeapon: IWeaponDataType | undefined;
  rightWeapon: IWeaponDataType | undefined;
}

const ComparaisonWeaponItem: React.FC<Props> = ({ leftWeapon, rightWeapon }) => {
  return (
    <StyledLi>
      <WeaponBox weapon={leftWeapon} />
      <StyledSlotName>{leftWeapon?.item_equipment_slot}</StyledSlotName>
      <WeaponBox weapon={rightWeapon} />
    </StyledLi>
  );
};

export default ComparaisonWeaponItem;

