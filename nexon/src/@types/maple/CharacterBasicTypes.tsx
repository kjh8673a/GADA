export type CharacterBasicType = {
  timestamp?: string;
  data?: {
    ocid: string;
    character_name: string;
    world_name: string;
    character_gender: string;
    character_class: string;
    character_level: number;
    character_exp: number;
    character_exp_rate: string;
    prev_name: null | string;
    oguild_id: string;
    character_guild_name: string;
    character_image: string;
    popularity: number;
    combat_power: string;
  };
};

export const BASIC_LEFT = ["LEVEL", "POPULARITY", "COMBAT POWER"];

export const BASIC_RIGHT = ["CLASS", "WORLD", "GUILD"];

export type BasicPropsType = {
  id: number[];
  titles: (string | number | undefined)[];
  values: (string | number | undefined)[];
};
