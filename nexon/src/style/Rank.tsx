import styled from "styled-components";

export const TabBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
  padding: 10px 0px;
  align-items: center;
  width: 100%;
  background-color: var(--secondary-bg-color);
  border-radius: 10px;
  box-shadow: var(--custom-shadow);
`;

export const TabItemBox = styled.div<{ selected: boolean }>`
  margin: 4px 8px;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.selected ? "#fff" : "var(--secondary-bg-color)")};
  color: ${(props) => (props.selected ? "#fff" : "#ccc")};
  cursor: pointer;
  &:hover {
    color: #fff;
    transition: 0.2s;
  }
`;

