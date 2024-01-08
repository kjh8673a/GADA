/* 정적 탭 이름 정의 */
export const TAB_LIST: { [key: string]: string } = {
  CHARACTER: "장비/스탯",
  UNION: "유니온",
  SKILL: "스킬",
  ORG_CHARACTER: "캐릭터 비교",
};

export const TAB_ID_LIST: string[] = Object.keys(TAB_LIST);

export type TabNameType = keyof typeof TAB_LIST;

