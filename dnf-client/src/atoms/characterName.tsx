import { atom } from "recoil";

export const atomCharacterName = atom<string>({
  key: "atomCharacterName",
  default: "",
});