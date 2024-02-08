import {
  getGuildCombatPower,
  getGuildWaterway,
} from "./../../api/Ranking/Ranking";
import { useCallback } from "react";
import { getCombatPowerRanking } from "../../api/Ranking/Ranking";
import { useRecoilState } from "recoil";
import {
  atomClassTab,
  atomCombatPowerRanking,
  atomGuildCombatPower,
  atomGuildWaterway,
  atomRankPage,
  atomRankTab,
  atomTotalPage,
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
  const [guildCombatPower, setGuildCombatPower] =
    useRecoilState(atomGuildCombatPower);
  const [rankTab, setRankTab] = useRecoilState(atomRankTab);
  const [worldTab, setWorldTab] = useRecoilState(atomWorldTab);
  const [classTab, setClassTab] = useRecoilState(atomClassTab);
  const [rankPage, setRankPage] = useRecoilState(atomRankPage);
  const [totalPage, setTotalPage] = useRecoilState(atomTotalPage);

  const getCombatPowerRank = useCallback(
    (page: number, world_name?: string, character_class?: string) => {
      getCombatPowerRanking(page, world_name, character_class)
        .then(({ data, status }) => {
          if (status === 200) {
            setTotalPage(data.data.totalPages);
            setCombatPowerRanking(data);
          }
        })
        .catch(() => {
          console.log("Error getCombatPowerRanking");
        });
    },
    [setCombatPowerRanking, setTotalPage]
  );

  const getGuildWaterwayData = useCallback(
    (page: number, world_name?: string) => {
      getGuildWaterway(page, world_name)
        .then(({ data, status }) => {
          if (status === 200) {
            setGuildWaterway(data);
          }
        })
        .catch((res) => {
          if (res.response.status === 500) {
            setTotalPage(rankPage);
            setRankPage((prev) => prev - 1);
          }
        });
    },
    [setGuildWaterway, rankPage, setTotalPage, setRankPage]
  );

  const getGuildCombatPowerData = useCallback(
    (page: number, world_name?: string) => {
      getGuildCombatPower(page, world_name)
        .then(({ data, status }) => {
          if (status === 200) {
            setTotalPage(data.data.totalPages);
            setGuildCombatPower(data);
          }
        })
        .catch(() => {
          console.log("Error getGuildCombatPowerRanking");
        });
    },
    [setGuildCombatPower, setTotalPage]
  );

  const rankTabClickHandler = (params: RankTabType) => {
    setRankTab(params);
    setWorldTab(undefined);
    setClassTab(undefined);
    setRankPage(1);
    if (params === "개인 전투력 랭킹") getCombatPowerRank(1);
    if (params === "길드 수로 랭킹") getGuildWaterwayData(1);
    if (params === "길드 전투력 랭킹") getGuildCombatPowerData(1);
  };

  const worldTabClickHandler = (world_name: string | undefined) => {
    setWorldTab(world_name);
    setRankPage(1);
    if (rankTab === "개인 전투력 랭킹")
      getCombatPowerRank(1, world_name, classTab);
    if (rankTab === "길드 수로 랭킹") {
      setTotalPage(9999);
      getGuildWaterwayData(1, world_name);
    }
    if (rankTab === "길드 전투력 랭킹") getGuildCombatPowerData(1, world_name);
  };

  const classTabClickHandler = (class_name: string | undefined) => {
    setClassTab(class_name);
    setRankPage(1);
    getCombatPowerRank(1, worldTab, class_name);
  };

  const combatPowerItemClickHandler = (character_name: string) => {
    navigate(`/Character/${character_name}`);
  };

  const guildClickHandler = (guildName: string, worldName: string) => {
    navigate(`/Search/Guild/${worldName}/${guildName}`);
  };

  const pageMoveClickHandler = (move: number) => {
    if (rankPage + move < 1) return;
    if (rankPage + move > totalPage) return;
    setRankPage((prev) => {
      if (rankTab === "개인 전투력 랭킹") {
        getCombatPowerRank(prev + move, worldTab, classTab);
      } else if (rankTab === "길드 수로 랭킹") {
        getGuildWaterwayData(prev + move, worldTab);
      } else if (rankTab === "길드 전투력 랭킹") {
        getGuildCombatPowerData(prev + move, worldTab);
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
    rankPage,
    setRankPage,
    combatPowerItemClickHandler,
    pageMoveClickHandler,
    totalPage,
    setTotalPage,
    guildCombatPower,
    setGuildCombatPower,
    getGuildCombatPowerData,
    guildClickHandler,
  };
};

export default useRanking;
