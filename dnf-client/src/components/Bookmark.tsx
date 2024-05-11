import React from 'react';
import { BookmarkBox, BookmarkItemWrapper, PointerText } from '../style/dnfContainer';
import useLocalStorage from '../hooks/useLocalStorage';
import { useRecoilValue } from 'recoil';
import { atomCharacterBookmark } from '../atoms/localStorageState';
import { useNavigate } from 'react-router-dom';

const Bookmark = () => {
  const navigate = useNavigate();
  const bookmark = useRecoilValue(atomCharacterBookmark);
  const { deleteBookmark, clickMyBookmarkHandler } =
    useLocalStorage();
  return (
    <BookmarkBox>
        {bookmark.map((v, i) => {
          return (
            <BookmarkItemWrapper key={i}>
              <PointerText
                onClick={() =>
                  clickMyBookmarkHandler(navigate, v.server, v.character)
                }
                style={{ color: "orange" }}
              >
                {v.server}
              </PointerText>
              <PointerText
                onClick={() =>
                  clickMyBookmarkHandler(navigate, v.server, v.character)
                }
              >
                {v.character}
              </PointerText>
              <PointerText
                onClick={() => deleteBookmark(v.server, v.character)}
              >
                X
              </PointerText>
            </BookmarkItemWrapper>
          );
        })}
      </BookmarkBox>
  );
};

export default Bookmark;