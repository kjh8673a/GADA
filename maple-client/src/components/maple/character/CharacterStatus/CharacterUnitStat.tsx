import styled from "styled-components";
import useStats from "../../../../hooks/maple/useStats";

const StyledBox = styled.div<{ $nodata: boolean }>`
  width: 45%;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${(props) => (props.$nodata ? "#bcbcbc" : "#fff")};
  margin: 4px 0;

  @media (max-width: 768px) {
    width: 48%;
  }
`;

const BoldText = styled.span`
  color: #cbd8e0;
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
    <StyledBox $nodata={!statVal || +statVal === 0}>
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

