import React from "react";
import styled from "styled-components";
import DashedLine from "../../../common/DashedLine";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";
import { SKILL_TYPE } from "../../../../@types/maple/CharacterSynergyTypes";

const StyledBox = styled.div`
  width: 98%;
  padding: 1%;
  background-color: var(--primary-bg-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ItemBox = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  opacity: 0.7;
  &:hover {
    transition: 0.2s;
    opacity: 1;
    cursor: pointer;
  }
`;

const OptionCharactersOrder = () => {
  const { optionOrder, clickCycleOptionHandler, clickSkillOptionHandler } =
    useCharacterSynergy();
  return (
    <StyledBox>
      <Container>
        {["전체", "2 min", "3 min"].map((v, i) => {
          return (
            <ItemBox
              key={i}
              onClick={() => clickCycleOptionHandler(i + 1)}
              style={{
                border: `1px solid ${
                  optionOrder.cycle === i + 1
                    ? "white"
                    : "var(--primary-bg-color)"
                }`,
                opacity: `${optionOrder.cycle === i + 1 ? "1" : "0.7"}`,
              }}
            >
              {v}
            </ItemBox>
          );
        })}
      </Container>
      <DashedLine />
      <Container>
        {SKILL_TYPE.map((v, i) => {
          return (
            <ItemBox
              key={i}
              onClick={() => clickSkillOptionHandler(v)}
              style={{
                border: `1px solid ${
                  optionOrder.skill_type.includes(v) ||
                  (optionOrder.skill_type.length < 1 && v === "전체")
                    ? "white"
                    : "var(--primary-bg-color)"
                }`,
                opacity: `${
                  optionOrder.skill_type.includes(v) ||
                  (optionOrder.skill_type.length < 1 && v === "전체")
                    ? "1"
                    : "0.7"
                }`,
              }}
            >
              {v}
            </ItemBox>
          );
        })}
      </Container>
    </StyledBox>
  );
};

export default OptionCharactersOrder;
