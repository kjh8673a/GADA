import React from "react";
import useRanking from "../../../../hooks/maple/useRanking";
import { TabItemBox } from "../../../../style/Rank";

type Props = {
  children: React.ReactNode;
  value: string | undefined;
  clickHandler: (params: string | undefined) => void;
};

const ClassTabItem: React.FC<Props> = ({ children, value, clickHandler }) => {
  const { classTab } = useRanking();
  return (
    <TabItemBox
      selected={classTab === value}
      onClick={() => clickHandler(value)}
    >
      {children}
    </TabItemBox>
  );
};

export default ClassTabItem;
