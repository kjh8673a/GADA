import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CharacterBox from './CharacterBox';
import { getMyCharacter } from '../../../../api/Character/Character';
import { useRecoilState } from 'recoil';
import { userNickName } from '../../../../atoms/maple/characterName';
import { useParams } from 'react-router-dom';
import { useCharacterSearch } from '../../../../hooks/maple/useCharacterSearch';
import { CharacterType } from '../../../../@types/maple/CharacterSearch';

const CharacterContainer = styled.div`
    display : flex;
    justify-content : flex-start;
    flex-wrap : wrap;
    width : 100%;
`
const CharacterDetailBtn = styled.button`

`

const CharacterOwn = () => {
    const params = useParams<{ Charactername: string }>();
    const [characterInfo, setCharacterInfo] = useState<CharacterType[]>([]);
    const [characterName, setCharacterName] = useRecoilState<string>(userNickName);
    const { getCharacter } = useCharacterSearch();

    useEffect(() => {
        if (characterName) { 
            if (params) {
                const { Charactername } = params;
                if (Charactername) {
                    setCharacterName(Charactername);
                }
            }
        }
        getCharacter(characterName).then((res) => {
            if (res) {
                setCharacterInfo(res);
            }
        })
        
    },[])
    return (
        <CharacterContainer>
            {characterInfo.map((_, index) => (
                <CharacterBox character={characterInfo[index]} />
            ))}
            
        </CharacterContainer>
    )
}

export default CharacterOwn;