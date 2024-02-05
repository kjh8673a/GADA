import { skillType } from "./CharacterSkillType";

export interface GuildType {
    guild_fame: number;
    guild_level: number;
    guild_mark: string;
    guild_mark_custom: string;
    guild_master_name: string;
    guild_member: string[];
    guild_member_count: number;
    guild_name: string;
    guild_noblesse_skill: skillType[];
    guild_point: number;
    guild_skill: skillType[];
    world_name: string;
}

export interface GuildMemberType {
    character_class: string;
    character_exp: number;
    character_exp_rate: string;
    character_gender: string;
    character_guild_name: string;
    character_image: string;
    character_level: number;
    character_name: string;
    combat_power: string;
    ocid: string;
    oguild_id: string;
    popularity: number;
    prev_name: null | string;
    world_name: string;
}

