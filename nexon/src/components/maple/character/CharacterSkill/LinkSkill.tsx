import React, { useEffect } from 'react';
import SkillBox from './SkillBox';
import SkillSquare from './SkillSquare';
import { skillType } from '../../../../@types/maple/CharacterSkillType';
import { SkillContainer, SkillDegree, SolidHr } from './SixSkill';
import NoSkill from './NoSkill';

interface Props {
    skillList: skillType[];
    haveLinkSkill: boolean;
}


const LinkSkill: React.FC<Props> = ({ skillList, haveLinkSkill }) => {
    return (
        <SkillContainer>
            <SkillDegree>
                링크 스킬
            </SkillDegree>
            <SolidHr />
            {haveLinkSkill ?
                <SkillBox>
                    {skillList?.map((_, index) => (
                        <SkillSquare skill={skillList[index]} />
                    ))}
                </SkillBox> : <NoSkill />}
        </SkillContainer>
    )
}

export default LinkSkill;