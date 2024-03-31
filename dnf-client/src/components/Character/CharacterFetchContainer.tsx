import React, { useEffect, useState } from "react";
import CharacterSummary from "./Summary/Summary";
import CharacterTab from "./CharacterTab";
import CharacterDetail from "./CharacterDetail";
import { TCharacterData } from "../../@types/Character/CommonTypes";
import Loading from "../common/Loading";

interface Props {
  characterData: { read(): TCharacterData | undefined };
}

const CharacterFetchContainer: React.FC<Props> = ({ characterData }) => {
  const [data, setData] = useState<TCharacterData>({});
  useEffect(() => {
    setData(characterData.read()!);
  }, [characterData, characterData.read(), setData]);
  return (
    <React.Fragment>
      {data.data ? (
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
