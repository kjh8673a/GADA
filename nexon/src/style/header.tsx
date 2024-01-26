import styled from "styled-components";

// 로고
export const DomainLogo = styled.img`
  width: 62px;
`;

//헤더의 도메인 이름
export const Domain = styled.a`
  text-decoration-line: none;
  color: white;
  margin: 5px;
`;

//헤더의 input 창
export const InputHeaderName = styled.input`
  outline: none;
  font-size: 10px;
  border-radius: 8px;
  padding: 3px;
  display: flex;
  justify-content: space-between;
`;

//헤더의 위 컨테이너
export const UpContainer = styled.div`
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #757575;
  height: 40px;
`;

export const Container = styled.div`
  width: 1140px;
`;

//헤더의 아래 컨테이너
export const DownConatiner = styled.div`
  padding-left: 10%;
  display: flex;
  jutify-content: center;
  background-color: #d8d8d8;
  height: 32px;
`;

export const PageHeader = styled.a`
  text-decoration-line: none;
  color: black;
  margin: 5px;
`;

