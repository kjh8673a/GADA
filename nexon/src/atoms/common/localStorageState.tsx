import { atom } from "recoil";

export const atomCharacterBookmark = atom<string[]>({
  key: "atomCharacterBookmark",
  default: JSON.parse(window.localStorage.getItem("Bookmark")!) || [],
});
