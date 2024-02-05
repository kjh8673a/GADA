import React, {useState, useEffect} from 'react';
import { skillType } from '../../../@types/maple/CharacterSkillType';
import styled from 'styled-components';
import GuildSkillDetail from '../search/GuildSkillDetail';

interface Props {
    skill: skillType[] | undefined;
}

const SkillContainer = styled.div`
    padding : 4px 0px 0px 0px;
`

const NoSkill = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`
const SkillBox = styled.div`
    display : flex;
    flex-direction : flex-start;
    padding : 4px 0px 4px 0px;
`

const GuildSkill: React.FC<Props> = ({ skill }) => {
    useEffect(() => {
        if (skill?.length === 0) {
            setHaveSkill(false);
        } else {
            setHaveSkill(true);
        }
    },[skill])
    const [haveSkill, setHaveSkill] = useState<boolean>(false);
    

    return (
        <SkillContainer>
            <SkillBox>
                {haveSkill && skill ? (skill.map((_, index) => (
                    <GuildSkillDetail skill={skill[index]} />
                )))
                    : <NoSkill>스킬이 존재하지 않습니다.</NoSkill>}
            </SkillBox>
        </SkillContainer>
    );
};

export default GuildSkill;