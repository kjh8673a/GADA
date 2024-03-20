import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterSkill } from "../../../atoms/characterState";

const StyledBox = styled.div``;


const CharacterSkill = () => {
  const data = useRecoilValue(atomCharacterSkill);    
  return <StyledBox>{}</StyledBox>;
};

export default CharacterSkill;