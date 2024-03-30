import React from "react";
import styled from "styled-components";
import { TCharacterEquip } from "../../../@types/Character/EquipmentTypes";
import { ColorText } from "../../../style/CharacterStat";
import { useRecoilValue } from "recoil";
import { atomCharacterBasic } from "../../../atoms/characterState";

interface Props {
  data: TCharacterEquip;
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const EquipEnchant: React.FC<Props> = ({ data }) => {
  const basic = useRecoilValue(atomCharacterBasic);

  const reinforceSkill = data.enchant!.reinforceSkill ? (
    data.enchant!.reinforceSkill.map((v, i) => {
      if (v.jobName === basic.jobName) {
        return (
          <React.Fragment key={i}>
            {v.skills.map((v, i) => {
              return (
                <ColorText
                  key={i}
                  color={"rgb(168, 230, 168)"}
                >{`${v.name} +Lv.${v.value}`}</ColorText>
              );
            })}
          </React.Fragment>
        );
      } else {
        return <React.Fragment key={i}></React.Fragment>;
      }
    })
  ) : (
    <></>
  );

  const status = data.enchant!.status.map((v, i) => {
    return (
      <ColorText
        key={i}
        color={"rgb(168, 230, 168)"}
      >{`${v.name} +${v.value}`}</ColorText>
    );
  });

  return (
    <StyledBox>
      {reinforceSkill}
      {status}
    </StyledBox>
  );
};

export default EquipEnchant;
