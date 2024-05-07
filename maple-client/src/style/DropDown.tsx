import styled from "styled-components";

export const DropDownBtn = styled.div`
  background-color: var(--secondary-bg-color);
  border-radius: 10px;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 60px;

  &:hover {
    background-color: var(--third-bg-color);
    cursor: pointer;
  }
`;

export const DropDownList = styled.div`
  position: absolute;
  z-index: 10;
  left: 0%;
  top: 120%;
  display: flex;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
  flex-direction: column;
  align-items: center;
  width: 190px;
  overflow: hidden;
`;

export const DropDownItem = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 40px;
  padding-left: 20px;
  width: 100%;
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: var(--third-bg-color);
  }
`;