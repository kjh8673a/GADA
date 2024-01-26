import React from "react";
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
  const { rankTabClickHandler, worldTabClickHandler } = useRanking();
  
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
      <TextBox>- API 오픈 초기라 전투력 데이터를 꾸준히 쌓고 있습니다.</TextBox>
      <TextBox>- 수집한 데이터를 기반하여 지속적으로 랭킹이 업데이트 됩니다.</TextBox>
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
