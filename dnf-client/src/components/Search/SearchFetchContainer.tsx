import React from "react";
import styled from "styled-components";
import { TSearchCharacters } from "../../@types/SearchTypes";
import SearchCharacterItem from "./SearchCharacterItem";
import Loading from "../common/Loading";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  if (searchCharacters.read()!.data!.length > 0) {
    return (
      <StyledBox>
        {searchCharacters.read()!.data!.map((v: any, i: any) => {
          return <SearchCharacterItem key={i} data={v} />;
        })}
      </StyledBox>
    );
  } else {
    return (
      <Loading
        text={`"${searchParams.get("input")}" 에 대한 검색결과가 없습니다.`}
        play={false}
      />
    );
  }
};

export default SearchFetchContainer;
