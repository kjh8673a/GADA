import React from "react";
import styled from "styled-components";
import UnionEffectHeader from "./UnionEffectHeader";
import DashedLine from "../../../common/DashedLine";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";

const StyledBox = styled.div`
  width: 35%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  background-color: #3d444c;
  border-radius: 4px;
`;

const TitleBox = styled.div`
  color: white;
  font-size: 1.1rem;
`;

const ContentBox = styled.div`
  color: white;
  font-size: 1rem;
`;

const UnionEffect = () => {
  const { characterUnion } = useCharacterUnion();
  return (
    <StyledBox>
      <UnionEffectHeader />
      <DashedLine />
      <TitleBox>공격대원 합산 효과{ characterUnion.data?.total_union_raider_stat ? "" : " 없음" }</TitleBox>
      {characterUnion.data?.total_union_raider_stat?.map((v, i) => {
        return <ContentBox key={i}>{" - " + v}</ContentBox>;
      })}
      <DashedLine />
      <TitleBox>공격대 점령 효과{ characterUnion.data?.union_occupied_stat ? "" : " 없음" }</TitleBox>
      {characterUnion.data?.union_occupied_stat?.map((v, i) => {
        return <ContentBox key={i}>{" - " + v}</ContentBox>;
      })}
    </StyledBox>
  );
};

export default UnionEffect;
