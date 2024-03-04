import React, { useCallback } from "react";
import { SERVER_LIST, TCharacterData } from "../@types/CharacterTypes";
import { getCharacterInfo } from "../api/Character/getCharacterInfo";

const useCharacter = () => {
  const fetchCharacterInfo = useCallback(
    (serverName: string, characterName: string, update?: boolean) => {
      let status = "pending";
      let data: TCharacterData;
      const suspender = getCharacterInfo(serverName, characterName, update)
        .then((response) => {
          data = response.data;
          setTimeout(() => (status = "fulfilled"), 1000);
        })
        .catch((e) => {
          data = e;
          status = "reject";
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

  const isValid = (server: any, character: any): boolean => {
    if (!SERVER_LIST.includes(server)) return false;
    if (character.length < 2) return false;
    if (character.length > 12) return false;
    return true;
  };

  return {
    fetchCharacterInfo,
    isValid,
  };
};

export default useCharacter;
