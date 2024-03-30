import { TAvatar } from "./AvatarTypes";
import { TCreature } from "./CreatureTypes";
import { TCharacterBasic } from "./BasicTypes";
import { TCharacterStat } from "./StatTypes";
import {
  TCharacterEquip,
  TCharacterEquipTrait,
  TCharacterSetItem,
} from "./EquipmentTypes";
import { TCharacterBuffEquip } from "./BuffEquipTypes";
import { TCharacterFlag } from "./FlagTypes";
import { TCharacterTalismans } from "./TalismanTypes";

export type ITEM_RARITY =
  | "커먼"
  | "언커먼"
  | "레어"
  | "크로니클"
  | "유니크"
  | "레전더리"
  | "에픽"
  | "신화";

export const ITEM_TYPE_COLOR = {
  커먼: "#bebebe",
  언커먼: "#00ffff",
  레어: "#8A2BE2",
  크로니클: "#CD5C5C",
  유니크: "#FF1493",
  레전더리: "#FF7800",
  에픽: "#FFB400",
  신화: "#FFB400",
};

export const SERVER_LIST = [
  "힐더",
  "카인",
  "카시야스",
  "프레이",
  "안톤",
  "시로코",
  "디레지에",
  "바칼",
];

export type TDetail = {
  itemId: string;
  itemName: string;
  itemRarity: ITEM_RARITY;
  itemTypeId: string;
  itemType: string;
  itemTypeDetailId: string;
  itemTypeDetail: string;
  itemAvailableLevel: number;
  itemExplain: string;
  itemExplainDetail: string;
  itemFlavorText: string;
  obtainInfo: {
    dungeon: string;
    shop: {
      name: string;
      value: number;
    }[];
  } | null;
  setItemId: string | null;
  setItemName: string | null;
  itemStatus:
    | {
        name: string;
        value: string;
      }[]
    | null;
  fixedOption: {
      damage: number;
      buff: number;
      level: number;
      exp: number;
      explain: string;
      explainDetail: string;
    } | null;
  mythologyInfo: string | null;
  itemBuff: {
    explain: string;
    explainDetail: string;
    reinforceSkill: any[];
  } | null;
  hashtag: string | null;
  talismanInfo: {
    explain: string;
    skillId: string;
  } | null;
};

export type TCharacterData = {
  timestamp?: string;
  data?: {
    basic: TCharacterBasic;
    stat: TCharacterStat;
    equipment: {
      equipment: TCharacterEquip[];
      setItemInfo: TCharacterSetItem[];
      equipmentTrait: TCharacterEquipTrait | null;
    };
    buff?: TCharacterBuffEquip;
    talisman: TCharacterTalismans;
    avatar: TAvatar[] | null;
    creature: TCreature | null;
    flag: TCharacterFlag;
  };
};

export type TPopularCharacter = {
  rank: number;
  characterName: string;
  serverName: string;
  level: number;
  jobName: string;
  jobGrowName: string;
  characterImage: string;
  fame: number;
};

export type TPopularCharacters = {
  timestamp?: string;
  data?: {
    ranking: TPopularCharacter[];
  };
};
