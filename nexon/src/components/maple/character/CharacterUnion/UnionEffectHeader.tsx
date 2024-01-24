import React from "react";
import styled from "styled-components";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const UnionGrade = styled.div`
  color: white;
  font-size: 1.2rem;
`;

const UnionLevel = styled.div`
  color: #666a7a;
  font-size: 1.1rem;
`;

const UnionEffectHeader = () => {
  const { characterUnion } = useCharacterUnion();
  return (
    <StyledBox>
      <UnionGrade>{characterUnion.data?.union_grade}</UnionGrade>
      <UnionLevel>{"Lv. " + characterUnion.data?.union_level}</UnionLevel>
    </StyledBox>
  );
};

export default UnionEffectHeader;
