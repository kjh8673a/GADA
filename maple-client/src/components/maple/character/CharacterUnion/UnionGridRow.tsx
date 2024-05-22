import React from "react";
import styled from "styled-components";
import UnionGridItem from "./UnionGridItem";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
`;

const UnionGridRow: React.FC<{ y: number }> = ({ y }) => {
  return (
    <StyledBox>
      {Array(22)
        .fill(null)
        .map((_, i) => (
          <UnionGridItem key={i} x={i} y={y} />
        ))}
    </StyledBox>
  );
};

export default UnionGridRow;

