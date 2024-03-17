import React from "react";
import MainStatItem from "./MainStatItem";
import { MAIN_STAT_LIST, TCharacterStat } from "../../../@types/CharacterTypes";
import { Line } from "../../../style/dnfContainer";
import MainStatElement from "./MainStatElement";
import { StatBox, StatHeader } from "../../../style/CharacterStat";

interface Props {
  data: TCharacterStat;
  width: number;
}

const MainStat: React.FC<Props> = ({ data, width }) => {
  return (
    <StatBox width={width}>
      <StatHeader>주요 스탯</StatHeader>
      <Line />
      {MAIN_STAT_LIST.slice(0, 4).map((v, i) => {
        return (
          <MainStatItem
            key={i}
            icon={`/assets/statIcon/main_stat_${i}.png`}
            title={v[0] as string}
            value={data.status![v[0] as string]}
            isPercent={v[1] as boolean}
            isPlus={v[2] as boolean}
          />
        );
      })}
      <Line />
      {MAIN_STAT_LIST.slice(4, 13).map((v, i) => {
        return (
          <MainStatItem
            key={i}
            icon={`/assets/statIcon/main_stat_${i + 4}.png`}
            title={v[0] as string}
            value={data.status![v[0] as string]}
            isPercent={v[1] as boolean}
            isPlus={v[2] as boolean}
          />
        );
      })}
      <Line />
      {MAIN_STAT_LIST.slice(13, 16).map((v, i) => {
        return (
          <MainStatItem
            key={i}
            icon={`/assets/statIcon/main_stat_${i + 13}.png`}
            title={v[0] as string}
            value={data.status![v[0] as string]}
            isPercent={v[1] as boolean}
            isPlus={v[2] as boolean}
          />
        );
      })}
      <Line />
      <MainStatElement data={data} />
    </StatBox>
  );
};

export default MainStat;
