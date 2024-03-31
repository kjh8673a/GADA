import { atom } from "recoil";

type Dic = {
  [key: string]: number;
};
export const atomFlagState = atom<Dic>({
  key: "atomFlagState",
  default: { 버프력: 0, "공격력 증가": 0, "모험가 명성": 0 },
});
