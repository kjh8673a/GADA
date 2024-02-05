import styled from "styled-components";
import { IPetWeaponDataType } from "../../../../@types/maple/WeaponTypes";

const StyledLi = styled.li`
  margin: 0;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
`;

interface StyledIconBoxProps {
  $img: string | null | undefined;
}

const StyledIconBox = styled.div<StyledIconBoxProps>`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  background-image: url(${(props) => props.$img || `${process.env.PUBLIC_URL}/assets/question-mark.png`});
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #777;
  background-color: #555;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledInfo = styled.div`
  font-size: 0.8rem;
  color: #fff;
  padding: 8px 4px;
`;

interface StyledOptionProps {
  $type: string | null | undefined;
}

const StyledOption = styled.div<StyledOptionProps>`
  background-color: ${(props) => (props.$type === "공격력" ? "#541B22" : props.$type === "마력" ? "#1C2B58" : "none")};
  color: #fff;
  display: inline-block;
  padding: 2px 8px;
  margin-right: 4px;
  margin-top: 2px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

interface Props {
  petIcon: string | null | undefined;
  petNickname: string | null | undefined;
  petName: string | null | undefined;
  petWeapon: IPetWeaponDataType | null | undefined;
}

const PetItem: React.FC<Props> = ({ petIcon, petNickname, petName, petWeapon }) => {
  return (
    <StyledLi>
      <StyledIconBox $img={petIcon} />
      <StyledIconBox $img={petWeapon?.item_icon} />
      <StyledInfo>
        <div>
          {petNickname ? `${petNickname}` : null}
          {petName ? `(${petName})` : null}
        </div>
        <div>
          {petWeapon?.item_option.map((option, idx) => (
            <StyledOption key={idx} $type={option.option_type}>
              +{option.option_value || 0}
            </StyledOption>
          ))}
        </div>
      </StyledInfo>
    </StyledLi>
  );
};

export default PetItem;
