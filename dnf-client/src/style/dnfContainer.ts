import styled from "styled-components";

export const DnfContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px - 40px - 120px);
`;

export const MainImg = styled.img`
  position: relative;
  width: 150px;
  margin-bottom: 24px;
`;

export const NameSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
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
  right: 36px;
  &:hover {
    cursor: pointer;
  }
`;

export const BookmarkBox = styled.div`
  margin: 8px 0;
  max-width: 400px;
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

export const PointerText = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export const Line = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 2px solid rgba(64, 64, 64, 1);
`;

export const DnfHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0px;
  border-top: 1px black solid;
  border-bottom: 1px black solid;
  color: #dbc68d;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(122, 122, 122, 0) 38.6%,
      rgba(0, 0, 0, 0.12) 100%
    ),
    #102c55;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #497d93;
`;
