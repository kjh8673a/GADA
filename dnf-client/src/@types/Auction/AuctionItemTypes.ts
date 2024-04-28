import { ITEM_RARITY } from "../Character/CommonTypes";

export type TRegisteredItem = {
  regDate: string;
  expireDate: string;
  count: number;
  currentPrice: number;
  unitPrice: number;
};

export type THistoryItem = {
  soldDate: string;
  count: string; // 물량
  price: string; // 거래액
  unitPrice: string; // 개당 가격
};

export type TGraphData = {
  datetime: string;
  averagePrice: number;
  registeredNumber: number;
  totalItemCount: number;
};

export type TAuctionItem = {
  timestamp: string;
  data: {
    itemId: string;
    itemName: string;
    itemRarity: ITEM_RARITY;
    itemType: string;
    itemTypeDetail: string;
    itemImage: string;
    upperPrice: number; // 상한가
    lowerPrice: number; // 하한가
    averagePrice: number;
    registeredNumber: number; // 등록건수
    totalItemCount: number; // 전체 물량
    registeredList: TRegisteredItem[];
    history: THistoryItem[];
    graph: TGraphData[];
  };
};
