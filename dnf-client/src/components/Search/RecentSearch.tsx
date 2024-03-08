import React from "react";
import styled from "styled-components";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const StyledBox = styled.div<{ visbility: string }>`
  display: flex;
  visibility: ${(props) => props.visbility};
  align-items: center;
  font-size: 0.8rem;
  gap: 10px;
`;

const RecentSearchItem = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
  &:hover {
    cursor: pointer;
  }
`;

const RecentSearch = () => {
  const { recentSearch, clickRecentSearch } = useLocalStorage();
  const navigate = useNavigate();
  return (
    <StyledBox visbility={recentSearch.length < 1 ? "hide" : "visible"}>
      {recentSearch.map((v, i) => {
        return (
          <RecentSearchItem
            key={i}
            onClick={() => clickRecentSearch(navigate, v)}
          >
            {v}
          </RecentSearchItem>
        );
      })}
    </StyledBox>
  );
};

export default RecentSearch;
