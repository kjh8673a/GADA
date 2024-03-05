import React, { useEffect } from "react";
import CharacterSummary from "./CharacterSummary/CharacterSummary";
import CharacterTab from "./CharacterTab";
import CharacterDetail from "./CharacterDetail";
import { TCharacterData } from "../../@types/CharacterTypes";
import { useRecoilState } from "recoil";
import { atomCharacterState } from "../../atoms/characterState";
import Loading from "../common/Loading";

interface Props {
  characterData: { read(): TCharacterData | undefined };
}

const CharacterFetchContainer: React.FC<Props> = ({ characterData }) => {
  const [characterInfo, setCharacterInfo] = useRecoilState(atomCharacterState);
  useEffect(() => {
    setCharacterInfo(characterData.read()!);
  }, [characterData.read()]);
  return (
    <React.Fragment>
      {characterInfo.data ? (
        <>
          <CharacterSummary />
          <CharacterTab />
          <CharacterDetail />
        </>
      ) : (
        <Loading text="해당하는 캐릭터가 없습니다." play={false} />
      )}
    </React.Fragment>
  );
};

export default CharacterFetchContainer;
