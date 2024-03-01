import React from "react";
import styled from "styled-components";
import { OptionCharactersType } from "../../../../@types/maple/CharacterSynergyTypes";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";

const StyledBox = styled.div`
  border-radius: 5px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--primary-bg-color);
  &:hover {
    transition: 0.2s;
    cursor: pointer;
    background-color: #375158;
  }
`;

export const TagBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const TagBox = styled.div`
  background-color: gray;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2px 7px;
  font-size: 0.7rem;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    max-width: 70px;
  }
`;

const TagClassName = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const TagCombatPower = styled.div`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const OptionCharactersItem: React.FC<{
  data: OptionCharactersType;
}> = ({ data }) => {
  const { addSelectedHandler } = useCharacterSynergy();
  return (
    <StyledBox
      onClick={() => {
        addSelectedHandler(data.character_class);
      }}
    >
      <TagBoxWrapper style={{ justifyContent: "space-around" }}>
        <TagClassName>{data.character_class}</TagClassName>
        <TagCombatPower>{"+ " + data.increase_combat_power.toLocaleString("ko-kr")}</TagCombatPower>
      </TagBoxWrapper>
      <TagBoxWrapper>
        <TagBox
          style={{
            backgroundColor: "rgb(180, 203, 50)",
          }}
        >
          {data.cycle > 0 ? data.cycle + " min" : "기타"}
        </TagBox>
        {data.skill_type.map((v, i) => {
          return <TagBox key={i}>{v}</TagBox>;
        })}
      </TagBoxWrapper>
    </StyledBox>
  );
};

export default OptionCharactersItem;

