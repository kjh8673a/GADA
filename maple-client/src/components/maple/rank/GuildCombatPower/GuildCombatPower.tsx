import React, { useEffect } from "react";
import styled from "styled-components";
import useRanking from "../../../../hooks/maple/useRanking";
import GuildCombatPowerTable from "./GuildCombatPowerTable";
import RankTablePageMove from "../RankTablePageMove";

const StyledBox = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  min-height: 1000px;
`;

const GuildCombatPower = () => {
  const { rankPage, worldTab, getGuildCombatPowerData } = useRanking();
  useEffect(() => getGuildCombatPowerData(rankPage, worldTab), [getGuildCombatPowerData]);
  return (
    <StyledBox>
      <GuildCombatPowerTable />
      <RankTablePageMove />
    </StyledBox>
  );
};

export default GuildCombatPower;

