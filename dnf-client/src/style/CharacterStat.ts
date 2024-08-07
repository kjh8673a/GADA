import styled from "styled-components";

export const StatBox = styled.div<{ width: number }>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => props.width}%;
  background-color: rgb(0, 0, 0, 1);
  font-size: 1.05rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StatHeader = styled.div`
  box-sizing: border-box;
  color: #dbc68d;
  font-size: 1.2rem;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ColorText = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  white-space: pre-line;

  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
`;
