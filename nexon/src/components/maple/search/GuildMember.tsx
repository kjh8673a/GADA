import React, { useEffect, useState } from 'react';
import { useGuild } from '../../../hooks/maple/useGuild';
import { GuildMemberType } from '../../../@types/maple/GuildTypes';
import styled from 'styled-components';
import Member from './Member';

interface Props {
    name: string | undefined,
    worldName : string | undefined,
}

const MemberContainer = styled.div`
    display : flex;
    margin : 10px 0px 10px 0px;
    flex-wrap : wrap;
`
    
    const MemberBox = styled.div`
    display : flex;
    flex-direction : column;
`


const GuildMember: React.FC<Props> = ({ name, worldName }) => {
    const { getMember } = useGuild();
    const [member, setMember] = useState<GuildMemberType[]>([]);
    useEffect(() => {
        if (name && worldName) {
            getMember(name, worldName).then((res) => {
                if (res) {
                    setMember(res);
                }
            })
            
        }
    }, [name, worldName])

    return (
        <MemberContainer>
            {member.map((_, index) => (
                <MemberBox>
                    <Member member={member[index]} />
                </MemberBox>
            ))}
        </MemberContainer>
    );
};

export default GuildMember;