import { IStatType } from "./../../@types/maple/StatsTypes";
import { useSetRecoilState } from "recoil";
import { getMyStatus } from "../../api/Character/Stats";
import { useCallback } from "react";
import { atomCharacterStats } from "../../atoms/maple/characterStatState";
import { getMyWeapons } from "../../api/Character/Weapons";
import { IWeaponTypes } from "../../@types/maple/WeaponTypes";
import { atomCharacterWeapon } from "../../atoms/maple/characterWeaponState";
import { convertObjToSnakeCaseObj } from "../commonUtils";

export const useCharacterData = () => {
  const setStats = useSetRecoilState<IStatType>(atomCharacterStats);
  const setWeapons = useSetRecoilState<IWeaponTypes>(atomCharacterWeapon);

  const getCharacterStats = useCallback(
    async (characterName: string) => {
      try {
        const res = await getMyStatus(characterName);
        // const timestamp: string = res.data.data;
        const data: IStatType = convertObjToSnakeCaseObj(res.data.data);

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
      // const timestamp: string = res.data.data.timestamp;
      const data: IWeaponTypes = res.data.data;

      setWeapons(data);
    } catch (e) {
      console.error("조회된 장비가 없습니다.");
    }
  }, []);

  return {
    getCharacterStats,
    getCharacterWeapons,
  };
};

