import { https } from "../Https";

export const getSearchCharacters = async (characterName: string) => {
  return await https({
    method: "get",
    url: "/character/searchCharacters",
    params: { characterName },
  });
};