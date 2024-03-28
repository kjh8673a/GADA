import React, { useState } from "react";
import styled from "styled-components";
import { TAvatar } from "../../../@types/Character/AvatarTypes";
import Emblems from "./Emblems";
import AvatarHoverItem from "./AvatarHoverItem";

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
  background-color: rgb(0, 0, 0, 0.8);
  border-radius: 5px;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;

const AvatarItem: React.FC<Props> = ({ data, slotName, isEffective }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const itemImage = isEffective
    ? data?.itemImage
    : slotName === "오라 스킨 아바타"
    ? data?.itemImage
    : data?.clone.itemImage;

  const hoverItem = () => {
    if (isEffective || slotName === "오라 스킨 아바타") {
      return (
        <AvatarHoverItem
          itemName={data?.itemName}
          itemRarity={data?.itemRarity}
          optionAbility={data?.optionAbility}
          itemExplain={data?.detail.itemExplain}
          emblems={data?.emblems}
          itemStatus={data?.detail.itemStatus}
        />
      );
    } else {
      return (
        <AvatarHoverItem
          itemName={data?.clone.detail?.itemName}
          itemRarity={data?.clone.detail?.itemRarity}
          itemExplain={data?.clone.detail?.itemExplain}
        />
      );
    }
  };

  return (
    <StyledBox
      $itemImage={itemImage}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {itemImage ? "" : slotName.split(" ")[0]}
      {isEffective && slotName !== "스킨 아바타" ? (
        <Emblems data={data!.emblems} />
      ) : (
        <></>
      )}
      {isHover && hoverItem()}
    </StyledBox>
  );
};

export default AvatarItem;
