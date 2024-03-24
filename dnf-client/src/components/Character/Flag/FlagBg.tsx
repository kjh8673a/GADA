import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterFlag } from "../../../atoms/characterState";
import FlagItem from "./FlagItem";
import GemItem from "./GemItem";
import React from "react";

const StyledBox = styled.div`
  position: relative;
  width: 350px;
  height: 565px;
  background-image: url("${process.env.PUBLIC_URL}/assets/flag_bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  // display: flex;
  justify-content: space-around;
  margin: 3% 1% 3% 3%;
`;

const FlagBg = () => {
  const data = useRecoilValue(atomCharacterFlag);
  return (
    <StyledBox>
      <FlagItem />
      {data.gems?.map((obj, idx) => (
        <GemItem key={idx} idx={idx} value={obj}></GemItem>
      ))}
    </StyledBox>
  );
};

export default FlagBg;
