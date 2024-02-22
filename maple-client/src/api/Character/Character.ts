import axios from "axios"

export const getMyCharacter = async(
    characterName : string
) => {
    return await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}/character/findMyCharacter`,
        params: {
            characterName : characterName
        }
    })
}