import React from "react";
import styled from "styled-components";
import { UnionBlockCoordType } from "../../../../@types/maple/CharacterUnionTypes";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";

const StyledBox = styled.div`
  width: calc(100 / 22) %;
  aspect-ratio: 1 / 1;
  flex-grow: 1;
  opacity: 0.65;
`;

const UnionGridItem: React.FC<UnionBlockCoordType> = ({ x, y }) => {
  const { unionGrid } = useCharacterUnion();
  return <StyledBox style={{ backgroundColor: unionGrid[y][x] ? "#B4CB32" : "" }}></StyledBox>;
};

export default UnionGridItem;

