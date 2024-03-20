export type TSearchCharacter = {
  serverName: string;
  characterName: string;
  level: number;
  jobName: string;
  jobGrowName: string;
  fame: number;
  characterImage: string;
};

export type TSearchCharacters = {
  timestamp?: string;
  data?: TSearchCharacter[];
};
