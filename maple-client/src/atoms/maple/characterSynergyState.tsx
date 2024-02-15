import { atom } from "recoil";
import { CharacterSynergyType } from "../../@types/maple/CharacterSynergyTypes";

export const atomCharacterSynergy = atom<CharacterSynergyType>({
  key: "atomCharacterSynergy",
  default: {},
});

export const atomSelectedCharacters = atom<string[]>({
  key: "atomSelectedCharacters",
  default: [],
});

export const atomOptionOrder = atom<{
  cycle: number;
  skill_type: string[];
}>({
  key: "atomOptionOrder",
  default: {
    cycle: 1,
    skill_type: [],
  },
});
