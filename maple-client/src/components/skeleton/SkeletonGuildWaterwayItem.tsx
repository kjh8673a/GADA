import styled from "styled-components";

const StyledBox = styled.div`
  width: 100%;
  min-height: 40px;
  background-color: var(--secondary-bg-color);
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 1fr 1fr;
  &:hover {
    background-color: var(--primary-bg-color);
    transition: 0.2s;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    width: 32px;
    height: 24px;
    background-color: var(--primary-bg-color);
    border-radius: 4px;
  }
`;

const SubContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;

  &:after {
    content: "";
    width: 48px;
    height: 24px;
    background-color: var(--primary-bg-color);
    border-radius: 4px;
  }
`;

const SkeletonGuildWaterwayItem = () => {
  return (
    <StyledBox>
      <ContentBox />
      <ContentBox />
      <SubContentBox />
      <SubContentBox />
      <SubContentBox />
      <SubContentBox />
    </StyledBox>
  );
};

export default SkeletonGuildWaterwayItem;

