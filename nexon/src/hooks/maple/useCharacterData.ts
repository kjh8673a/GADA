import { IStatType } from "./../../@types/maple/StatsTypes";
import { useRecoilState } from "recoil";
import { getMyStatus } from "../../api/Character/Stats";
import { useCallback } from "react";
import { atomCharacterStats } from "../../atoms/maple/characterStatState";
import { getMyWeapons } from "../../api/Character/Weapons";

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
        console.error("조회된 스탯이 없습니다.");
      }
    },
    [getMyStatus]
  );

  const getCharacterWeapons = useCallback(async (characterName: string) => {
    try {
      const res = await getMyWeapons(characterName);
      console.log(res);
    } catch (e) {
      console.error("조회된 장비가 없습니다.");
    }
  }, []);

  return {
    getCharacterStats,
    getCharacterWeapons,
  };
};
