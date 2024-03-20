import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterBasic } from "../../../atoms/characterState";

const StyledImg = styled.img`
  width: 40%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`;

const CharacterIllustration = () => {
  const data = useRecoilValue(atomCharacterBasic);
  return <StyledImg src={data.jobImage!} alt={"Character Illustration"} />;
};

export default CharacterIllustration;
