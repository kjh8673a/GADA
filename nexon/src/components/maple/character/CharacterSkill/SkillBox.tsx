import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    flex-wrap : wrap;
    width : 100%;
    padding : 4px;
    margin : 4px;
`


interface Props {
  children: React.ReactNode;
}



const SkillBox: React.FC<Props> = ({ children }) => {
    return (
        <Box>
            {children}
        </Box>
    )
}

export default SkillBox;