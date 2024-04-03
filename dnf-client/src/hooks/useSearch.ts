import { NavigateFunction } from "react-router-dom";

const useSearch = () => {

  const searchClickName = (navigate: NavigateFunction, nickname: string) => {
    navigate(`/character/search?input=${nickname}`);
  };

  const searchEnterName = (
    navigate: NavigateFunction,
    e: React.KeyboardEvent<HTMLInputElement>,
    nickname: string
  ) => {
    if (e.key === "Enter") {
      navigate(`/character/search?input=${nickname}`);
    }
  };

  const changeHandler = (
    set: React.Dispatch<React.SetStateAction<string>>,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    set(e.target.value);
  };

  const isValidInput = (value: string | null): boolean => {
    if (value === null) return false;
    if (0 < value.length && value.length < 13) return true;
    else return false;
  };

  const characterClickHandler = (
    navigate: NavigateFunction,
    characterName: string,
    serverName: string
  ) => {
    navigate(`/character?server=${serverName}&character=${characterName}`);
  };

  return {
    searchClickName,
    searchEnterName,
    changeHandler,
    isValidInput,
    characterClickHandler,
  };
};

export default useSearch;
