import { atom } from "recoil";
import { CharacterBasicType } from "../../@types/maple/CharacterBasicTypes";

export const atomCharacterBasic = atom<CharacterBasicType>({
  key: "atomCharacterBasic",
  default: {},
});
