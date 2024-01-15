import React, { useEffect, useState } from 'react';
import SkillBox from './SkillBox';
import { skillType } from './CharacterSkill';


interface Props {
    skillList: skillType[]
}

const FiveSkill: React.FC<Props> = ({ skillList }) => {
    useEffect(() => {
        console.log(skillList);   
    },[])

    return (
        <SkillBox>
            5차스킬이 들어갈 공간입니다.
        </SkillBox>
        )
}
    

export default FiveSkill;