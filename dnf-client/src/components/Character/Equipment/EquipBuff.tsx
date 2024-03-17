import React from "react";
import { TCharacterEquip } from "../../../@types/CharacterTypes";
import { ColorText } from "../../../style/CharacterStat";

interface Props {
  detail: TCharacterEquip["detail"];
}

const EquipBuff: React.FC<Props> = ({ detail }) => {
  return <ColorText color={"rgb(187, 187, 187)"}>{detail?.itemBuff.explain}</ColorText>;
};

export default EquipBuff;
