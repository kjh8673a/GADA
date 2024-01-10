import styled from "styled-components";
import CharacterUnitStat from "./CharacterUnitStat";

const StyledBox01 = styled.div`
  width: 100%;
  background-color: #85929e;
  box-sizing: border-box;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4px;
  border-radius: 8px;
`;

const StyledBox02 = styled.div`
  width: 100%;
  background-color: #6c7785;
  box-sizing: border-box;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4px;
  border-radius: 8px;
`;

const DUMMY_STATS01: { [key: string]: string } = {
  HP: "46,806",
  MP: "35,882",
  STR: "3,991 (4+3,987)",
  DEX: "40,633 (1,408+39,225)",
  INT: "2,340 (4+2,336)",
  LUK: "2,083 (4+2,079)",
};

const DUMMY_STATS02: { [key: string]: string } = {
  "스탯 공격력": "2552만 8548",
  데미지: "86.00%",
  "최종 데미지": "63.94%",
  "보스 몬스터 데미지": "272.00%",
  "방어율 무시": "87.47%",
  "일반 몬스터 데미지": "0.00%",
  공격력: "3,724",
  "크리티컬 확률": "77%",
  마력: "864",
  "크리티컬 데미지": "59.00%",
  "재사용 대기시간 감소": "0초 / 0%",
  "버프 지속 시간": "10%",
  "재사용 대기시간 미적용": "0%",
  "속성 내성 무시": "5%",
  "상태이상 추가 데미지": "8.00%",
  "무기 숙련도": "85%",
};

const DUMMY_STATS03: { [key: string]: string } = {
  "메소 획득량": "0%",
  "스타 포스": "268",
  "아이템 드롭률": "14%",
  "아케인 포스": "1,320",
  "추가 경험치 획득": "0.00%",
  "어센틱 포스": "250",
};

const CharacterStatusBasic = () => {
  const STAT_KEYS01 = Object.keys(DUMMY_STATS01);
  const STAT_KEYS02 = Object.keys(DUMMY_STATS02);
  const STAT_KEYS03 = Object.keys(DUMMY_STATS03);

  return (
    <>
      <StyledBox01>
        {STAT_KEYS01.map((key) => (
          <CharacterUnitStat key={key} statKey={key} statVal={DUMMY_STATS01[key]} />
        ))}
      </StyledBox01>
      <StyledBox02>
        {STAT_KEYS02.map((key) => (
          <CharacterUnitStat key={key} statKey={key} statVal={DUMMY_STATS02[key]} />
        ))}
      </StyledBox02>
      <StyledBox02>
        {STAT_KEYS03.map((key) => (
          <CharacterUnitStat key={key} statKey={key} statVal={DUMMY_STATS03[key]} />
        ))}
      </StyledBox02>
    </>
  );
};

export default CharacterStatusBasic;

