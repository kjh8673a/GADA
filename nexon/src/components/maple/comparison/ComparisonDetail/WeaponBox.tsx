import styled from "styled-components";
import { IWeaponDataType } from "../../../../@types/maple/WeaponTypes";
import WeaponBasicInfo from "./WeaponBasicInfo";
import WeaponStatInfo from "./WeaponStatInfo";

const StyledBox = styled.div`
  width: 320px;
  border-radius: 4px;
  background-color: var(--primary-bg-color);
  color: #fff;
  margin: 4px 0;
`;

interface Props {
  weapon: IWeaponDataType | undefined;
}

const WeaponBox: React.FC<Props> = ({ weapon }) => {
  return (
    <StyledBox>
      <WeaponBasicInfo
        weaponImg={weapon?.item_icon}
        weaponStarforce={weapon?.starforce}
        weaponSlot={weapon?.item_equipment_slot}
        weaponName={weapon?.item_name}
      />
      <WeaponStatInfo
        pOption01={weapon?.potential_option_1}
        pOption02={weapon?.potential_option_2}
        pOption03={weapon?.potential_option_3}
        pOptionGrade={weapon?.potential_option_grade}
        apOption01={weapon?.additional_potential_option_1}
        apOption02={weapon?.additional_potential_option_2}
        apOption03={weapon?.additional_potential_option_3}
        apOptionGrade={weapon?.additional_potential_option_grade}
      />
    </StyledBox>
  );
};

export default WeaponBox;

