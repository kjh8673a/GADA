import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useRecoilValue } from "recoil";
import { atomCharacterBookmark } from "../../../atoms/characterState";
import { useSearchParams } from "react-router-dom";

interface StyledProps {
  value: string;
}

const StyledBox = styled.div<StyledProps>`
  width: 25px;
  height: 25px;
  background-image: url(${process.env.PUBLIC_URL}/assets/${(props) =>
    props.value}star.png);
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
`;

const BookmarkBtn = () => {
  const [searchParams] = useSearchParams();
  const bookmark = useRecoilValue(atomCharacterBookmark);
  const [value, setValue] = useState<string>("");
  const { clickBookmarkHandler, isBookmark } = useLocalStorage();
  useEffect(() => {
    if (
      isBookmark(searchParams.get("server")!, searchParams.get("character")!)
    ) {
      setValue("");
    } else {
      setValue("empty_");
    }
  }, [bookmark]);
  return (
    <StyledBox
      value={value}
      onClick={() =>
        clickBookmarkHandler(
          searchParams.get("server")!,
          searchParams.get("character")!
        )
      }
    />
  );
};

export default BookmarkBtn;
