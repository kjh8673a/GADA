import React from "react";
import { TCharacterEquip } from "../../../@types/Character/EquipmentTypes";
import { ColorText } from "../../../style/CharacterStat";
import styled from "styled-components";

interface Props {
  fixedOption: TCharacterEquip["fixedOption"];
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const EquipFixed: React.FC<Props> = ({ fixedOption }) => {
  return (
    <StyledBox>
      <ColorText
        color={"rgb(187, 187, 187)"}
      >{`옵션 피해 증가 ${fixedOption?.damage}`}</ColorText>
      <ColorText
        color={"rgb(187, 187, 187)"}
      >{`옵션 버프력 ${fixedOption?.buff}`}</ColorText>
      <ColorText color={"rgb(187, 187, 187)"}>{`옵션 레벨 ${
        fixedOption?.level
      } (EXP ${fixedOption?.exp! % 100}%)`}</ColorText>
      <br/>
      <ColorText color={"rgb(187, 187, 187)"}>{fixedOption?.explain}</ColorText>
    </StyledBox>
  );
};

export default EquipFixed;
