import styled, { keyframes } from "styled-components";
import SkeletonGuildWaterwayItem from "./SkeletonGuildWaterwayItem";
import DashedLine from "../common/DashedLine";

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
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 1fr 1fr;
`;

const TextBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuildWaterwayTableHeader = () => {
  return (
    <StyledHeader>
      <TextBox>순위</TextBox>
      <TextBox>길드</TextBox>
      <TextBox>포인트</TextBox>
      <TextBox>길드 레벨</TextBox>
      <TextBox>마스터</TextBox>
      <TextBox>월드</TextBox>
    </StyledHeader>
  );
};

const StyledBox = styled.div`
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  border: 2px solid #3d444c;
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    animation: ${ShimmerAnimation} 1s infinite;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2) 60%, transparent);
  }
`;

const SkeletonGuildWaterway = () => {
  return (
    <StyledBox>
      <GuildWaterwayTableHeader />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
      <DashedLine />
      <SkeletonGuildWaterwayItem />
    </StyledBox>
  );
};

export default SkeletonGuildWaterway;

