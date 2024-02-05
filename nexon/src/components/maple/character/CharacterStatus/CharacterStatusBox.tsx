import styled from "styled-components";
import CharacterStatusBattlePoint from "./CharacterStatusBattlePoint";
import CharacterStatusBasic from "./CharacterStatusBasic";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { IStatType } from "../../../../@types/maple/StatsTypes";
import { atomCharacterStats } from "../../../../atoms/maple/characterStatState";
import CharacterStatusExtra from "./CharacterStatusExtra";

const StyledBox = styled.div`
  width: 480px;
  min-height: 620px;
  box-sizing: border-box;
  padding: 12px 8px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--custom-shadow);
  border-radius: 4px;
  position: relative;
`;

const StyledController = styled.div`
  position: absolute;
  bottom: 12px;
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
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 4px 24px;
  border-radius: 16px;
  box-shadow: rgb(51, 51, 51, 0.2), 0px 1px 4px, rgba(225, 225, 225, 0.2), 0px 0px 0px 3px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledTitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

const CharacterStatusBox = () => {
  const [statToggled, setStatToggled] = useState<boolean>(false);
  const stats = useRecoilValue<IStatType>(atomCharacterStats);

  return (
    <StyledBox>
      <StyledTitle>캐릭터 스탯</StyledTitle>
      <CharacterStatusBattlePoint combatPower={stats.final_stats?.전투력} />
      {!statToggled && <CharacterStatusBasic stats={stats} />}
      {statToggled && <CharacterStatusExtra stats={stats} />}
      <StyledController>
        <StyledButton onClick={() => setStatToggled((prev) => !prev)}>
          {statToggled ? "기본 스탯" : "하이퍼 스탯 & 어빌리티"}
        </StyledButton>
      </StyledController>
    </StyledBox>
  );
};

export default CharacterStatusBox;
