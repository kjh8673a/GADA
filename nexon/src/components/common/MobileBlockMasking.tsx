import styled, { keyframes } from "styled-components";

const StyledBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledImg = styled.img`
  width: 120px;
`;

const ellipsisAnimation = keyframes`
  0% {
    content: '';
  }
  25% {
    content: '.';
  }
  50% {
    content: '..';
  }
  77% {
    content: '...';
  }
  100% {
    content: '....';
  }
`;

const StyledPara = styled.p`
  position: relative;
  left: 24px;
  animation: ${ellipsisAnimation} 1.5s infinite;
  color: #555;
  font-weight: 800;

  &:after {
    content: "";
    display: inline-block;
    width: 30px;
    animation: ${ellipsisAnimation} 1.5s infinite;
  }
`;

const MobileBlockMasking = () => {
  return (
    <StyledBox>
      <StyledImg src={`${process.env.PUBLIC_URL}/assets/pinkbin.gif`} alt="pinkbin" />
      <StyledPara>모바일 페이지는 공사 중입니다</StyledPara>
    </StyledBox>
  );
};

export default MobileBlockMasking;

