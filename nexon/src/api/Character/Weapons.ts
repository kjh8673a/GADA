import axios from "axios";

export const getMyWeapons = (characterName: string) => {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_API}/character/getCharacterItem`,
    params: { characterName },
  });
};
