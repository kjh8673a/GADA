import React from "react";
import styled from "styled-components";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";
import SynergySkill from "./SynergySkill";

const StyledBox = styled.div`
  width: 25%;
  border-radius: 5px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-left: dashed 2px gray;

  @media (max-width: 768px) {
    border: none;
    border-top: dashed 2px gray;
    width: 100%;
    padding: 16px 0;
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const MySynergySkill = () => {
  const { characterSynergy } = useCharacterSynergy();
  return (
    <StyledBox>
      <div style={{ fontSize: "1.1rem" }}>시너지 스킬</div>
      <SkillWrapper>
        {characterSynergy.data?.main_character.skill_desc.map((v, i) => {
          return <SynergySkill key={i} data={v} />;
        })}
      </SkillWrapper>
    </StyledBox>
  );
};

export default MySynergySkill;

