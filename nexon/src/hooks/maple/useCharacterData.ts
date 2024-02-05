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
      const res = await getMyStatus(characterName);
      // const timestamp: string = res.data.data;
      const data: IStatType = convertObjToSnakeCaseObj(res.data.data);

      setStats(data);
      return res;
    },
    [setStats]
  );

  const getCharacterWeapons = useCallback(
    async (characterName: string) => {
      const res = await getMyWeapons(characterName);
      // const timestamp: string = res.data.data.timestamp;
      const data: IWeaponTypes = res.data.data;

      setWeapons(data);
      return res;
    },
    [setWeapons]
  );

  return {
    getCharacterStats,
    getCharacterWeapons,
  };
};

