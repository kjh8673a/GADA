<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import TalismanBg from "./TalismanBg";
import ItemInfo from "./ItemInfo";
=======
import styled from "styled-components";
import TalismanBg from "./TalismanBg";
import ItemInfo from "./ItemInfo";
import { useRecoilValue } from "recoil";
import { atomCharacterTalismans } from "../../../atoms/characterState";
import Loading from "../../common/Loading";
>>>>>>> dnf/release

const StyledBox = styled.div`
  position: relative;
  width: 1140px;
<<<<<<< HEAD
  min-height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background-color: var(--secondary-bg-color);
`;

const Talisman = () => {
  return (
    <StyledBox>
      <TalismanBg />
      <ItemInfo />
=======
  min-height: 600px;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Talisman = () => {
  const data = useRecoilValue(atomCharacterTalismans);
  return (
    <StyledBox>
      {data ? (
        <>
          <TalismanBg />
          <ItemInfo />
        </>
      ) : (
        <Loading text={"장착된 탈리스만이 없습니다."} play={false} />
      )}
>>>>>>> dnf/release
    </StyledBox>
  );
};

export default Talisman;
