import styled from "styled-components";
import CharacterStatusBattlePoint from "./CharacterStatusBattlePoint";
import CharacterStatusBasic from "./CharacterStatusBasic";

const StyledBox = styled.div`
  width: 480px;
  box-sizing: border-box;
  padding: 12px 8px;
  background-color: #3d454d;
  border-radius: 4px;
`;

const CharacterStatusBox = () => {
  return (
    <StyledBox>
      <CharacterStatusBattlePoint />
      <CharacterStatusBasic />
    </StyledBox>
  );
};

export default CharacterStatusBox;

