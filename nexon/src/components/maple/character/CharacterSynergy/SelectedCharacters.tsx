import React from "react";
import styled from "styled-components";
import SelectedCharactersItem from "./SelectedCharactersItem";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";
import MyCharacter from "./MyCharacter";

const StyledBox = styled.div`
  width: 98%;
  border-radius: 5px;
  padding: 1%;
  background-color: var(--secondary-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const HeaderBox = styled.div`
  align-self: start;
  font-size: 1.2rem;
`;

const TextBox = styled.div`
  align-self: start;
  font-size: 0.8rem;
`;

const SelectedCharacters = () => {
  const { characterSynergy, selectedCharacters } = useCharacterSynergy();
  return (
    <StyledBox>
      <HeaderBox>파티 시너지 시뮬레이터</HeaderBox>
      <TextBox>- 스킬 강화 레벨에 따라 전투력이 달라질 수 있습니다.</TextBox>
      <TextBox>- 실제 인게임상의 수치와 다를 수 있습니다.</TextBox>
      <MyCharacter />
      {selectedCharacters.length > 0 ? (
        characterSynergy.data?.selected_characters.map((v, i) => {
          return <SelectedCharactersItem key={i} data={v} index={i} />;
        })
      ) : (
        <div style={{ padding: "20px 0px" }}>
          최대 5인까지 파티원을 선택할 수 있습니다.
        </div>
      )}
    </StyledBox>
  );
};

export default SelectedCharacters;
