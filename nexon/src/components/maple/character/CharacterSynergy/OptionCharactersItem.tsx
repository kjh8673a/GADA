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
  padding: 2px 7px;
  font-size: 0.8rem;
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
        <div style={{ fontSize: "1.1rem" }}>{data.character_class}</div>
        <div>{"+ " + data.increase_combat_power.toLocaleString("ko-kr")}</div>
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
