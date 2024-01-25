import React, { useEffect } from "react";
import CenteredBox from "../../../style/CenteredBox";
import RankTabItem from "./RankTabItem";
import {
  RANK_TAB_NAME_LIST,
  WORLD_NAME_LIST,
} from "../../../@types/maple/RankingTypes";
import useRanking from "../../../hooks/maple/useRanking";
import WorldTabItem from "./WorldTabItem";
import { TabBox } from "../../../style/Rank";
import RankDetail from "./RankDetail";
import styled from "styled-components";

const TextBox = styled.div`
  align-self: start;
  font-size: 0.8rem;
`;

const Rank = () => {
  const { rankTabClickHandler, worldTabClickHandler, getCombatPowerRank, getGuildWaterwayData } = useRanking();

  useEffect(() => {
    getCombatPowerRank(1);
    getGuildWaterwayData(1);
  }, [])
  
  return (
    <CenteredBox>
      <TabBox>
        {RANK_TAB_NAME_LIST.map((rankTabName, i) => {
          return (
            <RankTabItem key={i} value={rankTabName} clickHandler={rankTabClickHandler}>
              {rankTabName}
            </RankTabItem>
          );
        })}
      </TabBox>
      <TextBox>- API 오픈 초기라 열심히 전투력 데이터를 수집 중입니다.</TextBox>
      <TextBox>- 수집 경과에 따라 랭킹이 지속적으로 업데이트 됩니다.</TextBox>
      <TabBox>
        {WORLD_NAME_LIST.map((worldTabName, i) => {
          return (
            <WorldTabItem
              key={i}
              value={worldTabName}
              clickHandler={worldTabClickHandler}
            >
              {worldTabName}
            </WorldTabItem>
          );
        })}
      </TabBox>
      <RankDetail />
    </CenteredBox>
  );
};

export default Rank;
