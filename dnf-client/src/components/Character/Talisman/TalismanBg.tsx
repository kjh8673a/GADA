import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterTalismans } from "../../../atoms/characterState";
import TalismanItem from "./TalismanItem";
import RuneItem from "./RuneItem";
import React from "react";

const StyledBox = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  background-image: url("${process.env.PUBLIC_URL}/assets/talisman_bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  // display: flex;
  justify-content: space-around;
  margin: 3% 1% 3% 3%;
`;

const TalismanBg = () => {
  const data = useRecoilValue(atomCharacterTalismans);
<<<<<<< HEAD
  // console.log(data);
=======
>>>>>>> dnf/release
  return (
    <StyledBox>
      {data.talismans?.map((obj, idx) => (
        <React.Fragment key={idx}>
          <TalismanItem idx={idx} value={obj.talisman!}></TalismanItem>
          <RuneItem idx={idx} value={obj.runes!}></RuneItem>
        </React.Fragment>
      ))}
    </StyledBox>
  );
};

export default TalismanBg;
