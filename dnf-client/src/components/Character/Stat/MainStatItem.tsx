import React from "react";
import styled from "styled-components";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  icon: string;
  title: string;
  value: number;
  isPercent: boolean;
  isPlus: boolean;
}

const StyledBox = styled.span`
  box-sizing: border-box;
  width: 50%;
  padding: 0px 10px;
  margin: 6px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
`;

const StatIcon = styled.img`
  margin-right: 5px;
`;

const MainStatItem: React.FC<Props> = ({
  title,
  value,
  icon,
  isPercent,
  isPlus,
}) => {
  return (
    <StyledBox>
      <TitleWrapper>
        <StatIcon src={icon} alt={"stat icon"} width={18} height={18} />
        <ColorText color={"#a0844b"}>{title}</ColorText>
      </TitleWrapper>
      <ColorText color={"#78C82F"}>
        {isPlus ? "+" : ""}
        {title[1] === "P" ? value.toLocaleString("ko-kr") + "/" : ""}
        {value.toLocaleString("ko-kr")}
        {isPercent ? "%" : ""}
      </ColorText>
    </StyledBox>
  );
};

export default MainStatItem;
