import React, { useEffect } from 'react';
import { CharacterBasicType } from '../../../@types/maple/CharacterBasicTypes';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userNickName } from '../../../atoms/maple/characterName';
import useStats from '../../../hooks/maple/useStats';

interface Props {
    characterBasic: CharacterBasicType;
}

const BigContainer = styled.div`
    display : flex;
    height : 120px;
    padding : 10px;
    margin : 10px 0px 10px 0px; 
    border : 1px solid;
    border-style : groove;
    cursor : pointer;
`

const ClickBox = styled.div`
    display : flex;
`

const CharacterImg = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding : 0px 8px 0px 0px;
`

const CharacterDescription = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: center;
`

const CharacterInfo: React.FC<Props> = ({ characterBasic }) => {
    const navigate = useNavigate();
    const [, setUserName] = useRecoilState(userNickName);
    const { convertCombatPower } = useStats();

    useEffect(() => {
        console.log(characterBasic);
        
    },[characterBasic])
    
    const searchCharacter = () => {
        if (characterBasic.data?.character_name) { 
            setUserName(characterBasic.data?.character_name);
            navigate(`/Character/${characterBasic.data?.character_name}`);
        }
    }

    return (
        <BigContainer>
                <ClickBox onClick={searchCharacter}>
                    <CharacterImg>
                        <img src={characterBasic.data?.character_image} />
                        {characterBasic.data?.character_name}
                    </CharacterImg>
                    <CharacterDescription>
                        <div>
                            서버 : {characterBasic.data?.world_name}
                        </div>
                        <div>
                            직업 : {characterBasic.data?.character_class}
                        </div>
                        <div>
                            레벨 : {characterBasic.data?.character_level}
                        </div>
                        <div>
                            길드 : {characterBasic.data?.character_guild_name}
                        </div>
                        <div>
                            전투력 : {convertCombatPower(characterBasic.data?.combat_power)}
                        </div>
                    </CharacterDescription>
                </ClickBox>
        </BigContainer>
    )
}

export default CharacterInfo;