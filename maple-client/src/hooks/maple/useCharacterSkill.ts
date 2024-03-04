import { useCallback } from "react";
import { getMyFiveSkill, getMyHiperSkill, getMyLinkSkill, getMySixSkill } from "../../api/Character/Skill";
import { erda, hexaStat, skillType } from "../../@types/maple/CharacterSkillType";
import { useRecoilState } from "recoil";
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

export const useCharacterSkill = () => {
  const [characterSixSkill, setCharacterSixSkill] = useRecoilState(atomCharaterSixSkill);
  const [characterFiveSkill, setCharacterFiveSkill] = useRecoilState(atomCharaterFiveSkill);
  const [characterHiperSkill, setCharacterHiperSkill] = useRecoilState(atomCharaterHiperSkill);
  const [characterLinkSkill, setCharacterLinkSkill] = useRecoilState(atomCharaterLinkSkill);
  const [characterErad, setCharacterErad] = useRecoilState(atomCharaterErda);
  const [characterHexaStat, setCharaterHexaStat] = useRecoilState(atomCharaterHexaStat);
  const [haveSixSkill, setHaveSixSkill] = useRecoilState(atomHaveSixSkill);
  const [haveHexaStat, setHaveHexaStat] = useRecoilState(atomHaveHexaStat);
  const [haveFiveSkill, setHaveFiveSkill] = useRecoilState(atomHaveFiveSkill);
  const [haveHiperSkill, setHaveHiperSkill] = useRecoilState(atomHaveHiperSkill);
  const [haveLinkSkill, setHaveLinkSkill] = useRecoilState(atomHaveLinkSkill);

  const getSixSkill = useCallback(
    async (characterName: string) => {
      try {
        const res = await getMySixSkill(characterName);

        const sixSkill: skillType[] = res.data.data.character_skill_desc;
        if (sixSkill.length !== 0) {
          setHaveSixSkill(true);
        } else {
          setHaveSixSkill(false);
        }
        setCharacterSixSkill(sixSkill);
        const erda: erda = {
          used_sol_erda_energy: res.data.data.used_sol_erda_energy,
          used_sol_erda_fragment: res.data.data.used_sol_erda_fragment,
        };
        setCharacterErad(erda);
        let hexaStat: hexaStat = {};
        if (res.data.data.character_hexa_stat_core !== null) {
          hexaStat: hexaStat = res.data.data.character_hexa_stat_core;
          setCharaterHexaStat(hexaStat);
          setHaveHexaStat(true);
        } else {
          setHaveHexaStat(false);
        }
      } catch (e) {
        console.error("6차스킬을 조회할 수 없습니다.");
      }
    },
    [getMySixSkill]
  );

  const getFiveSkill = useCallback(
    async (characterName: string) => {
      try {
        const res = await getMyFiveSkill(characterName);
        const fiveSkill: skillType[] = res.data.data.character_skill_desc;
        setCharacterFiveSkill(fiveSkill);
        if (fiveSkill.length !== 0) {
          setHaveFiveSkill(true);
        } else {
          setHaveFiveSkill(false);
        }
      } catch (e) {
        console.error("5차스킬을 조회할 수 없습니다.");
      }
    },
    [getMyFiveSkill]
  );

  const getHiperSkill = useCallback(
    async (characterName: string) => {
      try {
        const res = await getMyHiperSkill(characterName);
        const hiperSkill: skillType[] = res.data.data.character_skill;
        setCharacterHiperSkill(hiperSkill);
        let cnt = 0;
        for (let i = 0; i < hiperSkill.length; i++) {
          if (hiperSkill[i].skill_level === 0) {
            cnt++;
          }
        }
        if (cnt !== hiperSkill.length) {
          setHaveHiperSkill(true);
        } else {
          setHaveHiperSkill(false);
        }
      } catch (e) {
        console.error("하이퍼스킬을 조회할 수 없습니다.");
      }
    },
    [getMyHiperSkill]
  );

  const getLinkSkill = useCallback(
    async (characterName: string) => {
      try {
        const res = await getMyLinkSkill(characterName);
        const linkSkill: skillType[] = res.data.data.character_link_skill;
        setCharacterLinkSkill(linkSkill);
        if (linkSkill.length !== 0) {
          setHaveLinkSkill(true);
        } else {
          setHaveLinkSkill(false);
        }
      } catch (e) {
        console.error("링크스킬을 조회할 수 없습니다.");
      }
    },
    [getMyLinkSkill]
  );

  return {
    getSixSkill,
    getFiveSkill,
    getHiperSkill,
    getLinkSkill,
    characterSixSkill,
    characterErad,
    characterHexaStat,
    characterFiveSkill,
    characterHiperSkill,
    characterLinkSkill,
    haveSixSkill,
    haveHexaStat,
    haveFiveSkill,
    haveHiperSkill,
    haveLinkSkill,
  };
};

