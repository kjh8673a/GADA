import { ITEM_RARITY } from "./Character/CommonTypes";

export type TSearchCharacter = {
  serverName: string;
  characterName: string;
  level: number;
  jobName: string;
  jobGrowName: string;
  fame: number;
  characterImage: string;
};

export type TSearchCharacters = {
  timestamp?: string;
  data?: TSearchCharacter[];
};

export type TBookmark = {
  server: string;
  character: string;
};

export type TRecentSearch = string[];

export type TSearchAuctionItem = {
  itemId: string;
  itemName: string;
  itemRarity: ITEM_RARITY;
  itemType: string;
  itemTypeDetail: string;
  itemImage: string;
  inAuction: boolean;
};

export type TSearchAuction = {
  timestamp?: string;
  data?: {
    items: TSearchAuctionItem[];
  };
};