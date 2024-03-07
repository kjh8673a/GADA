import React from "react";
import styled from "styled-components";

type Props = {
  ranking: number;
  guild_name: string;
  guild_master_name: string;
  guild_level: number;
  guild_point: number;
  world_name: string;
  clickHandler: (guildName: string, worldName: string) => void;
};

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

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SubContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
`;

const GuildWaterwayTableItem: React.FC<Props> = ({
  ranking,
  guild_name,
  guild_master_name,
  guild_level,
  guild_point,
  world_name,
  clickHandler,
}) => {
  return (
    <StyledBox
      onClick={() => {
        clickHandler(guild_name, world_name);
      }}
    >
      <ContentBox>{ranking}</ContentBox>
      <ContentBox>{guild_name}</ContentBox>
      <SubContentBox>{guild_point.toLocaleString("ko-kr")}</SubContentBox>
      <SubContentBox>{guild_level}</SubContentBox>
      <SubContentBox>{guild_master_name}</SubContentBox>
      <SubContentBox>{world_name}</SubContentBox>
    </StyledBox>
  );
};

export default GuildWaterwayTableItem;

