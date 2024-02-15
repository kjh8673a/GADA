import axios from "axios";

export const http = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

export const getCharacterComparisonData: any = async (characters: string) => {
  const [leftCharacterName, rightCharacterName] = characters.split("&");
  return await http({
    method: "get",
    url: "/character/getCharacterCompare",
    params: {
      leftCharacterName,
      rightCharacterName,
    },
  });
};

