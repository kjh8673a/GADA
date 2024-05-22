import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  box-sizing: border-box;
  width: 350px;
  padding: 10px;
  gap: 5px;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;

  @media(max-width: 400px) {
    width: 300px;
  }
`;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  font-weight: bold;
`;

const PopularCharacter = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Rank = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgb(80, 80, 80, 0.8);
  width: 25px;
  height: 25px;
`;

const SkeletonBox = styled.div`
  border-radius: 5px;
  background-color: rgb(80, 80, 80, 0.8);
  width: 290px;
  height: 20px;
`;

const PopularCharactersSkeleton = () => {
  return (
    <StyledBox>
      <Header>주간 인기 검색 캐릭터</Header>
      <PopularCharacter>
        <Rank />
        <SkeletonBox />
      </PopularCharacter>
      <PopularCharacter>
        <Rank />
        <SkeletonBox />
      </PopularCharacter>
      <PopularCharacter>
        <Rank />
        <SkeletonBox />
      </PopularCharacter>
      <PopularCharacter>
        <Rank />
        <SkeletonBox />
      </PopularCharacter>
      <PopularCharacter>
        <Rank />
        <SkeletonBox />
      </PopularCharacter>
    </StyledBox>
  );
};

export default PopularCharactersSkeleton;
