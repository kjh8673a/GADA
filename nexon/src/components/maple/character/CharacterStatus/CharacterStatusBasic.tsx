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
          statVal={stats.final_stats?.max_hp}
          increased={stats.final_stats?.ap_increased_hp}
          type="NUMBER"
        />
        <CharacterUnitStat
          statKey="MP"
          statVal={stats.final_stats?.max_mp}
          increased={stats.final_stats?.ap_increased_mp}
          type="NUMBER"
        />
        <CharacterUnitStat
          statKey="STR"
          statVal={stats.final_stats?.max_str}
          increased={stats.final_stats?.ap_increased_str}
          type="INCREASED"
        />
        <CharacterUnitStat
          statKey="DEX"
          statVal={stats.final_stats?.max_dex}
          increased={stats.final_stats?.ap_increased_dex}
          type="INCREASED"
        />
        <CharacterUnitStat
          statKey="INT"
          statVal={stats.final_stats?.max_int}
          increased={stats.final_stats?.ap_increased_int}
          type="INCREASED"
        />
        <CharacterUnitStat
          statKey="LUK"
          statVal={stats.final_stats?.max_luk}
          increased={stats.final_stats?.ap_increased_luk}
          type="INCREASED"
        />
      </StyledBox01>
      <StyledBox02>
        <CharacterUnitStat statKey="스탯 공격력" statVal={stats.final_stats?.max_stat_power} type="POWER" />
        <CharacterUnitStat statKey="데미지" statVal={stats.final_stats?.damage} type="PERCENT" />
        <CharacterUnitStat statKey="최종 데미지" statVal={stats.final_stats?.final_damage} type="PERCENT" />
        <CharacterUnitStat statKey="보스 몬스터 데미지" statVal={stats.final_stats?.boss_damage} type="PERCENT" />
        <CharacterUnitStat statKey="방어율 무시" statVal={stats.final_stats?.ignore_monster_armor} type="PERCENT" />
        <CharacterUnitStat
          statKey="일반 몬스터 데미지"
          statVal={stats.final_stats?.normal_monster_damage}
          type="PERCENT"
        />
        <CharacterUnitStat statKey="공격력" statVal={stats.final_stats?.attack_power} type="NUMBER" />
        <CharacterUnitStat statKey="크리티컬 확률" statVal={stats.final_stats?.critical_rate} type="PERCENT" />
        <CharacterUnitStat statKey="마력" statVal={stats.final_stats?.magic_power} type="NUMBER" />
        <CharacterUnitStat statKey="크리티컬 데미지" statVal={stats.final_stats?.critical_damage} type="PERCENT" />
        <CharacterUnitStat
          statKey="재사용 대기시간 감소"
          statVal={stats.final_stats?.decrease_cooldowns_percent}
          statVal2={stats.final_stats?.decrease_cooldowns_second}
          type="SEC/PERCENT"
        />
        <CharacterUnitStat statKey="버프 지속 시간" statVal={stats.final_stats?.buff_duration} type="PERCENT" />
        <CharacterUnitStat
          statKey="재사용 대기시간 미적용"
          statVal={stats.final_stats?.skip_cooldowns}
          type="PERCENT"
        />
        <CharacterUnitStat
          statKey="속성 내성 무시"
          statVal={stats.final_stats?.ignore_status_tolerance}
          type="PERCENT"
        />
        <CharacterUnitStat
          statKey="상태이상 추가 데미지"
          statVal={stats.final_stats?.status_bonus_damage}
          type="PERCENT"
        />
        <CharacterUnitStat statKey="무기 숙련도" statVal={stats.final_stats?.weapon_proficiency} type="PERCENT" />
      </StyledBox02>
      <StyledBox02>
        <CharacterUnitStat statKey="메소 획득량" statVal={stats.final_stats?.mesos_obtained} type="PERCENT" />
        <CharacterUnitStat statKey="스타포스" statVal={stats.final_stats?.star_force} type="PERCENT" />
        <CharacterUnitStat statKey="아이템 드롭률" statVal={stats.final_stats?.item_drop_rate} type="PERCENT" />
        <CharacterUnitStat statKey="아케인 포스" statVal={stats.final_stats?.item_drop_rate} type="NUMBER" />
        <CharacterUnitStat statKey="추가 경험치 획득" statVal={stats.final_stats?.bonus_exp} type="PERCENT" />
        <CharacterUnitStat statKey="아센틱 포스" statVal={stats.final_stats?.authentic_force} type="NUMBER" />
        <CharacterUnitStat statKey="방어력" statVal={stats.final_stats?.deffense} type="NUMBER" />
        <CharacterUnitStat statKey="상태이상 내성" statVal={stats.final_stats?.status_resistance} type="NUMBER" />
        <CharacterUnitStat statKey="이동속도" statVal={stats.final_stats?.speed} type="PERCENT" />
        <CharacterUnitStat statKey="점프력" statVal={stats.final_stats?.jump} type="PERCENT" />
        <CharacterUnitStat statKey="스탠스" statVal={stats.final_stats?.knockback_resistance} type="PERCENT" />
        <CharacterUnitStat statKey="공격 속도" statVal={stats.final_stats?.attack_speed} type="STAGE" />
      </StyledBox02>
    </>
  );
};

export default CharacterStatusBasic;

