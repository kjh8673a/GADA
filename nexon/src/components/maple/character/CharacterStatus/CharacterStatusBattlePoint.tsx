import styled from "styled-components";

const StyledBox = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d6076;
  padding: 8px 16px;
  border-radius: 8px;
`;

const FloatLeftBox = styled.div`
  position: absolute;
  left: 16px;
  top: 8px;
  color: #fff;
`;

const HighLightedBox = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #eefced;
`;

const CharacterStatusBattlePoint = () => {
  return (
    <StyledBox>
      <FloatLeftBox>전투력</FloatLeftBox>
      <HighLightedBox>4081만 3730</HighLightedBox>
    </StyledBox>
  );
};

export default CharacterStatusBattlePoint;

