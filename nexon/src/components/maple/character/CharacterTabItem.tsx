import styled from "styled-components";
import useCharacterTab from "../../../hooks/maple/useCharacterTab";

const StyledTabItem = styled.div<{ selected: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  border-right: 1px solid #ccc;
  font-weight: 600;
  color: ${(props) => (props.selected ? "#fff" : "#666a7a")};
  background-color: ${(props) => (props.selected ? "#5cb85c" : "#fff")};
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

interface Props {
  children: React.ReactNode;
  value: string;
  clickHandler: (param: string) => void;
}

const CharacterTabItem: React.FC<Props> = ({ children, value, clickHandler }) => {
  const { tabName } = useCharacterTab();

  return (
    <StyledTabItem selected={value === tabName} onClick={() => clickHandler(value)}>
      {children}
    </StyledTabItem>
  );
};

export default CharacterTabItem;
