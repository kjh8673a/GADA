import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import SkillDetail from './SkillDetail';
import { skillType } from '../../../../@types/maple/CharacterSkillType';

const Box = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    border : 1px;
    width : 60px;
    heigth : 48px;
    padding : 8px;
    z-index : 10;
    position : relative;
`
const ImgBox = styled.img`
    display : flex;
    width : 48px;
    border : 1px;
`

const LevelPosition = styled.div`
    position : absolute;
    color: rgb(255, 255, 255);
    background: rgb(0, 0, 0);
    width : 24px;
    heigth : 8px;
    bottom : -1px;
    text-align : center;
    border-radius : 8px;
`

//스킬이 들어있는 박스를 보여줄 구간입니다.
//props가 필요함. 스킬을 받아올거니까.
//먼저 여기선 스킬에 대한 이미지 및 레벨 보여주기.

interface Props {
    skill : skillType
}

const SkillSquare: React.FC<Props> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    const hoverInHandler = useCallback(() => {
    setIsHovered(true);
    }, []);

    const hoverOutHandler = useCallback(() => {
        setIsHovered(false);
    }, []);
    if (skill.skill_level !== 0) {
        return (
            <Box
                onMouseEnter={hoverInHandler}
                onMouseLeave={hoverOutHandler}
            >
                <ImgBox src={skill.skill_icon} />
                <LevelPosition>{skill.skill_level}</LevelPosition>
                {isHovered && <SkillDetail skill={skill}/>}
            </Box>
        )
    }
    return null;
}

export default SkillSquare;