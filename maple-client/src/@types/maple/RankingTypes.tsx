export type CombatPowerRankingContentType = {
  rank: number;
  ocid: string;
  world_name: string;
  character_name: string;
  combat_power: number;
  guild_name: string;
  oguild_id: string;
  character_class: string;
  character_level: number;
  character_image: string;
};

export type CombatPowerRankingPageableType = {
  pageNumber: number;
  pageSize: number;
  sort: [];
  offset: number;
  unpaged: boolean;
  paged: boolean;
};

export type CombatPowerRankingType = {
  timestamp?: string;
  data?: {
    content: CombatPowerRankingContentType[];
    pageable: CombatPowerRankingPageableType;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: [];
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  };
};

export type GuildWaterwayDataType = {
  ranking: number;
  guild_name: string;
  world_name: string;
  guild_level: number;
  guild_master_name: string;
  guild_mark: string;
  guild_point: number;
};

export type GuildWaterwayType = {
  data?: GuildWaterwayDataType[];
};

export const RANK_TAB_NAME_LIST: RankTabType[] = ["개인 전투력 랭킹", "길드 수로 랭킹", "길드 전투력 랭킹"];

export type RankTabType = "개인 전투력 랭킹" | "길드 수로 랭킹" | "길드 전투력 랭킹";

export const WORLD_NAME_LIST = [
  undefined,
  "스카니아",
  "베라",
  "루나",
  "제니스",
  "크로아",
  "유니온",
  "엘리시움",
  "이노시스",
  "레드",
  "오로라",
  "아케인",
  "노바",
  "리부트",
  "리부트2",
];

export const CLASS_NAME_LIST = [
  undefined,
  "히어로",
  "팔라딘",
  "다크나이트",
  "아크메이지(불,독)",
  "아크메이지(썬,콜)",
  "비숍",
  "보우마스터",
  "신궁",
  "패스파인더",
  "나이트로드",
  "섀도어",
  "듀얼블레이더",
  "캡틴",
  "캐논마스터",
  "소울마스터",
  "플레임위자드",
  "윈드브레이커",
  "나이트워커",
  "스트라이커",
  "미하일",
  "아란",
  "에반",
  "배틀메이지",
  "와일드헌터",
  "메카닉",
  "데몬슬레이어",
  "데몬어벤져",
  "제논",
  "블래스터",
  "메르세데스",
  "팬텀",
  "루미너스",
  "카이저",
  "엔젤릭버스터",
  "제로",
  "은월",
  "키네시스",
  "카데나",
  "일리움",
  "아크",
  "호영",
  "아델",
  "카인",
  "라라",
  "칼리",
  "초보자",
];

export type GuildCombatPowerContentType = {
  rank: number;
  oguildId: string;
  name: string;
  worldName: string;
  masterName: string;
  level: number;
  combatPower: number;
};

export type GuildCombatPowerPageableType = {
  pageNumber: number;
  pageSize: number;
  sort: [];
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type GuildCombatPowerType = {
  timestamp?: string;
  data?: {
    content: GuildCombatPowerContentType[];
    pageable: GuildCombatPowerPageableType;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: [];
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  };
};
