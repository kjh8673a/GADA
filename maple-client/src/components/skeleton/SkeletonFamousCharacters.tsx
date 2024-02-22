import styled, { keyframes } from "styled-components";

// shimmer 애니메이션 키프레임 정의
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ShimmerAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 6s infinite;
`;

const StyledBox = styled.ul`
  margin: 0;
  padding: 0;
  width: 352px;
  box-shadow: var(--custom-shadow);
  background-color: var(--secondary-bg-color);
  list-style: none;
  font-size: 0.8rem;
  border-radius: 4px;
`;

const StyledHeader = styled.li`
  width: 100%;
  border-bottom: 1px solid var(--third-bg-color);
  padding: 6px 8px;
  box-sizing: border-box;
  font-weight: 600;
`;

const StyledLi = styled.li`
  width: 100%;
  padding: 4px 8px;
  height: 30px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: var(--third-bg-color);
  }
`;

const StyledRank = styled.div`
  position: relative;
  width: 17px;
  height: 16px;
  margin-right: 8px;
  background-color: var(--primary-bg-color);
`;

const StyledVoid = styled.div`
  position: relative;
  width: 50%;
  height: 16px;
  background-color: var(--primary-bg-color);
`;

const SkeletonFamousCharacter = () => {
  return (
    <StyledBox>
      <StyledHeader>주간 인기 검색 캐릭터</StyledHeader>
      <StyledLi>
        <StyledRank>
          <ShimmerAnimation />
        </StyledRank>
        <StyledVoid>
          <ShimmerAnimation />
        </StyledVoid>
      </StyledLi>
      <StyledLi>
        <StyledRank>
          <ShimmerAnimation />
        </StyledRank>
        <StyledVoid>
          <ShimmerAnimation />
        </StyledVoid>
      </StyledLi>
      <StyledLi>
        <StyledRank>
          <ShimmerAnimation />
        </StyledRank>
        <StyledVoid>
          <ShimmerAnimation />
        </StyledVoid>
      </StyledLi>
      <StyledLi>
        <StyledRank>
          <ShimmerAnimation />
        </StyledRank>
        <StyledVoid>
          <ShimmerAnimation />
        </StyledVoid>
      </StyledLi>
      <StyledLi>
        <StyledRank>
          <ShimmerAnimation />
        </StyledRank>
        <StyledVoid>
          <ShimmerAnimation />
        </StyledVoid>
      </StyledLi>
    </StyledBox>
  );
};

export default SkeletonFamousCharacter;

