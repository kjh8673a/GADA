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

const CombatPowerTable = () => {
  const { combatPowerRanking, page, combatPowerItemClickHandler } = useRanking();
  return (
    <StyledBox>
      <CombatPowerTableHeader />
      {combatPowerRanking.data?.content.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <CombatPowerTableItem
              ranking={i + 1 + (page - 1) * 20}
              character_name={v.character_name}
              combat_power={v.combat_power}
              character_level={v.character_level}
              character_class={v.character_class}
              character_image={v.character_image}
              guild_name={v.guild_name}
              clickHandler={combatPowerItemClickHandler}
            />
            {i < 19 ? <DashedLine /> : <></>}
          </React.Fragment>
        );
      })}
    </StyledBox>
  );
};

export default CombatPowerTable;
