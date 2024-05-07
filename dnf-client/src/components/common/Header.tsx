import React, { useEffect, useRef, useState } from "react";
import ArrowSvg from "../../style/ArrowSvg";
import {
  Domain,
  DownConatiner,
  UpContainer,
  PageHeader,
  DomainLogo,
} from "../../style/header";
import DropDownList from "./DropDownList";
import { DropDownBtn } from "../../style/dropDown";

const Header = () => {
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
        <Domain href="https://dnf.gada.app">
          <DomainLogo
            src={`${process.env.PUBLIC_URL}/assets/gadalogo.webp`}
            alt="site logo"
          />
        </Domain>
        <div style={{ position: "relative" }}>
          <DropDownBtn onClick={dropDownClickHandler} ref={buttonRef}>
            <img src={"/assets/dnf_logo.svg"} alt="dnf logo" width={50} />
            <ArrowSvg isClick={isClick} />
          </DropDownBtn>
          {isClick && <DropDownList ref={dropdownRef} />}
        </div>
      </UpContainer>
      <DownConatiner>
        <PageHeader href="/">캐릭터 검색</PageHeader>
        <PageHeader href="/auction">경매장</PageHeader>
      </DownConatiner>
    </>
  );
};

export default Header;
