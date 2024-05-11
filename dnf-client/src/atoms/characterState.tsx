import { atom } from "recoil";
import { TCharacterTalismans } from "../@types/Character/TalismanTypes";
import { TCharacterBasic } from "../@types/Character/BasicTypes";
import { TCharacterStat } from "../@types/Character/StatTypes";
import {
  TCharacterEquip,
  TCharacterEquipTrait,
  TCharacterSetItem,
<<<<<<< HEAD
  TCharacterSkill,
  TCharacterStat,
  TCharacterTalismans,
} from "../@types/CharacterTypes";
=======
} from "../@types/Character/EquipmentTypes";
import { TAvatar } from "../@types/Character/AvatarTypes";
import { TCreature } from "../@types/Character/CreatureTypes";
import { TCharacterBuffEquip } from "../@types/Character/BuffEquipTypes";
import { TCharacterFlag } from "../@types/Character/FlagTypes";
>>>>>>> dnf/release

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

<<<<<<< HEAD
export const atomCharacterSkill = atom<TCharacterSkill>({
  key: "atomCharacterSkill",
=======
export const atomCharacterBuffEquip = atom<TCharacterBuffEquip>({
  key: "atomCharacterBuffEquip",
  default: {},
});

export const atomCharacterAvatar = atom<TAvatar[]>({
  key: "atomCharacterAvatar",
  default: [],
});

export const atomCharacterCreature = atom<TCreature>({
  key: "atomCharacterCreature",
  default: {},
});

export const atomCharacterFlag = atom<TCharacterFlag>({
  key: "atomCharacterFlag",
>>>>>>> dnf/release
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
