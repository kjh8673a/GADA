import { useEffect, useState } from "react";
import SkeletonCombatPowerItem from "./SkeletonCombatPowerItem";
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

const StyledHeader = styled.div`
  width: 100%;
  min-height: 40px;
  background-color: #3d444c;
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    padding-left: 12px;
    grid-template-columns: 1fr 9fr;
  }
`;

const ContentBox = styled.div<{ $width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    width: ${(props) => props.$width}px;
    height: 24px;
    border-radius: 4px;
    background-color: var(--primary-bg-color);
  }
`;

const StyledBox = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #3d444c;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: var(--custom-shadow);

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    animation: ${ShimmerAnimation} 2s infinite;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2) 60%, transparent);
  }
`;

const SkeletonCombatPower = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <StyledBox>
      <StyledHeader>
        <ContentBox $width={32} />
        <ContentBox $width={48} />
        {windowWidth > 768 && (
          <>
            <ContentBox $width={32} />
            <ContentBox $width={48} />
            <ContentBox $width={32} />
            <ContentBox $width={32} />
            <ContentBox $width={32} />
          </>
        )}
      </StyledHeader>
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
      <SkeletonCombatPowerItem />
    </StyledBox>
  );
};

export default SkeletonCombatPower;

