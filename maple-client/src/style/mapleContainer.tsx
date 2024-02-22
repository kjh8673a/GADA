import styled from "styled-components";

export const MapleConatiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: 24vh;
`;

export const MainImg = styled.img`
  position: relative;
  right: 16px;
  width: 120px;
  margin-bottom: 24px;
`;

export const NameSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
`;

export const NicknameSearch = styled.input`
  outline: none;
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 8px 12px;
  width: 240px;
`;

export const CheckButton = styled.img`
  width: 16px;
  margin: 0;
  position: absolute;
  right: 16px;
`;

export const BookmarkBox = styled.div`
  margin: 8px 0;
  width: 320px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const BookmarkItemWrapper = styled.div`
  font-size: 0.8rem;
  padding: 5px 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  text-align: center;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
`;

