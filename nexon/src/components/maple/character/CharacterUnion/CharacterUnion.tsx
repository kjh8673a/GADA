import React, { useEffect } from "react";
import styled from "styled-components";
import UnionGrid from "./UnionGrid";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";
import { useParams } from "react-router-dom";
import UnionEffect from "./UnionEffect";
import UnionRaid from "./UnionRaid";
import UnionArtifact from "./UnionArtifact";

const StyledBox = styled.div`
  width: 100%;
  min-height: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const UnionWrapper = styled.div`
  width: 704px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CharacterUnion = () => {
  const params = useParams();
  const { getUnion, getUnionArtifact } = useCharacterUnion();

  useEffect(() => {
    getUnion(params.Charactername as string);
    getUnionArtifact(params.Charactername as string);
  }, [getUnion, getUnionArtifact, params.Charactername]);

  return (
    <StyledBox>
      <UnionArtifact />
      <UnionWrapper>
        <UnionGrid />
        <UnionRaid />
      </UnionWrapper>
      <UnionEffect />
    </StyledBox>
  );
};

export default CharacterUnion;
