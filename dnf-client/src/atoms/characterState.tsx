import { atom } from "recoil";
import { TCharacterData } from "../@types/CharacterTypes";

export const atomCharacterState = atom<TCharacterData>({
  key: "atomCharacterState",
  default: {},
});