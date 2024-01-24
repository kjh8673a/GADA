import React, { useEffect } from 'react';
import { GuildType } from '../../../@types/maple/GuildTypes';
import styled from 'styled-components';

interface Props {
    guild: GuildType | undefined;
}

const Container = styled.div`
    display : flex;
`

const GuildInfo: React.FC<Props> = ({ guild }) => {
    console.log(guild?.world_name);
    return (
        <Container>
            
        </Container>
    );
};

export default GuildInfo;