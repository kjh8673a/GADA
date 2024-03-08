import React from "react";
import styled from "styled-components";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  title: string;
  value: number;
  isPercent: boolean;
}

const StyledBox = styled.span`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 10px;
  margin: 6px 0px;
  display: flex;
  justify-content: space-between;
`;

const SubStatItem: React.FC<Props> = ({ title, value, isPercent }) => {
  return (
    <StyledBox>
      <ColorText color={"#a0844b"}>{title}</ColorText>
      <ColorText color={value === 0 ? "#6a6a6a" : "#78C82F"}>
        {value.toLocaleString("ko-kr")}
        {isPercent ? "%" : ""}
      </ColorText>
    </StyledBox>
  );
};

export default SubStatItem;
