import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 2px;
  padding: 2px;
`;

const ClassBox = styled.div`
  font-size: 1rem;
  color: white;
`;
const LevelBox = styled.div`
  font-size: 1rem;
  color: white;
`;

const UnionRaider: React.FC<{ block_class: string; block_level: string }> = ({
  block_class,
  block_level,
}) => {
  return (
    <StyledBox>
      <ClassBox>{block_class}</ClassBox>
      <LevelBox>{"Lv. " + block_level}</LevelBox>
    </StyledBox>
  );
};

export default UnionRaider;
