export interface IStatAblity {
  ability_no: string;
  ability_grade: "레전드리" | "유니크" | "에픽" | undefined;
  ability_value: string;
}

export interface IHyperStat {
  stat_type: string;
  stat_point: number | null;
  stat_level: number | null;
  stat_increase: string | null;
}

export interface IStatType {
  ability?: {
    ability_grade: "레전드리" | "유니크" | "에픽" | undefined;
    ability_info: IStatAblity[];
  };
  final_stats?: {
    ap_increased_dex: string;
    ap_increased_hp: string;
    ap_increased_int: string;
    ap_increased_luk: string;
    ap_increased_mp: string;
    ap_increased_str: string;
    arcane_force: string;
    attack_power: string;
    attack_speed: string;
    authentic_force: string;
    bonus_exp: string;
    boss_damage: string;
    buff_duration: string;
    combat_power: string;
    critical_damage: string;
    critical_rate: string;
    damage: string;
    decrease_cooldowns_percent: string;
    decrease_cooldowns_second: string;
    deffense: string;
    final_damage: string;
    ignore_monster_armor: string;
    ignore_status_tolerance: string;
    item_drop_rate: string;
    jump: string;
    knockback_resistance: string;
    magic_power: string;
    max_dex: string;
    max_hp: string;
    max_int: string;
    max_luk: string;
    max_mp: string;
    max_stat_power: string;
    max_str: string;
    mesos_obtained: string;
    min_stat_power: string;
    normal_monster_damage: string;
    skip_cooldowns: string;
    speed: string;
    star_force: string;
    status_bonus_damage: string;
    status_resistance: string;
    summon_duration: string;
    weapon_proficiency: string;
  };
  hyper_stats?: {
    arcane_force: IHyperStat;
    attack_magic_power: IHyperStat;
    bonus_exp: IHyperStat;
    boss_damage: IHyperStat;
    critical_damage: IHyperStat;
    critical_rate: IHyperStat;
    damage: { stat_type: "데미지"; stat_point: 265; stat_level: 12; stat_increase: "데미지 36% 증가" };
    ignore_monster_armor: IHyperStat;
    max_dex: IHyperStat;
    max_df_tf_pp: IHyperStat;
    max_hp: IHyperStat;
    max_int: IHyperStat;
    max_luk: IHyperStat;
    max_mp: IHyperStat;
    max_str: IHyperStat;
    normal_monster_damage: IHyperStat;
    status_resistance: IHyperStat;
  };
}

