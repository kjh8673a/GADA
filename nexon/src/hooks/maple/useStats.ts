import { useCallback } from "react";

const useStats = () => {
  const convertCombatPower = useCallback((combatPower: string | number = "") => {
    if (!combatPower) return "0";
    const power = +combatPower;
    const overThousand = Math.floor(power / 10000);
    const underThousand = power % 10000;

    if (overThousand === 0) return `${underThousand}`;
    return `${overThousand}만 ${underThousand}`;
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

  const increasedStatView = useCallback((max: string | number = "", increased: string = "") => {
    if (!increased) return `${convertStrToCommaFormat(max)}`;
    const base = (+max - +increased).toString();
    return `${convertStrToCommaFormat(max)} (${convertStrToCommaFormat(increased)}+${convertStrToCommaFormat(base)})`;
  }, []);

  return {
    convertCombatPower,
    convertStrToCommaFormat,
    convertToPercent,
    convertToSec,
    convertToStage,
    convertToLevel,
    increasedStatView,
  };
};

export default useStats;

