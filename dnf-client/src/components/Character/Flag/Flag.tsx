import React from "react";
import styled from "styled-components";
import FlagBg from "./FlagBg";
import ItemInfo from "./ItemInfo";

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
  return (
    <StyledBox>
      <FlagBg />
      <ItemInfo />
    </StyledBox>
  );
};

export default Flag;
