import { atom } from "recoil";
import { IStatType } from "../../@types/maple/StatsTypes";

export const atomStatIsFetching = atom<boolean>({
  key: "atomStatIsFetching",
  default: false,
});

export const atomCharacterStats = atom<IStatType>({
  key: "atomCharacterStats",
  default: {},
});

