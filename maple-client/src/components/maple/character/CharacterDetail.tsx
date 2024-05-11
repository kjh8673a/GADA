import { lazy } from "react";
import useCharacterTab from "../../../hooks/maple/useCharacterTab";
const CharacterStatus = lazy(() => import("./CharacterStatus/CharacterStatus"));
const CharacterUnion = lazy(() => import("./CharacterUnion/CharacterUnion"));
const CharacterSkill = lazy(() => import("./CharacterSkill/CharacterSkill"));
const CharacterSynergy = lazy(() => import("./CharacterSynergy/CharacterSynergy"));
const CharacterOwn = lazy(() => import("./CharacterOwn/CharacterOwn"));

const CharacterDetail = () => {
  const { tabName } = useCharacterTab();

  if (tabName === "CHARACTER") return <CharacterStatus />;
  if (tabName === "UNION") return <CharacterUnion />;
  if (tabName === "SKILL") return <CharacterSkill />;
  if (tabName === "ORG_CHARACTER") return <CharacterOwn />;
  if (tabName === "SYNERGY") return <CharacterSynergy />;

  return <span>현재 탭 : {tabName}</span>;
};

export default CharacterDetail;

