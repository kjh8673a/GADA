import React from 'react';
import { hexaStat } from '../../../../@types/maple/CharacterSkillType';
import { SkillContainer, SkillDegree, SolidHr } from './SixSkill';
import styled from 'styled-components';

interface Props {
    hexaStat: hexaStat;
}

const StatBox = styled.div`
    display : flex;
    flex-direction : column;
    padding : 4px 0px 4px 20px;
`

const MainStatBox = styled.div`
    font-weight : bold;
`
const AssistStatBox = styled.div`

`

const HexaStat:React.FC<Props> = ({hexaStat}) => {
    return (
        <SkillContainer>
            <SkillDegree>
                헥사 스탯
            </SkillDegree>
            <SolidHr />
            <StatBox>
                <MainStatBox>
                    Lv.{hexaStat.main_stat_level} {hexaStat.main_stat_name}
                </MainStatBox>
                <AssistStatBox>
                    Lv.{hexaStat.sub_stat_level_1} {hexaStat.sub_stat_name_1}
                </AssistStatBox>
                <AssistStatBox>
                    Lv.{hexaStat.sub_stat_level_2} {hexaStat.sub_stat_name_2}
                </AssistStatBox>       
            </StatBox>
        </SkillContainer>
    )
}

export default HexaStat;