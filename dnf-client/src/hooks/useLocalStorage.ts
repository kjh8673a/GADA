import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { NavigateFunction } from "react-router-dom";
import {
  atomCharacterBookmark,
  atomRecentSearch,
} from "../atoms/localStorageState";

const useLocalStorage = () => {
  // 북마크 ----------------------------------------
  const [bookmark, setBookmark] = useRecoilState(atomCharacterBookmark);

  useEffect(() => {
    window.localStorage.setItem("Bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const addBookmark = (server: string, character: string) =>
    setBookmark((prev) => [...prev, { server, character }]);

  const deleteBookmark = (server: string, character: string) =>
    setBookmark((prev) =>
      prev.filter((v) => v.server !== server || v.character !== character)
    );

  const isBookmark = (server: string, character: string) =>
    bookmark.filter((v) => v.server === server && v.character === character)
      .length > 0;

  const clickBookmarkHandler = (server: string, character: string) => {
    if (isBookmark(server, character)) {
      deleteBookmark(server, character);
    } else {
      addBookmark(server, character);
    }
  };

  const clickMyBookmarkHandler = (
    navigate: NavigateFunction,
    server: string,
    character: string
  ) => {
    navigate(`/character?server=${server}&character=${character}`);
  };
  // --------------------------------------------------

  // 최근 검색어 ----------------------------------------
  const [recentSearch, setRecentSearch] = useRecoilState(atomRecentSearch);

  useEffect(() => {
    window.localStorage.setItem("RecentSearch", JSON.stringify(recentSearch));
  }, [recentSearch]);

  const addRecentSearch = (input: string) => {
    if (recentSearch.includes(input)) {
      setRecentSearch((prev: string[]) => {
        return [input, ...prev.filter((v) => input !== v)];
      });
    } else {
      setRecentSearch((prev: string[]) => {
        if (prev.length > 4) {
          return [input, ...prev.slice(0, 4)];
        } else {
          return [input, ...prev];
        }
      });
    }
  };

  const clickRecentSearch = (navigate: NavigateFunction, input: string) => {
    navigate(`/search?input=${input}`);
  };
  // -----------------------------------------------------

  return {
    bookmark,
    setBookmark,
    clickBookmarkHandler,
    clickMyBookmarkHandler,
    addBookmark,
    deleteBookmark,
    isBookmark,
    recentSearch,
    setRecentSearch,
    addRecentSearch,
    clickRecentSearch,
  };
};

export default useLocalStorage;
