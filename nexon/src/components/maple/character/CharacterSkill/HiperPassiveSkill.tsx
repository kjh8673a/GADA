import React from 'react';
import SkillBox from './SkillBox';
import SkillSquare from './SkillSquare';
import { skillType } from '../../../../@types/maple/CharacterSkillType';
import { SkillContainer, SkillDegree, SolidHr } from './SixSkill';

interface Props {
    skillList: skillType[];
}


const HiperPassiveSkill: React.FC<Props> = ({skillList}) => {
    return (
        <SkillContainer>
            <SkillDegree>
                하이퍼 패시브 스킬
            </SkillDegree>
            <SolidHr />
            <SkillBox>
                {skillList?.map((_, index) => (
                    <SkillSquare skill={skillList[index]}/>
                ))}
            </SkillBox>
        </SkillContainer>
    )
}

export default HiperPassiveSkill;