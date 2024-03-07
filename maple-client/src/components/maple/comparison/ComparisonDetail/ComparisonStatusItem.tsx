import styled from "styled-components";
import StatBox from "./StatBox";

const StyledLi = styled.div`
  width: 90%;
  margin: 0;
  padding: 2px 0;
  display: flex;
  justify-content: center;
`;

const StyledStatName = styled.span`
  width: 160px;
  box-sizing: border-box;
  font-weight: 800;
  font-size: 0.9rem;
  margin: 2px 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    word-break: keep-all;
  }
`;

interface Props {
  statName: string;
  left: string | undefined;
  right: string | undefined;
  left2?: string | undefined;
  right2?: string | undefined;
  leftIncreased?: string | undefined;
  rightIncreased?: string | undefined;
  type: string;
}

const ComparisonStatusItem: React.FC<Props> = ({
  statName,
  left,
  left2,
  right,
  right2,
  type,
  leftIncreased,
  rightIncreased,
}) => {
  const [parseLeft, parseRight] = [left ? +left : 0, right ? +right : 0];

  return (
    <StyledLi>
      <StatBox
        type={type}
        position="right"
        stat={left}
        stat2={left2}
        increased={leftIncreased}
        isBigger={parseLeft > parseRight}
      />
      <StyledStatName>{statName}</StyledStatName>
      <StatBox
        type={type}
        position="left"
        stat={right}
        stat2={right2}
        increased={rightIncreased}
        isBigger={parseLeft < parseRight}
      />
    </StyledLi>
  );
};

export default ComparisonStatusItem;

