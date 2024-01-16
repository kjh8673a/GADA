import { atom } from "recoil";
import { CharacterExpType } from "../../@types/maple/CharacterExpTypes";

const DUMMY = {
  timestamp: "",
  data: [
    {
      ocid: "",
      date: "2023-12-24",
      character_level: 99,
      exp: 90,
      character_exp_rate: "99",
    },
    {
      ocid: "",
      date: "2023-12-23",
      character_level: 87,
      exp: 10,
      character_exp_rate: "10",
    },
    {
      ocid: "",
      date: "2023-12-23",
      character_level: 85,
      exp: 50,
      character_exp_rate: "50",
    },
    {
      ocid: "",
      date: "2023-12-23",
      character_level: 85,
      exp: 40,
      character_exp_rate: "40",
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
