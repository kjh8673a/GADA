import React from "react";
import { TCharacterEquip } from "../../../@types/Character/EquipmentTypes";
import { ColorText } from "../../../style/CharacterStat";
import styled from "styled-components";

interface Props {
  bakalInfo: TCharacterEquip["bakalInfo"];
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EquipBakal: React.FC<Props> = ({ bakalInfo }) => {
  return (
    <StyledBox>
      {bakalInfo?.options!.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <ColorText color={"#dbc68d"}>{`${i + 1}옵션`}</ColorText>
            <ColorText color={"#dbc68d"}>{v.explain}</ColorText>
          </React.Fragment>
        );
      })}
    </StyledBox>
  );
};

export default EquipBakal;
