import styled, { keyframes } from "styled-components";

const StyledBox = styled.div`
  width: 100%;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 8px;
`;

const ellipsisAnimation = keyframes`
  0% {
    content: '.';
  }
  25% {
    content: '..';
  }
  50% {
    content: '...';
  }
  75% {
    content: '..';
  }
  100% {
    content: '.';
  }
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ccc
  display: inline-block;
  padding: 8px 0;
  white-space: nowrap;
  overflow: hidden;
  animation: ${ellipsisAnimation} 1.5s infinite;

  &:after {
    content: "";
    animation: ${ellipsisAnimation} 1.5s infinite;
  }
`;

interface Props {
  text: string;
}

const Loading: React.FC<Props> = ({ text }) => {
  return (
    <StyledBox>
      <StyledImg src="/assets/orange_mushroom.gif" alt="mushroom" />
      <LoadingText>{text}</LoadingText>
    </StyledBox>
  );
};

export default Loading;

