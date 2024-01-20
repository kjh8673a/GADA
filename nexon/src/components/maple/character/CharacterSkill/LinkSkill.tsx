import React, { useEffect } from 'react';
import SkillBox from './SkillBox';
import SkillSquare from './SkillSquare';
import { skillType } from '../../../../@types/maple/CharacterSkillType';
import { SkillContainer, SkillDegree, SolidHr } from './SixSkill';

interface Props {
    skillList: skillType[];
}


const LinkSkill: React.FC<Props> = ({ skillList }) => {
    return (
        <SkillContainer>
            <SkillDegree>
                링크 스킬
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

export default LinkSkill;