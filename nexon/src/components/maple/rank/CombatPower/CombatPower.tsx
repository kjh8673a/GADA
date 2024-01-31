import React, { useEffect } from "react";
import styled from "styled-components";
import { TabBox } from "../../../../style/Rank";
import { CLASS_NAME_LIST } from "../../../../@types/maple/RankingTypes";
import useRanking from "../../../../hooks/maple/useRanking";
import ClassTabItem from "./ClassTabItem";
import CombatPowerTable from "./CombatPowerTable";
import RankTablePageMove from "../RankTablePageMove";

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin-bottom: 10px;
  min-height: 1000px;
`;

const CombatPower = () => {
  const { rankPage, worldTab, classTab, combatPowerRanking, classTabClickHandler, getCombatPowerRank } =
    useRanking();
  useEffect(() => getCombatPowerRank(rankPage, worldTab, classTab), [getCombatPowerRank]);
  return (
    <StyledBox>
      <TabBox>
        {CLASS_NAME_LIST.map((classTabName, i) => {
          return (
            <ClassTabItem
              key={i}
              value={classTabName}
              clickHandler={classTabClickHandler}
            >
              {classTabName ? classTabName : "전체"}
            </ClassTabItem>
          );
        })}
      </TabBox>
      <CombatPowerTable />
      {combatPowerRanking.data?.totalPages! > 0 && <RankTablePageMove />}
    </StyledBox>
  );
};

export default CombatPower;
