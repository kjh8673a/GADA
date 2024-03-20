import styled from "styled-components";
import { TabNameType } from "../../@types/TabTypes";
import useCharacterTab from "../../hooks/useCharacterTab";

const StyledTabItem = styled.div<{ selected: boolean; $navItemCount: number }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  color: ${(props) => (props.selected ? "#fff" : "#a5a5a5")};
  //background-color: ${(props) =>
    props.selected ? "#5cb85c" : "var(--secondary-bg-color)"};
  overflow: hidden;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  &:hover {
    cursor: pointer;
    color: #fff;
    transition: 0.2s;
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

const CharacterTabItem: React.FC<Props> = ({
  children,
  value,
  clickHandler,
  navItemCount,
}) => {
  const { tabName } = useCharacterTab();

  return (
    <StyledTabItem
      selected={value === tabName}
      onClick={() => clickHandler(value)}
      $navItemCount={navItemCount}
    >
      {children}
    </StyledTabItem>
  );
};

export default CharacterTabItem;
