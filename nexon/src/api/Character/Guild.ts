import axios from "axios"

export const searchGuild = async(
    name : string
) => {
    return await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}/guild/basic`,
        params: {
            guildName: name
        }
    })
}

export const getGuildMember = async(
    name: string,
    worldName : string,
) => {
    return await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}/guild/guildMembers`,
        params: {
            guildName: name,
            worldName: worldName,
        }
    })
}