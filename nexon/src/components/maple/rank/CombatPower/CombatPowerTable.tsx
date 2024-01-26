import React from "react";
import styled from "styled-components";
import CombatPowerTableHeader from "./CombatPowerTableHeader";
import CombatPowerTableItem from "./CombatPowerTableItem";
import useRanking from "../../../../hooks/maple/useRanking";
import DashedLine from "../../../common/DashedLine";

const StyledBox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #3d444c;
  overflow: hidden;
`;

const ErrorBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CombatPowerTable = () => {
  const { combatPowerRanking, rankPage, combatPowerItemClickHandler } =
    useRanking();
  return (
    <StyledBox>
      <CombatPowerTableHeader />
      {combatPowerRanking.data?.totalPages! > 0 ? (
        combatPowerRanking.data?.content.map((v, i) => {
          return (
            <React.Fragment key={i}>
              <CombatPowerTableItem
                ranking={i + 1 + (rankPage - 1) * 20}
                character_name={v.character_name}
                combat_power={v.combat_power}
                character_level={v.character_level}
                character_class={v.character_class}
                character_image={v.character_image}
                guild_name={v.guild_name}
                clickHandler={combatPowerItemClickHandler}
              />
              {i !== combatPowerRanking.data!.content.length - 1 ? (
                <DashedLine />
              ) : (
                <></>
              )}
            </React.Fragment>
          );
        })
      ) : (
        <ErrorBox>해당 조건의 데이터를 찾을 수 없습니다.</ErrorBox>
      )}
    </StyledBox>
  );
};

export default CombatPowerTable;
