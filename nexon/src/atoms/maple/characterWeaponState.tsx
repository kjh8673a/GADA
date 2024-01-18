import { atom } from "recoil";
import { IWeaponTypes } from "../../@types/maple/WeaponTypes";

export const atomCharacterWeapon = atom<IWeaponTypes>({
  key: "atomCharacterWeapon",
  default: {},
});

