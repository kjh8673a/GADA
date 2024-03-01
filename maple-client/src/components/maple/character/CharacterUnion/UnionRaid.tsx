import styled from "styled-components";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";
import UnionRaider from "./UnionRaider";
import DashedLine from "../../../common/DashedLine";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--secondary-bg-color);
  padding: 16px;
  box-sizing: border-box;
  box-shadow: var(--custom-shadow);
  border-radius: 5px;
`;

const HeaderBox = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 800;
  color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 8px;
  border-radius: 4px;
`;

const UnionRaid = () => {
  const { characterUnion } = useCharacterUnion();

  return (
    <StyledBox>
      <HeaderBox>유니온 공격대</HeaderBox>
      <DashedLine />
      <ContentWrapper>
        {characterUnion.data?.union_block.map((v, i) => {
          return (
            <UnionRaider
              key={i}
              block_class={v.block_class}
              block_level={v.block_level}
              class_image={v.class_image}
              grade={v.grade}
            />
          );
        })}
      </ContentWrapper>
    </StyledBox>
  );
};

export default UnionRaid;

