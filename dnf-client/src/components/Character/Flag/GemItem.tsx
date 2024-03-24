import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterTalismans } from "../../../atoms/characterState";
import { TCharacterFlagGem } from "../../../@types/CharacterTypes";
import useTalismanLocation from "../../../hooks/useItemImageLocation";
import { atomtalismanInfo } from "../../../atoms/talismanItemState";

interface Props {
  value: TCharacterFlagGem;
  idx: number;
}

interface StyledProps {
  $top: number;
  $left: number;
}

const StyledBox = styled.div``;
const RuneImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.3);
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  border: 1px solid #b727ba;
  border-radius: 1px;
  margin-top: ${(props) => props.$top}%;
  margin-left: ${(props) => props.$left}%;
`;

const RuneItem: React.FC<Props> = ({ value, idx }) => {
  const { RuneLocation } = useTalismanLocation();
  const setTalismanInfo = useSetRecoilState(atomtalismanInfo);
  const location = [0, 1, 2].map((x) => RuneLocation(idx, x));
  // console.log(c, idx);
  // value.map((x) => console.log(x.itemImage));
  // console.log(value);
  return (
    <StyledBox>
      <RuneImg
        src={value.itemImage}
        alt={"rune Image"}
        $top={location[1][0]}
        $left={location[1][1]}
        onClick={() => {
          // console.log(`룬: ${idx} ${index}`);
          // console.log(obj);
          // setTalismanInfo(obj);
        }}
      ></RuneImg>
    </StyledBox>
  );
};

export default RuneItem;
