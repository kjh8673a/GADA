import React, { useEffect } from "react";
import CharacterSummary from "./CharacterSummary/CharacterSummary";
import CharacterTab from "./CharacterTab";
import CharacterDetail from "./CharacterDetail";
import { TCharacterData } from "../../@types/CharacterTypes";
import { useSetRecoilState } from "recoil";
import { atomCharacterState } from "../../atoms/characterState";

interface Props {
  characterData: { read(): TCharacterData | undefined };
}

const CharacterFetchContainer: React.FC<Props> = ({ characterData }) => {
  const setCharacterInfo = useSetRecoilState(atomCharacterState);
  useEffect(() => {
    setCharacterInfo(characterData.read()!);
  }, [characterData.read()]);
  return (
    <React.Fragment>
      <CharacterSummary />
      <CharacterTab />
      <CharacterDetail />
    </React.Fragment>
  );
};

export default CharacterFetchContainer;
