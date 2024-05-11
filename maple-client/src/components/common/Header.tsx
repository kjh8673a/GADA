import React, { useEffect, useRef, useState } from "react";
import {
  Domain,
  DownConatiner,
  UpContainer,
  PageHeader,
  DomainLogo,
  Wrapper,
} from "../../style/header";
import { useNavigate } from "react-router-dom";
import StyledInput from "../../style/StyledInput";
import { useRecoilState } from "recoil";
import { TabNameType } from "../../@types/maple/TabTypes";
import { atomTabName } from "../../atoms/maple/characterTabState";
import { DropDownBtn } from "../../style/DropDown";
import ArrowSvg from "../../style/ArrowSvg";
import DropDownList from "./DropDownList";

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

  const [isClick, setIsClick] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setIsClick(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [dropdownRef, buttonRef, setIsClick]);

  const dropDownClickHandler = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <>
      <UpContainer>
        <Wrapper>
          <Domain href="https://maple.gada.app">
            <DomainLogo
              src={`${process.env.PUBLIC_URL}/assets/gadalogo.webp`}
              alt="site logo"
            />
          </Domain>
          <div style={{ position: "relative" }}>
            <DropDownBtn onClick={dropDownClickHandler} ref={buttonRef}>
              <img src={"/assets/maple_logo.svg"} alt="dnf logo" width={35} />
              <ArrowSvg isClick={isClick} />
            </DropDownBtn>
            {isClick && <DropDownList ref={dropdownRef} />}
          </div>
        </Wrapper>
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
