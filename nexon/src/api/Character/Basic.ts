import { https } from "../Https";

export const getCharacterBasicInfo = async (characterName: string) => {
  return await https({
    method: "get",
    url: "/character/getCharacterBasicInfo",
    params: { characterName },
  });
};

export const getExpHistory = async (characterName: string) => {
  return await https({
    method: "get",
    url: "/character/getExpHistory",
    params: { characterName },
  });
};
