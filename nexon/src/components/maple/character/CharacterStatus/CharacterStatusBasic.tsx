import styled from "styled-components";
import CharacterUnitStat from "./CharacterUnitStat";
import { IStatType } from "../../../../@types/maple/StatsTypes";

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

interface Props {
  stats: IStatType;
}

const CharacterStatusBasic: React.FC<Props> = ({ stats }) => {
  return (
    <>
      <StyledBox01>
        <CharacterUnitStat
          statKey="HP"
          statVal={stats.final_stats?.hp}
          increased={stats.final_stats?.AP_배분_HP}
          type="NUMBER"
        />
        <CharacterUnitStat
          statKey="MP"
          statVal={stats.final_stats?.mp}
          increased={stats.final_stats?.AP_배분_MP}
          type="NUMBER"
        />
        <CharacterUnitStat
          statKey="STR"
          statVal={stats.final_stats?.str}
          increased={stats.final_stats?.AP_배분_STR}
          type="INCREASED"
        />
        <CharacterUnitStat
          statKey="DEX"
          statVal={stats.final_stats?.dex}
          increased={stats.final_stats?.AP_배분_DEX}
          type="INCREASED"
        />
        <CharacterUnitStat
          statKey="INT"
          statVal={stats.final_stats?.int}
          increased={stats.final_stats?.AP_배분_INT}
          type="INCREASED"
        />
        <CharacterUnitStat
          statKey="LUK"
          statVal={stats.final_stats?.luk}
          increased={stats.final_stats?.AP_배분_LUK}
          type="INCREASED"
        />
      </StyledBox01>
      <StyledBox02>
        <CharacterUnitStat statKey="스탯 공격력" statVal={stats.final_stats?.최대_스탯공격력} type="POWER" />
        <CharacterUnitStat statKey="데미지" statVal={stats.final_stats?.데미지} type="PERCENT" />
        <CharacterUnitStat statKey="최종 데미지" statVal={stats.final_stats?.최종_데미지} type="PERCENT" />
        <CharacterUnitStat
          statKey="보스 몬스터 데미지"
          statVal={stats.final_stats?.보스_몬스터_데미지}
          type="PERCENT"
        />
        <CharacterUnitStat statKey="방어율 무시" statVal={stats.final_stats?.방어율_무시} type="PERCENT" />
        <CharacterUnitStat
          statKey="일반 몬스터 데미지"
          statVal={stats.final_stats?.일반_몬스터_데미지}
          type="PERCENT"
        />
        <CharacterUnitStat statKey="공격력" statVal={stats.final_stats?.공격력} type="NUMBER" />
        <CharacterUnitStat statKey="크리티컬 확률" statVal={stats.final_stats?.크리티컬_확률} type="PERCENT" />
        <CharacterUnitStat statKey="마력" statVal={stats.final_stats?.마력} type="NUMBER" />
        <CharacterUnitStat statKey="크리티컬 데미지" statVal={stats.final_stats?.크리티컬_데미지} type="PERCENT" />
        <CharacterUnitStat
          statKey="재사용 대기시간 감소"
          statVal={stats.final_stats?.["재사용_대기시간_감소_(%)"]}
          statVal2={stats.final_stats?.["재사용_대기시간_감소_(초)"]}
          type="SEC/PERCENT"
        />
        <CharacterUnitStat statKey="버프 지속 시간" statVal={stats.final_stats?.버프_지속시간} type="PERCENT" />
        <CharacterUnitStat
          statKey="재사용 대기시간 미적용"
          statVal={stats.final_stats?.재사용_대기시간_미적용}
          type="PERCENT"
        />
        <CharacterUnitStat statKey="속성 내성 무시" statVal={stats.final_stats?.속성_내성_무시} type="PERCENT" />
        <CharacterUnitStat
          statKey="상태이상 추가 데미지"
          statVal={stats.final_stats?.상태이상_추가_데미지}
          type="PERCENT"
        />
        <CharacterUnitStat statKey="무기 숙련도" statVal={stats.final_stats?.무기_숙련도} type="PERCENT" />
      </StyledBox02>
      <StyledBox02>
        <CharacterUnitStat statKey="메소 획득량" statVal={stats.final_stats?.메소_획득량} type="PERCENT" />
        <CharacterUnitStat statKey="스타포스" statVal={stats.final_stats?.스타포스} type="PERCENT" />
        <CharacterUnitStat statKey="아이템 드롭률" statVal={stats.final_stats?.아이템_드롭률} type="PERCENT" />
        <CharacterUnitStat statKey="아케인 포스" statVal={stats.final_stats?.아케인포스} type="NUMBER" />
        <CharacterUnitStat statKey="추가 경험치 획득" statVal={stats.final_stats?.추가_경험치_획득} type="PERCENT" />
        <CharacterUnitStat statKey="아센틱 포스" statVal={stats.final_stats?.어센틱포스} type="NUMBER" />
        <CharacterUnitStat statKey="방어력" statVal={stats.final_stats?.방어력} type="NUMBER" />
        <CharacterUnitStat statKey="상태이상 내성" statVal={stats.final_stats?.상태이상_내성} type="NUMBER" />
        <CharacterUnitStat statKey="이동속도" statVal={stats.final_stats?.이동속도} type="PERCENT" />
        <CharacterUnitStat statKey="점프력" statVal={stats.final_stats?.점프력} type="PERCENT" />
        <CharacterUnitStat statKey="스탠스" statVal={stats.final_stats?.스탠스} type="PERCENT" />
        <CharacterUnitStat statKey="공격 속도" statVal={stats.final_stats?.공격_속도} type="STAGE" />
      </StyledBox02>
    </>
  );
};

export default CharacterStatusBasic;

