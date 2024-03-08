import React from "react";
import ComponentBox from "../../common/ComponentBox";
import MainStat from "./MainStat";
import SubStat from "./SubStat";
import {
  SUB_ATTACK_STAT_LIST,
  SUB_DEFENSE_STAT_LIST,
  SUB_EXTRA_STAT_LIST,
} from "../../../@types/CharacterTypes";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { atomCharacterStat } from "../../../atoms/characterState";
import Loading from "../../common/Loading";
import StatBuff from "./StatBuff";

const Wrapper = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CharacterStat = () => {
  const data = useRecoilValue(atomCharacterStat);
  return (
    <ComponentBox>
      {Object.keys(data.status!).length > 0 ? (
        <>
          <Wrapper width={50}>
            <MainStat data={data} width={100} />
            <StatBuff data={data} width={100} />
          </Wrapper>
          <SubStat
            data={data}
            width={25}
            headerTitle="공격 정보"
            subStatList={SUB_ATTACK_STAT_LIST}
          />
          <Wrapper width={25}>
            <SubStat
              data={data}
              width={100}
              headerTitle="방어 정보"
              subStatList={SUB_DEFENSE_STAT_LIST}
            />
            <SubStat
              data={data}
              width={100}
              headerTitle="추가 정보"
              subStatList={SUB_EXTRA_STAT_LIST}
            />
          </Wrapper>
        </>
      ) : (
        <Loading
          text="최근 1년이내 접속기록이 없는 캐릭터는 스탯을 조회할 수 없습니다."
          play={false}
        />
      )}
    </ComponentBox>
  );
};

export default CharacterStat;
