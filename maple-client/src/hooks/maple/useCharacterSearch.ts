import { useCallback } from 'react';
import { getMyCharacter } from '../../api/Character/Character';
import { CharacterType } from '../../@types/maple/CharacterSearch';
import { userOwnCharacter } from '../../atoms/maple/characterOwn';
import { useRecoilState } from 'recoil';

export const useCharacterSearch = () => {
    const [myCharacterList, setMyCharacterList] = useRecoilState(userOwnCharacter);

    const getCharacter = useCallback(
        async (characterName: string) => {
            try {
                const res = await getMyCharacter(characterName);
                let characterList: CharacterType[] = [];
                
                for (let i = 0; i < res.data.data.length; i++) {
                    characterList[i] = {
                        character_class : res.data.data[i].character_class,
                        character_class_level : res.data.data[i].character_class_level,
                        character_image : res.data.data[i].character_image,
                        character_level : res.data.data[i].character_level,
                        character_name : res.data.data[i].character_name,
                        guild_name : res.data.data[i].guild_name,
                        world_name : res.data.data[i].world_name,
                    }
                }
                setMyCharacterList(characterList);
            } catch (e) {
                console.log(e);
                
                console.log("본/부캐가 존재하지않습니다.");
            }
        },[]
    )
    return {
        getCharacter,
        myCharacterList,
    }
}