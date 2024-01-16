import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userNickName } from '../../../../atoms/maple/characterName';
import styled from 'styled-components';
import SixSkill from './SixSkill';
import FiveSkill from './FiveSkill';
import HiperPassiveSkill from './HiperPassiveSkill';
import LinkSkill from './LinkSkill';
import { getMyFiveSkill, getMyHiperSkill, getMyLinkSkill, getMySixSkill } from '../../../../api/Character/Skill';
import { useLocation, useParams } from 'react-router-dom';


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
    const queryName = useParams<{ queryName : string }>();
    const [sixSkill, setSixSkill] = useState<skillType[]>([]);
    const [fiveSkill, setFiveSkill] = useState<skillType[]>([]);
    const [hiperSkill, setHiperSkill] = useState<skillType[]>([]);
    const [linkSkill, setLinkSkill] = useState<skillType[]>([]);
    const [solErdaEnergy, setSolErdaEnergy] = useState<number>(0);
    const [solErdaFragment, setSolErdaFragment] = useState<number>(0);
    const [characterName, setCharacterName] = useRecoilState<string>(userNickName);

    useEffect(() => {
        //새로고침시 존재하지 않을경우 쿼리에 있는 이름을 써야함.
        if (characterName.length === 0) {
            console.log(queryName);
            if (!queryName) {
                setCharacterName(queryName);
            }
        }

        getMySixSkill(characterName)
            .then((res) => {
                setSolErdaEnergy(res.data.data.used_sol_erda_energy);
                setSolErdaFragment(res.data.data.used_sol_erda_fragment);
                setSixSkill(res.data.data.character_skill_desc);      
            })
        
        getMyFiveSkill(characterName)
            .then((res) => {
                setFiveSkill(res.data.data.character_skill_desc);
            })
        
        getMyHiperSkill(characterName)
            .then((res) => {
                setHiperSkill(res.data.data.character_skill);
            })
        
        getMyLinkSkill(characterName)
            .then((res) => {
                setLinkSkill(res.data.data.character_link_skill);
            })
        
    },[])

    return (
        <SkillContainer>
            <SixSkill skillList={sixSkill}/>
            <FiveSkill skillList={fiveSkill} />
            <HiperPassiveSkill skillList={hiperSkill}/>
            <LinkSkill skillList={linkSkill}/>
        </SkillContainer>
    )
}

export default CharacterSkill;