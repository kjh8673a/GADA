import React, { useEffect } from "react";
import styled from "styled-components";
import SelectedCharacters from "./SelectedCharacters";
import OptionCharacters from "./OptionCharacters";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";

const StyledBox = styled.div`
  width: 100%;
  min-height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CharacterSynergy = () => {
  const { getSynergy, selectedCharacters, setSelectedCharacters } =
    useCharacterSynergy();
  useEffect(() => {
    getSynergy(selectedCharacters);
    return () => {
      setSelectedCharacters([]);
    };
  }, [getSynergy]);
  return (
    <StyledBox>
      <SelectedCharacters />
      {selectedCharacters.length < 5 && <OptionCharacters />}
    </StyledBox>
  );
};

export default CharacterSynergy;
