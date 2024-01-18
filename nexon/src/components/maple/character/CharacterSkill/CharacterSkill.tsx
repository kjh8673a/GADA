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
import { hexaStat, skillType } from '../../../../@types/maple/CharacterSkillType';
import HexaStat from './HexaStat';


const SkillContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    flex-direction : column;
`
const DUMMY_HEXA: hexaStat = {
    main_stat_name: "텍",
    sub_stat_name_1: "사",
    sub_stat_name_2: "스",
    main_stat_level: 0,
    sub_stat_level_1: 0,
    sub_stat_level_2: 0,
}


const CharacterSkill = () => {
    const params = useParams<{ Charactername : string }>();
    const [sixSkill, setSixSkill] = useState<skillType[]>([]);
    const [fiveSkill, setFiveSkill] = useState<skillType[]>([]);
    const [hiperSkill, setHiperSkill] = useState<skillType[]>([]);
    const [linkSkill, setLinkSkill] = useState<skillType[]>([]);
    const [solErdaEnergy, setSolErdaEnergy] = useState<number>(0);
    const [solErdaFragment, setSolErdaFragment] = useState<number>(0);
    const [characterName, setCharacterName] = useRecoilState<string>(userNickName);
    const [haveHexaStat, setHaveHexaStat] = useState<boolean>(false);
    const [hexaStat, setHexaStat] = useState<hexaStat>(DUMMY_HEXA);

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
                    console.log(res.data);
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
            <SixSkill skillList={sixSkill}
                solErdaEnergy={solErdaEnergy} solErdaFragment={solErdaFragment} />
            {haveHexaStat && <HexaStat hexaStat={hexaStat}/>}
            <FiveSkill skillList={fiveSkill} />
            <HiperPassiveSkill skillList={hiperSkill}/>
            <LinkSkill skillList={linkSkill}/>
        </SkillContainer>
    )
}

export default CharacterSkill;