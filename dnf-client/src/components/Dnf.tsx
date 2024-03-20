import React, { useState } from "react";
import {
  CheckButton,
  MainImg,
  NameSearch,
  DnfContainer,
  BookmarkBox,
  BookmarkItemWrapper,
  PointerText,
} from "../style/dnfContainer";
import { useNavigate } from "react-router-dom";
import StyledInput from "../style/StyledInput";
import useSearch from "../hooks/useSearch";
import { useRecoilValue } from "recoil";
import { atomCharacterBookmark } from "../atoms/characterState";
import useLocalStorage from "../hooks/useLocalStorage";

const Dnf = () => {
  const [nickname, setNickname] = useState<string>("");
  const bookmark = useRecoilValue(atomCharacterBookmark);
  const navigate = useNavigate();
  const { searchClickName, searchEnterName, changeHandler } = useSearch();
  const { deleteBookmark, clickMyBookmarkHandler } = useLocalStorage();

  return (
    <DnfContainer>
      <MainImg src="/assets/danzin.png" alt="Danzin" />
      <NameSearch>
        <StyledInput
          $width={400}
          type="text"
          placeholder="닉네임(2 ~ 12자) 입력"
          onChange={(e) => changeHandler(setNickname, e)}
          onKeyDown={(e) => searchEnterName(navigate, e, nickname)}
        />
        <CheckButton
          src="/assets/search_button.png"
          alt="search"
          onClick={() => searchClickName(navigate, nickname)}
        />
      </NameSearch>
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
    </DnfContainer>
  );
};

export default Dnf;
