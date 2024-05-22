import { Suspense } from "react";
import styled from "styled-components";
import GuildCombatPowerTable from "./GuildCombatPowerTable";
import RankTablePageMove from "../RankTablePageMove";
import SkeletonGuildWaterway from "../../../skeleton/SkeletonGuildWaterway";

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
  return (
    <StyledBox>
      <Suspense fallback={<SkeletonGuildWaterway />}>
        <GuildCombatPowerTable />
      </Suspense>
      <RankTablePageMove />
    </StyledBox>
  );
};

export default GuildCombatPower;

