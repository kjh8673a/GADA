import React, { useEffect } from 'react';
import { CharacterBasicType } from '../../../@types/maple/CharacterBasicTypes';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userNickName } from '../../../atoms/maple/characterName';
import useStats from '../../../hooks/maple/useStats';
import { atomFetchError } from '../../../atoms/common/fetchErrorState';

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

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border : 1px solid;
  margin : 16px 0px 16px 0px;
`;

const StyledErrorInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding : 16px 0px 0px 0px;
`;

const StyledMainMsg = styled.span`
  font-size: 1.2rem;
`;

const StyledSubMsg = styled.span`
  display: inline-block;
  text-align: center;
  padding: 16px 0;
  color: #555;
  font-size: 0.9rem;
  white-space: pre-wrap;
`;

const CharacterInfo: React.FC<Props> = ({ characterBasic }) => {
    const navigate = useNavigate();
    const [, setUserName] = useRecoilState(userNickName);
    const { convertCombatPower } = useStats();
    const hasError = useRecoilValue(atomFetchError);
    
    const searchCharacter = () => {
        if (characterBasic.data?.character_name) { 
            setUserName(characterBasic.data?.character_name);
            navigate(`/Character/${characterBasic.data?.character_name}`);
        }
    }
    if (hasError) {
        return (
            <StyledBox>
                <StyledErrorInfo>
                    <StyledMainMsg>캐릭터 정보를 불러오지 못했습니다.</StyledMainMsg>
                        <StyledSubMsg>
                        캐릭터 조회를 위해서는 2023년 12월 21일 이후 접속 기록이 필요합니다.
                        <br />
                        (조회할 캐릭터의 대소문자를 유의해 입력해주세요.)
                        </StyledSubMsg>        
                </StyledErrorInfo>
            </StyledBox>
        )
    } else {
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
}

export default CharacterInfo;