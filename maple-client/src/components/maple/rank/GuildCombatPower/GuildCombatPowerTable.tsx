import React from "react";
import styled from "styled-components";
import useRanking from "../../../../hooks/maple/useRanking";
import DashedLine from "../../../common/DashedLine";
import GuildCombatPowerTableItem from "./GuildCombatPowerTableItem";
import GuildCombatPowerTableHeader from "./GuildCombatPowerTableHeader";

const StyledBox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #3d444c;
  overflow: hidden;
`;

const GuildCombatPowerTable = () => {
  const { guildCombatPower, guildClickHandler } = useRanking();
  return (
    <StyledBox>
      <GuildCombatPowerTableHeader />
      {guildCombatPower.data?.content.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <GuildCombatPowerTableItem
              props={v}
              clickHandler={guildClickHandler}
            />
            {i !== guildCombatPower.data!.content.length - 1 ? (
              <DashedLine />
            ) : (
              <></>
            )}
          </React.Fragment>
        );
      })}
    </StyledBox>
  );
};

export default GuildCombatPowerTable;
