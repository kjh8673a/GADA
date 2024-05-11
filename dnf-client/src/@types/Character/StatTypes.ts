export const MAIN_STAT_LIST = [
  ["HP", false, false],
  ["MP", false, false],
  ["물리 방어율", true, false],
  ["마법 방어율", true, false],
  ["힘", false, false],
  ["지능", false, false],
  ["체력", false, false],
  ["정신력", false, false],
  ["물리 공격", false, false],
  ["마법 공격", false, false],
  ["물리 크리티컬", true, true],
  ["마법 크리티컬", true, true],
  ["독립 공격", false, false],
  ["공격 속도", true, true],
  ["캐스팅 속도", true, true],
  ["이동 속도", true, true],
];

export const MAIN_STAT_ELEMENT_LIST = [
  "화속성 강화",
  "수속성 강화",
  "명속성 강화",
  "암속성 강화",
];

export const SUB_ATTACK_STAT_LIST = [
  ["공격력 증가", true],
  ["버프력", true],
  ["공격력 증폭", true],
  ["버프력 증폭", true],
  ["최종 데미지 증가", true],
  ["화속성 피해", true],
  ["수속성 피해", true],
  ["명속성 피해", true],
  ["암속성 피해", true],
  ["출혈 피해", true],
  ["중독 피해", true],
  ["화상 피해", true],
  ["감전 피해", true],
  ["출혈 피해 전환", true],
  ["중독 피해 전환", true],
  ["화상 피해 전환", true],
  ["감전 피해 전환", true],
  ["최종 쿨타임 감소율", true],
  ["쿨타임 감소", true],
  ["쿨타임 회복속도", true],
  ["적중률", true],
];

export const SUB_DEFENSE_STAT_LIST = [
  ["물리 방어", false],
  ["마법 방어", false],
  ["물리 피해 감소", true],
  ["마법 피해 감소", true],
  ["화속성 저항", false],
  ["수속성 저항", false],
  ["명속성 저항", false],
  ["암속성 저항", false],
  ["회피율", true],
  ["HP 회복량", false],
  ["MP 회복량", false],
];

export const SUB_EXTRA_STAT_LIST = [
  ["경직도", false],
  ["히트리커버리", false],
  ["데미지 증가", true],
  ["크리티컬 데미지 증가", true],
  ["추가 데미지 증가", true],
  ["모든 공격력 증가", true],
  ["물리 공격력 증가", true],
  ["마법 공격력 증가", true],
  ["독립 공격력 증가", true],
  ["힘 증가", true],
  ["지능 증가", true],
  ["지속피해", true],
];

export type TCharacterBuff = {
  name: string;
  level: number | null;
  status: {
    힘: number;
    지능: number;
    체력: number;
    정신력: number;
  };
};

export type TCharacterStat = {
  buff?: TCharacterBuff[];
  status?: {
    [key: string]: number;
  };
};