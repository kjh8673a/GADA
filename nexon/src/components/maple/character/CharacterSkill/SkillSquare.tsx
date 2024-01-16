import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    border : 1px;
    width : 60px;
    heigth : 48px;
    margin : 10px;
    z-index : 10;
    position : relative;
`
const ImgBox = styled.img`
    display : flex;
    width : 60px;
    border : 1px;
`

const LevelPosition = styled.div`
    position : absolute;
    color: rgb(255, 255, 255);
    background: rgb(0, 0, 0);
    width : 24px;
    heigth : 8px;
    bottom : -8px;
    text-align : center;
    border-radius : 8px;
`

//스킬이 들어있는 박스를 보여줄 구간입니다.
//props가 필요함. 스킬을 받아올거니까.
//먼저 여기선 스킬에 대한 이미지 및 레벨 보여주기.

interface Props {
    skillImg: string;
    skillLevel: number;
}

const SkillSquare : React.FC<Props> = ({skillImg, skillLevel}) => {
    return (
        <Box>
            <ImgBox src={skillImg} />
            <LevelPosition>{skillLevel}</LevelPosition>
        </Box>
    )
}

export default SkillSquare;