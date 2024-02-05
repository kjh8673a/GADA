import React from 'react';
import { CharacterType } from '../../../../@types/maple/CharacterSearch';
import styled from 'styled-components';

interface Props {
    character: CharacterType;
}

const InfoBox = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
`

const CharacterInfo:React.FC<Props> = ({character}) => {
    return (
        <InfoBox>
            <div>
                Lv.{character.character_level}
            </div>
            <div>
                {character.character_name}
            </div>
            <div>
                서버 : {character.world_name}
            </div>
            <div>
                직업 : {character.character_class}
            </div>
            <div>
                {character.guild_name && 
                    <>
                        길드 : {character.guild_name}
                    </>
                }
            </div>
        </InfoBox>
    )
}

export default CharacterInfo;