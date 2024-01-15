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

export interface IWeaponData {
  item_equipment_part: string;
  item_equipment_slot: string;
  item_name: string;
  item_icon: string;
  item_description: string | null;
  item_shape_name: string;
  item_shape_icon: string;
  item_gender: string | null;
  item_total_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    damage: string;
    equipment_level_decrease: number;
    max_hp_rate: string;
    max_mp_rate: string;
  };
  item_base_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    ignore_monster_armor: string;
    all_stat: string;
    max_hp_rate: string;
    max_mp_rate: string;
    base_equipment_level: number;
  };
  potential_option_grade: string | null;
  additional_potential_option_grade: string | null;
  potential_option_1: string | null;
  potential_option_2: string | null;
  potential_option_3: string | null;
  additional_potential_option_1: string | null;
  additional_potential_option_2: string | null;
  additional_potential_option_3: string | null;
  equipment_level_increase: number;
  item_exceptional_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
  };
  item_add_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
    boss_damage: string;
    damage: string;
    all_stat: string;
    equipment_level_decrease: number;
  };
  growth_exp: number;
  growth_level: number;
  scroll_upgrade: string;
  cuttable_count: string;
  golden_hammer_flag: string;
  scroll_resilience_count: string;
  scroll_upgradeable_count: string;
  soul_name: string | null;
  soul_option: string | null;
  item_etc_option: {
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
  };
  starforce: string;
  starforce_scroll_flag: string;
  item_starforce_option: {
    str: string;
    dex: string;
    int: string;
    luk: string;
    max_hp: string;
    max_mp: string;
    attack_power: string;
    magic_power: string;
    armor: string;
    speed: string;
    jump: string;
  };
  special_ring_level: number;
  date_expire: string | null;
}

