import styled from "styled-components";
import CharacterStatusBattlePoint from "./CharacterStatusBattlePoint";
import CharacterStatusBasic from "./CharacterStatusBasic";
import { useCharacterData } from "../../../../hooks/maple/useCharacterData";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { IStatType } from "../../../../@types/maple/StatsTypes";
import { atomCharacterStats } from "../../../../atoms/maple/characterStatState";
import { userNickName } from "../../../../atoms/maple/characterName";
import CharacterStatusExtra from "./CharacterStatusExtra";

const StyledBox = styled.div`
  width: 480px;
  min-height: 565px;
  box-sizing: border-box;
  padding: 12px 8px;
  background-color: #3d454d;
  border-radius: 4px;
  position: relative;
`;

const StyledController = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  background-color: #323b44;
  color: #eee;
  font-size: 0.8rem;
  font-weigth: 700;
  display: flex;
  justify-content: center;
  padding: 4px 24px;
  border-radius: 16px;
  box-shadow: rgb(51, 51, 51, 0.2), 0px 1px 4px, rgba(225, 225, 225, 0.2), 0px 0px 0px 3px;
`;

const CharacterStatusBox = () => {
  const [statToggled, setStatToggled] = useState<boolean>(false);
  const { getCharacterStats } = useCharacterData();
  const characterName = useRecoilValue<string>(userNickName);
  const stats = useRecoilValue<IStatType>(atomCharacterStats);
  console.log(stats);

  useEffect(() => {
    getCharacterStats(characterName ? characterName : "말랑말랑");
  }, [getCharacterStats]);

  return (
    <StyledBox>
      <CharacterStatusBattlePoint combatPower={stats.final_stats?.combat_power} />
      {!statToggled && <CharacterStatusBasic stats={stats} />}
      {statToggled && <CharacterStatusExtra stats={stats} />}
      <StyledController>
        <StyledButton onClick={() => setStatToggled((prev) => !prev)}>하이퍼 스탯 & 어빌리티</StyledButton>
      </StyledController>
    </StyledBox>
  );
};

export default CharacterStatusBox;

