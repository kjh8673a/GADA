import { atom } from "recoil";
import { CharacterUnionArtifactType, CharacterUnionType } from "../../@types/maple/CharacterUnionTypes";

export const atomUnionGrid = atom<boolean[][]>({
  key: "atomUnionGrid",
  default: [],
});

export const atomCharacterUnion = atom<CharacterUnionType>({
  key: "atomCharacterUnion",
  default: {},
});

export const atomCharacterUnionArtifact = atom<CharacterUnionArtifactType>({
  key: "atomCharacterUnionArtifact",
  default: {},
});
