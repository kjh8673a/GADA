import { atom } from "recoil";
import { erda, hexaStat, skillType } from "../../@types/maple/CharacterSkillType";


const ErdaDUMMY: erda = {
    used_sol_erda_energy: 0,
    used_sol_erda_fragment: 0,
}

export const atomCharaterSixSkill = atom<skillType[]>({
    key: "atomCharacterSixSkill",
    default: [],
})

export const atomCharaterHexaStat = atom<hexaStat>({
    key: "atomCharaterHexaStat",
    default: {},
})

export const atomCharaterErda = atom<erda>({
    key: "atomCharaterErda",
    default: ErdaDUMMY,
})

export const atomCharaterFiveSkill = atom<skillType[]>({
    key: "atomCharaterFiveSkill",
    default: [],
})

export const atomCharaterHiperSkill = atom<skillType[]>({
    key: "atomCharaterHiperSkill",
    default: [],
})

export const atomCharaterLinkSkill = atom<skillType[]>({
    key: "atomCharaterLinkSkill",
    default: [],
})

export const atomHaveSixSkill = atom<boolean>({
    key: "atomHaveSixSkill",
    default: false,
})

export const atomHaveHexaStat = atom<boolean>({
    key: "atomHaveHexaStat",
    default: false,
})

export const atomHaveFiveSkill = atom<boolean>({
    key: "atomHaveFiveSkill",
    default: false,
})

export const atomHaveHiperSkill = atom<boolean>({
    key: "atomHaveHiperSkill",
    default: false,
})

export const atomHaveLinkSkill = atom<boolean>({
    key: "atomHaveLinkSkill",
    default: false,
})

export const atomLoadingTime = atom<boolean>({
    key: "atomLoadingTime",
    default: true,
})