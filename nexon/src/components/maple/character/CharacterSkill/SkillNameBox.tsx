import React from 'react';
import styled from 'styled-components';


interface Props {
    name: string;
}

const NameBox = styled.div`
    display : flex;
    justify-content : center;
    padding : 12px 8px 0px 8px;
`

const NameFont = styled.div`
    color : #ffffff;
`

const SkillNameBox: React.FC<Props> = ({ name }) => {
    return (
        <NameBox>
            <NameFont> 
                {name}
            </NameFont>
        </NameBox>
    )
}

export default SkillNameBox;