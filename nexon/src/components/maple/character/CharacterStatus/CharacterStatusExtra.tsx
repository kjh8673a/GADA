import styled from "styled-components";
import CharacterUnitStat from "./CharacterUnitStat";
import { IStatType } from "../../../../@types/maple/StatsTypes";
import WeaponOptionItem from "./WeaponOptionItem";
import OptionTitle from "../../../../style/OptionTitle";

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

const CharacterStatusHyper: React.FC<Props> = ({ stats }) => {
  return (
    <>
      <StyledBox01>
        <CharacterUnitStat statKey="STR" statVal={stats.hyper_stats?.max_str.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="DEX" statVal={stats.hyper_stats?.max_dex.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="INT" statVal={stats.hyper_stats?.max_int.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="LUK" statVal={stats.hyper_stats?.max_luk.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="HP" statVal={stats.hyper_stats?.max_hp.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="MP" statVal={stats.hyper_stats?.max_mp.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="DF/PF/PP" statVal={stats.hyper_stats?.max_df_tf_pp.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="크리티컬 확률" statVal={stats.hyper_stats?.critical_rate.stat_level} type="LEVEL" />
        <CharacterUnitStat
          statKey="크리티컬 데미지"
          statVal={stats.hyper_stats?.critical_damage.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat
          statKey="방어율 무시"
          statVal={stats.hyper_stats?.ignore_monster_armor.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat statKey="데미지" statVal={stats.hyper_stats?.damage.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="보스 데미지" statVal={stats.hyper_stats?.boss_damage.stat_level} type="LEVEL" />
        <CharacterUnitStat
          statKey="일반 데미지"
          statVal={stats.hyper_stats?.normal_monster_damage.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat
          statKey="상태 이상 내성"
          statVal={stats.hyper_stats?.status_resistance.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat
          statKey="공격력/마력"
          statVal={stats.hyper_stats?.attack_magic_power.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat statKey="획득 경험치" statVal={stats.hyper_stats?.bonus_exp.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="아케인 포스" statVal={stats.hyper_stats?.arcane_force.stat_level} type="LEVEL" />
        <WeaponOptionItem />
      </StyledBox01>
      <StyledBox02>
        <OptionTitle title="어빌리티" logo={`${process.env.PUBLIC_URL}/assets/orange_mushroom.gif`} />
        {stats.ability?.ability_info.map((item) => (
          <WeaponOptionItem desc={`${item.ability_no}. ${item.ability_value}`} />
        ))}
      </StyledBox02>
    </>
  );
};

export default CharacterStatusHyper;
