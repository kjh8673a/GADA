import { atom } from 'recoil';
import { CharacterType } from '../../@types/maple/CharacterSearch';


export const userOwnCharacter = atom<CharacterType[]>({
    key: "userOwnCharacter",
    default: [],
});