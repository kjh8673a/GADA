import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { GuildType } from '../../../@types/maple/GuildTypes';

interface Props {
    guild: GuildType;
    setWorldName: Dispatch<SetStateAction<string>>;
    setGuild: Dispatch<SetStateAction<GuildType | undefined>>;
}

const NameContainer = styled.div`
    display : flex;
    width : 40px;
    height : 80px;
    align-items : center;
    justify-content : center;
    margin : 8px;
    border : 1px solid;
    white-space : nowrap;
    writing-mode : vertical-lr;
    text-orientation : upright;
    border-radius : 8px;
    cursor : pointer;
`

const GuildName: React.FC<Props> = ({ guild, setWorldName, setGuild }) => {
    const searchDetailGuild = () => {
        setWorldName(guild.world_name);
        setGuild(guild);
    }

    return (
        <NameContainer onClick={searchDetailGuild}>
            {guild.world_name}
        </NameContainer>
    );
};

export default GuildName;