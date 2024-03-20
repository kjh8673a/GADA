import { https } from "../Https";

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
