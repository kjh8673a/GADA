import React from "react";
import styled from "styled-components";

interface Props {
  value: String | undefined;
  add: boolean;
}

const StyledBox = styled.div`
  line-height: 140%;
  padding-left: 1%;
  padding-top: 1%;
  color: #999685;
`;

const TalismanItem: React.FC<Props> = ({ value, add }) => {
  let valueSplit = value?.split("\n");
  if (add) {
    valueSplit![0] = "[탈리스만 추가효과]";
  }
  return (
    <StyledBox>
      {valueSplit?.map((value, idx) => (
        <StyledBox key={idx}>{value}</StyledBox>
      ))}
    </StyledBox>
  );
};

export default TalismanItem;
