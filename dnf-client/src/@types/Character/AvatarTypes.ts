import { ITEM_RARITY } from "../CharacterTypes";

export const AVATAR_SLOT_LIST = [
  ["무기 아바타", "머리 아바타", "모자 아바타", "얼굴 아바타"],
  ["오라 아바타", "목가슴 아바타", "상의 아바타", "스킨 아바타"],
  ["오라 스킨 아바타", "목가슴 아바타", "상의 아바타", "스킨 아바타"],
  ["허리 아바타", "하의 아바타", "신발 아바타"],
];

export const EMBLEMS_COLOR: { [key: string]: string } = {
  붉은빛: "#c12222",
  푸른빛: "#0c0ce2",
  그린: "#49cb49",
  녹색빛: "#49cb49",
  옐로우: "#d5d521",
  노란빛: "#d5d521",
  플래티넘: "#8dcce6",
  듀얼: "#ce00d6",
  다색: "#ce00d6",
};

export type TAvatar = {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemImage: string;
  itemRarity: ITEM_RARITY;
  clone: TAvatarClone;
  optionAbility: string | null;
  emblems: TAvatarEmblem[];
  detail: TAvatarDetail;
};

export type TAvatarClone = {
  itemId: string | null;
  itemName: string | null;
  itemImage: string | null;
  detail: TAvatarDetail | null;
};

export type TAvatarEmblem = {
  slotNo: number;
  slotColor: string;
  itemName: string;
  itemRarity: ITEM_RARITY;
};

export type TAvatarDetail = {
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
  obtainInfo: string | null;
  setItemId: string | null;
  setItemName: string | null;
  itemStatus: {
    name: string;
    value: string;
  }[];
  fixedOption: null;
  mythologyInfo: null;
  itemBuff: null;
  hashtag: null;
  talismanInfo: null;
};
