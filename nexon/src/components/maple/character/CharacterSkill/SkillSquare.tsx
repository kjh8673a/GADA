import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display : flex;
    border : 1px;
    width : 48px;
    heigth : 48px;
`
const ImgBox = styled.img`

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
        </Box>
    )
}

export default SkillSquare;