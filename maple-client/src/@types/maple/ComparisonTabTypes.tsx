/* 정적 탭 이름 정의 */
export const TAB_LIST = {
  STATUS: "스탯",
  WEAPON: "장비",
} as const;

export type TabNameType = keyof typeof TAB_LIST;
export const TAB_ID_LIST = Object.keys(TAB_LIST) as Array<keyof typeof TAB_LIST>;

