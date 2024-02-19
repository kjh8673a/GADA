export interface skillType {
    skill_description: string;
    skill_effect: string;
    skill_icon: string;
    skill_level: number;
    skill_name: string;
}

export interface hexaStat {
    slot_id?: number;
    main_stat_name?: string;
    sub_stat_name_1?: string;
    sub_stat_name_2?: string;
    main_stat_level?: number;
    sub_stat_level_1?: number;
    sub_stat_level_2?: number;
    stat_grade?: number;
}

export interface erda {
    used_sol_erda_energy: number;
    used_sol_erda_fragment: number;
}