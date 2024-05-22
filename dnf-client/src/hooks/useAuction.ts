import { NavigateFunction } from "react-router-dom";

const useAuction = () => {

  const searchKeyDownHandler = (
    navigate: NavigateFunction,
    e: React.KeyboardEvent<HTMLInputElement>,
    input: string
  ) => {
    if (e.key === "Enter") {
      navigate(`/auction/search?input=${input}`);
    }
  };

  const searchClickHandler = (navigate: NavigateFunction, input: string) => {
    navigate(`/auction/search?input=${input}`);
  };

  const isValidInput = (value: string | null): boolean => {
    if (value === null) return false;
    if (1 < value.length) return true;
    return false;
  }

  const changeHandler = (set: React.Dispatch<React.SetStateAction<string>>, e: React.ChangeEvent<HTMLInputElement>) => {
    set(e.target.value);
  }

  return {
    searchKeyDownHandler,
    searchClickHandler,
    isValidInput,
    changeHandler,
  };
};

export default useAuction;
