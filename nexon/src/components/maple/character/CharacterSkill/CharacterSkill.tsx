import React from 'react';
import styled from 'styled-components';
import SixSkill from './SixSkill';
import FiveSkill from './FiveSkill';
import HiperPassiveSkill from './HiperPassiveSkill';
import LinkSkill from './LinkSkill';

const SkillContainer = styled.div`
    width : 70%;
    display : flex;
    justify-content : center;
    flex-direction : column;
`


const CharacterSkill = () => {
    return (
        <SkillContainer>
            <SixSkill />
            <FiveSkill />
            <HiperPassiveSkill />
            <LinkSkill />
        </SkillContainer>
    )
}

export default CharacterSkill;