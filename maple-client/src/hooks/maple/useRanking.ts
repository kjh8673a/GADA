import { getGuildCombatPower, getGuildWaterway } from "./../../api/Ranking/Ranking";
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
  const [combatPowerRanking, setCombatPowerRanking] = useRecoilState(atomCombatPowerRanking);
  const [guildWaterway, setGuildWaterway] = useRecoilState(atomGuildWaterway);
  const [guildCombatPower, setGuildCombatPower] = useRecoilState(atomGuildCombatPower);
  const [rankTab, setRankTab] = useRecoilState(atomRankTab);
  const [worldTab, setWorldTab] = useRecoilState(atomWorldTab);
  const [classTab, setClassTab] = useRecoilState(atomClassTab);
  const [rankPage, setRankPage] = useRecoilState(atomRankPage);
  const [totalPage, setTotalPage] = useRecoilState(atomTotalPage);

  const getCombatPowerRank = useCallback(
    (page: number, world_name?: string, character_class?: string) => {
      return getCombatPowerRanking(page, world_name, character_class).then(({ data, status }) => {
        if (status === 200) {
          setTotalPage(data.data.totalPages);
          setCombatPowerRanking(data);
          return data;
        }
      });
    },
    [setCombatPowerRanking, setTotalPage]
  );

  const getGuildWaterwayData = useCallback(
    (page: number, world_name?: string) => {
      return getGuildWaterway(page, world_name)
        .then(({ data, status }) => {
          if (status === 200) {
            setGuildWaterway(data);
            return data;
          }
        })
        .catch((res) => {
          if (res.response.status === 500) {
            setTotalPage(rankPage);
            setRankPage((prev) => prev - 1);
          }
          return null;
        });
    },
    [setGuildWaterway, rankPage, setTotalPage, setRankPage]
  );

  const getGuildCombatPowerData = useCallback(
    (page: number, world_name?: string) => {
      return getGuildCombatPower(page, world_name)
        .then(({ data, status }) => {
          if (status === 200) {
            setTotalPage(data.data.totalPages);
            setGuildCombatPower(data);
            return data;
          }
        })
        .catch(() => {
          console.error("Error getGuildCombatPowerRanking");
          return null;
        });
    },
    [setGuildCombatPower, setTotalPage]
  );

  const rankTabClickHandler = (params: RankTabType) => {
    setRankTab(params);
    setWorldTab(undefined);
    setClassTab(undefined);
    setRankPage(1);
  };

  const worldTabClickHandler = (world_name: string | undefined) => {
    setWorldTab(world_name);
    setRankPage(1);
    if (rankTab === "길드 수로 랭킹") {
      setTotalPage(9999);
    }
  };

  const classTabClickHandler = (class_name: string | undefined) => {
    setClassTab(class_name);
    setRankPage(1);
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
    window.scrollTo(0, 0);

    setRankPage((prev) => {
      if (rankTab === "길드 전투력 랭킹") {
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

