import { atom } from "recoil";
import { TBookmark, TRecentSearch } from "../@types/SearchTypes";

export const atomCharacterBookmark = atom<TBookmark[]>({
  key: "atomCharacterBookmark",
  default: JSON.parse(window.localStorage.getItem("Bookmark")!) || [],
});

export const atomRecentSearch = atom<TRecentSearch>({
  key: "atomRecentSearch",
  default: JSON.parse(window.localStorage.getItem("RecentSearch")!) || [],
})