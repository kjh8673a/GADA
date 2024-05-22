import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 12px 0 12px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
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
  display: flex;
`;

const StyledStarforce = styled.div`
  margin-left: 8px;
  color: rgb(254, 199, 99);
  display: flex;
  align-items: center;
`;

const StyledStarforceImg = styled.img`
  width: 8px;
  margin-right: 4px;
`;

const StyledTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;

interface Props {
  weaponImg: string | undefined;
  weaponStarforce: string | undefined;
  weaponSlot: string | undefined;
  weaponName: string | undefined;
}

const WeaponBasicInfo: React.FC<Props> = ({ weaponImg, weaponStarforce, weaponSlot, weaponName }) => {
  return (
    <StyledBox>
      <StyledImg src={weaponImg || `${process.env.PUBLIC_URL}/assets/question-mark.png`} alt="weapon icon" />
      <StyledInfo>
        <StyledSubtitle>
          {weaponSlot}
          {weaponStarforce && +weaponStarforce > 0 && (
            <StyledStarforce>
              <StyledStarforceImg src={`${process.env.PUBLIC_URL}/assets/star.png`} alt="starforce star" />
              {weaponStarforce}
            </StyledStarforce>
          )}
        </StyledSubtitle>
        <StyledTitle>{weaponName || "장착장비 없음"}</StyledTitle>
      </StyledInfo>
    </StyledBox>
  );
};

export default WeaponBasicInfo;

