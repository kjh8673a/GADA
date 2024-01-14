import React, {useState} from 'react';
import {
    Domain, DownConatiner,
    InputHeaderName, UpContainer, PageHeader
} from '../../style/header';

import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [headerName, setHeaderName] = useState<string>('');
    const navigate = useNavigate();

    //헤더에 있는 Input창에 닉네임 또는 길드명 입력
    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setHeaderName(e.target.value);
    }

    //헤더에 있는 Input창에 Enter를 눌렀을 때.
    const headerInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        //엔터 클릭시 이름가지고 SearchPage로 이동해야함.
        if (e.key === 'Enter') {
            // navigate("/Search");
            console.log(headerName);
        }
    }


    
    return (
        <>
            <UpContainer>
                <Domain href='/'>GADA</Domain>
                <InputHeaderName placeholder='닉네임 또는 길드명 입력'
                    onChange={changeInputValue}
                    onKeyDown={headerInputEnter} />
            </UpContainer>
            <DownConatiner>
                <PageHeader href='/'>메인</PageHeader>
                <PageHeader href='/rank'>랭킹</PageHeader>
                <PageHeader href='/vs'>캐릭터 비교</PageHeader>
                {/* <PageHeader>재획 타이머</PageHeader>
                <PageHeader>파티구성</PageHeader> */}
            </DownConatiner>
        </>
    )
}

export default Header;