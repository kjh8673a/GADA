import React from "react";
import styled from "styled-components";
import GraphContainer from "./GraphContainer";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";

const CharacterSummaryBox = styled.div`
  width: 1140px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
`;

const CharacterSummary = () => {
  return (
    <CharacterSummaryBox>
      <ImageContainer />
      <InfoContainer />
      <GraphContainer />
    </CharacterSummaryBox>
  );
};

export default CharacterSummary;
