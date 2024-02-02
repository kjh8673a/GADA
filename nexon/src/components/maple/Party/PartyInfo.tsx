import styled from "styled-components";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 12px;
  border-radius: 4px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--custom-shadow);
`;

const StyledImg = styled.img`
  width: 40px;
  margin-right: 12px;
`;

const StyledPara = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyleTextBold = styled.span`
  font-weight: 600;
`;

const PartyInfo = () => {
  return (
    <StyledBox>
      <StyledImg src={`${process.env.PUBLIC_URL}/assets/exclamation-mark.png`} alt="exclamation-mark" />
      <StyledPara>
        <span>
          본 서비스의 파티 시너지 결과는 실제 &nbsp;
          <StyleTextBold>인게임 데이터</StyleTextBold>
          &nbsp;와 상이할 수 있습니다.
        </span>
        <span>
          시너지 결과는&nbsp;
          <StyleTextBold>스킬 강화 레벨</StyleTextBold>에 따라 달라질 수 있습니다.
        </span>
      </StyledPara>
    </StyledBox>
  );
};

export default PartyInfo;
