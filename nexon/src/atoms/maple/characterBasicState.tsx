import { atom } from "recoil";
import { CharacterBasicType } from "../../@types/maple/CharacterBasicTypes";

const DUMMY = {
  date: "2023-12-21T00:00+09:00",
  character_name: "은월",
  world_name: "루나",
  character_gender: "남",
  character_class: "은월",
  character_class_level: "6",
  character_level: 284,
  character_exp: 18280845121626,
  character_exp_rate: "37.108",
  character_guild_name: "SiniSter",
  character_image:
    "https://open.api.nexon.com/static/maplestory/Character/LGLDOPEGLPFPEPLJJDLLEPPGOJMJGEMDOLLAKLOOBDBDMIMLPFKMOHMJNFKCLPGCEFACECJJHAHEAMLGGCCMMCGFCJBFDMFMNAFPAHEBEDNDAENBKMDFOGFGPMFBFOBFFAJOFLCLHDEPCIFLMLECEDNBPAHGFKHPACJFGCLIAKIDLHGBALKOFAFKIHHCBNEAIDLNBICLLCFAIIOPHDDEPBCPPJKOLBIGADAHNKPHHILODBJCNOPOOIDBDMMEBMJJ.png",
};

export const atomCharacterBasic = atom<CharacterBasicType>({
  key: "atomCharacterBasic",
  default: DUMMY,
});
