import { https } from "../Https";

export const getCharacterSynergy = async (
  characterName: string,
  selectedCharacters: string[]
) => {
  return await https({
    method: "post",
    url: "/synergy/findPartySynergy",
    data: { characterName, selectedCharacters },
  });
};
