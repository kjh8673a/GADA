import styled from "styled-components";
import { TAB_ID_LIST, TAB_LIST } from "../../../@types/maple/TabTypes";
import CharacterTabItem from "./CharacterTabItem";
import useCharacterTab from "../../../hooks/maple/useCharacterTab";

const StyledTab = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 44px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  margin: 12px 0;
  background-color: #fff;
  box-shadow: var(--custom-shadow);
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 36px;
  }
`;

const CharacterTab = () => {
  const { selectTab } = useCharacterTab();

  return (
    <StyledTab>
      {TAB_ID_LIST.map((tabId) => (
        <CharacterTabItem key={tabId} clickHandler={selectTab} value={tabId} navItemCount={TAB_ID_LIST.length}>
          {TAB_LIST[tabId]}
        </CharacterTabItem>
      ))}
    </StyledTab>
  );
};

export default CharacterTab;

