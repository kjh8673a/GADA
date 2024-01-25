import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userNickName } from '../../../atoms/maple/characterName';
import styled from 'styled-components';
import CharacterInfo from './CharacterInfo';
import GuildInfo from './GuildInfo';
import useCharacterBasic from '../../../hooks/maple/useCharacterBasic';
import { useGuild } from '../../../hooks/maple/useGuild';
import { GuildType } from '../../../@types/maple/GuildTypes';
import GuildName from './GuildName';

const BigContainer = styled.div`
    display : flex;
    align-items : center;
    max-width : 1140px;
    margin : 0 auto;
`
const SmallContainer = styled.div`
    display : flex;
    width : 1140px;
    margin : 10px;
    flex-direction : column;
`

const CharacterContainer = styled.div`
    display : flex;
`
const GuildServerContainer = styled.div`
    display : flex;
    max-width : 1140px;
    border : 1px solid;
    border-style : inset;
    margin : 10px 0px 10px 0px;
    height : auto;
    width : auto;
`

const CGsearch = () => {
    const params = useParams<{ name: string }>();
    const [guildList, setGuildList] = useState<GuildType[]>([]);
    const [guild, setGuild] = useState<GuildType>();
    const [worldName, setWorldName] = useState<string>("");
    const [characterName, setCharacterName] = useRecoilState<string>(userNickName);
    const { characterBasic, getCharacterBasic } = useCharacterBasic();
    const { getAllGuild } = useGuild();

    useEffect(() => {        
        if (params) {
            const { name } = params;
            if (name) {
                setCharacterName(name);
                getCharacterBasic(name);
                getAllGuild(name).then((res) => {
                    if (res) {
                        setGuildList(res);  
                        setGuild(undefined);
                        setWorldName("");
                    }
                })
            }
        }
        
    },[params])

    return (
        <BigContainer>
            <SmallContainer>
                '{characterName}'에 대한 검색결과입니다.
                <CharacterContainer>
                    <CharacterInfo characterBasic={characterBasic} />
                </CharacterContainer>
                <GuildServerContainer>
                    {guildList.map((_, index) => (
                        <GuildName guild={guildList[index]}
                            setWorldName={setWorldName}
                            setGuild={setGuild} />
                    ))}
                </GuildServerContainer>
                {
                    worldName && <GuildInfo guild={guild} />
                }
            </SmallContainer>
        </BigContainer>
    )
}

export default CGsearch;