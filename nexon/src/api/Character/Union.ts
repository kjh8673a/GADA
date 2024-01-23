import axios from "axios";

export const http = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

export const getCharacterUnion = async (characterName: string) => {
  return await http({
    method: "get",
    url: "/character/getCharacterUnion",
    params: { characterName },
  });
};