import axios from "axios";

export const http = axios.create({
  baseURL: `http://${process.env.REACT_APP_API}`,
});

export const getExpHistory = async (characterName: string) => {
  return await http({
    method: "get",
    url: "/character/getExpHistory",
    params: {
      characterName: characterName,
    },
  });
};
