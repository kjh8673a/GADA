import React from "react";
import useRanking from "../../../hooks/maple/useRanking";
import { RankTabType } from "../../../@types/maple/RankingTypes";
import { TabItemBox } from "../../../style/Rank";

type Props = {
  children: React.ReactNode;
  value: RankTabType;
  clickHandler: (params: RankTabType) => void;
};

const RankTabItem: React.FC<Props> = ({ children, value, clickHandler }) => {
  const { rankTab } = useRanking();
  return (
    <TabItemBox selected={value === rankTab} onClick={() => clickHandler(value)}>
      {children}
    </TabItemBox>
  );
};

export default RankTabItem;
