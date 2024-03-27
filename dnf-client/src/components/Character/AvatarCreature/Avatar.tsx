import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { atomCharacterAvatar } from "../../../atoms/characterState";
import AvatarSlots from "./AvatarSlots";
import { AVATAR_SLOT_LIST } from "../../../@types/Character/CharacterAvatarType";
import { Line } from "../../../style/dnfContainer";

const StyledBox = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
  font-size: 1.2rem;
  align-self: center;
  color: #dbc68d;
`;

const StyledBtn = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  padding: 5px;
  background-color: var(--secondary-bg-color);
  display: flex;
  justify-content: center;
  border-radius: 5px;
  color: #FFFFFF;
  &:hover {
    transition: 0.1s linear;
    cursor: pointer;
    background-color: #5f7883;
  }
`;

const Avatar = () => {
  const data = useRecoilValue(atomCharacterAvatar);
  const [isEffective, setIsEffective] = useState<boolean>(true);
  return (
    <StyledBox>
      <Header>{`${isEffective ? "효과 적용 " : "스킨 "}아바타`}</Header>
      <Line />
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
      <StyledBtn onClick={() => setIsEffective((prev) => !prev)}>
        {"아바타 체인지"}
      </StyledBtn>
    </StyledBox>
  );
};

export default Avatar;
