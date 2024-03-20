import React from "react";
import styled from "styled-components";
import useCharacterTab from "../../hooks/useCharacterTab";
import { TAB_ID_LIST, TAB_LIST } from "../../@types/TabTypes";
import CharacterTabItem from "./CharacterTabItem";

const StyledTab = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 44px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  margin: 12px 0;
  background-color: var(--secondary-bg-color);
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
        <CharacterTabItem
          key={tabId}
          clickHandler={selectTab}
          value={tabId}
          navItemCount={TAB_ID_LIST.length}
        >
          {TAB_LIST[tabId]}
        </CharacterTabItem>
      ))}
    </StyledTab>
  );
};

export default CharacterTab;
