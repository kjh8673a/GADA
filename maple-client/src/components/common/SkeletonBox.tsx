import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;

const SkeletonBoxWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 16px 0;
  animation: ${pulse} 1.5s infinite;
  padding: 32px 62px;
  border-radius: 10px;
`;

interface SkeletonLineProps {
  $width: string;
}

const SkeletonLine = styled.div<SkeletonLineProps>`
  height: 16px;
  width: ${(props) => props.$width};
  background-color: #e0e0e0;
  margin-bottom: 8px;
  border-radius: 4px;
`;

const SkeletonBox = () => {
  return (
    <SkeletonBoxWrapper>
      <SkeletonLine $width="80%" />
      <SkeletonLine $width="60%" />
      <SkeletonLine $width="70%" />
      <SkeletonLine $width="80%" />
    </SkeletonBoxWrapper>
  );
};

export default SkeletonBox;

