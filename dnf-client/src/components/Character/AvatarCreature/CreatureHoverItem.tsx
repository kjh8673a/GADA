import React from "react";
import styled from "styled-components";
import { TDetail } from "../../../@types/Character/CommonTypes";
import { ColorText } from "../../../style/CharacterStat";
import { ITEM_TYPE_COLOR } from "../../../@types/CharacterTypes";
import { Line } from "../../../style/dnfContainer";

const StyledBox = styled.div`
  z-index: 6;
  padding: 10px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 250px;
  font-size: 0.9rem;
  left: 120%;
  gap: 5px;
`;

const CreatureHoverItem = ({
  slotColor,
  detail,
}: {
  slotColor: string;
  detail: TDetail;
}) => {
  return (
    <StyledBox>
      <ColorText
        color={ITEM_TYPE_COLOR[detail.itemRarity!]}
        style={{ alignSelf: "center", fontSize: "1.1rem" }}
      >
        {detail.itemName}
      </ColorText>
      <Line />
      <br />
      <ColorText color={slotColor} style={{ alignSelf: "flex-end" }}>
        {detail.itemTypeDetail}
      </ColorText>
      <br />
      {detail.itemStatus?.map((v, i) => {
        return (
          <ColorText
            color={"#FFFFFF"}
            key={i}
          >{`${v.name} +${v.value}`}</ColorText>
        );
      })}
      <br />
      <ColorText color={"#FFFFFF"}>{detail.itemExplain}</ColorText>
      <ColorText color={"gray"}>{detail.itemFlavorText}</ColorText>
    </StyledBox>
  );
};

export default CreatureHoverItem;
