import React from "react";
import ComponentBox from "../../common/ComponentBox";
import { useRecoilValue } from "recoil";
import { atomCharacterEquip } from "../../../atoms/characterState";
import EquipmentItem from "./EquipmentItem";
import styled from "styled-components";
import { MAIN_EQUIP_LIST } from "../../../@types/CharacterTypes";

const Wrapper = styled.div`
  display: flex;
  width: 49.5%;
  flex-direction: column;
  gap: 5px;
`;

const Equipment = () => {
  const data = useRecoilValue(atomCharacterEquip);
  return (
    <ComponentBox flexDirection={"row"}>
      <Wrapper>
        {data.map((v, i) => {
          return MAIN_EQUIP_LIST.includes(v.slotName!) ? (
            <EquipmentItem key={i} data={v} />
          ) : (
            <React.Fragment key={i}></React.Fragment>
          );
        })}
      </Wrapper>
      <Wrapper>
        {data.map((v, i) => {
          return !MAIN_EQUIP_LIST.includes(v.slotName!) ? (
            <EquipmentItem key={i} data={v} />
          ) : (
            <React.Fragment key={i}></React.Fragment>
          );
        })}
      </Wrapper>
    </ComponentBox>
  );
};

export default Equipment;
