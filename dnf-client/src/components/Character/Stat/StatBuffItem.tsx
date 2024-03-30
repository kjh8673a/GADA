import React from "react";
import styled from "styled-components";
import { TCharacterBuff } from "../../../@types/Character/StatTypes";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  data: TCharacterBuff;
}

const StyldBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const StatBuffItem: React.FC<Props> = ({ data }) => {
  return (
    <StyldBox>
      <ColorText color={"#a0844b"}>
        {data.name}
        {data.level ? " Lv. " + data.level : ""}
      </ColorText>
      <ColorText color={"#78C82F"}>
        {"힘/지능/체력/정신력 +" + data.status.힘}
      </ColorText>
    </StyldBox>
  );
};

export default StatBuffItem;
