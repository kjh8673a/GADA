import { ICharacterBasic } from "./CharacterBasicTypes";
import { CharacterExpItemType } from "./CharacterExpTypes";
import { hexaStat, skillType } from "./CharacterSkillType";
import { CharacterSynergyType } from "./CharacterSynergyTypes";
import {
  CharacterUnionArtifactType,
  CharacterUnionType,
} from "./CharacterUnionTypes";
import { IStatType } from "./StatsTypes";
import { IWeaponTypes } from "./WeaponTypes";

export type TUpdateCharacter = {
  timestamp: string;
  data: {
    basicInfo: ICharacterBasic;
    expHistory: CharacterExpItemType[];

    // tab 1
    item?: IWeaponTypes;
    stats?: IStatType;

    // tab 2
    unionInfo?: CharacterUnionType["data"];
    unionArtifact?: CharacterUnionArtifactType["data"];

    // tab 3
    hyperPassive?: {
      character_class: string;
      character_skill: skillType[];
    };
    linkSkill?: {
      character_class: string;
      character_link_skill: skillType[];
    };
    hexaMatrix?: {
      character_hexa_core_equipment: {
        hexa_core_name: string;
        hexa_core_level: number;
        hexa_core_type: string;
        linked_skill: { hexa_skill_id: string }[];
      }[];
      character_skill_desc: skillType[];
      used_sol_erda_energy: number;
      used_sol_erda_fragment: number;
      character_hexa_stat_core: hexaStat;
    };
    vmatrix?: {
      character_v_core_equipment: {
        slot_id: string;
        slot_level: number;
        v_core_type: string;
        v_core_level: number;
        v_core_skill_1: string;
        v_core_skill_2: string;
        v_core_skill_3: string;
      }[];
      character_skill_desc: skillType[];
    };

    // tab 4
    findMainCharacter?: {
      ocid: string;
      date: string;
      world_name: string;
      combat_power: number;
      guild_name: string;
      parent_ocid: string;
      perv_name: string;
      oguild_id: string;
      character_class: string;
      character_class_level: number;
      character_level: number;
      character_image: string;
      character_name: string;
    }[];

    // tab 5
    synergy?: CharacterSynergyType["data"];
  };

};
