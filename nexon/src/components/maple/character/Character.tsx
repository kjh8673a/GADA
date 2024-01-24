import React from "react";
import { useParams } from "react-router-dom";
import CenteredBox from "../../../style/CenteredBox";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userNickName } from "../../../atoms/maple/characterName";
import useCharacterBasic from "../../../hooks/maple/useCharacterBasic";
import FetchErrorBoundary from "../../common/FetchErrorBoundary";
import CharacterTab from "./CharacterTab";
import { useCharacterData } from "../../../hooks/maple/useCharacterData";
import CharacterSummary from "./CharacterSummary/CharacterSummary";
import CharacterDetail from "./CharacterDetail";
import { atomStatIsFetching } from "../../../atoms/maple/characterStatState";
import { atomWeaponIsFetching } from "../../../atoms/maple/characterWeaponState";
import SkeletonBox from "../../common/SkeletonBox";
import Loading from "../../common/Loading";

const Character = () => {
  const params = useParams();
  const setUserName = useSetRecoilState(userNickName);
  const { getCharacterBasic } = useCharacterBasic();
  const { getCharacterStats, getCharacterWeapons } = useCharacterData();
  const statIsFetching = useRecoilValue(atomStatIsFetching);
  const weaponIsFetching = useRecoilValue(atomWeaponIsFetching);

  useEffect(() => {
    getCharacterBasic(params.Charactername as string);
    getCharacterStats(params.Charactername as string);
    getCharacterWeapons(params.Charactername as string);
  }, [params.Charactername, getCharacterBasic, getCharacterStats, getCharacterWeapons]);

  useEffect(() => {
    setUserName(params.Charactername as string);
  }, [setUserName, params.Charactername]);

  if (statIsFetching || weaponIsFetching) {
    return <Loading text="캐릭터 정보를 조회 중 입니다" />;
  }

  return (
    <CenteredBox>
      <FetchErrorBoundary errorMsg="조회된 캐릭터가 없습니다.">
        {/* 여기에 조회된 캐릭터 정보 표시 */}
        <CharacterSummary />
        {/* 아래에는 탭 표시 */}
        <CharacterTab />
        {/* 아래에는 데이터 표시 */}
        <CharacterDetail />
      </FetchErrorBoundary>
    </CenteredBox>
  );
};

export default Character;

