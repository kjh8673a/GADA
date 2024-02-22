import styled from "styled-components";
import { getFamousCharacter } from "../../../api/Character/FamousCharacter";
import useFetch from "../../../hooks/useFetch";
import { convertObjToSnakeCaseObj } from "../../../hooks/commonUtils";
import { useMemo } from "react";
import CharacterItem from "./CharacterItem";
import { FamousCharacterType } from "../../../@types/maple/FamousCharacterType";

const StyledBox = styled.ul`
  margin: 0;
  padding: 0;
  width: 400px;
  box-shadow: var(--custom-shadow);
  background-color: var(--secondary-bg-color);
  list-style: none;
  font-size: 0.8rem;
  border-radius: 4px;
`;

const StyledHeader = styled.li`
  width: 100%;
  border-bottom: 1px solid var(--third-bg-color);
  padding: 6px 8px;
  box-sizing: border-box;
  font-weight: 600;
`;

const FamousCharacters = () => {
  const result = useFetch(getFamousCharacter, null);
  const convertedResult: FamousCharacterType[] = useMemo(() => {
    const converted = convertObjToSnakeCaseObj(result);
    if (converted?.data) {
      return converted.data.ranking;
    }
    return null;
  }, [result]);

  if (!convertedResult) return null;
  console.log(convertedResult);

  return (
    <StyledBox>
      <StyledHeader>주간 인기 검색 캐릭터</StyledHeader>
      {convertedResult.map((character) => (
        <CharacterItem key={character.rank} data={character} />
      ))}
    </StyledBox>
  );
};

export default FamousCharacters;

