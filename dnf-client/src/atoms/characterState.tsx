import { atom } from "recoil";
import {
  TCharacterBasic,
  TCharacterBuffEquip,
  TCharacterEquip,
  TCharacterEquipTrait,
  TCharacterFlag,
  TCharacterSetItem,
  TCharacterSkill,
  TCharacterStat,
  TCharacterTalismans,
} from "../@types/CharacterTypes";
import { TAvatar } from "../@types/Character/AvatarTypes";
import { TCreature } from "../@types/Character/CreatureTypes";

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
});

export const atomCharacterSkill = atom<TCharacterSkill>({
  key: "atomCharacterSkill",
  default: {},
});

export const atomCharacterFlag = atom<TCharacterFlag>({
  key: "atomCharacterFlag",
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

export const atomCharacterAvatar = atom<TAvatar[]>({
  key: "atomCharacterAvatar",
  default: [],
});

export const atomCharacterCreature = atom<TCreature>({
  key: "atomCharacterCreature",
  default: {},
})
