import { TAvatar } from "./Character/AvatarTypes";
import { TCreature } from "./Character/CreatureTypes";

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

export const MAIN_EQUIP_LIST = [
  "무기",
  "머리어깨",
  "상의",
  "하의",
  "벨트",
  "신발",
];

export const MAIN_STAT_LIST = [
  ["HP", false, false],
  ["MP", false, false],
  ["물리 방어율", true, false],
  ["마법 방어율", true, false],
  ["힘", false, false],
  ["지능", false, false],
  ["체력", false, false],
  ["정신력", false, false],
  ["물리 공격", false, false],
  ["마법 공격", false, false],
  ["물리 크리티컬", true, true],
  ["마법 크리티컬", true, true],
  ["독립 공격", false, false],
  ["공격 속도", true, true],
  ["캐스팅 속도", true, true],
  ["이동 속도", true, true],
];

export const MAIN_STAT_ELEMENT_LIST = [
  "화속성 강화",
  "수속성 강화",
  "명속성 강화",
  "암속성 강화",
];

export const SUB_ATTACK_STAT_LIST = [
  ["공격력 증가", true],
  ["버프력", true],
  ["공격력 증폭", true],
  ["버프력 증폭", true],
  ["최종 데미지 증가", true],
  ["화속성 피해", true],
  ["수속성 피해", true],
  ["명속성 피해", true],
  ["암속성 피해", true],
  ["출혈 피해", true],
  ["중독 피해", true],
  ["화상 피해", true],
  ["감전 피해", true],
  ["출혈 피해 전환", true],
  ["중독 피해 전환", true],
  ["화상 피해 전환", true],
  ["감전 피해 전환", true],
  ["최종 쿨타임 감소율", true],
  ["쿨타임 감소", true],
  ["쿨타임 회복속도", true],
  ["적중률", true],
];

export const SUB_DEFENSE_STAT_LIST = [
  ["물리 방어", false],
  ["마법 방어", false],
  ["물리 피해 감소", true],
  ["마법 피해 감소", true],
  ["화속성 저항", false],
  ["수속성 저항", false],
  ["명속성 저항", false],
  ["암속성 저항", false],
  ["회피율", true],
  ["HP 회복량", false],
  ["MP 회복량", false],
];

export const SUB_EXTRA_STAT_LIST = [
  ["경직도", false],
  ["히트리커버리", false],
  ["데미지 증가", true],
  ["크리티컬 데미지 증가", true],
  ["추가 데미지 증가", true],
  ["모든 공격력 증가", true],
  ["물리 공격력 증가", true],
  ["마법 공격력 증가", true],
  ["독립 공격력 증가", true],
  ["힘 증가", true],
  ["지능 증가", true],
  ["지속피해", true],
];

export type ITEM_RARITY =
  | "커먼"
  | "언커먼"
  | "레어"
  | "크로니클"
  | "유니크"
  | "레전더리"
  | "에픽"
  | "신화";

export const ITEM_TYPE_COLOR = {
  커먼: "#bebebe",
  언커먼: "#00ffff",
  레어: "#8A2BE2",
  크로니클: "#CD5C5C",
  유니크: "#FF1493",
  레전더리: "#FF7800",
  에픽: "#FFB400",
  신화: "#FFB400",
};

export const ITEM_BASIC_STAT = [
  "모험가 명성",
  "물리 공격력",
  "마법 공격력",
  "독립 공격력",
  "물리 방어력",
  "마법 방어력",
  "힘",
  "지능",
  "체력",
  "정신력",
];

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
  level: number | null;
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
  itemRarity?: ITEM_RARITY;
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

export type TCharacterSkill = {
  active?: {
    costType?: string;
    detail?: {
      consumeItem: string;
      desc: string;
      descDetail: string;
      descSpecial: string;
      masterLevel: number;
      maxLevel: number;
      requiredLevel: number;
    };
    level: number;
    name: string;
    requiredLevel: number;
    skillId: string;
  }[];
  passive?: {
    costType?: string;
    detail?: {
      consumeItem: string;
      desc: string;
      descDetail: string;
      descSpecial: string;
      masterLevel: number;
      maxLevel: number;
      requiredLevel: number;
    };
    level: number;
    name: string;
    requiredLevel: number;
    skillId: string;
  }[];
};

export type TCharacterFlagGem = {
  detail?: TCharacterItemDetail;
  itemId: string;
  itemImage: string;
  itemName: string;
  itemRarity: ITEM_RARITY;
  slotNo: number;
};

export type TCharacterFlag = {
  detail?: TCharacterItemDetail;
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

export type TCharacterTalisman = {
  detail?: TCharacterItemDetail;
  itemId?: string;
  itemImage?: string;
  itemName?: string;
  runeTypes: {}[];
  slotNo?: number;
};

export type TCharacterRune = {
  detail?: TCharacterItemDetail;
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
    buff?: TCharacterBuffEquip;
    skill: TCharacterSkill;
    talisman: TCharacterTalismans;
    avatar: TAvatar[] | null;
    creature: TCreature | null;
    flag: TCharacterFlag;
  };
};

export type TPopularCharacter = {
  rank: number;
  characterName: string;
  serverName: string;
  level: number;
  jobName: string;
  jobGrowName: string;
  characterImage: string;
  fame: number;
};

export type TPopularCharacters = {
  timestamp?: string;
  data?: {
    ranking: TPopularCharacter[];
  };
};
