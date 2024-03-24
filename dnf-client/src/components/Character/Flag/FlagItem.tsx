import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterFlag } from "../../../atoms/characterState";
import { TCharacterTalisman } from "../../../@types/CharacterTypes";
import useTalismanLocation from "../../../hooks/useItemImageLocation";
import { atomtalismanInfo } from "../../../atoms/talismanItemState";

interface StyledProps {
  $top: number;
  $left: number;
}

const StyledBox = styled.div``;
const TalismanImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.2);
  cursor: pointer;
  border: 2px double yellow;
  border-radius: 1px;
  margin-top: ${(props) => `${props.$top}%`};
  margin-left: ${(props) => props.$left}%;
`;

const TalismanItem = () => {
  const data = useRecoilValue(atomCharacterFlag);
  const { TalismanLocation } = useTalismanLocation();
  const setTalismanInfo = useSetRecoilState(atomtalismanInfo);
  const [x, y] = TalismanLocation(1);
  return (
    <StyledBox>
      <TalismanImg
        src={data.itemImage}
        alt={"talisman Image"}
        $top={x}
        $left={y}
        onClick={() => {
          // console.log(`탈리스만:${idx}`);
          // console.log(value);
          // setTalismanInfo(value);
        }}
      ></TalismanImg>
    </StyledBox>
  );
};

export default TalismanItem;
