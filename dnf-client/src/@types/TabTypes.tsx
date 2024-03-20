/* 정적 탭 이름 정의 */
export const TAB_LIST = {
  STAT: "스탯",
  EQUIPMENT: "장비",
  BUFF: "버프 강화 장비",
  SKILL: "스킬",
  AVATAR: "아바타&크리쳐",
  INSIGNIA: "휘장",
  TALISMAN: "탈리스만",
} as const;

export type TabNameType = keyof typeof TAB_LIST;
export const TAB_ID_LIST = Object.keys(TAB_LIST) as Array<
  keyof typeof TAB_LIST
>;
