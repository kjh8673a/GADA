import { ITEM_RARITY, TDetail } from "./CommonTypes";

export const MAIN_EQUIP_LIST = [
  "무기",
  "머리어깨",
  "상의",
  "하의",
  "벨트",
  "신발",
];

export const ITEM_BASIC_STAT = [
  "모험가 명성",
  "물리 공격력",
  "마법 공격력",
  "독립 공격력",
  "물리 방어력",
  "마법 방어력",
  "힘",
  "지능",
  "체력",
  "정신력",
];

export type TCharacterEquip = {
  slotId?: string;
  slotName?: string;
  itemId?: string;
  itemName?: string;
  itemImage?: string;
  itemTypeId?: string;
  itemType?: string;
  itemTypeDetailId?: string;
  itemTypeDetail?: string;
  itemAvailableLevel?: number;
  itemRarity?: ITEM_RARITY;
  setItemId?: string | null;
  setItemName?: string | null;
  skin?: {
    itemId: string;
    itemName: string;
    itemRarity: string;
  } | null;
  reinforce?: number;
  itemGradeName?: string | null;
  enchant?: {
    reinforceSkill:
      | {
          jobId: string;
          jobName: string;
          skills: {
            skillId: string;
            name: string;
            value: number;
          }[];
        }[]
      | null;
    status: { [key: string]: string }[];
  };
  amplificationName?: string | null;
  refine?: number;
  bakalInfo?: {
    options:
      | {
          damage: number | null;
          buff: number;
          explain: string;
          explainDetail: string;
          transfer: boolean;
        }[]
      | null;
  };
  upgradeInfo?: {
    itemId: string;
    itemName: string;
  } | null;
  fixedOption?: {
    damage: number;
    buff: number;
    level: number;
    exp: number;
    explain: string;
    explainDetail: string;
  } | null;
  engraveName?: true;
  machineRevolutionInfo?: string | null;
  customOption?: string | null;
  detail?: TDetail;
};

export type TCharacterSetItem = {
  setItemId?: string | null;
  setItemName?: string | null;
  slotInfo?: {
    slotId: string;
    slotName: string;
    itemRarity: string;
  }[];
  activeSetNo?: number;
};

export type TCharacterEquipTrait = {
  total?: {
    point: number;
  };
  category?: {
    id: string;
    name: string;
    explain: string;
  };
  options?:
    | {
        id: string;
        name: string;
        level: number;
        fame: number | null;
        buff: number;
        explain: string;
        explainDetail: string;
      }[]
    | null;
};
