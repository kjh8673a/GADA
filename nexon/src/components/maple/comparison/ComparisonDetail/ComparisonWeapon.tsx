import styled from "styled-components";
import { IWeaponTypes } from "../../../../@types/maple/WeaponTypes";
import ComparaisonWeaponItem from "./ComparaisonWeaponItem";

interface Props {
  leftWeapons: IWeaponTypes | undefined;
  rightWeapons: IWeaponTypes | undefined;
}

const StyledList = styled.div`
  width: 100%;
  margin: 0;
  margin-bottom: 24px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const ComparisonWeapon: React.FC<Props> = ({ leftWeapons, rightWeapons }) => {
  return (
    <StyledList>
      {leftWeapons?.item?.item_equipment.map((_, idx) => (
        <ComparaisonWeaponItem
          key={idx}
          leftWeapon={leftWeapons?.item?.item_equipment[idx]}
          rightWeapon={rightWeapons?.item?.item_equipment[idx]}
        />
      ))}
    </StyledList>
  );
};

export default ComparisonWeapon;

