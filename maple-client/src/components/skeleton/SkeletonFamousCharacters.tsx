import styled, { keyframes } from "styled-components";

// shimmer 애니메이션 키프레임 정의
const ShimmerAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const StyledBox = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  width: 352px;
  box-shadow: var(--custom-shadow);
  background-color: var(--secondary-bg-color);
  list-style: none;
  font-size: 0.8rem;
  border-radius: 4px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    animation: ${ShimmerAnimation} 1s infinite;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6) 60%, transparent);
  }
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
      <StyledHeader>
        <StyledVoid />
      </StyledHeader>
      <StyledLi>
        <StyledRank />
        <StyledVoid />
      </StyledLi>
      <StyledLi>
        <StyledRank />
        <StyledVoid />
      </StyledLi>
      <StyledLi>
        <StyledRank />
        <StyledVoid />
      </StyledLi>
      <StyledLi>
        <StyledRank />
        <StyledVoid />
      </StyledLi>
      <StyledLi>
        <StyledRank />
        <StyledVoid />
      </StyledLi>
    </StyledBox>
  );
};

export default SkeletonFamousCharacter;

