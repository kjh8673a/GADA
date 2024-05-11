export type CharacterExpItemType = {
  ocid: string,
  date: string;
  character_level: number;
  exp: number;
  character_exp_rate: string;
}

export type CharacterExpType = {
  timestamp?: string;
  data: CharacterExpItemType[];
};

export type GraphHoverItemPropsType = {
  x: number;
  y: number;
  exp: number;
  character_level: number;
  date: string;
}