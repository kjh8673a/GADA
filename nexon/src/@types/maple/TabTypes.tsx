/* 정적 탭 이름 정의 */
export const TAB_LIST = {
  CHARACTER: "장비/스탯",
  UNION: "유니온",
  SKILL: "스킬",
  ORG_CHARACTER: "캐릭터 비교",
} as const;

export type TabNameType = keyof typeof TAB_LIST;
export const TAB_ID_LIST = Object.keys(TAB_LIST) as Array<keyof typeof TAB_LIST>;

