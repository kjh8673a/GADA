import { atom } from "recoil";
import { TCharacterRune, TCharacterTalisman } from "../@types/CharacterTypes";

export const atomtalismanInfo = atom<TCharacterTalisman | TCharacterRune>({
  key: "atomtalismanInfo",
  default: {},
});
