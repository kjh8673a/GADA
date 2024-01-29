import styled from "styled-components";
import useStats from "../../../../hooks/maple/useStats";

const StyledStat = styled.span<{ $align: string; $highlight: boolean }>`
  margin: 0;
  display: flex;
  width: 240px;
  justify-content: ${(props) => (props.$align === "left" ? "start" : "end")};
  align-items: center;
  font-weight: 800;
  color: ${(props) => (props.$highlight ? "#000" : "#777")};
  font-size: 0.9rem;
`;

const StyledArrow = styled.div<{ $isBigger: boolean; $position: string }>`
  width: 12px;
  height: 16px;
  background-color: ${(props) => (props.$isBigger ? "#EAB30A" : "#ccc")};
  margin-${(props) => (props.$position === "left" ? "right" : "left")}: 16px;
  border-radius: 4px;
  background-image: url(${process.env.PUBLIC_URL}/assets/${(props) => (props.$isBigger ? "arrow-up.png" : "dot.png")});
  background-position: center;
  background-size: ${(props) => (props.$isBigger ? "10px" : "4px")};
  background-repeat: no-repeat;
`;

interface Props {
  position: "left" | "right";
  stat: string | undefined;
  stat2: string | undefined;
  increased: string | undefined;
  type: string;
  isBigger: boolean;
}

const StatBox: React.FC<Props> = ({ position, stat, stat2, increased, type, isBigger }) => {
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
    <StyledStat $align={position} $highlight={isBigger}>
      {position === "left" && <StyledArrow $isBigger={isBigger} $position={position} />}
      {type === "POWER" && convertCombatPower(stat)}
      {type === "NUMBER" && convertStrToCommaFormat(stat)}
      {type === "PERCENT" && convertToPercent(stat)}
      {type === "SEC/PERCENT" && `${convertToSec(stat2)} / ${convertToPercent(stat)}`}
      {type === "INCREASED" && increasedStatView(stat, increased)}
      {type === "STAGE" && convertToStage(stat)}
      {type === "LEVEL" && convertToLevel(stat)}
      {position === "right" && <StyledArrow $isBigger={isBigger} $position={position} />}
    </StyledStat>
  );
};

export default StatBox;

