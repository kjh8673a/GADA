export const UNION_GRID_OUTER = [
  { left: "28%", top: "10%", title: "상태이상내성" },
  { left: "60%", top: "10%", title: "획득경험치" },
  { left: "2%", top: "30%", title: "크리티컬 데미지" },
  { left: "82%", top: "30%", title: "크리티컬 확률" },
  { left: "5%", top: "65%", title: "방어율 무시" },
  { left: "84%", top: "65%", title: "보스데미지" },
  { left: "28%", top: "85%", title: "버프지속시간" },
  { left: "60%", top: "85%", title: "일반데미지" },
];

export const UNION_GRID_INNER = [
  { left: "40%", top: "30%" },
  { left: "55%", top: "30%" },
  { left: "68%", top: "40%" },
  { left: "68%", top: "56%" },
  { left: "40%", top: "65%" },
  { left: "55%", top: "65%" },
  { left: "27%", top: "56%" },
  { left: "27%", top: "40%" },
];

export type UnionBlockCoordType = {
  x: number;
  y: number;
};

export type UnionBlockType = {
  block_type: string;
  block_class: string;
  block_level: string;
  block_control_point: UnionBlockCoordType;
  block_position: UnionBlockCoordType[] | null;
};

export type UnionInnerStatType = {
  stat_field_id: string;
  stat_field_effect: string;
};

export type CharacterUnionType = {
  timestamp?: string[];
  data?: {
    union_level: number;
    union_grade: string;
    union_rader_stat: string[];
    total_union_raider_stat: string[];
    union_occupied_stat: string[];
    union_block: UnionBlockType[];
    union_inner_stat: UnionInnerStatType[];
  };
};
