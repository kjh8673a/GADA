import React from "react";
import SkillBox from "./SkillBox";
import SkillSquare from "./SkillSquare";
import { skillType } from "../../../../@types/maple/CharacterSkillType";
import { SkillContainer, SkillDegree } from "./SixSkill";
import NoSkill from "./NoSkill";
import DashedLine from "../../../common/DashedLine";

interface Props {
  skillList: skillType[];
  haveFiveSkill: boolean;
}

const FiveSkill: React.FC<Props> = ({ skillList, haveFiveSkill }) => {
  return (
    <SkillContainer>
      <SkillDegree>5차 스킬</SkillDegree>
      <DashedLine />
      {haveFiveSkill ? (
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

export default FiveSkill;
