import React, { useEffect } from "react";
import styled from "styled-components";
import UnionGrid from "./UnionGrid";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";
import { useParams } from "react-router-dom";
import UnionEffect from "./UnionEffect";
import UnionRaid from "./UnionRaid";

const StyledBox = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const UnionWrapper = styled.div`
  width: 704px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CharacterUnion = () => {
  const params = useParams();
  const { getUnion } = useCharacterUnion();

  useEffect(() => {
    getUnion(params.Charactername as string);
  }, [getUnion, params.Charactername]);

  return (
    <StyledBox>
      <UnionWrapper>
        <UnionGrid />
        <UnionRaid />
      </UnionWrapper>
      <UnionEffect />
    </StyledBox>
  );
};

export default CharacterUnion;
