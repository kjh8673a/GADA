import React from "react";
import styled from "styled-components";
import {
  ITEM_RARITY,
  ITEM_TYPE_COLOR,
} from "../../../@types/Character/CommonTypes";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  itemName: string;
  itemImage: string;
  itemRarity: ITEM_RARITY;
}

const StyledBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
`;

const StyledImg = styled.img<{ $borderColor: string }>`
  border: 2px solid ${(props) => props.$borderColor};
  border-radius: 5px;
`;

const ItemHeader: React.FC<Props> = ({ itemName, itemImage, itemRarity }) => {
  return (
    <StyledBox>
      <StyledImg
        src={itemImage}
        alt={"item image"}
        $borderColor={ITEM_TYPE_COLOR[itemRarity]}
      />
      <ColorText
        color={ITEM_TYPE_COLOR[itemRarity]}
        style={{ fontSize: "1.2rem" }}
      >
        {itemName}
      </ColorText>
    </StyledBox>
  );
};

export default ItemHeader;
