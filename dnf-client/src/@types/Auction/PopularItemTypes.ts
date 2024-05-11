import { ITEM_RARITY } from "./../Character/CommonTypes";

export type TRankingItem = {
  rank: number;
  itemId: string;
  itemRarity: ITEM_RARITY;
  itemName: string;
  itemType: string;
  itemTypeDetail: string;
  itemImage: string;
};

export type TPopularItem = {
  timestamp: Date;
  data: {
    ranking: TRankingItem[];
  };
};
