import axios from "axios";

export const getMyStatus = (characterName: string) => {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API}/character/getCharacterStats`,
    params: { characterName },
  });
};

