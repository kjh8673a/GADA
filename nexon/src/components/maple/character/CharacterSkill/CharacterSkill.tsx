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
import { skillType } from '../../../../@types/maple/CharacterSkillType';


const SkillContainer = styled.div`
    width : 70%;
    display : flex;
    justify-content : center;
    flex-direction : column;
`


const CharacterSkill = () => {
    const params = useParams<{ Charactername : string }>();
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
            if (params) {
                const { Charactername } = params;
                if (Charactername) {
                    setCharacterName(Charactername);
                }
            }
        }
        if (characterName.length !== 0) {
            getMySixSkill(characterName)
                .then((res) => {
                    setSolErdaEnergy(res.data.data.used_sol_erda_energy);
                    setSolErdaFragment(res.data.data.used_sol_erda_fragment);
                    setSixSkill(res.data.data.character_skill_desc);
                    console.log(res.data.data);
                    
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
        }
        
    },[characterName])

    return (
        <SkillContainer>
            <SixSkill skillList={sixSkill} solErdaEnergy={solErdaEnergy} solErdaFragment={solErdaFragment}/>
            <FiveSkill skillList={fiveSkill} />
            <HiperPassiveSkill skillList={hiperSkill}/>
            <LinkSkill skillList={linkSkill}/>
        </SkillContainer>
    )
}

export default CharacterSkill;