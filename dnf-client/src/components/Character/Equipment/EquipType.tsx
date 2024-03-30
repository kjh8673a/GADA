import React from "react";
import styled from "styled-components";
import {
  ITEM_RARITY,
  ITEM_TYPE_COLOR,
} from "../../../@types/Character/CommonTypes";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  itemRarity: ITEM_RARITY;
  itemAvailablelevel: number;
  itemTypeDetail: string;
}

const StyledBox = styled.div`
  box-sizing: border-box;
  padding: 0px 5px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-end;
`;

const EquipType: React.FC<Props> = ({
  itemRarity,
  itemAvailablelevel,
  itemTypeDetail,
}) => {
  return (
    <StyledBox>
      <ColorText color={ITEM_TYPE_COLOR[itemRarity]}>{itemRarity}</ColorText>
      <ColorText color={"#FFFFFF"}>{itemTypeDetail}</ColorText>
      <ColorText color={"#FFFFFF"}>
        {"레벨 제한 " + itemAvailablelevel}
      </ColorText>
    </StyledBox>
  );
};

export default EquipType;
