import React from 'react';
import styled from 'styled-components';

interface Props {
    level: number;
    effect: string;
}

const EffectContainer = styled.div`
    display : flex;
    color : #ffffff;
    padding : 12px;
    white-space : pre-line;
`


const SkillEffect:React.FC<Props> = ({level, effect}) => {
    return (
        <EffectContainer>
            [현재 레벨 {level}]
            <br/>
            {effect}
        </EffectContainer>
    )
}

export default SkillEffect; 