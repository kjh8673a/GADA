import React from "react";
import styled from "styled-components";
import UpdateBtn from "./UpdateBtn";
import BookmarkBtn from "./BookmarkBtn";

interface Props {
  characterName: string;
}

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
`;

const Name = styled.div`
  font-size: 1.3rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ContentTopItem: React.FC<Props> = ({ characterName }) => {
  return (
    <StyledBox>
      <Name>{characterName}</Name>
      <Wrapper>
        <BookmarkBtn />
        <UpdateBtn />
      </Wrapper>
    </StyledBox>
  );
};

export default ContentTopItem;
