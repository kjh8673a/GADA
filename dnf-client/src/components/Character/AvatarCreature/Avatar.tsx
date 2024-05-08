import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterAvatar } from "../../../atoms/characterState";
import AvatarSlots from "./AvatarSlots";
import { AVATAR_SLOT_LIST } from "../../../@types/Character/AvatarTypes";
import { Line } from "../../../style/dnfContainer";
import Loading from "../../common/Loading";

const StyledBox = styled.div`
  box-sizing: border-box;
  min-height: 270px;
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  font-size: 1.2rem;
  align-self: center;
  color: #dbc68d;
`;

const StyledBtn = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  background-color: var(--secondary-bg-color);
  display: flex;
  justify-content: center;
  border-radius: 5px;
  color: #ffffff;
  &:hover {
    transition: 0.1s linear;
    cursor: pointer;
    background-color: #5f7883;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 210px;
  flex-direction: column;
  gap: 10px;
`;

const Avatar = () => {
  const data = useRecoilValue(atomCharacterAvatar);
  const [isEffective, setIsEffective] = useState<boolean>(true);
  if (data.length < 1) return <StyledBox>착용중인 아바타가 없습니다.</StyledBox>
  return (
    <StyledBox>
      <Header>{`${isEffective ? "효과 적용 " : "스킨 "}아바타`}</Header>
      <Line />
      <Wrapper>
        <AvatarSlots
          slotList={AVATAR_SLOT_LIST[0]}
          data={data}
          isEffective={isEffective}
        />
        <AvatarSlots
          slotList={AVATAR_SLOT_LIST[isEffective ? 1 : 2]}
          data={data}
          isEffective={isEffective}
        />
        <AvatarSlots
          slotList={AVATAR_SLOT_LIST[3]}
          $justifyContent={"flex-end"}
          data={data}
          isEffective={isEffective}
        />
      </Wrapper>
      <StyledBtn onClick={() => setIsEffective((prev) => !prev)}>
        {isEffective ? "스킨 아바타" : "효과 적용 아바타"}
      </StyledBtn>
    </StyledBox>
  );
};

export default Avatar;
