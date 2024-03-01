import styled from "styled-components";
import useStats from "../../../../hooks/maple/useStats";

const StyledBox = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d6076;
  padding: 8px 16px;
  border-radius: 8px;
`;

const FloatLeftBox = styled.div`
  position: absolute;
  left: 16px;
  color: #fff;
`;

const HighLightedBox = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #eefced;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

interface Props {
  combatPower: string | undefined;
}

const CharacterStatusBattlePoint: React.FC<Props> = ({ combatPower }) => {
  const { convertCombatPower } = useStats();
  return (
    <StyledBox>
      <FloatLeftBox>전투력</FloatLeftBox>
      <HighLightedBox>{convertCombatPower(combatPower)}</HighLightedBox>
    </StyledBox>
  );
};

export default CharacterStatusBattlePoint;

