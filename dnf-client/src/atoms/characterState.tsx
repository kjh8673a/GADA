import { atom } from "recoil";
import {
  TCharacterBasic,
  TCharacterBuffEquip,
  TCharacterEquip,
  TCharacterEquipTrait,
  TCharacterSetItem,
  TCharacterStat,
} from "../@types/CharacterTypes";

export const atomCharacterBasic = atom<TCharacterBasic>({
  key: "atomCharacterBasic",
  default: {},
});

export const atomCharacterStat = atom<TCharacterStat>({
  key: "atomCharacterStat",
  default: {},
});

export const atomCharacterEquip = atom<TCharacterEquip[]>({
  key: "atomCharacterEquip",
  default: [],
});

export const atomCharacterSetItem = atom<TCharacterSetItem[]>({
  key: "atomCharacterSetItem",
  default: [],
});

export const atomCharacterEquipTrait = atom<TCharacterEquipTrait>({
  key: "atomCharacterEquipTrait",
  default: {},
});

export const atomCharacterBuffEquip = atom<TCharacterBuffEquip>({
  key: "atomCharacterBuffEquip",
  default: {},
})

export const atomUpdate = atom<boolean>({
  key: "atomUpdate",
  default: true,
});

export const atomLoading = atom<boolean>({
  key: "atomLoading",
  default: false,
});