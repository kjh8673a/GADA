import React from "react";
import { skillType } from "../../../../@types/maple/CharacterSkillType";
import styled from "styled-components";
import SkillDetailBox from "./SkillDetailBox";

const StyledBox = styled.div<{ $offsetX: number }>`
  position: absolute;
  box-sizing: border-box;
  width: 345px;
  left: 0px;
  bottom: 60px;
  background-color: #2b2c2a;
  z-index: 2;
  border-radius: 16px;
  border: 2px solid #777;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    left: calc(100% - ${(props) => props.$offsetX}px - 80%);
    bottom: 100%;
  }
`;

interface Props {
  skill: skillType;
  offsetX: number;
}

const SkillDetail: React.FC<Props> = ({ skill, offsetX }) => {
  return (
    <StyledBox $offsetX={offsetX}>
      <SkillDetailBox skill={skill} />
    </StyledBox>
  );
};

export default SkillDetail;

