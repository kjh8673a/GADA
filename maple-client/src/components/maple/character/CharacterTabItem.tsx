import styled from "styled-components";
import useCharacterTab from "../../../hooks/maple/useCharacterTab";
import { TabNameType } from "../../../@types/maple/TabTypes";

const StyledTabItem = styled.div<{ selected: boolean; $navItemCount: number }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  border-right: 1px solid #ccc;
  color: ${(props) => (props.selected ? "#fff" : "#666a7a")};
  background-color: ${(props) => (props.selected ? "#5cb85c" : "#fff")};
  overflow: hidden;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: ${(props) => `${100 / props.$navItemCount}%`};
    padding: 0;
  }
`;

interface Props {
  children: React.ReactNode;
  value: TabNameType;
  clickHandler: (param: TabNameType) => void;
  navItemCount: number;
}

const CharacterTabItem: React.FC<Props> = ({ children, value, clickHandler, navItemCount }) => {
  const { tabName } = useCharacterTab();

  return (
    <StyledTabItem selected={value === tabName} onClick={() => clickHandler(value)} $navItemCount={navItemCount}>
      {children}
    </StyledTabItem>
  );
};

export default CharacterTabItem;

