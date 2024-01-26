import { atom } from "recoil";
import {
  CombatPowerRankingType,
  GuildWaterwayType,
  RankTabType,
} from "../../@types/maple/RankingTypes";

export const atomCombatPowerRanking = atom<CombatPowerRankingType>({
  key: "atomCombatPowerRanking",
  default: {},
});

export const atomGuildWaterway = atom<GuildWaterwayType>({
  key: "atomGuildWaterway",
  default: {},
});

export const atomRankTab = atom<RankTabType>({
  key: "atomRankTab",
  default: "개인 전투력 랭킹",
});

export const atomWorldTab = atom<string | undefined>({
  key: "atomWorldTab",
  default: undefined,
});

export const atomClassTab = atom<string | undefined>({
  key: "atomClassTab",
  default: undefined,
});

export const atomRankPage = atom<number>({
  key: "atomRankPage",
  default: 1,
});

export const atomTotalPage = atom<number>({
  key: "atomTotalPage",
  default: 9999,
});