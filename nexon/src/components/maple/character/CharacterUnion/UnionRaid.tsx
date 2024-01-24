import React from "react";
import styled from "styled-components";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";
import UnionRaider from "./UnionRaider";
import DashedLine from "../../../common/DashedLine";

const StyledBox = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #3d444c;
  border-radius: 4px;
`;

const HeaderBox = styled.div`
  width: 100%;
  font-size: 1.2rem;
  color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  border-radius: 4px;
`;

const UnionRaid = () => {
  const { characterUnion } = useCharacterUnion();
  return (
    <StyledBox>
      <HeaderBox>유니온 공격대</HeaderBox>
      <DashedLine/>
      <ContentWrapper>
        {characterUnion.data?.union_block.map((v, i) => {
          return (
            <UnionRaider key={i} block_class={v.block_class} block_level={v.block_level} />
          );
        })}
      </ContentWrapper>
    </StyledBox>
  );
};

export default UnionRaid;
