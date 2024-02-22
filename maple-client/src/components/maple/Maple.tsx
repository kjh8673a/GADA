import React, { Suspense, useState } from "react";
import {
  BookmarkBox,
  BookmarkItemWrapper,
  CheckButton,
  MainImg,
  MapleConatiner,
  NameSearch,
} from "../../style/mapleContainer";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userNickName } from "../../atoms/maple/characterName";
import StyledInput from "../../style/StyledInput";
import useLocalStorage from "../../hooks/maple/useLocalStorage";
import FamousCharacters from "./famousCharacters/FamousCharacters";
import SkeletonFamousCharacter from "../skeleton/SkeletonFamousCharacters";

const Maple = () => {
  const [nickname, setNickname] = useState<string>("");
  const [, setUserName] = useRecoilState<string>(userNickName);
  const { bookmark, deleteBookmark } = useLocalStorage();
  const navigate = useNavigate();

  const SearchClickkName = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (nickname.length !== 0) {
      setUserName(nickname);
      navigate(`/Character/${nickname}`);
    }
  };

  const SearchEnterName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (nickname.length !== 0) {
        setUserName(nickname);
        navigate(`/Character/${nickname}`);
      }
    }
  };

  const searchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <MapleConatiner>
      <MainImg src="/assets/pinkbin.gif" alt="pinkbin" />
      <NameSearch>
        <StyledInput
          $width={400}
          type="text"
          placeholder="닉네임 입력"
          onChange={searchName}
          onKeyDown={SearchEnterName}
        />
        <CheckButton src="/assets/search_button.png" alt="search" onClick={SearchClickkName} />
      </NameSearch>
      <BookmarkBox>
        {bookmark.map((v, i) => (
          <BookmarkItemWrapper key={i}>
            <div style={{ cursor: "pointer" }} onClick={() => navigate(`/Character/${v}`)}>
              {v}
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => deleteBookmark(v)}>
              {"X"}
            </div>
          </BookmarkItemWrapper>
        ))}
      </BookmarkBox>
      <Suspense fallback={<SkeletonFamousCharacter />}>
        <FamousCharacters />
      </Suspense>
    </MapleConatiner>
  );
};

export default Maple;

