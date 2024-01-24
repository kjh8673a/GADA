import { useCallback } from "react";
import { searchGuild } from "../../api/Character/Guild";
import { GuildType } from "../../@types/maple/GuildTypes";

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
    return {
        getAllGuild
    }
}