import { useCallback } from "react";
import { getGuildMember, searchGuild } from "../../api/Character/Guild";
import { GuildMemberType, GuildType } from "../../@types/maple/GuildTypes";

export const useGuild = () => {

    const getAllGuild = useCallback(
        async (name: string) => {
            try {
                const res = await searchGuild(name);
                const guildList : GuildType[] = res.data.data;
                 return guildList;
            } catch (e) {
                console.log(e);
            }
        },
        []
    )
    const getMember = useCallback(
        async (name: string, worldName : string) => {
            try {
                const res = await getGuildMember(name, worldName);
                const guildMember: GuildMemberType[] = res.data.data;
                return guildMember;
            } catch (e) {
                console.log(e);
            }
        },
        []
    )
    return {
        getAllGuild,
        getMember,
    }
}