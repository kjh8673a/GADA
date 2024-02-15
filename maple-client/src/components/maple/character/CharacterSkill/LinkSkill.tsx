import React, { useEffect, useState } from "react";
import SkillBox from "./SkillBox";
import SkillSquare from "./SkillSquare";
import { skillType } from "../../../../@types/maple/CharacterSkillType";
import { SkillContainer, SkillDegree } from "./SixSkill";
import NoSkill from "./NoSkill";
import DashedLine from "../../../common/DashedLine";

interface Props {
  skillList: skillType[];
  haveLinkSkill: boolean;
}

const LinkSkill: React.FC<Props> = ({ skillList, haveLinkSkill }) => {
  return (
    <SkillContainer>
      <SkillDegree>링크 스킬</SkillDegree>
      <DashedLine />
      {haveLinkSkill ? (
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

export default LinkSkill;
