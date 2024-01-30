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

const CharacterInfo = () => {
  return (
    <StyledBox>
      <StyledImg src={`${process.env.PUBLIC_URL}/assets/exclamation-mark.png`} alt="exclamation-mark" />
      <StyledPara>
        <span>
          캐릭터 스탯 및 장비 정보는&nbsp;
          <StyleTextBold>2023.12.21</StyleTextBold>
          &nbsp;이후 접속한 계정의 캐릭터만 확인이 가능합니다.
        </span>
        <span>
          캐릭터 정보는 매일&nbsp;
          <StyleTextBold>오전 1시</StyleTextBold>에 갱신됩니다.
        </span>
      </StyledPara>
    </StyledBox>
  );
};

export default CharacterInfo;

