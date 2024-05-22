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

  &:after {
    content: "";
    width: 32px;
    height: 24px;
    border-radius: 4px;
    background-color: var(--primary-bg-color);
  }
`;

const GuildWaterwayTableHeader = () => {
  return (
    <StyledHeader>
      <TextBox></TextBox>
      <TextBox></TextBox>
      <TextBox></TextBox>
      <TextBox></TextBox>
      <TextBox></TextBox>
      <TextBox></TextBox>
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

