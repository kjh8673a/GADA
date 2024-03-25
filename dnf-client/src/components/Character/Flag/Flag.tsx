import React from "react";
import styled from "styled-components";
import FlagBg from "./FlagBg";
import ItemInfo from "./ItemInfo";
import { useRecoilValue } from "recoil";
import { atomCharacterFlag } from "../../../atoms/characterState";
import Loading from "../../common/Loading";

const StyledBox = styled.div`
  position: relative;
  width: 1140px;
  min-height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background-color: var(--secondary-bg-color);
`;

const Flag = () => {
  const data = useRecoilValue(atomCharacterFlag);
  return (
    <StyledBox>
      {data ? (
        <>
          <FlagBg />
          <ItemInfo />
        </>
      ) : (
        <Loading text={"장착된 휘장이 없습니다."} play={false} />
      )}
    </StyledBox>
  );
};

export default Flag;
