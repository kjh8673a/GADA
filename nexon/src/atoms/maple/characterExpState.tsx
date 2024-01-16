import { atom } from "recoil";
import { CharacterExpType } from "../../@types/maple/CharacterExpTypes";

const DUMMY = {
  timestamp: "",
  data: [
    {
      ocid: "",
      date: "2023-12-24",
      character_level: 99,
      character_exp: 30,
      character_exp_rate: "99",
    },
    {
      ocid: "",
      date: "2023-12-23",
      character_level: 85,
      character_exp: 20,
      character_exp_rate: "0",
    },
  ]
};

export const atomCharacterExp = atom<CharacterExpType>({
  key: "atomCharacterExp",
  default: DUMMY,
});
