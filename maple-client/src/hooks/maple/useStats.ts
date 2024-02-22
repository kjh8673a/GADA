import { useCallback } from "react";

const useStats = () => {
  const convertCombatPower = useCallback((combatPower: string | number = "") => {
    if (!combatPower) return "0";
    const power = +combatPower;
    const [TEN_MILLION, TEN_THOUSAND] = [100000000, 10000];
    const overTenMillion = Math.floor(power / TEN_MILLION);
    const overThousand = Math.floor((power - overTenMillion * TEN_MILLION) / TEN_THOUSAND);
    const underThousand = power - overTenMillion * TEN_MILLION - overThousand * TEN_THOUSAND;

    if (overThousand === 0) return `${underThousand}`;
    if (overTenMillion === 0) return `${overThousand}만 ${underThousand}`;
    return `${overTenMillion}억 ${overThousand}만 ${underThousand}`;
  }, []);

  const convertStrToCommaFormat = useCallback((str: string | number = "") => {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, []);

  const convertToPercent = useCallback((str: string | number = "") => {
    return `${str}%`;
  }, []);

  const convertToSec = useCallback((str: string | number = "") => {
    return `${str}초`;
  }, []);

  const convertToStage = useCallback((str: string | number = "") => {
    return `${str}단계`;
  }, []);

  const convertToLevel = useCallback((str: string | number = 0) => {
    return `Lv. ${str}`;
  }, []);

  const increasedStatView = useCallback(
    (max: string | number = "", increased: string = "") => {
      if (!increased) return `${convertStrToCommaFormat(max)}`;
      const base = (+max - +increased).toString();
      return `${convertStrToCommaFormat(max)} (${convertStrToCommaFormat(increased)}+${convertStrToCommaFormat(base)})`;
    },
    [convertStrToCommaFormat]
  );

  const convertToShorterStatName = useCallback((statName: string) => {
    return statName
      .replace(/^(피격 시|공격 시|캐릭터 기준).*$/gm, "기타")
      .replace(":", "")
      .replace("보스 몬스터 공격 시 데미지", "보공")
      .replace("크리티컬 데미지", "크뎀")
      .replace("메소 획득량", "메획")
      .replace("이동속도", "이속")
      .replace("크리티컬 확률", "크확")
      .replace("아이템 드롭률", "드롭")
      .replace("몬스터 방어율 무시", "방무")
      .replace(/^(모든 스킬의 재사용 대기시간)/gm, "쿨감")
      .replace(/\(.*\)/gm, "");
  }, []);

  return {
    convertCombatPower,
    convertStrToCommaFormat,
    convertToPercent,
    convertToSec,
    convertToStage,
    convertToLevel,
    increasedStatView,
    convertToShorterStatName,
  };
};

export default useStats;

