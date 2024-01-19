import { atom } from "recoil";
import { CharacterBasicType } from "../../@types/maple/CharacterBasicTypes";

const DUMMY = {
	timestamp: "",
	data: {
		ocid: "",
		character_name: "",
		world_name: "",
		character_gender: "",
		character_class: "",
		character_level: 0,
		character_exp: 0,
		character_exp_rate: "0",
		prev_name: null,
		oguild_id: "",
		character_guild_name: "",
		character_image: "",
		popularity: 0,
		combat_power: "0"
	}
}

export const atomCharacterBasic = atom<CharacterBasicType>({
  key: "atomCharacterBasic",
  default: DUMMY,
});
