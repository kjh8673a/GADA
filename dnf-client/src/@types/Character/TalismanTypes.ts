import { TDetail } from "./CommonTypes";

export type TCharacterTalisman = {
  detail?: TDetail;
  itemId?: string;
  itemImage?: string;
  itemName?: string;
  runeTypes: {}[];
  slotNo?: number;
};

export type TCharacterRune = {
  detail?: TDetail;
  itemId?: string;
  itemImage?: string;
  itemName?: string;
  slotNo?: number;
};

export type TCharacterTalismans = {
  talismans?: {
    runes?: TCharacterRune[];
    talisman?: TCharacterTalisman;
  }[];
};