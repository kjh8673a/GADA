import { ITEM_RARITY, TDetail } from "./CommonTypes";

export type TCharacterFlagGem = {
  detail?: TDetail;
  itemId: string;
  itemImage: string;
  itemName: string;
  itemRarity: ITEM_RARITY;
  slotNo: number;
};

export type TCharacterFlag = {
  detail?: TDetail;
  gems?: TCharacterFlagGem[];
  itemId?: string;
  itemImage?: string;
  itemName?: string;
  itemRarity?: ITEM_RARITY;
  reinforce?: number;
  reinforceStatus?: {
    name: string;
    value: string;
  }[];
};

export type TCharacterItemDetail = {
  fixedOption: string;
  hashtag: string;
  itemAvailableLevel: number;
  itemBuff: string;
  itemExplain: string;
  itemExplainDetail: string;
  itemFlavorText: string;
  itemId: string;
  itemName: string;
  itemRarity: ITEM_RARITY;
  itemStatus: {
    name: string;
    value: string;
  }[];
  itemType: string;
  itemTypeDetail: string;
  itemTypeDetailId: string;
  itemTypeId: string;
  mythologyInfo: string;
  talismanInfo: {
    explain: string;
    skillId: string;
  };
  obtainInfo: {
    dungeon: string;
    shop: {
      name: string;
      value: number;
    }[];
  };
};
