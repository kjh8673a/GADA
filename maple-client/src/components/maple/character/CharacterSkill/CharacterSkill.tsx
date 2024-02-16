import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userNickName } from '../../../../atoms/maple/characterName';
import styled from 'styled-components';
import SixSkill from './SixSkill';
import FiveSkill from './FiveSkill';
import HiperPassiveSkill from './HiperPassiveSkill';
import LinkSkill from './LinkSkill';
import { useParams } from 'react-router-dom';
import HexaStat from './HexaStat';
import { useCharacterSkill } from '../../../../hooks/maple/useCharacterSkill';
import { atomCharaterErda, atomCharaterFiveSkill, atomCharaterHexaStat, atomCharaterHiperSkill, atomCharaterLinkSkill, atomCharaterSixSkill,
    atomHaveFiveSkill, atomHaveHexaStat, atomHaveHiperSkill, atomHaveLinkSkill, atomHaveSixSkill, atomLoadingTime } from '../../../../atoms/maple/charaterSkill';


const SkillContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    flex-direction : column;
`

const CharacterSkill = () => {
    const params = useParams<{ Charactername : string }>();

    const [sixSkill] = useRecoilState(atomCharaterSixSkill);
    const [erda] = useRecoilState(atomCharaterErda);
    const [hexaStat] = useRecoilState(atomCharaterHexaStat);
    const [fiveSkill] = useRecoilState(atomCharaterFiveSkill);
    const [hiperSkill] = useRecoilState(atomCharaterHiperSkill);
    const [linkSkill] = useRecoilState(atomCharaterLinkSkill);
    const [characterName, setCharacterName] = useRecoilState<string>(userNickName);

    const [haveSixSkill] = useRecoilState(atomHaveSixSkill);
    const [haveHexaStat] = useRecoilState(atomHaveHexaStat);
    const [haveFiveSkill] = useRecoilState(atomHaveFiveSkill);
    const [haveHiperSkill] = useRecoilState(atomHaveHiperSkill);
    const [haveLinkSkill] = useRecoilState(atomHaveLinkSkill);

    const [loadingTime, setLoadingTime] = useRecoilState(atomLoadingTime);

    const { getSixSkill, getFiveSkill, getHiperSkill, getLinkSkill } = useCharacterSkill();

    

    useEffect(() => {     
        setTimeout(() => {
            setLoadingTime(false);
        }, 300);

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
            getSixSkill(characterName);
            getFiveSkill(characterName);
            getHiperSkill(characterName)
            getLinkSkill(characterName);
        }
        
    }, [characterName])
    
    if (!loadingTime) {
        return (
            <SkillContainer>
                <SixSkill skillList={sixSkill} erda={erda} haveSixSkill={haveSixSkill} />
                {haveHexaStat && <HexaStat hexaStat={hexaStat} />}
                <FiveSkill skillList={fiveSkill} haveFiveSkill={haveFiveSkill}/>
                <HiperPassiveSkill skillList={hiperSkill} haveHiperSkill={haveHiperSkill} />
                <LinkSkill skillList={linkSkill} haveLinkSkill={haveLinkSkill} />
            </SkillContainer>
        )
    } else {
        return (
            null
        )
    }
}

export default CharacterSkill;