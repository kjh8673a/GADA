import { atom } from "recoil";
import { CharacterExpType } from "../../@types/maple/CharacterExpTypes";

const DUMMY = {
  timestamp: "",
  data: [
    {
      ocid: "",
      date: "2099-12-23",
      character_level: 0,
      exp: 0,
      character_exp_rate: "0",
    },
    {
      ocid: "",
      date: "2099-12-23",
      character_level: 0,
      exp: 0,
      character_exp_rate: "0",
    },
    {
      ocid: "",
      date: "2099-12-23",
      character_level: 0,
      exp: 0,
      character_exp_rate: "0",
    },
    {
      ocid: "",
      date: "2099-12-23",
      character_level: 0,
      exp: 0,
      character_exp_rate: "0",
    },
    {
      ocid: "",
      date: "2099-12-23",
      character_level: 0,
      exp: 0,
      character_exp_rate: "0",
    },
    {
      ocid: "",
      date: "2099-12-23",
      character_level: 0,
      exp: 0,
      character_exp_rate: "0",
    },
    {
      ocid: "",
      date: "2099-12-23",
      character_level: 0,
      exp: 0,
      character_exp_rate: "0",
    },
  ]
};

export const atomCharacterExp = atom<CharacterExpType>({
  key: "atomCharacterExp",
  default: DUMMY,
});
