import { https } from "../Https";

export const updateCharacterInfo = async (characterName: string, tab: number) => {
  return await https({
    method: "get",
    url: "/character/updateCharacterInfo",
    params: { characterName, tab },
  });
};