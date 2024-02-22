import axios from "axios";


export const getMySixSkill = async(
    characterName : string
) => {
    return await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}/character/getCharacterHexaMatrix`,
        params: {
            characterName : characterName
        }
    })
}

export const getMyFiveSkill = async(
    characterName : string
) => {
    return await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}/character/getCharacterVMatrix`,
        params: {
            characterName : characterName
        }
    })
}

export const getMyHiperSkill = async(
    characterName : string
) => {
    return await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}/character/getCharacterHyperPassive`,
        params: {
            characterName : characterName
        }
    })
}

export const getMyLinkSkill = async(
    characterName : string
) => {
    return await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}/character/getCharacterLinkSkill`,
        params: {
            characterName : characterName
        }
    })
}