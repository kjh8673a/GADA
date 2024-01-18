import React from 'react';
import { skillType } from '../../../../@types/maple/CharacterSkillType';
import styled from 'styled-components';
import SkillDetailBox from './SkillDetailBox';

const StyledBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 400px;
  bottom : 60px;
  background-color: #2b2c2a;
  z-index: 2;
  border-radius: 16px;
  border: 2px solid #777;
  padding-bottom: 8px;
`;


interface Props {
    skill: skillType;
}

const SkillDetail : React.FC<Props> = ({skill}) => {
    return (
        <StyledBox>
            <SkillDetailBox skill={skill}/>
        </StyledBox>
    )
}

export default SkillDetail;