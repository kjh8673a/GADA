import { ITEM_RARITY } from "../CharacterTypes";

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
  obtainInfo: {} | null;
  setItemId: string | null;
  setItemName: string | null;
  itemStatus: {
    name: string;
    value: string;
  }[] | null;
  fixedOption: null;
  mythologyInfo: null;
  itemBuff: null;
  hashtag: null;
  talismanInfo: null;
}

