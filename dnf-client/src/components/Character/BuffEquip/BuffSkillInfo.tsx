import React from "react";
import styled from "styled-components";
import { TCharacterBuffEquip } from "../../../@types/Character/BuffEquipTypes";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  skillInfo: TCharacterBuffEquip["skillInfo"];
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  box-sizing: border-box;
  background-color: rgb(0, 0, 0, 1);
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Line = styled.div`
  border: 1px gray dashed;
`;

const BuffSkillInfo: React.FC<Props> = ({ skillInfo }) => {
  let desc = skillInfo?.option?.desc!;
  skillInfo?.option?.values.forEach((value, index) => {
    const pattern = new RegExp(`{value${index + 1}}`, "g");
    desc = desc.replace(pattern, value);
  });
  return (
    <StyledBox>
      <Wrapper>
        <ColorText color={"rgba(255,255,255,0.7)"}>{`${skillInfo?.name}`}</ColorText>
        <ColorText
          color={"rgba(255,255,255,0.7)"}
        >{`Lv. ${skillInfo?.option?.level}`}</ColorText>
      </Wrapper>
      <Line />
      <ColorText color={"rgba(255,255,255,0.7)"} style={{ lineHeight: "normal"}}>{desc}</ColorText>
    </StyledBox>
  );
};

export default BuffSkillInfo;
