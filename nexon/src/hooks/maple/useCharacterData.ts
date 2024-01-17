import { IStatType } from "./../../@types/maple/StatsTypes";
import { useRecoilState } from "recoil";
import { getMyStatus } from "../../api/Character/Stats";
import { useCallback } from "react";
import { atomCharacterStats } from "../../atoms/maple/characterStatState";

export const useCharacterData = () => {
  const [_, setStats] = useRecoilState<IStatType>(atomCharacterStats);
  const getCharacterStats = useCallback(
    async (characterName: string) => {
      try {
        const res = await getMyStatus(characterName);
        // const timestamp: string = res.data.data;
        const data: IStatType = res.data.data;

        setStats(data);
      } catch (e) {
        console.error("조회된 장비가 없습니다.");
      }
    },
    [getMyStatus]
  );

  return {
    getCharacterStats,
  };
};

