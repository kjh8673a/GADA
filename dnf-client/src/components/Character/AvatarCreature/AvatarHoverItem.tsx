import React from "react";
import styled from "styled-components";
import { ITEM_RARITY, ITEM_TYPE_COLOR } from "../../../@types/CharacterTypes";
import { ColorText } from "../../../style/CharacterStat";
import { Line } from "../../../style/dnfContainer";
import {
  EMBLEMS_COLOR,
  TAvatar,
  TAvatarDetail,
} from "../../../@types/Character/AvatarTypes";

interface Props {
  itemName?: string;
  itemRarity?: ITEM_RARITY;
  optionAbility?: string | null;
  itemExplain?: string;
  emblems?: TAvatar["emblems"];
  itemStatus?: TAvatarDetail["itemStatus"];
}

const StyledBox = styled.div`
  z-index: 6;
  padding: 10px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 250px;
  font-size: 0.9rem;
  left: 120%;
  gap: 5px;
`;

const AvatarHoverItem: React.FC<Props> = ({
  itemName,
  itemRarity,
  optionAbility,
  itemExplain,
  emblems,
  itemStatus,
}) => {
  if (typeof itemName === typeof "") {
    return (
      <StyledBox>
        <ColorText
          color={ITEM_TYPE_COLOR[itemRarity!]}
          style={{ alignSelf: "center", fontSize: "1.1rem" }}
        >
          {itemName}
        </ColorText>
        <Line />
        {emblems &&
          emblems.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <br />
                <ColorText
                  color={EMBLEMS_COLOR[v.slotColor]}
                >{`[${v.slotColor} 엠블렘 소켓]`}</ColorText>
                <ColorText color={"#FFFFFF"}>{v.itemName}</ColorText>
              </React.Fragment>
            );
          })}
        {itemStatus && <br />}
        {itemStatus &&
          itemStatus.map((v, i) => {
            return (
              <ColorText
                color={"#FFFFFF"}
                key={i}
              >{`${v.name} +${v.value}`}</ColorText>
            );
          })}
        {optionAbility && (
          <>
            <br />
            <ColorText color={"blue"}>{"[선택 능력치]"}</ColorText>
            <ColorText color={"#FFFFFF"}>{optionAbility}</ColorText>
          </>
        )}
        <br />
        <ColorText color={"#FFFFFF"}>{itemExplain}</ColorText>
      </StyledBox>
    );
  } else {
    return <></>;
  }
};

export default AvatarHoverItem;
