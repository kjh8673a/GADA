import React from "react";
import styled from "styled-components";
import { TSearchCharacters } from "../../@types/SearchTypes";
import SearchCharacterItem from "./SearchCharacterItem";

interface Props {
  searchCharacters: { read(): TSearchCharacters | undefined };
}

const StyledBox = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const SearchFetchContainer: React.FC<Props> = ({ searchCharacters }) => {
  return (
    <StyledBox>
      {searchCharacters.read()?.data?.map((v: any, i: any) => {
        return <SearchCharacterItem key={i} data={v}/>;
      })}
    </StyledBox>
  );
};

export default SearchFetchContainer;
