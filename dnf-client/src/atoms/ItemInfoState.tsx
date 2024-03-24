import { atom } from "recoil";
import {
  TCharacterFlag,
  TCharacterFlagGem,
  TCharacterRune,
  TCharacterTalisman,
} from "../@types/CharacterTypes";

export const atomtalismanInfo = atom<TCharacterTalisman | TCharacterRune>({
  key: "atomtalismanInfo",
  default: {},
});

export const atomFlagInfo = atom<TCharacterFlag | TCharacterFlagGem>({
  key: "atomFlagInfo",
  default: {},
});
