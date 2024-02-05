import React, {useEffect, useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { GuildType } from '../../../@types/maple/GuildTypes';
import styled from 'styled-components';
import GuildSkill from './GuildSkill';
import GuildMember from './GuildMember';
import GuildInfo from './GuildInfo';


const Container = styled.div`
    display : flex;
    border : 1px solid;
    max-width : 1140px;
    border-style : inset;
    margin : 10px auto 0;
    flex-direction : column;
    justify-content : center;
    border-radius : 8px;
`

const GuildExplain = styled.div`
    display : flex;
    width : 100%;
    margin : 4px;
`

const GuildDescription = styled.div`
    display : block;
    width : 50%;
`
const Explain = styled.div`
    padding : 4px 0px 4px 8px;
`
const GuildMemberList = styled.div`
    display : flex;
    max-width : 1140px;
`

const NoLineContainer = styled.div`
    display : flex;
    max-width : 1140px;
    margin : 20px auto 0;
    flex-direction : column;
    justify-content : center;
`

const GuildSkillAndPoint = styled.div`
    display : block;
    width : 50%;
`

const Guild = () => {
    const { state: guild } = useLocation();
    const { world_name, guild_name } = useParams<{ world_name?: string, guild_name?: string }>();
    const [worldName, setWorldName] = useState<string>("");
    const [guildName, setGuildName] = useState<string>("");
    const [guildInfo, setGuildInfo] = useState<GuildType>();

    useEffect(() => {
        setGuildInfo(guild);
        if (world_name) {
            setWorldName(world_name);
        }
        if (guild_name) {
            setGuildName(guild_name);
        }
    }, [world_name, guild_name]);


    return (
        <>
        <Container>
                <GuildExplain>
                    <GuildDescription>
                        <Explain>
                            '{guild?.world_name}' 서버의 {guild?.guild_name} 길드
                        </Explain>
                        <Explain>
                            길드레벨 : {guild?.guild_level}
                        </Explain>
                        <Explain>
                            길드 마스터 : {guild?.guild_master_name}
                        </Explain>
                        <Explain>
                            길드원수 : {guild?.guild_member_count}
                        </Explain>
                    </GuildDescription>
                    <GuildSkillAndPoint>
                        <Explain>
                            길드 포인트 : {guild?.guild_point}
                        </Explain>
                        <Explain>
                            길드 노블 스킬
                            <GuildSkill skill={guild?.guild_noblesse_skill} />
                        </Explain>
                    </GuildSkillAndPoint>
                </GuildExplain>
            </Container>
            <NoLineContainer>
                <GuildMemberList>길드원 목록</GuildMemberList>
                <GuildInfo/>
            </NoLineContainer>
        <GuildMember name={guild?.guild_name} worldName={guild?.world_name} />
        </>
    );
};

export default Guild;