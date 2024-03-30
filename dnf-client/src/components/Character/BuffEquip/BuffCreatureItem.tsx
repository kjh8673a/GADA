import React from "react";
import styled from "styled-components";
import { TBuffCreature } from "../../../@types/Character/BuffEquipTypes";
import EquipHeader from "../Equipment/EquipHeader";

interface Props {
  data: TBuffCreature;
}

const StyledBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 1rem;
  gap: 10px;
`;

const BuffCreatureItem: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <EquipHeader
        itemImage={data.itemImage!}
        itemName={data.itemName!}
        itemRarity={data.itemRarity!}
        reinforce={null}
        refine={null}
        slotName={"크리쳐"}
        upgradeInfo={null}
      />
    </StyledBox>
  );
};

export default BuffCreatureItem;
