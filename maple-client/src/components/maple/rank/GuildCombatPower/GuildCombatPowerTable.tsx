import React from "react";
import styled from "styled-components";
import useRanking from "../../../../hooks/maple/useRanking";
import DashedLine from "../../../common/DashedLine";
import GuildCombatPowerTableItem from "./GuildCombatPowerTableItem";
import GuildCombatPowerTableHeader from "./GuildCombatPowerTableHeader";
import useFetch from "../../../../hooks/useFetch";

const StyledBox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #3d444c;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const GuildCombatPowerTable = () => {
  const { guildCombatPower, getGuildCombatPowerData, rankPage, worldTab, guildClickHandler } = useRanking();
  const result = useFetch(getGuildCombatPowerData, rankPage, worldTab);

  if (!result) return null;

  return (
    <StyledBox>
      <GuildCombatPowerTableHeader />
      {guildCombatPower.data?.content.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <GuildCombatPowerTableItem props={v} clickHandler={guildClickHandler} />
            {i !== guildCombatPower.data!.content.length - 1 ? <DashedLine /> : <></>}
          </React.Fragment>
        );
      })}
    </StyledBox>
  );
};

export default GuildCombatPowerTable;

