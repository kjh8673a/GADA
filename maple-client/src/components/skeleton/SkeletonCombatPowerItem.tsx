import { useEffect, useState } from "react";
import styled from "styled-components";
import DashedLine from "../common/DashedLine";

const StyledBox = styled.div`
  width: 100%;
  height: 104px;
  box-sizing: border-box;
  display: grid;
  background-color: var(--secondary-bg-color);
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 4px 0;
    padding-left: 12px;
    grid-template-columns: 1fr 9fr;
  }
`;

const RankBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: var(--primary-bg-color);
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

const MobileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MobileContentBox = styled.div`
  margin-left: 12px;
`;

const MobileContentLine = styled.div`
  display: flex;
  gap: 8px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    width: 64px;
    height: 64px;
    border-radius: 4px;
    background-color: var(--primary-bg-color);
  }
`;

const SkeletonCombatPowerItem = () => {
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
    <>
      <StyledBox>
        <RankBox />
        {windowWidth > 768 ? (
          <>
            <ImgBox />
            <ContentBox $width={32}></ContentBox>
            <ContentBox $width={32}></ContentBox>
            <ContentBox $width={64}></ContentBox>
            <ContentBox $width={48}></ContentBox>
            <ContentBox $width={32}></ContentBox>
            <ContentBox $width={32}></ContentBox>
          </>
        ) : (
          <MobileContainer>
            <ImgBox />
            <MobileContentBox>
              <MobileContentLine>
                <ContentBox $width={32}></ContentBox>
                <ContentBox $width={32}></ContentBox>
                <ContentBox $width={32}></ContentBox>
              </MobileContentLine>
              <MobileContentLine>
                <ContentBox $width={32}></ContentBox>
              </MobileContentLine>
              <MobileContentLine>
                <ContentBox $width={32}></ContentBox>
              </MobileContentLine>
            </MobileContentBox>
          </MobileContainer>
        )}
      </StyledBox>
      <DashedLine />
    </>
  );
};

export default SkeletonCombatPowerItem;

