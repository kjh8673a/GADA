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
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const CombatPower = () => {
  const { combatPowerRanking, classTabClickHandler, getCombatPowerRank } =
    useRanking();
  useEffect(() => getCombatPowerRank(1), [getCombatPowerRank]);
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
              {classTabName}
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
