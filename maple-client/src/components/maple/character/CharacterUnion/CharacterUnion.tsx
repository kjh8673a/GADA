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
`;

const BottomContainers = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
  }
`;

const UnionWrapper = styled.div`
  max-width: 704px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <BottomContainers>
        <UnionWrapper>
          <UnionGrid />
          <UnionRaid />
        </UnionWrapper>
        <UnionEffect />
      </BottomContainers>
    </StyledBox>
  );
};

export default CharacterUnion;

