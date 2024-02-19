export interface IStatAblity {
  ability_no: string;
  ability_grade: "레전드리" | "유니크" | "에픽" | undefined;
  ability_value: string;
}

export interface IHyperStat {
  stat_type: string;
  stat_point: number | null;
  stat_level: number | null;
  stat_increase: string | null;
}

export interface IStatType {
  ability?: {
    ability_grade: "레전드리" | "유니크" | "에픽" | undefined;
    ability_info: IStatAblity[];
  };
  final_stats?: {
    AP_배분_DEX: string;
    AP_배분_HP: string;
    AP_배분_INT: string;
    AP_배분_LUK: string;
    AP_배분_MP: string;
    AP_배분_STR: string;
    dex?: string;
    hp?: string;
    int?: string;
    luk?: string;
    mp?: string;
    STR?: string;
    DEX?: string;
    HP?: string;
    INT?: string;
    LUK?: string;
    MP?: string;
    str: string;
    공격_속도: string;
    공격력: string;
    데미지: string;
    마력: string;
    메소_획득량: string;
    무기_숙련도: string;
    방어력: string;
    방어율_무시: string;
    버프_지속시간: string;
    보스_몬스터_데미지: string;
    상태이상_내성: string;
    상태이상_추가_데미지: string;
    소환수_지속시간_증가: string;
    속성_내성_무시: string;
    스타포스: string;
    스탠스: string;
    아이템_드롭률: string;
    아케인포스: string;
    어센틱포스: string;
    이동속도: string;
    일반_몬스터_데미지: string;
    "재사용_대기시간_감소_(%)": string;
    "재사용_대기시간_감소_(초)": string;
    재사용_대기시간_미적용: string;
    전투력: string;
    점프력: string;
    최대_스탯공격력: string;
    최소_스탯공격력: string;
    최종_데미지: string;
    추가_경험치_획득: string;
    크리티컬_데미지: string;
    크리티컬_확률: string;
  };
  hyper_stats?: {
    arcane_force: IHyperStat;
    dex: IHyperStat;
    "df/tf/pp": IHyperStat;
    hp: IHyperStat;
    int: IHyperStat;
    luk: IHyperStat;
    mp: IHyperStat;
    str: IHyperStat;
    "공격력/마력": IHyperStat;
    데미지: IHyperStat;
    방어율_무시: IHyperStat;
    보스_몬스터_공격_시_데미지_증가: IHyperStat;
    상태_이상_내성: IHyperStat;
    아케인포스: IHyperStat;
    일반_몬스터_공격_시_데미지_증가: IHyperStat;
    크리티컬_데미지: IHyperStat;
    크리티컬_확률: IHyperStat;
    획득_경험치: IHyperStat;
  };
}

