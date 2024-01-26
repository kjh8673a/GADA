import React, { useState } from "react";
import { Domain, DownConatiner, InputHeaderName, UpContainer, PageHeader, DomainLogo } from "../../style/header";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const [headerName, setHeaderName] = useState<string>("");
  const navigate = useNavigate();

  //헤더에 있는 Input창에 닉네임 또는 길드명 입력
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderName(e.target.value);
  };

  //헤더에 있는 Input창에 Enter를 눌렀을 때.
  const headerInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //엔터 클릭시 이름가지고 SearchPage로 이동해야함.
    if (e.key === "Enter") {
      navigate(`/Search/${headerName}`);
    }
  };

  return (
    <>
      <UpContainer>
        <Domain
          href="/"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <DomainLogo src={`${process.env.PUBLIC_URL}/assets/gadalogo.webp`} />
        </Domain>
        <InputHeaderName
          placeholder="닉네임 또는 길드명 입력"
          onChange={changeInputValue}
          onKeyDown={headerInputEnter}
        />
      </UpContainer>
      <DownConatiner>
        <PageHeader href="/">메인</PageHeader>
        <PageHeader href="/rank">랭킹</PageHeader>
        {/* <PageHeader href="/comparison">캐릭터 비교</PageHeader> */}
        {/* <PageHeader>재획 타이머</PageHeader>
                <PageHeader>파티구성</PageHeader> */}
      </DownConatiner>
    </>
  );
};

export default Header;

