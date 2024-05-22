import React from "react";
<<<<<<< HEAD
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterTalismans } from "../../../atoms/characterState";
import { TCharacterRune } from "../../../@types/CharacterTypes";
import useTalismanLocation from "../../../hooks/useTalismanLocation";
import { atomtalismanInfo } from "../../../atoms/talismanItemState";
=======
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { TCharacterRune } from "../../../@types/Character/TalismanTypes";
import { ITEM_TYPE_COLOR } from "../../../@types/Character/CommonTypes";
import useTalismanLocation from "../../../hooks/useItemImageLocation";
import { atomtalismanInfo } from "../../../atoms/ItemInfoState";
>>>>>>> dnf/release

interface Props {
  value: TCharacterRune[];
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
const RuneImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.3);
  margin: 0px 0px 0px 0px;
  cursor: pointer;
<<<<<<< HEAD
  border: 1px solid #b727ba;
=======
  border: 1px solid ${(props) => props.$rarityColor};
>>>>>>> dnf/release
  border-radius: 1px;
  margin-top: ${(props) => props.$top}%;
  margin-left: ${(props) => props.$left}%;
`;

const RuneItem: React.FC<Props> = ({ value, idx }) => {
  const { RuneLocation } = useTalismanLocation();
  const setTalismanInfo = useSetRecoilState(atomtalismanInfo);
  const location = [0, 1, 2].map((x) => RuneLocation(idx, x));
<<<<<<< HEAD
  // console.log(c, idx);
  // value.map((x) => console.log(x.itemImage));
=======
  const rarityColorList = value.map(
    (x) => ITEM_TYPE_COLOR[x.detail?.itemRarity!]
  );
>>>>>>> dnf/release
  return (
    <StyledBox>
      {value.map((obj, index) => (
        <RuneImg
          key={index}
          src={obj.itemImage}
          alt={"rune Image"}
          $top={location[index][0]}
          $left={location[index][1]}
<<<<<<< HEAD
          onClick={() => {
            console.log(`룬: ${idx} ${index}`);
            console.log(obj);
=======
          $rarityColor={rarityColorList[idx]}
          onClick={() => {
>>>>>>> dnf/release
            setTalismanInfo(obj);
          }}
        ></RuneImg>
      ))}
    </StyledBox>
  );
};

export default RuneItem;
