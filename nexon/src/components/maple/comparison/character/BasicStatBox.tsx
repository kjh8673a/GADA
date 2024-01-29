import styled from "styled-components";
import useStats from "../../../../hooks/maple/useStats";

type StyledListBoxProps = {
  $align: string;
};

const StyledListBox = styled.ul<StyledListBoxProps>`
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$align === "left" ? "flex-end" : "flex-start")};
`;

const StyledLi = styled.li`
  color: #555;
`;

const StyledBlueGradient = styled.span`
  padding-right: 0.6rem;
  font-size: 0.8rem;
  font-weight: 800;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #4e6bff, #215dd5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
  letter-spacing: -2px;
`;

const StyledRedGradient = styled.span`
  padding-right: 0.6rem;
  font-size: 0.8rem;
  font-weight: 800;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #ff4e4e, #d52121);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
`;

const StyledOrangeGradient = styled.span`
  padding-right: 0.6rem;
  font-size: 0.8rem;
  font-weight: 800;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #ff9d4e, #d57c21);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
`;

const StyledBoldText = styled.span`
  font-weight: 800;
`;

const StyledTitle = styled.h2`
  color: #000;
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  width: 100%;
  display: block;
`;

interface Props {
  align: string;
  characterName: string | undefined;
  characterClass: string | undefined;
  worldName: string | undefined;
  characterLevel: number | undefined;
  combatPower: string | undefined;
}

const BasicStatBox: React.FC<Props> = ({
  align,
  characterName,
  characterClass,
  worldName,
  characterLevel,
  combatPower,
}) => {
  const { convertCombatPower } = useStats();

  return (
    <StyledListBox $align={align}>
      <StyledLi>
        <StyledTitle>
          {characterName}({characterClass})
        </StyledTitle>
      </StyledLi>
      <StyledLi>
        <StyledBlueGradient>월드</StyledBlueGradient>
        <StyledBoldText>{worldName}</StyledBoldText>
      </StyledLi>
      <StyledLi>
        <StyledOrangeGradient>Lv</StyledOrangeGradient>
        <StyledBoldText>{characterLevel}</StyledBoldText>
      </StyledLi>
      <StyledLi>
        <StyledRedGradient>CP</StyledRedGradient>
        <StyledBoldText>{convertCombatPower(combatPower)}</StyledBoldText>
      </StyledLi>
    </StyledListBox>
  );
};

export default BasicStatBox;

