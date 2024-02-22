import React, { useState } from "react";
import styled from "styled-components";
import { SkillType } from "../../../../@types/maple/CharacterSynergyTypes";
import SkillNameBox from "../CharacterSkill/SkillNameBox";
import SkillDescriptionBox from "../CharacterSkill/SkillDescriptionBox";

const StyledBox = styled.div`
  position: relative;
`;

const SkillImg = styled.img``;

const SkillHoverBox = styled.div`
  position: absolute;
  z-index: 2;
  box-sizing: border-box;
  width: 400px;
  bottom: 100%;
  transform: translateX(-200px);
  background-color: #2b2c2a;
  border-radius: 16px;
  border: 2px solid #777;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DottedHr = styled.hr`
  border: none;
  border-top: 2px dotted #ccc;
  margin: 1px 0;
  width: 95%;
  margin-left: 2.5%;
  height: 0;
`;

const SkillEffectBox = styled.div`
  display: flex;
  color: #ffffff;
  padding: 12px;
  white-space: pre-line;
`;

const SynergySkill: React.FC<{ data: SkillType }> = ({ data }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <StyledBox onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <SkillImg src={data.skill_icon} alt={"skill preview"} />
      {isHovered && (
        <SkillHoverBox>
          <SkillNameBox name={data.skill_name} />
          <SkillDescriptionBox imgRoad={data.skill_icon} description={data.skill_description} />
          <DottedHr />
          <SkillEffectBox>{data.skill_effect}</SkillEffectBox>
        </SkillHoverBox>
      )}
    </StyledBox>
  );
};

export default SynergySkill;
