export const SERVER_LIST = [
  "힐더",
  "카인",
  "카시야스",
  "프레이",
  "안톤",
  "시로코",
  "디레지에",
  "바칼",
];

export type TBookmark = {
  server: string;
  character: string;
};

export type TCharacterBasic = {
  updatedTime?: string;
  serverName?: string;
  characterName?: string;
  level?: number;
  jobName?: string;
  jobGrowName?: string;
  jobImage?: string;
  fame?: number | null;
  characterImage?: string;
  adventureName?: string;
  jobRanking?: number;
  guildName?: string;
};

export type TCharacterBuff = {
  name: string;
  level: number;
  status: {
    힘: number;
    지능: number;
    체력: number;
    정신력: number;
  };
};

export type TCharacterStat = {
  buff?: TCharacterBuff[];
  status?: {
    [key: string]: number;
  };
};

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
  itemRarity?: string;
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
    reinforceSkill: string | null;
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
  detail?: {
    itemId: string;
    itemName: string;
    itemRarity: string;
    itemTypeId: string;
    itemType: string;
    itemTypeDetailId: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
    itemExplain: string;
    itemExplainDetail: string;
    itemFlavorText: string;
    obtainInfo: {
      dungeon: any | null;
      shop: any | null;
    };
    setItemId: string | null;
    setItemName: string | null;
    itemStatus: { [key: string]: string }[];
    fixedOption: {
      damage: number;
      buff: number;
      level: number;
      exp: number;
      explain: string;
      explainDetail: string;
    } | null;
    mythologyInfo: any | null;
    itemBuff: {
      explain: string;
      explainDetail: string;
      reinforceSkill: any[];
    };
    hashtag: any[];
  };
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
  itemRarity: string;
  setItemId: string | null;
  setItemName: string | null;
  reinforce: number;
  amplificationName: string | null;
  refine: number;
  enchant: {
    reinforceSkill: string | null;
    status: { [key: string]: string }[];
  };
};

export type TBuffAvartar = {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemImage: string;
  itemRarity: string;
  cloneAvatarName: string | null;
  optionAbility: string;
  emblems: [];
};

export type TBuffCreature = {
  itemId: string;
  itemName: string;
  itemImage: string;
  itemRarity: string;
};

export type TCharacterBuffEquip = {
  skillInfo?: {
    skillId: string;
    name: string;
    option: any | null;
  };
  equipment?: TBuffEquip[];
  avatar?: TBuffAvartar[];
  creature?: TBuffCreature[];
};

export type TCharacterData = {
  timestamp?: string;
  data?: {
    basic: TCharacterBasic;
    stat: TCharacterStat;
    equipment: {
      equipment: TCharacterEquip[];
      setItemInfo: TCharacterSetItem[];
      equipmentTrait: TCharacterEquipTrait | null;
    };
    buff: TCharacterBuffEquip;
  };
};
