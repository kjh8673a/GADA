import styled from "styled-components";

export const TabBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
  padding: 10px 0px;
  align-items: center;
  width: 100%;
  background-color: #3d444c;
  border-radius: 10px;
`;

export const TabItemBox = styled.div<{ selected: boolean }>`
  margin: 0px 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.selected ? "white" : "#3d444c")};
  color: ${(props) => (props.selected ? "white" : "#666a7a")};
  cursor: pointer;
  &:hover {
    color: white;
    transition: 0.2s;
  }
`;
