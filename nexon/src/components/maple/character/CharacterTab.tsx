import styled from "styled-components";
import { TAB_ID_LIST, TAB_LIST } from "../../../@types/maple/TabTypes";
import CharacterTabItem from "./CharacterTabItem";
import useCharacterTab from "../../../hooks/maple/useCharacterTab";

const StyledTab = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 44px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  margin: 8px 0;
`;

const CharacterTab = () => {
  const { selectTab } = useCharacterTab();

  return (
    <StyledTab>
      {TAB_ID_LIST.map((tabId) => (
        <CharacterTabItem key={tabId} clickHandler={selectTab} value={tabId}>
          {TAB_LIST[tabId]}
        </CharacterTabItem>
      ))}
    </StyledTab>
  );
};

export default CharacterTab;
