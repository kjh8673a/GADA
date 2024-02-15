import React from "react";
import styled from "styled-components";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";
import MySynergySkill from "./MySynergySkill";
import MySynergy from "./MySynergy";

const StyledBox = styled.div`
  padding: 1%;
  width: 98%;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  border-radius: 5px;
  background-color: var(--primary-bg-color);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TextBox = styled.div``;

const TagBox = styled.div`
  padding: 5px 10px;
  font-size: 1.2rem;
`;

const MyCharacter = () => {
  const { characterSynergy } = useCharacterSynergy();
  return (
    <StyledBox>
      <Container>
        <WrapperBox>
          <TextBox>현재 전투력</TextBox>
          <TagBox>
            {characterSynergy.data?.main_character.combat_power &&
              Number(characterSynergy.data?.main_character.combat_power).toLocaleString("ko-kr")}
          </TagBox>
        </WrapperBox>
        <TextBox style={{ fontSize: "1.5rem" }}>{" + "}</TextBox>
        <WrapperBox>
          <TextBox>전투력 상승치</TextBox>
          <TagBox>
            {Number(
              characterSynergy.data?.main_character.increased_combat_power
                ? characterSynergy.data?.main_character.increased_combat_power
                : 0
            ).toLocaleString("ko-kr")}
          </TagBox>
        </WrapperBox>
        <TextBox style={{ fontSize: "1.5rem" }}>{" = "}</TextBox>
        <WrapperBox>
          <TextBox>전투력 총합</TextBox>
          <TagBox>
            {(
              Number(
                characterSynergy.data?.main_character.combat_power
                  ? characterSynergy.data?.main_character.combat_power
                  : 0
              ) +
              Number(
                characterSynergy.data?.main_character.increased_combat_power
                  ? characterSynergy.data?.main_character.increased_combat_power
                  : 0
              )
            ).toLocaleString("ko-kr")}
          </TagBox>
        </WrapperBox>
      </Container>
      <MySynergy />
      <MySynergySkill />
    </StyledBox>
  );
};

export default MyCharacter;

