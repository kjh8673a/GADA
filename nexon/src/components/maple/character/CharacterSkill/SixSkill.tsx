import React, {useEffect, useState} from 'react';
import SkillBox from './SkillBox';
import SkillSquare from './SkillSquare';
import { skillType } from '../../../../@types/maple/CharacterSkillType';
import styled from 'styled-components';
import SolErda from './SolErda';

interface Props {
    skillList: skillType[];
    solErdaEnergy: number;
    solErdaFragment: number;
}

export const SkillContainer = styled.div`
    display : flex;
    flex-direction : column;
    border: 1px solid #000;
    border-radius : 8px;
    margin : 16px 0px 16px 0px;
`

export const SkillDegree = styled.div`
    padding : 8px 0px 8px 20px;
`
export const SolidHr = styled.hr`
  border: none;
  border-top: 2px solid #ccc;
  margin: 0px 0px;
  height: 0;
`;


const SixSkill: React.FC<Props> = ({skillList, solErdaEnergy, solErdaFragment}) => {

    return (
        <SkillContainer>
            <SkillDegree>
                6차 스킬
            </SkillDegree>
            <SolidHr />
            <SkillBox>
            {skillList?.map((_, index) => (
                    <SkillSquare skill={skillList[index]} />
                ))}
            </SkillBox>
            <SolidHr />
            <SolErda solErdaEnergy={solErdaEnergy} solErdaFragment={solErdaFragment} />
        </SkillContainer>
    )
}

export default SixSkill;