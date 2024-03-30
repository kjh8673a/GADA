import { useEffect } from "react";
import { TCharacterFlag } from "../@types/CharacterTypes";
import { useSetRecoilState } from "recoil";
import { atomFlagState } from "../atoms/flagState";

interface Dic {
  [key: string]: number;
}

const useFlag = (data: TCharacterFlag): Dic => {
  const setState = useSetRecoilState(atomFlagState);
  const getFlagStat: Dic = {
    "공격력 증가": 0,
    "모험가 명성": 0,
    버프력: 0,
  };
  const findStat = (name: string, value: string) => {
    if (name in getFlagStat) {
      if (name === "공격력 증가") {
        const num = Number(value.slice(0, value.length - 1)) * 10;
        getFlagStat[name] += num;
      } else {
        getFlagStat[name] += Number(value);
      }
    }
  };

  useEffect(() => {
    data.detail?.itemStatus.map((x) => findStat(x.name, x.value));
    data.gems?.map((x) =>
      x.detail?.itemStatus.map((x) => findStat(x.name, x.value))
    );
    setState(getFlagStat);
  }, []);
  return getFlagStat;
};

export default useFlag;
