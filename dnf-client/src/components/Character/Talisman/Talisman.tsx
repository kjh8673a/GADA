import React from "react";
import styled from "styled-components";
import TalismanBg from "./TalismanBg";
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

const Talisman = () => {
  return (
    <StyledBox>
      <TalismanBg />
      <ItemInfo />
    </StyledBox>
  );
};

export default Talisman;
