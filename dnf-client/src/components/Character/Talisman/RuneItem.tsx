import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterTalismans } from "../../../atoms/characterState";
import {
  ITEM_TYPE_COLOR,
  TCharacterRune,
} from "../../../@types/CharacterTypes";
import useTalismanLocation from "../../../hooks/useItemImageLocation";
import { atomtalismanInfo } from "../../../atoms/ItemInfoState";

interface Props {
  value: TCharacterRune[];
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
  border: 1px solid ${(props) => props.$rarityColor};
  border-radius: 1px;
  margin-top: ${(props) => props.$top}%;
  margin-left: ${(props) => props.$left}%;
`;

const RuneItem: React.FC<Props> = ({ value, idx }) => {
  const { RuneLocation } = useTalismanLocation();
  const setTalismanInfo = useSetRecoilState(atomtalismanInfo);
  const location = [0, 1, 2].map((x) => RuneLocation(idx, x));
  const rarityColorList = value.map(
    (x) => ITEM_TYPE_COLOR[x.detail?.itemRarity!]
  );
  return (
    <StyledBox>
      {value.map((obj, index) => (
        <RuneImg
          key={index}
          src={obj.itemImage}
          alt={"rune Image"}
          $top={location[index][0]}
          $left={location[index][1]}
          $rarityColor={rarityColorList[idx]}
          onClick={() => {
            // console.log(`룬: ${idx} ${index}`);
            // console.log(obj);
            setTalismanInfo(obj);
          }}
        ></RuneImg>
      ))}
    </StyledBox>
  );
};

export default RuneItem;
