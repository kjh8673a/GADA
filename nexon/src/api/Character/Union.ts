import { https } from "../Https";

export const getCharacterUnion = async (characterName: string) => {
  return await https({
    method: "get",
    url: "/character/getCharacterUnion",
    params: { characterName },
  });
};