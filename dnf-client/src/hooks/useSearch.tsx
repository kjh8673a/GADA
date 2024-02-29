import { useCallback } from "react";
import { getSearchCharacters } from "../api/Character/getSearchCharacters";
import { TSearchCharacters } from "../@types/SearchTypes";

const useSearch = () => {
  const fetchSearchCharacters = useCallback((characterName: string) => {
    let status = "pending";
    let data: TSearchCharacters;
    const suspender = getSearchCharacters(characterName)
      .then((response) => {
        data = response.data;
        status = "fulfilled";
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
  }, []);

  return {
    fetchSearchCharacters,
  };
};

export default useSearch;
