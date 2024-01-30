import styled from "styled-components";

// 로고
export const DomainLogo = styled.img`
  width: 80px;
  aspect-ratio: 1.2;
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
  width: 120px;
  padding: 4px 12px;
  display: flex;
  justify-content: space-between;
`;

//헤더의 위 컨테이너
export const UpContainer = styled.div`
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-bg-color);
  height: 64px;
`;

export const Container = styled.div`
  width: 1140px;
`;

//헤더의 아래 컨테이너
export const DownConatiner = styled.div`
  padding-left: 10%;
  display: flex;
  jutify-content: center;
  align-items: center;
  background-color: var(--secondary-bg-color);
  height: 40px;
`;

export const PageHeader = styled.a`
  text-decoration-line: none;
  color: #eee;
  margin: 0;
  padding: 0 8px;
  font-size: 0.9rem;

  &:hover {
    font-weight: 800;
  }
`;

