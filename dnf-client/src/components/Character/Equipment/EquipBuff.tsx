import React from "react";
import { ColorText } from "../../../style/CharacterStat";
import { TDetail } from "../../../@types/Character/CommonTypes";

interface Props {
  detail: TDetail;
}

const EquipBuff: React.FC<Props> = ({ detail }) => {
  return <ColorText color={"rgb(187, 187, 187)"}>{detail?.itemBuff!.explain}</ColorText>;
};

export default EquipBuff;
