export type UnionBlockCoordType = {
  x: number;
  y: number;
}

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
}

export type CharacterUnionType = {
  timestamp?: string[];
  data?: {
    union_level: number;
    union_grade: string;
    union_rader_stat: string[];
    total_union_rader_stat: string[];
    union_occupied_stat: string[];
    union_block: UnionBlockType[];
    union_inner_stat: UnionInnerStatType[];
  }
};