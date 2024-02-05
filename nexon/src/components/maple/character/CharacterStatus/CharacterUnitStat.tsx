import styled from "styled-components";
import useStats from "../../../../hooks/maple/useStats";

const StyledBox = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #fff;
  margin: 4px 0;
`;

const BoldText = styled.span`
  font-weight: 600;
  color: #c1ced6;
`;

interface Props {
  statKey: string;
  statVal: string | number | null | undefined;
  statVal2?: string | undefined;
  increased?: string | undefined;
  type: "POWER" | "NUMBER" | "PERCENT" | "SEC/PERCENT" | "INCREASED" | "STAGE" | "LEVEL";
}

const CharacterUnitStat: React.FC<Props> = ({ statKey, statVal, statVal2, increased, type }) => {
  if (!statVal) statVal = undefined;

  const {
    convertCombatPower,
    convertStrToCommaFormat,
    convertToPercent,
    convertToSec,
    increasedStatView,
    convertToStage,
    convertToLevel,
  } = useStats();
  return (
    <StyledBox>
      <BoldText>{statKey}</BoldText>
      {type === "POWER" && <span>{convertCombatPower(statVal)}</span>}
      {type === "NUMBER" && <span>{convertStrToCommaFormat(statVal)}</span>}
      {type === "PERCENT" && <span>{convertToPercent(statVal)}</span>}
      {type === "SEC/PERCENT" && <span>{`${convertToSec(statVal2)} / ${convertToPercent(statVal)}`}</span>}
      {type === "INCREASED" && <span>{increasedStatView(statVal, increased)}</span>}
      {type === "STAGE" && <span>{convertToStage(statVal)}</span>}
      {type === "LEVEL" && <span>{convertToLevel(statVal)}</span>}
    </StyledBox>
  );
};

export default CharacterUnitStat;

