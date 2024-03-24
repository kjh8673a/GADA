import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterTalismans } from "../../../atoms/characterState";
import {
  ITEM_TYPE_COLOR,
  TCharacterFlagGem,
} from "../../../@types/CharacterTypes";
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
}

const StyledBox = styled.div``;
const RuneImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.3);
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  border: 1.5px solid ${(props) => props.$rarityColor};
  border-radius: 1px;
  margin-top: ${(props) => props.$top}%;
  margin-left: ${(props) => props.$left}%;
`;

const RuneItem: React.FC<Props> = ({ value, idx }) => {
  const { GemLocation } = useTalismanLocation();
  const setGemInfo = useSetRecoilState(atomFlagInfo);
  const location = [0, 1, 2, 3].map((x) => GemLocation(idx));
  const rarityColor = ITEM_TYPE_COLOR[value.itemRarity!];
  // console.log(c, idx);
  // value.map((x) => console.log(x.itemImage));
  // console.log(value);
  return (
    <StyledBox>
      <RuneImg
        src={value.itemImage}
        alt={"Gem Image"}
        $top={location[idx][0]}
        $left={location[idx][1]}
        $rarityColor={rarityColor}
        onClick={() => {
          // console.log(`젬: ${idx}`);
          // console.log(value);
          setGemInfo(value);
        }}
      ></RuneImg>
    </StyledBox>
  );
};

export default RuneItem;
