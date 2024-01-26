import { IStatType } from "./../../@types/maple/StatsTypes";
import { useSetRecoilState } from "recoil";
import { getMyStatus } from "../../api/Character/Stats";
import { useCallback } from "react";
import { atomCharacterStats, atomStatIsFetching } from "../../atoms/maple/characterStatState";
import { getMyWeapons } from "../../api/Character/Weapons";
import { IWeaponTypes } from "../../@types/maple/WeaponTypes";
import { atomCharacterWeapon, atomWeaponIsFetching } from "../../atoms/maple/characterWeaponState";
import { convertObjToSnakeCaseObj } from "../commonUtils";

export const useCharacterData = () => {
  const setStats = useSetRecoilState<IStatType>(atomCharacterStats);
  const setWeapons = useSetRecoilState<IWeaponTypes>(atomCharacterWeapon);
  const setStatIsFetching = useSetRecoilState<boolean>(atomStatIsFetching);
  const setWeaponIsFetching = useSetRecoilState<boolean>(atomWeaponIsFetching);

  const getCharacterStats = useCallback(
    async (characterName: string) => {
      setStatIsFetching(true);

      try {
        const res = await getMyStatus(characterName);
        // const timestamp: string = res.data.data;
        const data: IStatType = convertObjToSnakeCaseObj(res.data.data);

        setStats(data);
        setStatIsFetching(false);
      } catch (e) {
        console.error("조회된 스탯이 없습니다.");
        setStatIsFetching(false);
      }
    },
    [setStats, setStatIsFetching]
  );

  const getCharacterWeapons = useCallback(
    async (characterName: string) => {
      setWeaponIsFetching(true);

      try {
        const res = await getMyWeapons(characterName);
        // const timestamp: string = res.data.data.timestamp;
        const data: IWeaponTypes = res.data.data;

        setWeapons(data);
        setWeaponIsFetching(false);
      } catch (e) {
        console.error("조회된 장비가 없습니다.");
        setWeaponIsFetching(false);
      }
    },
    [setWeapons, setWeaponIsFetching]
  );

  return {
    getCharacterStats,
    getCharacterWeapons,
  };
};

