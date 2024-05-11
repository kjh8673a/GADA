import React from "react";
import { StatBox, StatHeader } from "../../../style/CharacterStat";
import { TCharacterStat } from "../../../@types/Character/StatTypes";
import { Line } from "../../../style/dnfContainer";
import StatBuffItem from "./StatBuffItem";

interface Props {
  width: number;
  data: TCharacterStat;
}

const StatBuff: React.FC<Props> = ({ width, data }) => {
  return (
    <StatBox width={width}>
      <StatHeader>스탯 버프</StatHeader>
      <Line />
      {data.buff?.map((v, i) => {
        return <StatBuffItem key={i} data={v} />;
      })}
    </StatBox>
  );
};

export default StatBuff;
