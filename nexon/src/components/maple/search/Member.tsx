import React from 'react';
import { GuildMemberType } from '../../../@types/maple/GuildTypes';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { TabNameType } from '../../../@types/maple/TabTypes';
import { userNickName } from '../../../atoms/maple/characterName';
import { atomTabName } from '../../../atoms/maple/characterTabState';

interface Props {
    member: GuildMemberType | undefined;
}

const MemberContainer = styled.div`
    display : flex;
    width : 255px;
    border : 1px solid rgba(0, 0, 0, .3);
    margin : 5px 10px 5px 10px;
    flex-direction : column;
    border-radius : 8px;
`

const MemberBox = styled.div`
    display : flex;
    align-items : center;
    padding : 8px;
`

const ImgBox = styled.img`
    width : 80px;
    height : 80px;
    margin : 0px 8px 0px 4px;
`
const DescriptionBox = styled.div`
    display : flex;
    flex-direction : column;
    font-size : 12px;
`

const CharacterDetail = styled.button`
    position : relative;
    bottom : 0;
    cursor : pointer;
    margin-top : auto;
    border-radius : 8px;
`

const Member: React.FC<Props> = ({ member }) => {
        const navigate = useNavigate();
        const [, setTabName] = useRecoilState<TabNameType>(atomTabName);
        const [, setUserName] = useRecoilState(userNickName);
        const searchCharacter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget.value;
        setTabName("CHARACTER");
        setUserName(target);
        navigate(`/Character/${target}`);
    }

    return (
        <MemberContainer>
            <MemberBox>
                <ImgBox src={member?.character_image} />         
                <DescriptionBox>
                    <div>
                        닉네임 : {member?.character_name}
                    </div>
                    <div>
                        직업 : {member?.character_class}
                    </div>
                    <div>
                        레벨 : {member?.character_level}
                    </div>
                </DescriptionBox>
            </MemberBox>
            <CharacterDetail onClick={searchCharacter} value={member?.character_name}>캐릭터 상세보기</CharacterDetail>
        </MemberContainer>
    );
};



export default Member;