import { atom } from "recoil";

export const isUpdated = atom<boolean>({
  key: "atomCharacterUpdateBoolean",
  default: false,
});