import styled from "styled-components";

const BlankBox = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
`;

const NoSkill = () => {
  return <BlankBox>스킬이 존재하지 않습니다.</BlankBox>;
};

export default NoSkill;
