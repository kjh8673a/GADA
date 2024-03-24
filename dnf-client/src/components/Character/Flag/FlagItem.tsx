import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { atomCharacterFlag } from "../../../atoms/characterState";
import useTalismanLocation from "../../../hooks/useItemImageLocation";
import { atomFlagInfo } from "../../../atoms/ItemInfoState";

interface StyledProps {
  $top: number;
  $left: number;
}

const StyledBox = styled.div``;
const TalismanImg = styled.img<StyledProps>`
  position: absolute;
  transform: scale(1.55);
  cursor: pointer;
  border: 2px double yellow;
  border-radius: 1px;
  margin-top: ${(props) => `${props.$top}%`};
  margin-left: ${(props) => props.$left}%;
`;

const TalismanItem = () => {
  const data = useRecoilValue(atomCharacterFlag);
  const { FlagLocation } = useTalismanLocation();
  const setFlagInfo = useSetRecoilState(atomFlagInfo);
  const [x, y] = FlagLocation();
  return (
    <StyledBox>
      <TalismanImg
        src={data.itemImage}
        alt={"talisman Image"}
        $top={x}
        $left={y}
        onClick={() => {
          console.log("휘장");
          console.log(data);
          setFlagInfo(data);
        }}
      ></TalismanImg>
    </StyledBox>
  );
};

export default TalismanItem;
