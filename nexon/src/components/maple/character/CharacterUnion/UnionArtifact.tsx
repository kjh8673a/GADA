import React from "react";
import styled from "styled-components";
import DashedLine from "../../../common/DashedLine";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";
import UnionArtifactItem from "./UnionArtifactItem";

const StyledBox = styled.div`
  width: 100%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #3d444c;
  border-radius: 5px;
`;

const HeaderBox = styled.div`
  width: 100%;
  font-size: 1.2rem;
`;

const ContentBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

const ArtifactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TotalStatWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: start;
  padding: 2%;
  border-left: 1px dashed #777;
  gap: 10px;
`;

const UnionArtifact = () => {
  const { unionArtifact } = useCharacterUnion();
  return (
    <StyledBox>
      <HeaderBox>유니온 아티펙트</HeaderBox>
      <DashedLine />
      <ContentBox>
        <ArtifactWrapper>
          {unionArtifact.data?.union_artifact_crystal.map((v, i) => {
            return <UnionArtifactItem key={i} item={v} />;
          })}
        </ArtifactWrapper>
        <TotalStatWrapper>
          <HeaderBox>합산 효과</HeaderBox>
          <DashedLine/>
          {unionArtifact.data?.union_artifact_effect.map((v, i) => {
            return <div key={i}>{v.name + " Lv. " + v.level}</div>;
          })}
        </TotalStatWrapper>
      </ContentBox>
    </StyledBox>
  );
};

export default UnionArtifact;
