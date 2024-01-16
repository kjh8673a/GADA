import styled from "styled-components";

export const MapleConatiner = styled.div`
    position : relative;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    flex : 1;
`

export const MainImg = styled.img`
    width : 64px;
    height : 64px;
    margin : 10px;
`

export const NameSearch = styled.div`
    position: relative;
`

export const NicknameSearch = styled.input`
    outline : none;
    font-size: 10px;
    border : 1px solid #bbb;
    border-radius : 8px;
    padding : 8px 12px;
    font-size : 10px;
`

export const CheckButton = styled.img`
    position : absolute;
    width : 16px;
    top : 7px;
    right : 6px;
    margin : 0;
`