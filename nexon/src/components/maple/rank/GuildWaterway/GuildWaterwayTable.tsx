import React from "react";
import styled from "styled-components";
import GuildWaterwayTableHeader from "./GuildWaterwayTableHeader";
import useRanking from "../../../../hooks/maple/useRanking";
import GuildWaterwayTableItem from "./GuildWaterwayTableItem";
import DashedLine from "../../../common/DashedLine";

const StyledBox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #3d444c;
  overflow: hidden;
`;

const GuildWaterwayTable = () => {
  const { guildWaterway, guildClickHandler } = useRanking();
  return (
    <StyledBox>
      <GuildWaterwayTableHeader />
      {guildWaterway.data?.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <GuildWaterwayTableItem
              ranking={v.ranking}
              guild_name={v.guild_name}
              guild_master_name={v.guild_master_name}
              guild_level={v.guild_level}
              guild_point={v.guild_point}
              world_name={v.world_name}
              clickHandler={guildClickHandler}
            />
            {i !== guildWaterway.data!.length - 1 ? <DashedLine /> : <></>}
          </React.Fragment>
        );
      })}
    </StyledBox>
  );
};

export default GuildWaterwayTable;
