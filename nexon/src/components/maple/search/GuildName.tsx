import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { GuildType } from '../../../@types/maple/GuildTypes';
import { useNavigate } from 'react-router-dom';

interface Props {
    guild: GuildType;
    setGuild: Dispatch<SetStateAction<GuildType | undefined>>;
}

const NameContainer = styled.div`
    display : flex;
    width : 40px;
    height : 110px;
    align-items : center;
    margin : 8px;
    border : 1px solid;
    white-space : nowrap;
    writing-mode : vertical-lr;
    text-orientation : upright;
    border-radius : 8px;
    cursor : pointer;
    padding : 8px 0px 0px 0px;
`

const ServerIcon = styled.img`
    margin : 0px 0px 8px 0px;
`

const GuildName: React.FC<Props> = ({ guild , setGuild }) => {
    const navigate = useNavigate();
    
    const searchDetailGuild = () => {
        setGuild(guild);
        navigate(`/Search/Guild/${guild.world_name}/${guild.guild_name}`, {state : guild});
    }

    return (
        <NameContainer onClick={searchDetailGuild}>
            <ServerIcon src={`/assets/${guild.world_name}.png`}/>
            {guild.world_name}
        </NameContainer>
    );
};

export default GuildName;