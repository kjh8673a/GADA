import { ICharacterBasic } from "./CharacterBasicTypes";
import { IStatType } from "./StatsTypes";
import { IWeaponTypes } from "./WeaponTypes";

export interface ICharacterData {
  character_basic_info: ICharacterBasic;
  character_item: IWeaponTypes;
  character_stats: IStatType;
}

export interface ICharacterComparisonData {
  timestamp: string;
  data: {
    left_character: ICharacterData;
    right_character: ICharacterData;
  };
}

