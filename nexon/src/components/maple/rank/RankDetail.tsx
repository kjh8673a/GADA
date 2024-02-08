import React from "react";
import useRanking from "../../../hooks/maple/useRanking";
import CombatPower from "./CombatPower/CombatPower";
import GuildWaterway from "./GuildWaterway/GuildWaterway";
import GuildCombatPower from "./GuildCombatPower/GuildCombatPower";

const RankDetail = () => {
  const { rankTab } = useRanking();
  if (rankTab === "개인 전투력 랭킹") return <CombatPower />;
  if (rankTab === "길드 수로 랭킹") return <GuildWaterway />;
  if (rankTab === "길드 전투력 랭킹") return <GuildCombatPower />;
  return <>Error</>;
};

export default RankDetail;
