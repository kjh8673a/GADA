import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 12px 0 12px;
`;

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
`;

const StyledInfo = styled.div`
  padding: 0 12px;
`;

const StyledSubtitle = styled.div`
  font-size: 0.8rem;
  color: #ccc;
`;

const StyledTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;

interface Props {
  weaponImg: string | undefined;
  weaponSlot: string | undefined;
  weaponName: string | undefined;
}

const WeaponBasicInfo: React.FC<Props> = ({ weaponImg, weaponSlot, weaponName }) => {
  return (
    <StyledBox>
      <StyledImg src={weaponImg} alt="weapon icon" />
      <StyledInfo>
        <StyledSubtitle>{weaponSlot}</StyledSubtitle>
        <StyledTitle>{weaponName}</StyledTitle>
      </StyledInfo>
    </StyledBox>
  );
};

export default WeaponBasicInfo;

