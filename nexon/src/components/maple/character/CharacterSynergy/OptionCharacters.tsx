import React from "react";
import styled from "styled-components";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";
import OptionCharactersItem from "./OptionCharactersItem";
import OptionCharactersOrder from "./OptionCharactersOrder";

const StyledBox = styled.div`
  border-radius: 5px;
  width: 98%;
  padding: 1%;
  background-color: var(--secondary-bg-color);
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const HeaderBox = styled.div`
  font-size: 1.2rem;
  justify-self: flex-start;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const OptionCharacters = () => {
  const { characterSynergy, optionOrder } = useCharacterSynergy();
  return (
    <StyledBox>
      <HeaderBox>파티원 선택창</HeaderBox>
      <OptionCharactersOrder />
      <Container>
        {characterSynergy.data?.option_characters
          .filter((v) => {
            if (optionOrder.cycle > 1) {
              if (optionOrder.cycle === 4 && v.cycle !== 0) return false;
              if (optionOrder.cycle < 4 && optionOrder.cycle !== v.cycle) return false;
              return true;
            }
            for (const type of optionOrder.skill_type) {
              if (!v.skill_type.includes(type)) return false;
            }
            return true;
          })
          .map((v, i) => {
            return <OptionCharactersItem key={i} data={v}></OptionCharactersItem>;
          })}
      </Container>
    </StyledBox>
  );
};

export default OptionCharacters;

