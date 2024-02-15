import { atom } from 'recoil';


export const userNickName = atom<string>({
    key: "userName",
    default: "",
});