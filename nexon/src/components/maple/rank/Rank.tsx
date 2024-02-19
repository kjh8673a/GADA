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

const TextContainer = styled.div`
  width: 100%;
  padding: 4px 12px;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  font-size: 0.8rem;
  margin: 4px 0;
`;

const Rank = () => {
  const { rankTab, rankTabClickHandler, worldTabClickHandler } = useRanking();

  return (
    <CenteredBox>
      <TabBox>
        {RANK_TAB_NAME_LIST.map((rankTabName, i) => {
          return (
            <RankTabItem
              key={i}
              value={rankTabName}
              clickHandler={rankTabClickHandler}
            >
              {rankTabName}
            </RankTabItem>
          );
        })}
      </TabBox>
      <TextContainer>
        <TextBox>
          - API 오픈 초기라 전투력 데이터를 꾸준히 쌓고 있습니다.
        </TextBox>
        <TextBox>
          {rankTab === "길드 수로 랭킹"
            ? "- 길드 수로 랭킹은 지난 주의 최신 데이터로 갱신됩니다."
            : "- 수집한 데이터를 기반하여 지속적으로 랭킹이 업데이트 됩니다."}
        </TextBox>
      </TextContainer>
      <TabBox>
        {WORLD_NAME_LIST.map((worldTabName, i) => {
          return (
            <WorldTabItem
              key={i}
              value={worldTabName}
              clickHandler={worldTabClickHandler}
            >
              {worldTabName ? worldTabName : "전체"}
            </WorldTabItem>
          );
        })}
      </TabBox>
      <RankDetail />
    </CenteredBox>
  );
};

export default Rank;
