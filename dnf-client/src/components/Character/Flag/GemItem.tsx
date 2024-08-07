import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  TCharacterFlagGem,
} from "../../../@types/Character/FlagTypes";
import { ITEM_TYPE_COLOR } from "../../../@types/Character/CommonTypes";
import useTalismanLocation from "../../../hooks/useItemImageLocation";
import { atomFlagInfo } from "../../../atoms/ItemInfoState";

interface Props {
  value: TCharacterFlagGem;
  idx: number;
}

interface StyledProps {
  $top: number;
  $left: number;
  $rarityColor: string;
  $idx: number;
}

const StyledBox = styled.div``;
const RuneImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.3);
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  border: 1.5px solid ${(props) => props.$rarityColor};
  border-radius: 1px;
  top: ${(props) => props.$top}%;
  left: ${(props) => props.$left}%;
`;

const GemItem: React.FC<Props> = ({ value, idx }) => {
  const { GemLocation } = useTalismanLocation();
  const setGemInfo = useSetRecoilState(atomFlagInfo);
  const location = [0, 1, 2, 3].map((x) => GemLocation(idx));
  const rarityColor = ITEM_TYPE_COLOR[value.itemRarity!];
  return (
    <StyledBox>
      <RuneImg
        src={value.itemImage}
        alt={"Gem Image"}
        $top={location[idx][0]}
        $left={location[idx][1]}
        $rarityColor={rarityColor}
        onClick={() => {
          setGemInfo(value);
        }}
        $idx={idx}
      ></RuneImg>
    </StyledBox>
  );
};

export default GemItem;
