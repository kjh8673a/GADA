import { https } from "../Https";

export const getCombatPowerRanking = async (
  page: number,
  world_name?: string,
  character_class?: string
) => {
  return await https({
    method: "get",
    url: "/ranking/combatPowerRanking",
    params: { page, world_name, character_class },
  });
};

export const getGuildWaterway = async (
  page: number,
  world_name?: string
) => {
  return await https({
    method: "get",
    url: "/ranking/guildWaterway",
    params: { page, world_name },
  });
};
