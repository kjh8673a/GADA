import React, { useEffect, useState } from 'react';
import SkillBox from './SkillBox';
import SkillSquare from './SkillSquare';
import { skillType } from '../../../../@types/maple/CharacterSkillType';
import { SkillContainer, SkillDegree, SolidHr } from './SixSkill';


interface Props {
    skillList: skillType[]
}

const FiveSkill: React.FC<Props> = ({ skillList }) => {

    return (
        <SkillContainer>
            <SkillDegree>
                5차 스킬
            </SkillDegree>
            <SolidHr />
            <SkillBox>
                {skillList?.map((_, index) => (
                    <SkillSquare skill={skillList[index]} />
                ))}
            </SkillBox>
        </SkillContainer>
        )
}
    

export default FiveSkill;