import React from "react";
import styled from "styled-components";
import UnionEffectHeader from "./UnionEffectHeader";
import DashedLine from "../../../common/DashedLine";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";

const StyledBox = styled.div`
  width: 420px;
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--custom-shadow);
  border-radius: 4px;
`;

const EffectContainer = styled.div`
  width: 100%;
  padding: 8px 0;
`;

const TitleBox = styled.div`
  color: white;
  font-weight: 600;
  margin-bottom: 4px;
`;

const ContentBox = styled.div`
  color: white;
  font-size: 0.9rem;
  line-height: 1.4rem;
`;

const UnionEffect = () => {
  const { characterUnion } = useCharacterUnion();
  return (
    <StyledBox>
      <UnionEffectHeader />
      <DashedLine />
      <EffectContainer>
        <TitleBox>공격대원 합산 효과</TitleBox>
        {characterUnion.data?.total_union_raider_stat?.map((v, i) => {
          return <ContentBox key={i}>{" - " + v}</ContentBox>;
        })}
      </EffectContainer>
      <DashedLine />
      <EffectContainer>
        <TitleBox>공격대 점령 효과</TitleBox>

        {characterUnion.data?.union_occupied_stat?.map((v, i) => {
          return <ContentBox key={i}>{" - " + v}</ContentBox>;
        })}
      </EffectContainer>
    </StyledBox>
  );
};

export default UnionEffect;

