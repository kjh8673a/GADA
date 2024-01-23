import React from "react";
import styled from "styled-components";
import UnionGridRow from "./UnionGridRow";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";

const StyledBox = styled.div`
  position: relative;
  width: 704px;
  min-height: 640px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImgBox = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/assets/bg_union_grid.svg`,
  alt: "background img",
})`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  // object-fit: cover;
  object-position: center center;
  color: transparent;
`;

const ContentBox = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const UnionGrid = () => {
  const { unionGrid } = useCharacterUnion();
  return (
    <StyledBox>
      <ImgBox />
      <ContentBox>
        {unionGrid.length > 0 &&
          Array(20).fill(null).map((_, i) => <UnionGridRow key={i} y={i} />)}
      </ContentBox>
    </StyledBox>
  );
};

export default UnionGrid;
