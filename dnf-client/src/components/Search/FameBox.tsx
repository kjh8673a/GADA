import React from 'react';
import styled from 'styled-components';

interface Props {
  fame: number;
}

const StyledBox = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const FameIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const FameText = styled.div`
`;

const FameBox: React.FC<Props> = ({ fame }) => {
  return (
    <StyledBox>
      <FameIcon src={"/assets/fame_icon.png"} alt="fame image" />
      <FameText>{fame}</FameText>
    </StyledBox>
  );
};

export default FameBox;