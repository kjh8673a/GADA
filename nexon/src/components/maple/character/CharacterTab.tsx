import styled from "styled-components";
import { TAB_ID_LIST, TAB_LIST } from "../../../@types/maple/TabTypes";
import CharacterTabItem from "./CharacterTabItem";
import useCharacterTab from "../../../hooks/maple/useCharacterTab";

const StyledTab = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 44px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  margin: 12px 0;
  background-color: #fff;
  box-shadow: var(--custom-shadow);
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

