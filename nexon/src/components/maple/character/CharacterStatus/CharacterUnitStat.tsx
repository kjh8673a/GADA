import styled from "styled-components";

const StyledBox = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #fff;
  margin: 4px 0;
`;

const BoldText = styled.span`
  font-weight: 600;
  color: #c1ced6;
`;

interface Props {
  statKey: string;
  statVal: string;
}

const CharacterUnitStat: React.FC<Props> = ({ statKey, statVal }) => {
  return (
    <StyledBox>
      <BoldText>{statKey}</BoldText>
      <span>{statVal}</span>
    </StyledBox>
  );
};

export default CharacterUnitStat;

