import React from "react";
import styled from "styled-components";
import SummaryInfo from "./SummaryInfo";
import CharacterIllustration from "./CharacterIllustration";
import CharacterImg from "./CharacterImg";

const StyledBox = styled.div`
  position: relative;
  width: 1140px;
  min-height: 320px;
  margin-top: 15px;
  background-image: url("${process.env.PUBLIC_URL}/assets/test_bg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px 70%;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    box-sizing: border-box;
    padding: 15px 0px;
    margin-top: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 320px;
    background-image: none;
    background-color: var(--secondary-bg-color);
    gap: 15px;
  }
`;

const StyledBgBox = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(76, 111, 127, 0) 0%,
    rgba(56, 78, 88, 0.45) 45.12%,
    #283338 63%,
    #000000 100%
  );

  @media (max-width: 768px) {
    display: none;
  }
`;

const Summary = () => {
  return (
    <StyledBox>
      <CharacterImg />
      <SummaryInfo />
      <CharacterIllustration />
      <StyledBgBox />
    </StyledBox>
  );
};

export default Summary;
