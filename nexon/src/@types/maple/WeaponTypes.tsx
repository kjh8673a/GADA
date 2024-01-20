export const WEAPON_GRADE_LIST = ["유니크", "에픽", "레전드리"];

export const MATCH_COLOR: { [key in WEAPON_GRADE_TYPE]: string } = {
  에픽: "rgb(76, 2, 145)",
  유니크: "rgb(254, 199, 99)",
  레전드리: "rgb(83, 182, 0)",
};

export const MATCH_BGCOLOR: { [key in WEAPON_GRADE_TYPE]: string } = {
  에픽: "rgba(76, 2, 145, 0.2)", // 연한 보라색
  유니크: "rgba(254, 199, 99, 0.2)", // 연한 노란색
  레전드리: "rgba(83, 182, 0, 0.2)", // 연한 녹색
};

export const WEAPON_SLOT_LIST = [
  "모자",
  "상의",
  "하의",
  "망토",
  "장갑",
  "신발",
  "반지1",
  "반지2",
  "반지3",
  "반지4",
  "펜던트",
  "펜던트2",
  "얼굴장식",
  "눈장식",
  "귀고리",
  "어깨장식",
  "뱃지",
  "벨트",
  "훈장",
  "무기",
  "보조무기",
  "엠블렘",
  "포켓_아이템",
  "기계_심장",
];

export type WEAPON_GRADE_TYPE = (typeof WEAPON_GRADE_LIST)[number];

export type WEAPON_TYPE = (typeof WEAPON_SLOT_LIST)[number];

export interface cachItemPresetType {
  cash_item_coloring_prism: string | null;
  cash_item_description: string | null;
  cash_item_equipment_part: string | null;
  cash_item_equipment_slot: string | null;
  cash_item_icon: string | null;
  cash_item_label: string | null;
  cash_item_name: string | null;
  cash_item_option: string[];
  date_expire: string | null;
  date_option_expire: string | null;
}

export interface IWeaponOptionType {
  str?: string;
  dex?: string;
  int?: string;
  luk?: string;
  max_hp?: string;
  max_mp?: string;
  attack_power?: string;
  magic_power?: string;
  armor?: string;
  speed?: string;
  jump?: string;
  boss_damage?: string;
  ignore_monster_armor?: string;
  all_stat?: string;
  damage?: string;
  equipment_level_decrease?: number;
  max_hp_rate?: string;
  max_mp_rate?: string;
  base_equipment_level?: number;
}

export interface IWeaponDataType {
  item_equipment_part: string;
  item_equipment_slot: string;
  item_name: string;
  item_icon: string;
  item_description: string | null;
  item_shape_name: string;
  item_shape_icon: string;
  item_gender: string | null;
  item_total_option: IWeaponOptionType;
  item_base_option: IWeaponOptionType;
  potential_option_grade: string | null;
  additional_potential_option_grade: string | null;
  potential_option_1: string | null;
  potential_option_2: string | null;
  potential_option_3: string | null;
  additional_potential_option_1: string | null;
  additional_potential_option_2: string | null;
  additional_potential_option_3: string | null;
  equipment_level_increase: number;
  item_exceptional_option: IWeaponOptionType;
  item_add_option: IWeaponOptionType;
  growth_exp: number;
  growth_level: number;
  scroll_upgrade: string;
  cuttable_count: string;
  golden_hammer_flag: string;
  scroll_resilience_count: string;
  scroll_upgradeable_count: string;
  soul_name: string | null;
  soul_option: string | null;
  item_etc_option: IWeaponOptionType;
  starforce: string;
  starforce_scroll_flag: string;
  item_starforce_option: IWeaponOptionType;
  special_ring_level: number;
  date_expire: string | null;
}

export interface ITitleDataType {
  date_expire: string | null;
  date_option_expire: string | null;
  title_description: string | null;
  title_icon: string | null;
  title_name: string | null;
}

export interface IPetWeaponOptionType {
  option_type: string;
  option_value: string;
}

export interface IPetWeaponDataType {
  item_description: string | null;
  item_icon: string | null;
  item_name: string | null;
  item_option: IPetWeaponOptionType[];
  scroll_upgrade: number | null;
  scroll_upgradeable: string | null;
}

export interface ISymbolStatType {
  symbol_hp: number;
  symbol_dex: number;
  symbol_force: number;
  symbol_str: number;
  symbol_int: number;
  symbol_luk: number;
}

export interface ISymbolDataType {
  symbol_description: string | null;
  symbol_dex: string | null;
  symbol_force: string | null;
  symbol_growth_count: number | null;
  symbol_hp: string | null;
  symbol_icon: string | null;
  symbol_int: string | null;
  symbol_level: number | null;
  symbol_luk: string | null;
  symbol_name: string | null;
  symbol_require_growth_count: number | null;
  symbol_str: string | null;
}

export interface IWeaponTypes {
  cach_item?: {
    cach_item_equitment_preset_1: cachItemPresetType[];
    cach_item_equitment_preset_2: cachItemPresetType[];
    cach_item_equitment_preset_3: cachItemPresetType[];
    character_class: string | null;
    character_gender: string | null;
    preset_no: number | null;
  };
  item?: {
    item_equipment: IWeaponDataType[];
    title: ITitleDataType | null;
  };
  pet?: {
    pet_1_name: string | null;
    pet_1_nickname: string | null;
    pet_1_icon: string | null;
    pet_1_description: string | null;
    pet_1_equipment: IPetWeaponDataType;
    pet_1_pet_type: string | null;
    pet_1_skill: string[];
    pet_1_date_expire: string | null;
    pet_2_name: string | null;
    pet_2_nickname: string | null;
    pet_2_icon: string | null;
    pet_2_description: string | null;
    pet_2_equipment: IPetWeaponDataType;
    pet_2_pet_type: string | null;
    pet_2_skill: string[];
    pet_2_date_expire: string | null;
    pet_3_name: string | null;
    pet_3_nickname: string | null;
    pet_3_icon: string | null;
    pet_3_description: string | null;
    pet_3_equipment: IPetWeaponDataType;
    pet_3_pet_type: string | null;
    pet_3_skill: string[];
    pet_3_date_expire: string | null;
  };
  symbols?: ISymbolDataType[] | null;
  timestamp?: string | null;
}

