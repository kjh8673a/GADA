import React from "react";
import styled from "styled-components";
import { TAvatar } from "../../../@types/Character/CharacterAvatarType";
import Emblems from "./Emblems";

interface Props {
  data?: TAvatar;
  slotName: string;
  isEffective: boolean;
}

interface StyledProps {
  $itemImage?: string | null;
}

const StyledBox = styled.div<StyledProps>`
  position: relative;
  box-sizing: border-box;
  width: 45px;
  height: 45px;
  ${(props) =>
    props.$itemImage ? `background-image: url("${props.$itemImage}");` : ""}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgb(0, 0, 0, 0.6);
  border-radius: 5px;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;

const AvatarItem: React.FC<Props> = ({ data, slotName, isEffective }) => {
  const itemImage = isEffective
    ? data?.itemImage
    : slotName === "오라 스킨 아바타"
    ? data?.itemImage
    : data?.clone.itemImage;

  return (
    <StyledBox $itemImage={itemImage}>
      {itemImage ? "" : slotName.split(" ")[0]}
      {isEffective && slotName !== "스킨 아바타" ? (
        <Emblems data={data!.emblems} />
      ) : (
        <></>
      )}
    </StyledBox>
  );
};

export default AvatarItem;
