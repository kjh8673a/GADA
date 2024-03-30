import { atom } from "recoil";
import { TCharacterRune, TCharacterTalisman } from "../@types/Character/TalismanTypes";

import {
  TCharacterFlag,
  TCharacterFlagGem,
} from "../@types/Character/FlagTypes";

export const atomtalismanInfo = atom<TCharacterTalisman | TCharacterRune>({
  key: "atomtalismanInfo",
  default: {},
});

export const atomFlagInfo = atom<TCharacterFlag | TCharacterFlagGem>({
  key: "atomFlagInfo",
  default: {},
});
