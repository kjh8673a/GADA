<<<<<<< HEAD
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterTalismans } from "../../../atoms/characterState";
import { TCharacterTalisman } from "../../../@types/CharacterTypes";
import useTalismanLocation from "../../../hooks/useTalismanLocation";
import { atomtalismanInfo } from "../../../atoms/talismanItemState";
=======
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { TCharacterTalisman } from "../../../@types/Character/TalismanTypes";
import { ITEM_TYPE_COLOR } from "../../../@types/Character/CommonTypes";
import useTalismanLocation from "../../../hooks/useItemImageLocation";
import { atomtalismanInfo } from "../../../atoms/ItemInfoState";
>>>>>>> dnf/release

interface Props {
  value: TCharacterTalisman;
  idx: number;
}

interface StyledProps {
  $top: number;
  $left: number;
<<<<<<< HEAD
=======
  $rarityColor: string;
>>>>>>> dnf/release
}

const StyledBox = styled.div``;
const TalismanImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.2);
  cursor: pointer;
<<<<<<< HEAD
  border: 2px double yellow;
=======
  border: 2px double ${(props) => props.$rarityColor};
>>>>>>> dnf/release
  border-radius: 1px;
  margin-top: ${(props) => `${props.$top}%`};
  margin-left: ${(props) => props.$left}%;
`;

const TalismanItem: React.FC<Props> = ({ value, idx }) => {
  const { TalismanLocation } = useTalismanLocation();
  const setTalismanInfo = useSetRecoilState(atomtalismanInfo);
  const [x, y] = TalismanLocation(idx);
<<<<<<< HEAD
=======
  const rarityColor = ITEM_TYPE_COLOR[value.detail!.itemRarity!];
>>>>>>> dnf/release
  return (
    <StyledBox>
      <TalismanImg
        src={value.itemImage!}
        alt={"talisman Image"}
        $top={x}
        $left={y}
<<<<<<< HEAD
        onClick={() => {
          console.log(`탈리스만:${idx}`);
          console.log(value);
=======
        $rarityColor={rarityColor}
        onClick={() => {
>>>>>>> dnf/release
          setTalismanInfo(value);
        }}
      ></TalismanImg>
    </StyledBox>
  );
};

export default TalismanItem;
