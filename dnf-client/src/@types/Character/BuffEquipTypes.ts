import { ITEM_RARITY } from "./CommonTypes";

export type TBuffEquip = {
  slotName: string;
  itemId: string;
  itemName: string;
  itemImage: string;
  itemTypeId: string;
  itemType: string;
  itemTypeDetailId: string;
  itemTypeDetail: string;
  itemAvailableLevel: number;
  itemRarity: ITEM_RARITY;
  setItemId: string | null;
  setItemName: string | null;
  reinforce: number;
  amplificationName: string | null;
  refine: number;
  enchant: {
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
};

export type TBuffAvartar = {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemImage: string;
  itemRarity: ITEM_RARITY;
  cloneAvatarName: string | null;
  optionAbility: string;
  emblems: {
    slotNo: number;
    slotColor: string;
    itemName: string;
    itemRarity: string;
  }[];
};

export type TBuffCreature = {
  itemId: string;
  itemName: string;
  itemImage: string;
  itemRarity: ITEM_RARITY;
};

export type TCharacterBuffEquip = {
  skillInfo?: {
    skillId: string;
    name: string;
    option: {
      level: number;
      desc: string;
      values: string[];
    } | null;
  };
  equipment?: TBuffEquip[];
  avatar?: TBuffAvartar[];
  creature?: TBuffCreature[];
};