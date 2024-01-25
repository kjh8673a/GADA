import React from "react";
import styled from "styled-components";

type Props = {
  ranking: number;
  guild_name: string;
  guild_master_name: string;
  guild_level: number;
  guild_point: number;
};

const StyledBox = styled.div`
  width: 100%;
  min-height: 40px;
  background-color: white;
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr;
  &:hover {
    background-color: #a2a2a2;
    transition: 0.2s;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuildWaterwayTableItem: React.FC<Props> = ({
  ranking,
  guild_name,
  guild_master_name,
  guild_level,
  guild_point,
}) => {
  return (
    <StyledBox>
      <ContentBox>{ranking}</ContentBox>
      <ContentBox>{guild_name}</ContentBox>
      <ContentBox>{guild_master_name}</ContentBox>
      <ContentBox>{guild_level}</ContentBox>
      <ContentBox>{guild_point.toLocaleString("ko-kr")}</ContentBox>
    </StyledBox>
  );
};

export default GuildWaterwayTableItem;
