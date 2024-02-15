import { useRecoilState } from "recoil";
import { atomCharacterBookmark } from "../../atoms/common/localStorageState";
import { useEffect } from "react";

const useLocalStorage = () => {
  const [bookmark, setBookmark] = useRecoilState(atomCharacterBookmark);

  useEffect(() => {
    window.localStorage.setItem("Bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const deleteBookmark = (characterName: string) =>
    setBookmark((prev) => prev.filter((v) => v !== characterName));

  const addBookmark = (characterName: string) =>
    setBookmark((prev) => [...prev, characterName]);

  const clickBookmarkHandler = (characterName: string) => {
    if (bookmark.includes(characterName)) {
      deleteBookmark(characterName);
    } else {
      addBookmark(characterName);
    }
  };

  return {
    bookmark,
    setBookmark,
    clickBookmarkHandler,
    deleteBookmark,
    addBookmark,
  };
};

export default useLocalStorage;
