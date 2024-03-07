import React from "react";
import styled from "styled-components";
import { GuildCombatPowerContentType } from "../../../../@types/maple/RankingTypes";

const StyledBox = styled.div`
  width: 100%;
  min-height: 40px;
  background-color: var(--secondary-bg-color);
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 1fr 1fr;
  &:hover {
    background-color: var(--primary-bg-color);
    transition: 0.2s;
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
`;

const GuildCombatPowerTableItem: React.FC<{
  props: GuildCombatPowerContentType;
  clickHandler: (guildName: string, worldName: string) => void;
}> = ({ props, clickHandler }) => {
  return (
    <StyledBox
      onClick={() => {
        clickHandler(props.name, props.worldName);
      }}
    >
      <ContentBox>{props.rank}</ContentBox>
      <ContentBox>{props.name}</ContentBox>
      <SubContentBox>{props.combatPower.toLocaleString("ko-kr")}</SubContentBox>
      <SubContentBox>{props.level}</SubContentBox>
      <SubContentBox>{props.masterName}</SubContentBox>
      <SubContentBox>{props.worldName}</SubContentBox>
    </StyledBox>
  );
};

export default GuildCombatPowerTableItem;

