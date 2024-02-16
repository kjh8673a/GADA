import React, { useEffect, useState } from "react";
import SkillBox from "./SkillBox";
import SkillSquare from "./SkillSquare";
import { skillType } from "../../../../@types/maple/CharacterSkillType";
import { SkillContainer, SkillDegree } from "./SixSkill";
import NoSkill from "./NoSkill";
import DashedLine from "../../../common/DashedLine";

interface Props {
  skillList: skillType[];
  haveHiperSkill: boolean;
}

const HiperPassiveSkill: React.FC<Props> = ({ skillList, haveHiperSkill }) => {
  return (
    <SkillContainer>
      <SkillDegree>하이퍼 패시브 스킬</SkillDegree>
      <DashedLine />
      {haveHiperSkill ? (
        <SkillBox>
          {skillList?.map((_, index) => (
            <SkillSquare key={index} skill={skillList[index]} />
          ))}
        </SkillBox>
      ) : (
        <NoSkill />
      )}
    </SkillContainer>
  );
};

export default HiperPassiveSkill;
