import { getGuildWaterway } from "./../../api/Ranking/Ranking";
import { useCallback } from "react";
import { getCombatPowerRanking } from "../../api/Ranking/Ranking";
import { useRecoilState } from "recoil";
import {
  atomClassTab,
  atomCombatPowerRanking,
  atomGuildWaterway,
  atomRankPage,
  atomRankTab,
  atomWorldTab,
} from "../../atoms/maple/rankingState";
import { RankTabType } from "../../@types/maple/RankingTypes";
import { useNavigate } from "react-router-dom";

const useRanking = () => {
  const navigate = useNavigate();
  const [combatPowerRanking, setCombatPowerRanking] = useRecoilState(
    atomCombatPowerRanking
  );
  const [guildWaterway, setGuildWaterway] = useRecoilState(atomGuildWaterway);
  const [rankTab, setRankTab] = useRecoilState(atomRankTab);
  const [worldTab, setWorldTab] = useRecoilState(atomWorldTab);
  const [classTab, setClassTab] = useRecoilState(atomClassTab);
  const [page, setPage] = useRecoilState(atomRankPage);

  const getCombatPowerRank = useCallback(
    (page: number, world_name?: string, character_class?: string) => {
      getCombatPowerRanking(page, world_name, character_class)
        .then(({ data, status }) => {
          if (status === 200) {
            setCombatPowerRanking(data);
          }
        })
        .catch(() => {
          console.log("Error getCombatPowerRanking");
        });
    },
    [setCombatPowerRanking]
  );

  const getGuildWaterwayData = useCallback(
    (page: number, world_name?: string) => {
      getGuildWaterway(page, world_name)
        .then(({ data, status }) => {
          if (status === 200) {
            setGuildWaterway(data);
          }
        })
        .catch(() => {
          console.log("Error getGuildWaterWay");
        });
    },
    [setGuildWaterway]
  );

  const rankTabClickHandler = (params: RankTabType) => {
    setRankTab(params);
    setWorldTab("전체");
    setClassTab("전체");
    setPage(1);
    if (params === "개인 전투력 랭킹") getCombatPowerRank(1);
    if (params === "길드 수로 랭킹") getGuildWaterwayData(1);
  };

  const worldTabClickHandler = (world_name: string) => {
    setWorldTab(world_name);
    if (rankTab === "개인 전투력 랭킹")
      getCombatPowerRank(
        page,
        world_name === "전체" ? undefined : world_name,
        classTab === "전체" ? undefined : classTab
      );
    if (rankTab === "길드 수로 랭킹")
      getGuildWaterwayData(
        page,
        world_name === "전체" ? undefined : world_name
      );
  };

  const classTabClickHandler = (class_name: string) => {
    setClassTab(class_name);
    setPage(1);
    getCombatPowerRank(
      page,
      worldTab === "전체" ? undefined : worldTab,
      class_name === "전체" ? undefined : class_name
    );
  };

  const combatPowerItemClickHandler = (character_name: string) => {
    navigate(`/Character/${character_name}`);
  };

  const pageMoveClickHandler = (move: number) => {
    if (page + move < 1) return;
    setPage((prev) => {
      if (rankTab === "개인 전투력 랭킹") {
        getCombatPowerRank(
          prev + move,
          worldTab === "전체" ? undefined : worldTab,
          classTab === "전체" ? undefined : classTab
        );
      }
      if (rankTab === "길드 수로 랭킹") {
        getGuildWaterwayData(
          prev + move,
          worldTab === "전체" ? undefined : worldTab
        );
      }
      return prev + move;
    });
  };

  return {
    combatPowerRanking,
    setCombatPowerRanking,
    getCombatPowerRank,
    guildWaterway,
    setGuildWaterway,
    getGuildWaterwayData,
    rankTab,
    setRankTab,
    rankTabClickHandler,
    worldTab,
    setWorldTab,
    worldTabClickHandler,
    classTab,
    setClassTab,
    classTabClickHandler,
    page,
    setPage,
    combatPowerItemClickHandler,
    pageMoveClickHandler,
  };
};

export default useRanking;
