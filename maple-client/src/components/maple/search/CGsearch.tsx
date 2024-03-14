import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userNickName } from "../../../atoms/maple/characterName";
import styled from "styled-components";
import CharacterInfo from "./CharacterInfo";
import useCharacterBasic from "../../../hooks/maple/useCharacterBasic";
import { useGuild } from "../../../hooks/maple/useGuild";
import { GuildType } from "../../../@types/maple/GuildTypes";
import GuildName from "./GuildName";
import { atomFetchError } from "../../../atoms/common/fetchErrorState";

const BigContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
`;
const SmallContainer = styled.div`
  display: flex;
  width: 1140px;
  margin: 10px;
  flex-direction: column;
`;

const CharacterContainer = styled.div`
  display: flex;
`;
const GuildServerContainer = styled.div`
  display: flex;
  max-width: 1140px;
  border: 1px solid;
  border-style: inset;
  margin: 10px 0px 10px 0px;
  height: auto;
  width: auto;
`;

const NoGuild = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 10px 0px 10px 0px;
  height: auto;
  width: auto;
`;

const CGsearch = () => {
  const params = useParams<{ name: string }>();
  const [guildList, setGuildList] = useState<GuildType[]>([]);
  const [characterName, setCharacterName] = useRecoilState<string>(userNickName);
  const { characterBasic, getCharacterBasic } = useCharacterBasic();
  const { getAllGuild } = useGuild();
  const [_status, _setStatus] = useState<"pending" | "fulfilled" | "rejected">("pending");
  const [_promise, _setPromise] = useState<Promise<void>>();
  const [_error, _setError] = useRecoilState<Error | null>(atomFetchError);

  const _resolvePromise = useCallback((res: any) => {
    _setStatus("fulfilled");
    setGuildList(res);
  }, []);

  const _rejectPromise = useCallback(
    (error: Error) => {
      _setStatus("rejected");
      _setError(new Error("Fetch failed"));
    },
    [_setError]
  );

  useEffect(() => {
    _setStatus("pending");
    if (params) {
      const { name } = params;
      if (name) {
        setCharacterName(name);
        getCharacterBasic(name);
        _setPromise(getAllGuild(name).then(_resolvePromise, _rejectPromise));
      }
    }
  }, [params, setCharacterName, getCharacterBasic, getAllGuild, _setPromise, _resolvePromise, _rejectPromise]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  if (_status === "rejected") {
    console.error(_error);
    // throw _error;
  }

  if (guildList.length === 0) return null;

  return (
    <BigContainer>
      <SmallContainer>
        '{characterName}'에 대한 검색결과입니다.
        <CharacterContainer>
          <CharacterInfo characterBasic={characterBasic} />
        </CharacterContainer>
        {guildList.length !== 0 ? (
          <GuildServerContainer>
            {guildList.map((_, index) => (
              <GuildName key={index} guild={guildList[index]} />
            ))}
          </GuildServerContainer>
        ) : (
          <NoGuild>길드가 존재하지 않습니다</NoGuild>
        )}
      </SmallContainer>
    </BigContainer>
  );
};

export default CGsearch;

