import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterFlag } from "../../../atoms/characterState";
import useTalismanLocation from "../../../hooks/useItemImageLocation";
import { atomFlagInfo } from "../../../atoms/ItemInfoState";
import { ITEM_RARITY, ITEM_TYPE_COLOR } from "../../../@types/CharacterTypes";

interface StyledProps {
  $rarityColor: string;
}

const StyledBox = styled.div``;
const TalismanImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.55);
  cursor: pointer;
  border: 2px double ${(props) => props.$rarityColor};
  border-radius: 1px;
  margin-top: 56.8%;
  margin-left: 46%;
`;

const FlagName = styled.div<StyledProps>`
  position: absolute;
  color: ${(props) => props.$rarityColor};
  margin-top: 5%;
  justify-content: center;
  margin-left: 25%;
`;

const TalismanItem = () => {
  const data = useRecoilValue(atomCharacterFlag);
  const setFlagInfo = useSetRecoilState(atomFlagInfo);
  const rarityColor = ITEM_TYPE_COLOR[data.itemRarity!];
  return (
    <StyledBox>
      <FlagName $rarityColor={rarityColor}>{data.itemName}</FlagName>
      <TalismanImg
        src={data.itemImage}
        alt={"talisman Image"}
        $rarityColor={rarityColor}
        onClick={() => {
          // console.log("휘장");
          // console.log(data);
          setFlagInfo(data);
        }}
      ></TalismanImg>
    </StyledBox>
  );
};

export default TalismanItem;
