import { atom } from "recoil";
import { CharacterExpType } from "../../@types/maple/CharacterExpTypes";

const DUMMY = {
  dates: [
    {
      date: "2023-12-24T00:00+09:00",
      character_level: 3,
      character_exp: 30,
      character_exp_rate: "10.000",
    },
    {
      date: "2023-12-23T00:00+09:00",
      character_level: 2,
      character_exp: 150,
      character_exp_rate: "75.000",
    },
    {
      date: "2023-12-22T00:00+09:00",
      character_level: 2,
      character_exp: 120,
      character_exp_rate: "60.000",
    },
    {
      date: "2023-12-21T00:00+09:00",
      character_level: 1,
      character_exp: 90,
      character_exp_rate: "90.000",
    },
  ]
};

export const atomCharacterExp = atom<CharacterExpType>({
  key: "atomCharacterExp",
  default: DUMMY,
});
