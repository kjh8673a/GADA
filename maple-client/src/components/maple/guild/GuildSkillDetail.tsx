import React, {useState, useCallback} from 'react';
import { skillType } from '../../../@types/maple/CharacterSkillType';
import styled from 'styled-components';
import GuildSkillHover from './GuildSkillHover';

interface Props {
    skill: skillType;
}

const SkillBox = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    border : 1px;
    width : 36px;
    padding : 0px 12px 0px 0px;
    z-index : 10;
    position : relative;
`

const SkillImg = styled.img`
    display : flex;
    width : 36px;
    border : 1px;
`

const LevelPosition = styled.div`
    position : absolute;
    color: rgb(255, 255, 255);
    background: rgb(0, 0, 0);
    width : 24px;
    heigth : 4px;
    bottom : -10px;
    text-align : center;
    border-radius : 8px;
`


const GuildSkillDetail: React.FC<Props> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    const hoverInHandler = useCallback(() => {
    setIsHovered(true);
    }, []);

    const hoverOutHandler = useCallback(() => {
        setIsHovered(false);
    }, []);

    return (
       <SkillBox
            onMouseEnter={hoverInHandler}
            onMouseLeave={hoverOutHandler}
        >
            <SkillImg src={skill.skill_icon} />
            <LevelPosition>{skill.skill_level}</LevelPosition>
            {isHovered && <GuildSkillHover skill={skill}/>}
        </SkillBox>
    );
};

export default GuildSkillDetail;