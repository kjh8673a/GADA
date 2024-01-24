import styled from "styled-components";

const StyledBox = styled.div`
  width: 100%;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledErrorInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
`;

const StyledMainMsg = styled.span`
  font-size: 1.2rem;
`;

const StyledSubMsg = styled.span`
  display: inline-block;
  text-align: center;
  padding: 16px 0;
  color: #555;
  font-size: 0.9rem;
  white-space: pre-wrap;
`;

const StyledButton = styled.a`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 0.9rem;
  text-decoration-line: none;

  &:hover {
    background-color: #1f77c0;
  }
`;

const FetchCharacterError = () => {
  return (
    <StyledBox>
      <StyledErrorInfo>
        <StyledIcon src={`${process.env.PUBLIC_URL}/assets/question-mark.png`} alt="question-mark" />
        <StyledMainMsg>캐릭터 정보를 불러오지 못했습니다.</StyledMainMsg>
        <StyledSubMsg>
          캐릭터 조회를 위해서는 2023년 12월 21일 이후 접속 기록이 필요합니다.
          <br />
          (조회할 캐릭터의 대소문자를 유의해 입력해주세요.)
        </StyledSubMsg>
        <StyledButton href="/">메인으로</StyledButton>
      </StyledErrorInfo>
    </StyledBox>
  );
};

export default FetchCharacterError;

