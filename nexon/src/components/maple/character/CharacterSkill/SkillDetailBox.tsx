import React from 'react';
import SkillNameBox from './SkillNameBox';
import SkillDescriptionBox from './SkillDescriptionBox';
import styled from 'styled-components';
import { skillType } from '../../../../@types/maple/CharacterSkillType';
import SkillEffect from './SkillEffect';

const SkillContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    width : 100%;
    z-index : 20;
`

const DottedHr = styled.hr`
  border: none;
  border-top: 2px dotted #ccc;
  margin: 1px 0;
  width: 95%;
  margin-left : 2.5%;
  height: 0;
`;


interface Props {
    skill: skillType;
}

const SkillDetailBox: React.FC<Props> = ({skill}) => {
    return (
        <SkillContainer>
            <SkillNameBox name={skill.skill_name} />
            <SkillDescriptionBox imgRoad={skill.skill_icon} description={skill.skill_description}/>
            <DottedHr />
            <SkillEffect level={skill.skill_level} effect={skill.skill_effect} />
        </SkillContainer>
    )
}

export default SkillDetailBox;