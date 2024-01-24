import React from "react";
import styled from "styled-components";
import GraphContainer from "./GraphContainer";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";

const CharacterSummaryBox = styled.div`
  width: 1140px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1.8fr 1.8fr;
  margin-top: 1%;
  border-radius: 1.25rem;
  background: url("${process.env.REACT_APP_BG_IMG}/maple_bg_${String(
      Math.floor(Math.random() * 122) + 1
    ).padStart(3, "0")}.png")
    0% 100%;
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
