import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    flex-wrap : wrap;
    margin : 8px;
    border: 1px solid #000;
    border-radius : 8px;
`

const Skill = styled.div`
    display : flex;
`
interface Props {
  children: React.ReactNode;
}



const SkillBox : React.FC<Props> = ({children}) => {
    return (
        <Box>
            {children}
        </Box>
    )
}

export default SkillBox;