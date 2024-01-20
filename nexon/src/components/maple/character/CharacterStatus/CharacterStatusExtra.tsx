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

const CharacterStatusExtra: React.FC<Props> = ({ stats }) => {
  return (
    <>
      <StyledBox01>
        <CharacterUnitStat statKey="STR" statVal={stats.hyper_stats?.str?.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="DEX" statVal={stats.hyper_stats?.dex?.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="INT" statVal={stats.hyper_stats?.int?.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="LUK" statVal={stats.hyper_stats?.luk?.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="HP" statVal={stats.hyper_stats?.hp?.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="MP" statVal={stats.hyper_stats?.mp?.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="DF/PF/PP" statVal={stats.hyper_stats?.["df/tf/pp"]?.stat_level} type="LEVEL" />
        <CharacterUnitStat
          statKey="크리티컬 확률"
          statVal={stats.hyper_stats?.크리티컬_확률?.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat
          statKey="크리티컬 데미지"
          statVal={stats.hyper_stats?.크리티컬_데미지?.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat statKey="방어율 무시" statVal={stats.hyper_stats?.방어율_무시?.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="데미지" statVal={stats.hyper_stats?.데미지?.stat_level} type="LEVEL" />
        <CharacterUnitStat
          statKey="보스 데미지"
          statVal={stats.hyper_stats?.보스_몬스터_공격_시_데미지_증가?.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat
          statKey="일반 데미지"
          statVal={stats.hyper_stats?.일반_몬스터_공격_시_데미지_증가?.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat
          statKey="상태 이상 내성"
          statVal={stats.hyper_stats?.상태_이상_내성?.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat
          statKey="공격력/마력"
          statVal={stats.hyper_stats?.["공격력/마력"]?.stat_level}
          type="LEVEL"
        />
        <CharacterUnitStat statKey="획득 경험치" statVal={stats.hyper_stats?.획득_경험치?.stat_level} type="LEVEL" />
        <CharacterUnitStat statKey="아케인 포스" statVal={stats.hyper_stats?.아케인포스?.stat_level} type="LEVEL" />
        <WeaponOptionItem />
      </StyledBox01>
      <StyledBox02>
        <OptionTitle title="어빌리티" logo={`${process.env.PUBLIC_URL}/assets/orange_mushroom.gif`} />
        {stats.ability?.ability_info.map((item) => (
          <WeaponOptionItem key={item.ability_no} desc={`${item.ability_no}. ${item.ability_value}`} />
        ))}
      </StyledBox02>
    </>
  );
};

export default CharacterStatusExtra;

