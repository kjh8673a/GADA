import { useCallback } from 'react';
import { getMyFiveSkill, getMyHiperSkill, getMyLinkSkill, getMySixSkill } from '../../api/Character/Skill';
import { erda, hexaStat, skillType } from '../../@types/maple/CharacterSkillType';

export const useCharacterSkill = () => {

    const getSixSkill = useCallback(
        async (characterName: string) => {
            try {
                const res = await getMySixSkill(characterName);

                const sixSkill: skillType[] = res.data.data.character_skill_desc;
                const erda: erda = {
                    used_sol_erda_energy: res.data.data.used_sol_erda_energy,
                    used_sol_erda_fragment: res.data.data.used_sol_erda_fragment,
                }
                let hexaStat: hexaStat = {};
                if (res.data.data.character_hexa_stat_core !== null) {
                    hexaStata: hexaStat = res.data.data.character_hexa_stat_core;
                };
                
                return {sixSkill, erda, hexaStat};
            } catch (e) {
                console.log("6차스킬을 조회할 수 없습니다.");
            }
        },
        [getMySixSkill]
    )

    const getFiveSkill = useCallback(
        async (characterName: string) => {
            try {
                const res = await getMyFiveSkill(characterName);
                const fiveSkill: skillType[] = res.data.data.character_skill_desc;
                return fiveSkill;
            } catch (e) {
                console.log("5차스킬을 조회할 수 없습니다."); 
            }
        },
        [getMyFiveSkill]
    )

    const getHiperSkill = useCallback(
        async (characterName: string) => {
            try {
                const res = await getMyHiperSkill(characterName);
                const hiperSkill: skillType[] = res.data.data.character_skill;
                return hiperSkill;
            } catch (e) {
                console.log("하이퍼스킬을 조회할 수 없습니다.");
            }
        },
        [getMyHiperSkill]
    )

    const getLinkSkill = useCallback(
        async (characterName: string) => {
            try {
                const res = await getMyLinkSkill(characterName);
                const linkSkill: skillType[] = res.data.data.character_link_skill;
                return linkSkill;
            } catch (e) {
                console.log("링크스킬을 조회할 수 없습니다.");
                
            }
        },
        [getMyLinkSkill]
    )

    return {
        getSixSkill,
        getFiveSkill,
        getHiperSkill,
        getLinkSkill,
    }

}