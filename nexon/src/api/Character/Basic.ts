import axios from "axios";

export const http = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

export const getCharacterBasicInfo = async (characterName: string) => {
  return await http({
    method: "get",
    url: "/character/getCharacterBasicInfo",
    params: { characterName: characterName },
  });
};

export const getExpHistory = async (characterName: string) => {
  return await http({
    method: "get",
    url: "/character/getExpHistory",
    params: { characterName: characterName },
  });
};
