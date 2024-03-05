import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { atomCharacterBasic } from "../../../atoms/characterState";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  object-fit: cover;
  transform: scale(1.2);
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 100%;
  padding: 2px 0px;
  font-size: 1rem;
  font-weight: 500;
  background-color: rgba(64, 64, 64, 0.7);
`;

const Text = styled.div``;

const CharacterImg = () => {
  const data = useRecoilValue(atomCharacterBasic);
  return (
    <StyledBox>
      <StyledImg src={data.characterImage!} alt={"Character Image"} />
      <StyledTextBox>
        <Text>{`Lv. ${data.level!} ${data.characterName!}`}</Text>
        <Text>{`[${data.jobGrowName!}]`}</Text>
      </StyledTextBox>
    </StyledBox>
  );
};

export default CharacterImg;
