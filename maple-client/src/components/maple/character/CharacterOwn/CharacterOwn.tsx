import { useEffect } from "react";
import styled from "styled-components";
import CharacterBox from "./CharacterBox";
import { useRecoilState } from "recoil";
import { userNickName } from "../../../../atoms/maple/characterName";
import { useParams } from "react-router-dom";
import { useCharacterSearch } from "../../../../hooks/maple/useCharacterSearch";
import { userOwnCharacter } from "../../../../atoms/maple/characterOwn";

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  min-height: 320px;
`;

const CharacterOwn = () => {
  const params = useParams<{ Charactername: string }>();
  const [characterInfo] = useRecoilState(userOwnCharacter);
  const [characterName, setCharacterName] = useRecoilState<string>(userNickName);
  const { getCharacter } = useCharacterSearch();

  useEffect(() => {
    if (characterName) {
      if (params) {
        const { Charactername } = params;
        if (Charactername) {
          setCharacterName(Charactername);
        }
      }
    }
    getCharacter(characterName);
  }, []);

  return (
    <CharacterContainer>
      {characterInfo.map((_, index) => (
        <CharacterBox key={index} character={characterInfo[index]} />
      ))}
    </CharacterContainer>
  );
};

export default CharacterOwn;

