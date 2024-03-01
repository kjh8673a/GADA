import { useCallback } from "react";
import { getSearchCharacters } from "../api/Character/getSearchCharacters";
import { TSearchCharacters } from "../@types/SearchTypes";
import { NavigateFunction } from "react-router-dom";

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

  const searchClickName = (navigate: NavigateFunction, e: React.MouseEvent<HTMLImageElement, MouseEvent>, nickname: string) => {
    navigate(`/search?input=${nickname}`);
  };

  const searchEnterName = (navigate: NavigateFunction, e: React.KeyboardEvent<HTMLInputElement>, nickname: string) => {
    if (e.key === "Enter") {
        navigate(`/search?input=${nickname}`);
    }
  };

  const changeHandler = (set: React.Dispatch<React.SetStateAction<string>>,e: React.ChangeEvent<HTMLInputElement>) => {
    set(e.target.value);
  };

  const isValidInput = (value: string | null): boolean => {
    if (value === null) return false;
    if (1 < value.length && value.length < 13) return true;
    else return false;
  }

  const characterClickHandler = (navigate: NavigateFunction, characterName: string, serverName: string) => {
    navigate(`/character?server=${serverName}&character=${characterName}`);
  }

  return {
    fetchSearchCharacters,
    searchClickName,
    searchEnterName,
    changeHandler,
    isValidInput,
    characterClickHandler,
  };
};

export default useSearch;
