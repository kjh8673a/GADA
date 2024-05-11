import React from "react";
import styled from "styled-components";
import {
  ITEM_RARITY,
  ITEM_TYPE_COLOR,
} from "../../../@types/Character/CommonTypes";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  itemImage: string;
  itemName: string;
  itemRarity: ITEM_RARITY;
  reinforce: number | null;
  refine: number | null;
  slotName: string;
  upgradeInfo: {
    itemId: string;
    itemName: string;
  } | null;
}

const StyledBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const EquipmentImg = styled.img<{ color: string }>`
  box-sizing: border-box;
  border-radius: 5px;
  border: solid 2px ${(props) => props.color};
`;

const EquipHeader: React.FC<Props> = ({
  itemImage,
  itemName,
  itemRarity,
  reinforce,
  refine,
  slotName,
  upgradeInfo,
}) => {
  const reinforceNumber = reinforce ? `+${reinforce}` : "";
  const refineNumber = refine ? `(${refine})` : "";
  return (
    <StyledBox>
      <ColorText color={"#c9c9c9"} style={{ width: "15%" }}>
        {slotName}
      </ColorText>
      <EquipmentImg
        src={itemImage}
        alt={"equipment image"}
        width={40}
        color={ITEM_TYPE_COLOR[itemRarity]}
      />
      <Wrapper style={{ width: "60%" }}>
        <ColorText color={ITEM_TYPE_COLOR[itemRarity]}>
          {reinforceNumber + refineNumber + " " + itemName}
        </ColorText>
        {upgradeInfo?.itemName && (
          <ColorText color={"gray"}>{upgradeInfo.itemName}</ColorText>
        )}
      </Wrapper>
    </StyledBox>
  );
};

export default EquipHeader;
