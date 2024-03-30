import React from "react";
import { Line } from "../../../style/dnfContainer";
import SubStatItem from "./SubStatItem";
import { TCharacterStat } from "../../../@types/Character/StatTypes";
import { StatBox, StatHeader } from "../../../style/CharacterStat";

interface Props {
  data: TCharacterStat;
  width: number;
  headerTitle: string;
  subStatList: (string | boolean)[][];
}

const SubStat: React.FC<Props> = ({
  data,
  width,
  headerTitle,
  subStatList,
}) => {
  return (
    <StatBox width={width}>
      <StatHeader>{headerTitle}</StatHeader>
      <Line />
      {subStatList.map((v, i) => {
        if (data.status![v[0] as string] !== undefined) {
          return (
            <SubStatItem
              key={i}
              title={v[0] as string}
              value={data.status![v[0] as string]}
              isPercent={v[1] as boolean}
            />
          );
        } else {
          return <React.Fragment key={i}></React.Fragment>;
        }
      })}
    </StatBox>
  );
};

export default SubStat;
