import styled from "styled-components";
import { IWeaponDataType } from "../../../../@types/maple/WeaponTypes";
import WeaponBox from "./WeaponBox";
import DashedLine from "../../../common/DashedLine";

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
  margin: 2px;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledConnectLine = styled.div`
  width: 30px;

  @media (max-width: 768px) {
    width: 12px;
  }
`;

interface Props {
  leftWeapon: IWeaponDataType | undefined;
  rightWeapon: IWeaponDataType | undefined;
}

const ComparaisonWeaponItem: React.FC<Props> = ({ leftWeapon, rightWeapon }) => {
  return (
    <StyledLi>
      <WeaponBox weapon={leftWeapon} />
      <StyledConnectLine>
        <DashedLine />
      </StyledConnectLine>
      <StyledSlotName>{leftWeapon?.item_equipment_slot}</StyledSlotName>
      <StyledConnectLine>
        <DashedLine />
      </StyledConnectLine>
      <WeaponBox weapon={rightWeapon} />
    </StyledLi>
  );
};

export default ComparaisonWeaponItem;

