import { atom } from "recoil";
import { CharacterUnionType } from "../../@types/maple/CharacterUnionTypes";

export const atomUnionGrid = atom<boolean[][]>({
  key: "atomUnionGrid",
  default: [],
});

export const atomCharacterUnion = atom<CharacterUnionType>({
  key: "atomCharacterUnion",
  default: {},
});
