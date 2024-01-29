import styled from "styled-components";
import { IWeaponDataType } from "../../../../@types/maple/WeaponTypes";

const StyledBox = styled.div`
  width: 300px;
  height: 80px;
  border: 1px solid black;
  border-radius: 4px;
`;

interface Props {
  weapon: IWeaponDataType | undefined;
}

const WeaponBox: React.FC<Props> = ({ weapon }) => {
  return <StyledBox>{weapon?.item_name}</StyledBox>;
};

export default WeaponBox;

