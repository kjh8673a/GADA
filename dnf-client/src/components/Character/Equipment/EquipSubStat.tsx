import React from "react";
import styled from "styled-components";
import {
  ITEM_BASIC_STAT,
  TCharacterEquip,
} from "../../../@types/CharacterTypes";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  detail: TCharacterEquip["detail"];
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const EquipSubStat: React.FC<Props> = ({ detail }) => {
  return (
    <StyledBox>
      {detail?.itemStatus!.map((v, i) => {
        return !ITEM_BASIC_STAT.includes(v.name) ? (
          <ColorText key={i} color={"rgb(177, 218, 245)"}>
            {`${v.name} ${v.value}`}
          </ColorText>
        ) : (
          <React.Fragment key={i}></React.Fragment>
        );
      })}
    </StyledBox>
  );
};

export default EquipSubStat;
