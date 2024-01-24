import React, { useEffect } from "react";
import styled from "styled-components";
import UnionGrid from "./UnionGrid";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";
import { useParams } from "react-router-dom";

const StyledBox = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CharacterUnion = () => {
  const params = useParams();
  const { getUnion } = useCharacterUnion();

  useEffect(() => {
    getUnion(params.Charactername as string);
  }, [getUnion, params.Charactername])
  
  return (
    <StyledBox>
      <UnionGrid />
    </StyledBox>
  );
};

export default CharacterUnion;
