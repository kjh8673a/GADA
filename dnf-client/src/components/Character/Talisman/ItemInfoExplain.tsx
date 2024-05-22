import React from "react";
import styled from "styled-components";

interface Props {
  value: String | undefined;
<<<<<<< HEAD
=======
  add: boolean;
>>>>>>> dnf/release
}

const StyledBox = styled.div`
  line-height: 140%;
  padding-left: 1%;
  padding-top: 1%;
  color: #999685;
`;

<<<<<<< HEAD
const TalismanItem: React.FC<Props> = ({ value }) => {
  const valueSplit = value?.split("\n");
=======
const TalismanItem: React.FC<Props> = ({ value, add }) => {
  let valueSplit = value?.split("\n");
  if (add) {
    valueSplit![0] = "[탈리스만 추가효과]";
  }
>>>>>>> dnf/release
  return (
    <StyledBox>
      {valueSplit?.map((value, idx) => (
        <StyledBox key={idx}>{value}</StyledBox>
      ))}
    </StyledBox>
  );
};

export default TalismanItem;
