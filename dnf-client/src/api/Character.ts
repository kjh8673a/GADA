import { https } from "./Https";

export const getCharacterInfo = async (
  serverName: string,
  characterName: string,
  update?: boolean
) => {
  return await https({
    method: "get",
    url: "/character/getCharacterInformation",
    params: { serverName, characterName, update },
  });
};

export const getPopularCharacters = async () => {
  return await https({
    method: "get",
    url: "/character/getPopularCharacters",
  });
};

export const getSearchCharacters = async (characterName: string) => {
  return await https({
    method: "get",
    url: "/character/searchCharacters",
    params: { characterName },
  });
};