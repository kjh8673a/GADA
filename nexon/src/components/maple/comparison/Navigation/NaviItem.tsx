import styled from "styled-components";
import { TabNameType } from "../../../../@types/maple/ComparisonTabTypes";
import { Dispatch, SetStateAction } from "react";

const StyledTabItem = styled.div<{ selected: boolean }>`
  position: relative;
  bottom: -1px;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 4px;
  font-weight: 600;
  color: ${(props) => (props.selected ? "#fff" : "#666a7a")};
  background-color: ${(props) => (props.selected ? "#5cb85c" : "#fff")};
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

interface Props {
  children: React.ReactNode;
  currTab: string;
  value: TabNameType;
  clickHandler: Dispatch<SetStateAction<TabNameType>>;
}

const NaviItem: React.FC<Props> = ({ children, currTab, value, clickHandler }) => {
  return (
    <StyledTabItem selected={value === currTab} onClick={() => clickHandler(value)}>
      {children}
    </StyledTabItem>
  );
};

export default NaviItem;

