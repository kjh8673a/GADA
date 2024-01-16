export type CharacterExpItemType = {
  ocid: string,
  date: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
}

export type CharacterExpType = {
  timestamp: string;
  data: CharacterExpItemType[];
};