import React from "react";
import styled from "styled-components";
import { TBuffAvartar } from "../../../@types/Character/BuffEquipTypes";
import EquipHeader from "../Equipment/EquipHeader";

interface Props {
  data: TBuffAvartar;
}

const StyledBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 1rem;
  gap: 10px;
`;

const BuffAvartarItem: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <EquipHeader
        itemImage={data.itemImage!}
        itemName={data.itemName!}
        itemRarity={data.itemRarity!}
        reinforce={null}
        refine={null}
        slotName={data.slotName!}
        upgradeInfo={null}
      />
    </StyledBox>
  );
};

export default BuffAvartarItem;
