import { atom } from "recoil";
import { TabNameType } from "../../@types/maple/TabTypes";

export const atomTabName = atom<TabNameType>({
  key: "atomTabName",
  default: "CHARACTER",
});

