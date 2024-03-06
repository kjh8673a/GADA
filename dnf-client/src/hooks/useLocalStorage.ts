import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { atomCharacterBookmark } from "../atoms/characterState";
import { NavigateFunction } from "react-router-dom";

const useLocalStorage = () => {
  const [bookmark, setBookmark] = useRecoilState(atomCharacterBookmark);

  useEffect(() => {
    window.localStorage.setItem("Bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const deleteBookmark = (server: string, character: string) =>
    setBookmark((prev) =>
      prev.filter((v) => v.server !== server && v.character !== character)
    );

  const addBookmark = (server: string, character: string) =>
    setBookmark((prev) => [...prev, { server, character }]);

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

  return {
    bookmark,
    setBookmark,
    clickBookmarkHandler,
    clickMyBookmarkHandler,
    addBookmark,
    deleteBookmark,
    isBookmark,
  };
};

export default useLocalStorage;
