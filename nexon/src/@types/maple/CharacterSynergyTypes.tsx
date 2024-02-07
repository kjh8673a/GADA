export const SKILL_TYPE = [
  "전체",
  "잡몹 처리",
  "바인드",
  "어그로",
  "딜상승",
  "생존",
  "힐",
  "상태 이상 해제",
  "슬로우",
  "경직",
  "드롭률",
  "텔레포트",
  "쿨타임 초기화",
  "버프 해제",
  "공격 속도",
];

export type SkillType = {
  skill_name: string;
  skill_description: string;
  skill_effect: string;
  skill_icon: string;
};

export type MainCharacterType = {
  character_name: string;
  world_name: string;
  character_class: string;
  character_level: number;
  character_image: string;
  combat_power: string;
  increased_combat_power: number;
  cycle: number;
  skill_type: typeof SKILL_TYPE;
  skill_desc: SkillType[];
};

export type SelectedCharactersType = {
  character_class: string;
  cycle: number;
  skill_type: typeof SKILL_TYPE;
  skill_desc: SkillType[];
}

export type OptionCharactersType = {
  character_class: string;
  increase_combat_power: number;
  cycle: number;
  skill_type: typeof SKILL_TYPE;
};

export type CharacterSynergyType = {
  timestamp?: string;
  data?: {
    main_character: MainCharacterType;
    selected_characters: SelectedCharactersType[];
    option_characters: OptionCharactersType[];
  };
};