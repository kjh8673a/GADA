import { useCallback } from "react";
import { updateCharacterInfo } from "../../api/Character/Update";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { atomCharacterBasic } from "../../atoms/maple/characterBasicState";
import { TUpdateCharacter } from "../../@types/maple/UpdateCharacterType";
import { atomCharacterExp } from "../../atoms/maple/characterExpState";
import { atomCharacterStats } from "../../atoms/maple/characterStatState";
import { atomCharacterWeapon } from "../../atoms/maple/characterWeaponState";
import {
  atomCharacterUnion,
  atomCharacterUnionArtifact,
} from "../../atoms/maple/characterUnionState";
import {
  atomCharaterErda,
  atomCharaterFiveSkill,
  atomCharaterHexaStat,
  atomCharaterHiperSkill,
  atomCharaterLinkSkill,
  atomCharaterSixSkill,
  atomHaveFiveSkill,
  atomHaveHexaStat,
  atomHaveHiperSkill,
  atomHaveLinkSkill,
  atomHaveSixSkill,
} from "../../atoms/maple/charaterSkill";
import { skillType } from "../../@types/maple/CharacterSkillType";
import { userOwnCharacter } from "../../atoms/maple/characterOwn";
import { CharacterType } from "../../@types/maple/CharacterSearch";
import { atomCharacterSynergy } from "../../atoms/maple/characterSynergyState";
import { atomTabName } from "../../atoms/maple/characterTabState";
import { TAB_INDEX } from "../../@types/maple/TabTypes";
import { convertObjToSnakeCaseObj } from "../commonUtils";
import { isUpdated } from "../../atoms/maple/characterUpdateState";

const useCharacterUpdate = () => {
  const setCharacterBasic = useSetRecoilState(atomCharacterBasic);
  const setExpHistory = useSetRecoilState(atomCharacterExp);

  // tab1
  const setCharacterStat = useSetRecoilState(atomCharacterStats);
  const setCharacterItem = useSetRecoilState(atomCharacterWeapon);

  // tab2
  const setCharacterUnion = useSetRecoilState(atomCharacterUnion);
  const setCharacterArtifact = useSetRecoilState(atomCharacterUnionArtifact);

  // tab3
  const setSixSkill = useSetRecoilState(atomCharaterSixSkill);
  const setHexaStat = useSetRecoilState(atomCharaterHexaStat);
  const setErda = useSetRecoilState(atomCharaterErda);
  const setFiveSkill = useSetRecoilState(atomCharaterFiveSkill);
  const setHyperSkill = useSetRecoilState(atomCharaterHiperSkill);
  const setLinkSkill = useSetRecoilState(atomCharaterLinkSkill);

  const setHaveSixSkill = useSetRecoilState(atomHaveSixSkill);
  const setHaveHexaStat = useSetRecoilState(atomHaveHexaStat);
  const setHaveFiveSkill = useSetRecoilState(atomHaveFiveSkill);
  const setHaveHiperSkill = useSetRecoilState(atomHaveHiperSkill);
  const setHaveLinkSkill = useSetRecoilState(atomHaveLinkSkill);

  // tab4
  const setMyCharacterList = useSetRecoilState(userOwnCharacter);

  // tab5
  const setSynergy = useSetRecoilState(atomCharacterSynergy);

  const fetchUpdateCharacter = useCallback(
    (characterName: string, tab: number) => {
      updateCharacterInfo(characterName, tab)
        .then(
          ({ status, data }: { status: number; data: TUpdateCharacter }) => {
            if (status === 200) {
              setCharacterBasic({
                data: data.data.basicInfo,
              });
              setExpHistory({
                data: data.data.expHistory,
              });
              switch (tab) {
                case 1:
                  setCharacterStat(convertObjToSnakeCaseObj(data.data.stats!));
                  setCharacterItem(data.data.item!);
                  break;
                case 2:
                  setCharacterUnion({
                    data: data.data.unionInfo,
                  });
                  setCharacterArtifact({
                    data: data.data.unionArtifact,
                  });
                  break;
                case 3:
                  const sixSkill: skillType[] =
                    data.data.hexaMatrix?.character_skill_desc!;
                  setSixSkill(sixSkill);
                  if (sixSkill.length !== 0) {
                    setHaveSixSkill(true);
                  } else {
                    setHaveSixSkill(false);
                  }
                  setErda({
                    used_sol_erda_energy:
                      data.data.hexaMatrix?.used_sol_erda_energy!,
                    used_sol_erda_fragment:
                      data.data.hexaMatrix?.used_sol_erda_fragment!,
                  });
                  if (data.data.hexaMatrix?.character_hexa_stat_core !== null) {
                    setHexaStat(
                      data.data.hexaMatrix?.character_hexa_stat_core!
                    );
                    setHaveHexaStat(true);
                  } else {
                    setHaveHexaStat(false);
                  }
                  const fiveSkill: skillType[] =
                    data.data.vmatrix?.character_skill_desc!;
                  setFiveSkill(fiveSkill);
                  if (fiveSkill.length !== 0) {
                    setHaveFiveSkill(true);
                  } else {
                    setHaveFiveSkill(false);
                  }
                  const hyperSkill: skillType[] =
                    data.data.hyperPassive?.character_skill!;
                  setHyperSkill(hyperSkill);
                  let cnt = 0;
                  for (let i = 0; i < hyperSkill.length; i++) {
                    if (hyperSkill[i].skill_level === 0) {
                      cnt++;
                    }
                  }
                  if (cnt !== hyperSkill.length) {
                    setHaveHiperSkill(true);
                  } else {
                    setHaveHiperSkill(false);
                  }
                  const linkSkill: skillType[] =
                    data.data.linkSkill?.character_link_skill!;
                  setLinkSkill(linkSkill);
                  if (linkSkill.length !== 0) {
                    setHaveLinkSkill(true);
                  } else {
                    setHaveLinkSkill(false);
                  }
                  break;
                case 4:
                  const listData = data.data.findMainCharacter!;
                  let characterList: CharacterType[] = [];
                  for (let i = 0; i < listData.length; i++) {
                    characterList[i] = {
                      character_class: listData[i].character_class,
                      character_class_level: listData[i].character_class_level,
                      character_image: listData[i].character_image,
                      character_level: listData[i].character_level,
                      character_name: listData[i].character_name,
                      guild_name: listData[i].guild_name,
                      world_name: listData[i].world_name,
                    };
                  }
                  setMyCharacterList(characterList);
                  break;
                case 5:
                  setSynergy({ data: data.data.synergy });
                  break;
              }
            }
          }
        )
        .catch((err) => {});
    },
    []
  );

  const tabName = useRecoilValue(atomTabName);

  const onClickHandler = (characterName: string) => {
    fetchUpdateCharacter(characterName, TAB_INDEX[tabName]);
  };

  const detailDate = (updatedTime: string) => {
    if (updatedTime === undefined) return "1초전";
    const updatedDate = new Date(updatedTime);
    const milliSeconds = +new Date() - +updatedDate;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `${Math.floor(seconds)}초 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  return { fetchUpdateCharacter, onClickHandler, detailDate };
};

export default useCharacterUpdate;
