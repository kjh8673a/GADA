import React from "react";
import useRanking from "../../../hooks/maple/useRanking";
import { TabItemBox } from "../../../style/Rank";

type Props = {
  children: React.ReactNode;
  value: string | undefined;
  clickHandler: (params: string | undefined) => void;
};

const WorldTabItem: React.FC<Props> = ({ children, value, clickHandler }) => {
  const { worldTab } = useRanking();
  return (
    <TabItemBox
      selected={worldTab === value}
      onClick={() => clickHandler(value)}
    >
      {children}
    </TabItemBox>
  );
};

export default WorldTabItem;
