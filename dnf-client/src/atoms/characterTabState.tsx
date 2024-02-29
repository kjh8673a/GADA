import { atom } from "recoil";
import { TabNameType } from "../@types/TabTypes";

export const atomTabName = atom<TabNameType>({
  key: "atomTabName",
  default: "CHARACTER",
});