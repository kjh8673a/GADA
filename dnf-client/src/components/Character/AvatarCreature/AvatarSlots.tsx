import React from "react";
import styled from "styled-components";
import { TAvatar } from "../../../@types/Character/AvatarTypes";
import AvatarItem from "./AvatarItem";

interface Props {
  data: TAvatar[];
  slotList: string[];
  isEffective: boolean;
  $justifyContent?: string;
}

interface StyledProps {
  $justifyContent?: string;
}

const StyledBox = styled.div<StyledProps>`
  display: flex;
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
  gap: 10px;
`;

const AvatarSlots: React.FC<Props> = ({
  slotList,
  $justifyContent,
  data,
  isEffective,
}) => {
  const avatarItems = slotList.map((v, i) => {
    const filteredData = data.filter((w) => w.slotName === v);
    return (
      <AvatarItem
        key={i}
        data={filteredData[0]}
        slotName={v}
        isEffective={isEffective}
      />
    );
  });
  return <StyledBox $justifyContent={$justifyContent}>{avatarItems}</StyledBox>;
};

export default AvatarSlots;
