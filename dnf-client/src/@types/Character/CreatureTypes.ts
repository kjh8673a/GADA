import { ITEM_RARITY, TDetail } from "./CommonTypes";

export type TCreature = {
  itemId?: string;
  itemName?: string;
  itemImage?: string;
  itemRarity?: ITEM_RARITY;
  clone?: {
    itemId: string | null;
    itemName: string | null;
    itemImage: string | null;
    detail: TDetail | null;
  };
  artifact?: TArtifact[] | null;
  detail?: TDetail | null;
};

export type TArtifact = {
  slotColor: string;
  itemId: string;
  itemName: string;
  itemImage: string;
  itemAvailableLevel: number;
  itemRarity: ITEM_RARITY;
  detail: TDetail | null;
}