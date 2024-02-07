import styled from "styled-components";
import useCharacterUnion from "../../../../hooks/maple/useCharacterUnion";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

const UnionGrade = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 800;
`;

const UnionLevel = styled.div`
  color: rgb(83, 182, 0);
  font-size: 0.9rem;
  margin-left: 8px;
  font-weight: 600;
`;

const UnionEffectHeader = () => {
  const { characterUnion } = useCharacterUnion();
  return (
    <StyledBox>
      <UnionGrade>{characterUnion.data?.union_grade}</UnionGrade>
      <UnionLevel>{"Lv. " + characterUnion.data?.union_level}</UnionLevel>
    </StyledBox>
  );
};

export default UnionEffectHeader;

