import { atom } from "recoil";
import { IStatType } from "../../@types/maple/StatsTypes";

export const atomCharacterStats = atom<IStatType>({
  key: "atomCharacterStats",
  default: {},
});

