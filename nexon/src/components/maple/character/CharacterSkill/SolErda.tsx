import React from "react";
import styled from "styled-components";

interface Props {
  solErdaEnergy: number;
  solErdaFragment: number;
}

const ErdaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding-left: 20px;
`;
const ErdaBox = styled.div`
  display: flex;
`;

const ErdaImg = styled.img`
  width: 24px;
  height: 24px;
  padding: 0px 4px 2px 4px;
`;

const SolErda: React.FC<Props> = ({ solErdaEnergy, solErdaFragment }) => {
  return (
    <ErdaContainer>
      <ErdaBox>
        사용한 솔 에르다
        <ErdaImg src="/assets/solErda_Energy.png" /> {solErdaEnergy}개
      </ErdaBox>
      <ErdaBox>
        사용한 솔 에르다 조각
        <ErdaImg src="/assets/solErda_Fragment.png" /> {solErdaFragment}개
      </ErdaBox>
    </ErdaContainer>
  );
};

export default SolErda;
