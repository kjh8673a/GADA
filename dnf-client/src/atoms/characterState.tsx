import { atom } from "recoil";
import {
  TBookmark,
  TCharacterBasic,
  TCharacterData,
  TCharacterEquip,
  TCharacterEquipTrait,
  TCharacterSetItem,
  TCharacterSkill,
  TCharacterStat,
  TCharacterTalismans,
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

export const atomCharacterSkill = atom<TCharacterSkill>({
  key: "atomCharacterSkill",
  default: {},
});

export const atomCharacterTalismans = atom<TCharacterTalismans>({
  key: "atomCharacterTalismans",
  default: {},
});

export const atomUpdate = atom<boolean>({
  key: "atomUpdate",
  default: true,
});

export const atomLoading = atom<boolean>({
  key: "atomLoading",
  default: false,
});

export const atomCharacterBookmark = atom<TBookmark[]>({
  key: "atomCharacterBookmark",
  default: JSON.parse(window.localStorage.getItem("DnfBookmark")!) || [],
});
