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
    guild_noblesses_skill: skillType[];
    guild_point: number;
    guild_skill: skillType[];
    world_name: string;
}

