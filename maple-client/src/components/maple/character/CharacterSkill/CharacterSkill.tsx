import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userNickName } from '../../../../atoms/maple/characterName';
import styled from 'styled-components';
import SixSkill from './SixSkill';
import FiveSkill from './FiveSkill';
import HiperPassiveSkill from './HiperPassiveSkill';
import LinkSkill from './LinkSkill';
import { useParams } from 'react-router-dom';
import { hexaStat, skillType } from '../../../../@types/maple/CharacterSkillType';
import HexaStat from './HexaStat';
import { useCharacterSkill } from '../../../../hooks/maple/useCharacterSkill';


const SkillContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    flex-direction : column;
`
const DUMMY_HEXA: hexaStat = {
    slot_id : 0,
    main_stat_name: "텍",
    sub_stat_name_1: "사",
    sub_stat_name_2: "스",
    main_stat_level: 0,
    sub_stat_level_1: 0,
    sub_stat_level_2: 0,
    stat_grade: 0,
}


const CharacterSkill = () => {
    const params = useParams<{ Charactername : string }>();
    const [sixSkill, setSixSkill] = useState<skillType[]>([]);
    const [haveSixSkill, setHaveSixSkill] = useState<boolean>(false);
    const [fiveSkill, setFiveSkill] = useState<skillType[]>([]);
    const [haveFiveSkill, setHaveFiveSkill] = useState<boolean>(false);
    const [hiperSkill, setHiperSkill] = useState<skillType[]>([]);
    const [haveHiperSkill, setHaveHiperSkill] = useState<boolean>(false);
    const [linkSkill, setLinkSkill] = useState<skillType[]>([]);
    const [haveLinkSkill, setHaveLinkSkill] = useState<boolean>(false);
    const [solErdaEnergy, setSolErdaEnergy] = useState<number>(0);
    const [solErdaFragment, setSolErdaFragment] = useState<number>(0);
    const [characterName, setCharacterName] = useRecoilState<string>(userNickName);
    const [haveHexaStat, setHaveHexaStat] = useState<boolean>(false);
    const [hexaStat, setHexaStat] = useState<hexaStat>(DUMMY_HEXA);

    const { getSixSkill, getFiveSkill, getHiperSkill, getLinkSkill } = useCharacterSkill();

    

    useEffect(() => {
        //새로고침시 존재하지 않을경우 쿼리에 있는 이름을 써야함.
        if (characterName) { 
            if (params) {
                const { Charactername } = params;
                if (Charactername) {
                    setCharacterName(Charactername);
                }
            }
        }

        if (characterName.length !== 0) {
            getSixSkill(characterName).then((res) => {          
                if (res) {
                    setSolErdaEnergy(res.erda.used_sol_erda_energy);
                    setSolErdaFragment(res.erda.used_sol_erda_fragment);
                    if (res.sixSkill.length !== 0) {
                        setSixSkill(res.sixSkill);
                        setHaveSixSkill(true);
                    }
                    if (Object.keys(res.hexaStat).length !== 0) {
                        setHexaStat(res.hexaStat);
                        setHaveHexaStat(true);
                    }
                }
            }).catch(() => {
                setHaveSixSkill(false);
                setHaveHexaStat(false);
            })
            
            getFiveSkill(characterName).then((res) => {
                if (res) {
                    if (res.length !== 0) {
                        setFiveSkill(res);
                        setHaveFiveSkill(true);
                    }
                }
            }).catch(() => {
                setHaveFiveSkill(false);
            })

            getHiperSkill(characterName).then((res) => {
                if (res) {
                    let cnt = 0;
                    for (let i = 0; i < res.length; i++) {
                        if (res[i].skill_level === 0) {
                            cnt++;
                        }
                    }
                    //하나라도 찍혀있다면.
                    if (cnt !== res.length) {
                        setHaveHiperSkill(true);
                        setHiperSkill(res);         
                    }
                }
            }).catch(() => {
                setHaveHiperSkill(false);
            })
            
            getLinkSkill(characterName).then((res) => {          
                if (res) {
                    if (res.length !== 0) {
                        setLinkSkill(res);
                        setHaveLinkSkill(true);
                    }
                }
            }).catch(() => {
                setHaveLinkSkill(false);
            })
        }
        
    },[characterName])

    return (
        <SkillContainer>
            <SixSkill skillList={sixSkill}
                solErdaEnergy={solErdaEnergy} solErdaFragment={solErdaFragment} haveSixSkill={haveSixSkill} />
            {haveHexaStat && <HexaStat hexaStat={hexaStat}/>}
            <FiveSkill skillList={fiveSkill} haveFiveSkill={haveFiveSkill} />
            <HiperPassiveSkill skillList={hiperSkill} haveHiperSkill={haveHiperSkill} />
            <LinkSkill skillList={linkSkill} haveLinkSkill={haveLinkSkill} />
        </SkillContainer>
    )
}

export default CharacterSkill;