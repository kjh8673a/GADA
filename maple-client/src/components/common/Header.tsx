import React, { useState } from "react";
import { Domain, DownConatiner, UpContainer, PageHeader, DomainLogo } from "../../style/header";
import { useNavigate } from "react-router-dom";
import StyledInput from "../../style/StyledInput";
import { useRecoilState } from "recoil";
import { TabNameType } from "../../@types/maple/TabTypes";
import { atomTabName } from "../../atoms/maple/characterTabState";

const Header = () => {
  const [headerName, setHeaderName] = useState<string>("");
  const [, setTabName] = useRecoilState<TabNameType>(atomTabName);
  const navigate = useNavigate();

  //헤더에 있는 Input창에 닉네임 또는 길드명 입력
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderName(e.target.value);
  };

  //헤더에 있는 Input창에 Enter를 눌렀을 때.
  const headerInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //엔터 클릭시 이름가지고 SearchPage로 이동해야함.
    if (e.key === "Enter") {
      setTabName("CHARACTER");
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
        <StyledInput
          $width={180}
          $height={6}
          placeholder="닉네임 또는 길드명 입력"
          onChange={changeInputValue}
          onKeyDown={headerInputEnter}
        />
      </UpContainer>
      <DownConatiner>
        <PageHeader href="/">메인</PageHeader>
        <PageHeader href="/rank">랭킹</PageHeader>
        <PageHeader href="/comparison">캐릭터 비교</PageHeader>
        {/* <PageHeader>재획 타이머</PageHeader>
                <PageHeader>파티구성</PageHeader> */}
      </DownConatiner>
    </>
  );
};

export default Header;

