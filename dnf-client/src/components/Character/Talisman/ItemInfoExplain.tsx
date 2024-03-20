import React from "react";
import styled from "styled-components";

interface Props {
  value: String | undefined;
}

const StyledBox = styled.div`
  line-height: 140%;
  padding-left: 1%;
  padding-top: 1%;
  color: #999685;
`;

const TalismanItem: React.FC<Props> = ({ value }) => {
  const valueSplit = value?.split("\n");
  return (
    <StyledBox>
      {valueSplit?.map((value, idx) => (
        <StyledBox key={idx}>{value}</StyledBox>
      ))}
    </StyledBox>
  );
};

export default TalismanItem;
