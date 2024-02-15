import { atom } from "recoil";

export const atomFetchError = atom<Error | null>({
  key: "atomFetchError",
  default: null,
});

