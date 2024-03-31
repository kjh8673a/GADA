import React, { useCallback } from "react";
import { TCharacterData, TPopularCharacters } from "../@types/Character/CommonTypes";
import {
  getCharacterInfo,
  getPopularCharacters,
} from "../api/Character/getCharacterInfo";
import { useSetRecoilState } from "recoil";
import {
  atomCharacterAvatar,
  atomCharacterBasic,
  atomCharacterBuffEquip,
  atomCharacterCreature,
  atomCharacterEquip,
  atomCharacterEquipTrait,
  atomCharacterFlag,
  atomCharacterSetItem,
  atomCharacterStat,
  atomCharacterTalismans,
  atomLoading,
} from "../atoms/characterState";
import { SERVER_LIST } from "../@types/Character/CommonTypes";

const useCharacter = () => {
  const setBasic = useSetRecoilState(atomCharacterBasic);
  const setStat = useSetRecoilState(atomCharacterStat);
  const setEquip = useSetRecoilState(atomCharacterEquip);
  const setEquipTrait = useSetRecoilState(atomCharacterEquipTrait);
  const setItem = useSetRecoilState(atomCharacterSetItem);
  const setIsLoading = useSetRecoilState(atomLoading);
  const setBuff = useSetRecoilState(atomCharacterBuffEquip);
  const setTalismans = useSetRecoilState(atomCharacterTalismans);
  const setAvatar = useSetRecoilState(atomCharacterAvatar);
  const setCreature = useSetRecoilState(atomCharacterCreature);
  const setFlag = useSetRecoilState(atomCharacterFlag);

  const fetchCharacterInfo = useCallback(
    (serverName: string, characterName: string, update?: boolean) => {
      let status = "pending";
      let data: TCharacterData;
      const suspender = getCharacterInfo(serverName, characterName, update)
        .then((response) => {
          data = response.data;
          setCharacter(data);
          setIsLoading(false);
          setTimeout(() => (status = "fulfilled"), 500);
        })
        .catch((e) => {
          if (e.response.status === 404) {
            data = {};
            status = "fulfilled";
          } else {
            data = e;
            status = "reject";
          }
        });
      return {
        read() {
          if (status === "pending") throw suspender;
          else if (status === "reject") throw data;
          else if (status === "fulfilled") return data;
        },
      };
    },
    []
  );

  const setCharacter = (data: TCharacterData) => {
    setBasic(data.data?.basic!);
    setStat(data.data?.stat!);
    setEquip(data.data?.equipment.equipment!);
    setEquipTrait(data.data?.equipment.equipmentTrait!);
    setItem(data.data?.equipment.setItemInfo!);
    setBuff(data.data?.buff!);
    setTalismans(data.data?.talisman!);
    setAvatar(data.data?.avatar!);
    setCreature(data.data?.creature!);
    setFlag(data.data?.flag!);
  };

  const isValid = (server: any, character: any): boolean => {
    if (!SERVER_LIST.includes(server)) return false;
    if (character.length < 2) return false;
    if (character.length > 12) return false;
    return true;
  };

  const getTimeDiffer = (dateString: string) => {
    const currentDate = new Date();
    const inputDate = new Date(dateString);
    const betweenTime = Math.floor(
      (currentDate.getTime() - inputDate.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) {
      return "방금전";
    }
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };

  const updateClickHandler = (
    activate: boolean,
    server: string,
    character: string
  ) => {
    if (activate) {
      setIsLoading(true);
      fetchCharacterInfo(server, character, true);
    }
  };

  const fetchPopularCharacters = useCallback(() => {
    let status = "pending";
    let data: TPopularCharacters;
    const suspender = getPopularCharacters()
      .then((res) => {
        data = res.data;
        status = "fullfilled";
      })
      .catch((e) => {
        data = e;
        status = "reject";
      });
    return {
      read() {
        if (status === "pending") throw suspender;
        else if (status === "reject") throw data;
        else if (status === "fullfilled") return data;
      },
    };
  }, []);

  return {
    fetchCharacterInfo,
    isValid,
    setCharacter,
    getTimeDiffer,
    updateClickHandler,
    fetchPopularCharacters,
  };
};

export default useCharacter;
