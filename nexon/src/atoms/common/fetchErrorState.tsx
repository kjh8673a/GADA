import { atom } from "recoil";

export const atomFetchError = atom<boolean>({
  key: "atomFetchError",
  default: false,
});
