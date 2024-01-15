import styled from "styled-components";
import WeaponOptionItem from "./WeaponOptionItem";
import { IWeaponOption } from "../../../../@types/maple/WeaponTypes";

const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 8px 16px;
  list-style: none;
`;

interface Props {
  totalOption: IWeaponOption | undefined;
  baseOption: IWeaponOption | undefined;
  exceptionalOption: IWeaponOption | undefined;
  addOption: IWeaponOption | undefined;
  starforceOption: IWeaponOption | undefined;
  golden_hammer_flag: boolean | undefined;
  cuttable_count: string | undefined;
}

const WeaponOptionBox: React.FC<Props> = ({
  totalOption,
  baseOption,
  exceptionalOption,
  addOption,
  starforceOption,
  golden_hammer_flag,
  cuttable_count,
}) => {
  return (
    <StyledList>
      {/* STR */}
      <WeaponOptionItem
        optionName="STR"
        total={totalOption?.str}
        base={baseOption?.str}
        exceptional={exceptionalOption?.str}
        add={addOption?.str}
        starforce={starforceOption?.str}
      />
      {/* DEX */}
      <WeaponOptionItem
        optionName="DEX"
        total={totalOption?.dex}
        base={baseOption?.dex}
        exceptional={exceptionalOption?.dex}
        add={addOption?.dex}
        starforce={starforceOption?.dex}
      />
      {/* INT */}
      <WeaponOptionItem
        optionName="INT"
        total={totalOption?.int}
        base={baseOption?.int}
        exceptional={exceptionalOption?.int}
        add={addOption?.int}
        starforce={starforceOption?.int}
      />
      {/* LUK */}
      <WeaponOptionItem
        optionName="LUK"
        total={totalOption?.luk}
        base={baseOption?.luk}
        exceptional={exceptionalOption?.luk}
        add={addOption?.luk}
        starforce={starforceOption?.luk}
      />
      {/* MAX_HP */}
      <WeaponOptionItem
        optionName="최대 HP"
        total={totalOption?.max_hp}
        base={baseOption?.max_hp}
        exceptional={exceptionalOption?.max_hp}
        add={addOption?.max_hp}
        starforce={starforceOption?.max_hp}
      />
      {/* MAX_MP */}
      <WeaponOptionItem
        optionName="최대 MP"
        total={totalOption?.max_mp}
        base={baseOption?.max_mp}
        exceptional={exceptionalOption?.max_mp}
        add={addOption?.max_mp}
        starforce={starforceOption?.max_mp}
      />
      {/* attack_power */}
      <WeaponOptionItem
        optionName="공격력"
        total={totalOption?.attack_power}
        base={baseOption?.attack_power}
        exceptional={exceptionalOption?.attack_power}
        add={addOption?.attack_power}
        starforce={starforceOption?.attack_power}
      />
      {/* magic_power */}
      <WeaponOptionItem
        optionName="마력"
        total={totalOption?.magic_power}
        base={baseOption?.magic_power}
        exceptional={exceptionalOption?.magic_power}
        add={addOption?.magic_power}
        starforce={starforceOption?.magic_power}
      />
      {/* armor */}
      <WeaponOptionItem
        optionName="방어력"
        total={totalOption?.armor}
        base={baseOption?.armor}
        exceptional={exceptionalOption?.armor}
        add={addOption?.armor}
        starforce={starforceOption?.armor}
      />
      {/* speed */}
      <WeaponOptionItem
        optionName="이동 속도"
        total={totalOption?.speed}
        base={baseOption?.speed}
        exceptional={exceptionalOption?.speed}
        add={addOption?.speed}
        starforce={starforceOption?.speed}
      />
      {/* jump */}
      <WeaponOptionItem
        optionName="점프력"
        total={totalOption?.jump}
        base={baseOption?.jump}
        exceptional={exceptionalOption?.jump}
        add={addOption?.jump}
        starforce={starforceOption?.jump}
      />
      {/* boss_damage */}
      <WeaponOptionItem
        optionName="보스 공격 시 데미지"
        total={totalOption?.boss_damage}
        base={baseOption?.boss_damage}
        exceptional={exceptionalOption?.boss_damage}
        add={addOption?.boss_damage}
        starforce={starforceOption?.boss_damage}
        unit="%"
      />
      {/* ignore_monster_armor */}
      <WeaponOptionItem
        optionName="방어력 무시"
        total={totalOption?.ignore_monster_armor}
        base={baseOption?.ignore_monster_armor}
        exceptional={exceptionalOption?.ignore_monster_armor}
        add={addOption?.ignore_monster_armor}
        starforce={starforceOption?.ignore_monster_armor}
        unit="%"
      />
      {/* all_stat */}
      <WeaponOptionItem
        optionName="올스탯"
        total={totalOption?.all_stat}
        base={baseOption?.all_stat}
        exceptional={exceptionalOption?.all_stat}
        add={addOption?.all_stat}
        starforce={starforceOption?.all_stat}
        unit="%"
      />
      {/* max_hp_rate */}
      <WeaponOptionItem
        optionName="HP 재생"
        total={totalOption?.max_hp_rate}
        base={baseOption?.max_hp_rate}
        exceptional={exceptionalOption?.max_hp_rate}
        add={addOption?.max_hp_rate}
        starforce={starforceOption?.max_hp_rate}
        unit="%"
      />
      {/* max_mp_rate */}
      <WeaponOptionItem
        optionName="MP 재생"
        total={totalOption?.max_mp_rate}
        base={baseOption?.max_mp_rate}
        exceptional={exceptionalOption?.max_mp_rate}
        add={addOption?.max_mp_rate}
        starforce={starforceOption?.max_mp_rate}
        unit="%"
      />
      {/* golden_hammer_flag */}
      {golden_hammer_flag ? <WeaponOptionItem desc="황금망치 제련 적용" /> : null}
      {/* cuttable_count */}
      {cuttable_count ? <WeaponOptionItem optionName="가위 사용 가능 횟수" total={cuttable_count} unit="회" /> : null}
    </StyledList>
  );
};

export default WeaponOptionBox;
