import { useCallback } from "react";
import { getGuildInfo, getGuildMember, searchGuild } from "../../api/Character/Guild";
import { GuildBasicInfo, GuildMemberType, GuildType } from "../../@types/maple/GuildTypes";

export const useGuild = () => {
  const getAllGuild = useCallback(async (name: string) => {
    try {
      const res = await searchGuild(name);
      const guildList: GuildType[] = res.data.data;
      return guildList;
    } catch (e) {
      console.error(e);
    }
  }, []);
  const getMember = useCallback(async (name: string, worldName: string) => {
    try {
      const res = await getGuildMember(name, worldName);
      const guildMember: GuildMemberType[] = res.data.data;
      return guildMember;
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getGuild = useCallback(async (name: string, worldName: string) => {
    try {
      const res = await getGuildInfo(name, worldName);
      const guild: GuildBasicInfo = res.data.data;
      return guild;
    } catch (e) {
      console.error(e);
    }
  }, []);

  return {
    getAllGuild,
    getMember,
    getGuild,
  };
};

