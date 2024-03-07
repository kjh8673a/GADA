import styled from "styled-components";
import useStats from "../../../../hooks/maple/useStats";
import { useNavigate } from "react-router-dom";

type StyledListBoxProps = {
  $align: string;
};

const StyledListBox = styled.ul<StyledListBoxProps>`
  width: calc(100% - 64px);
  margin: 0;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$align === "left" ? "flex-end" : "flex-start")};

  @media (max-width: 768px) {
    width: auto;
    padding: 8px;
  }
`;

const StyledLi = styled.li`
  color: #ccc;
`;

const StyledBlueGradient = styled.span`
  padding-right: 0.6rem;
  font-size: 0.8rem;
  font-weight: 800;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #6aa3ff, #4e98ff);
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
  color: #fff;
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  width: 100%;
  display: block;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
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
  const navigate = useNavigate();

  const handleSearchCharacter = () => {
    navigate(`/Character/${characterName}`);
  };

  return (
    <StyledListBox $align={align}>
      <StyledLi>
        <StyledTitle onClick={handleSearchCharacter}>
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

