import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CombatPowerTableHeader from "./CombatPowerTableHeader";
import CombatPowerTableItem from "./CombatPowerTableItem";
import useRanking from "../../../../hooks/maple/useRanking";
import DashedLine from "../../../common/DashedLine";

const StyledBox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #3d444c;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: var(--custom-shadow);
`;

const ErrorBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CombatPowerTable = () => {
  const { combatPowerRanking, rankPage, combatPowerItemClickHandler } = useRanking();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
  }, []);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <StyledBox>
      <CombatPowerTableHeader windowWidth={windowWidth} />
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
                world_name={v.world_name}
                clickHandler={combatPowerItemClickHandler}
                windowWidth={windowWidth}
              />
              {i !== combatPowerRanking.data!.content.length - 1 ? <DashedLine /> : <></>}
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

