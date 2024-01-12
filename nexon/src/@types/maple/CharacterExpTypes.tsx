export type CharacterExpItemType = {
  date: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
}

export type CharacterExpArrType = {
  dates: CharacterExpItemType[];
};