import React, { useState } from "react";
import styled from "styled-components";
import { TCharacterEquip } from "../../../@types/CharacterTypes";
import EquipHeader from "./EquipHeader";
import { Line } from "../../../style/dnfContainer";
import EquipType from "./EquipType";
import EquipStat from "./EquipStat";
import EquipEnchant from "./EquipEnchant";
import EquipSubStat from "./EquipSubStat";
import { ColorText } from "../../../style/CharacterStat";
import EquipBuff from "./EquipBuff";
import EquipFixed from "./EquipFixed";
import EquipBakal from "./EquipBakal";

interface Props {
  data: TCharacterEquip;
}

const StyledBox = styled.div`
  box-sizing: border-box;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:hover {
    cursor: pointer;
    background-color: rgb(0, 0, 0, 0.5);
    transition: 0.2s linear;
  }
`;

const EquipmentItem: React.FC<Props> = ({ data }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  return (
    <StyledBox onClick={(_) => setIsClick((prev) => !prev)}>
      <EquipHeader
        itemImage={data.itemImage!}
        itemName={data.itemName!}
        itemRarity={data.itemRarity!}
        reinforce={data.reinforce!}
        refine={data.refine!}
        slotName={data.slotName!}
        upgradeInfo={data.upgradeInfo!}
      />
      {isClick && (
        <>
          <Line />
          <EquipType
            itemRarity={data.itemRarity!}
            itemAvailablelevel={data.itemAvailableLevel!}
            itemTypeDetail={data.itemTypeDetail!}
          />
          <Line />
          <EquipStat detail={data.detail!} />
          {data.enchant && <Line />}
          {data.enchant && <EquipEnchant data={data} />}
          <Line />
          <EquipSubStat detail={data.detail!} />
          {data.detail?.itemExplain && <Line />}
          <ColorText color={"rgb(177, 218, 245)"}>
            {data.detail?.itemExplain}
          </ColorText>
          {data.detail?.itemBuff && <Line />}
          {data.detail?.itemBuff && <EquipBuff detail={data.detail} />}
          {data.fixedOption && <Line />}
          {data.fixedOption && <EquipFixed fixedOption={data.fixedOption} />}
          {data.bakalInfo && <Line />}
          {data.bakalInfo && <EquipBakal bakalInfo={data.bakalInfo} />}
        </>
      )}
    </StyledBox>
  );
};

export default EquipmentItem;
