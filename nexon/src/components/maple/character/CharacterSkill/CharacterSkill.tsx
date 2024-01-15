import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userNickName } from '../../../../atoms/maple/characterName';
import styled from 'styled-components';
import SixSkill from './SixSkill';
import FiveSkill from './FiveSkill';
import HiperPassiveSkill from './HiperPassiveSkill';
import LinkSkill from './LinkSkill';
import { getMyFiveSkill, getMyHiperSkill, getMyLinkSkill, getMySixSkill } from '../../../../api/Character/Skill';


const SkillContainer = styled.div`
    width : 70%;
    display : flex;
    justify-content : center;
    flex-direction : column;
`

export interface skillType {
    skill_description: string;
    skill_effect: string;
    skill_icon: string;
    skill_level: number;
    skill_name: string;
}

const CharacterSkill = () => {
    const [sixSkill, setSixSkill] = useState<skillType[]>([]);
    const [fiveSkill, setFiveSkill] = useState<skillType[]>([]);
    const [hiperSkill, setHiperSkill] = useState<skillType[]>([]);
    const [linkSkill, setLinkSkill] = useState<skillType[]>([]);
    const [solErdaEnergy, setSolErdaEnergy] = useState<number>(0);
    const [solErdaFragment, setSolErdaFragment] = useState<number>(0);
    const [characterName,] = useRecoilState<string>(userNickName);

    useEffect(() => {      
        getMySixSkill(characterName)
            .then((res) => {
                setSolErdaEnergy(res.data.data.used_sol_erda_energy);
                setSolErdaFragment(res.data.data.used_sol_erda_fragment);
            })
        
        getMyFiveSkill(characterName)
            .then((res) => {

            })
        
        getMyHiperSkill(characterName)
            .then((res) => {

            })
        
        getMyLinkSkill(characterName)
            .then((res) => {

                setLinkSkill(res.data.data.character_link_skill);
            })
    },[])

    return (
        <SkillContainer>
            <SixSkill />
            <FiveSkill skillList={fiveSkill} />
            <HiperPassiveSkill />
            <LinkSkill skillList={linkSkill}/>
        </SkillContainer>
    )
}

export default CharacterSkill;