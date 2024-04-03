import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CombatPowerTableHeader from "./CombatPowerTableHeader";
import CombatPowerTableItem from "./CombatPowerTableItem";
import useRanking from "../../../../hooks/maple/useRanking";
import DashedLine from "../../../common/DashedLine";
import useFetch from "../../../../hooks/useFetch";

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
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--custom-shadow);
`;

const CombatPowerTable = () => {
  const { combatPowerRanking, rankPage, combatPowerItemClickHandler, worldTab, classTab, getCombatPowerRank } =
    useRanking();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const result = useFetch(getCombatPowerRank, rankPage, worldTab, classTab);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  if (!result) return null;

  if (!result.content) {
    return <ErrorBox>랭킹 정보 조회에 실패했습니다.</ErrorBox>;
  }

  return (
    <StyledBox>
      <CombatPowerTableHeader windowWidth={windowWidth} />
      {combatPowerRanking.data?.content.map((v, i) => {
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
      })}
    </StyledBox>
  );
};

export default CombatPowerTable;

