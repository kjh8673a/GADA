import { useMemo } from "react";
import styled from "styled-components";
import useStats from "../../../../hooks/maple/useStats";
import { MATCH_COLOR } from "../../../../@types/maple/WeaponTypes";

const StyledBox = styled.div`
  font-size: 0.8rem;
  padding: 12px;
`;

const StyledStat = styled.div`
  display: flex;
  padding: 1px 0;
`;

const StyledTitle = styled.span`
  margin-right: 8px;
  color: #ccc;
  background: #000;
  padding: 2px 4px;
  border-radius: 2px;
`;

const StyledStatData = styled.p<{ $highlight: string | undefined }>`
  margin: 0;
  padding: 0;
  color: ${(props) => (props.$highlight ? props.$highlight : "#ccc")};
  white-space: pre-line;
`;

interface Props {
  pOption01: string | undefined | null;
  pOption02: string | undefined | null;
  pOption03: string | undefined | null;
  apOption01: string | undefined | null;
  apOption02: string | undefined | null;
  apOption03: string | undefined | null;
  pOptionGrade: string | undefined | null;
  apOptionGrade: string | undefined | null;
}

const WeaponStatInfo: React.FC<Props> = ({
  pOption01,
  pOption02,
  pOption03,
  apOption01,
  apOption02,
  apOption03,
  pOptionGrade,
  apOptionGrade,
}) => {
  const { convertToShorterStatName } = useStats();
  const pOptionParam = useMemo(() => {
    const param = `${pOption01 ? convertToShorterStatName(pOption01) : ""}${
      pOption02 ? " / " + convertToShorterStatName(pOption02) : ""
    }${pOption03 ? " / " + convertToShorterStatName(pOption03) : ""}`;
    if (param.length === 0) return "x";
    return param;
  }, [pOption01, pOption02, pOption03, convertToShorterStatName]);

  const apOptionParam = useMemo(() => {
    const param = `${apOption01 ? convertToShorterStatName(apOption01) : ""}${
      apOption02 ? " / " + convertToShorterStatName(apOption02) : ""
    }${apOption03 ? " / " + convertToShorterStatName(apOption03) : ""}`;
    if (param.length === 0) return "x";
    return param;
  }, [apOption01, apOption02, apOption03, convertToShorterStatName]);

  return (
    <StyledBox>
      <StyledStat>
        <StyledTitle>잠재</StyledTitle>
        <StyledStatData $highlight={pOptionGrade ? MATCH_COLOR[pOptionGrade] : undefined}>
          {pOptionParam}
        </StyledStatData>
      </StyledStat>
      <StyledStat>
        <StyledTitle>에디</StyledTitle>
        <StyledStatData $highlight={apOptionGrade ? MATCH_COLOR[apOptionGrade] : undefined}>
          {apOptionParam}
        </StyledStatData>
      </StyledStat>
    </StyledBox>
  );
};

export default WeaponStatInfo;

