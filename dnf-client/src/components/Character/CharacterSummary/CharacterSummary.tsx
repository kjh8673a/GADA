import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 1140px;
  min-height: 200px;
  background: linear-gradient(
    90deg,
    rgba(76, 111, 127, 0) 0%,
    rgba(56, 78, 88, 0.45) 45.12%,
    #283338 63%,
    #000000 100%
  );
  // url(던파 배경.png);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterSummary = () => {
  return <StyledBox>Character Summary Component</StyledBox>;
};

export default CharacterSummary;
