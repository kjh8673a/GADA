import React from "react";
import styled from "styled-components";
import DashedLine from "../../../common/DashedLine";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";
import UnionArtifactItem from "./UnionArtifactItem";

const StyledBox = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--custom-shadow);
  border-radius: 5px;
`;

const HeaderBox = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 800;
`;

const ContentBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

const ArtifactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:hover {
    cursor: pointer;
  }
`;

const TotalStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2%;
  border-left: 1px dashed #777;
  gap: 10px;
`;

const StatItem = styled.span`
  font-size: 0.9rem;
`;

const StyledLevel = styled.span`
  color: rgba(97, 255, 255, 0.8);
  font-weight: 600;
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
          <DashedLine />
          {unionArtifact.data?.union_artifact_effect.map((v, i) => {
            return (
              <StatItem key={i}>
                {v.name}
                <StyledLevel> Lv. {v.level}</StyledLevel>
              </StatItem>
            );
          })}
        </TotalStatWrapper>
      </ContentBox>
    </StyledBox>
  );
};

export default UnionArtifact;