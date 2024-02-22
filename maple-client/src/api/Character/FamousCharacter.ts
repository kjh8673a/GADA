import axios from "axios";

export const getFamousCharacter = () => {
  return axios.get(`${process.env.REACT_APP_API}/character/getPopularCharacters`);
};

