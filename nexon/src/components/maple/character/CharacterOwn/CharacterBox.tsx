import React from 'react';
import styled from 'styled-components';
import { CharacterType } from '../../../../@types/maple/CharacterSearch';
import CharacterInfo from './CharacterInfo';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { TabNameType } from '../../../../@types/maple/TabTypes';
import { atomTabName } from '../../../../atoms/maple/characterTabState';
import { userNickName } from '../../../../atoms/maple/characterName';


interface Props {
    character: CharacterType;
}

const CBox = styled.div`
    display : flex;
    border : 3px solid;
    border-radius : 8px;
    border-style : ridge;
    margin : 8px;
    flex-direction : column;
`

const CharacterInfoBox = styled.div`
    display : flex;
    padding : 8px;
`

const CharacterImg = styled.img`
    width : 100px;
    heigth : 105px;
`

const CharacterDetail = styled.button`
    position : relative;
    bottom : 0;
    cursor : pointer;
    margin-top : auto;
    border-radius : 8px;
`

const CharacterBox: React.FC<Props> = ({ character }) => {
    const navigate = useNavigate();
    const [, setTabName] = useRecoilState<TabNameType>(atomTabName);
    const [, setUserName] = useRecoilState(userNickName);
    const searchCharacter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget.value;
        setTabName("CHARACTER");
        setUserName(target);
        navigate(`/Character/${target}`);
    }
    
    return(
        <CBox>
            <CharacterInfoBox>
                <CharacterImg src={character.character_image} />
                <CharacterInfo character={character} />
            </CharacterInfoBox>
            <CharacterDetail onClick={searchCharacter} value={character.character_name}>캐릭터 상세보기</CharacterDetail>
        </CBox>
    )
}

export default CharacterBox;