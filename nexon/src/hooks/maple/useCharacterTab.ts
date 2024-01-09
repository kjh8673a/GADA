import { useRecoilState } from "recoil";
import { atomTabName } from "../../atoms/maple/characterTabState";
import { TAB_ID_LIST } from "../../@types/maple/TabTypes";
import { useMemo } from "react";

const useCharacterTab = () => {
  const [tabName, setTabName] = useRecoilState(atomTabName);

  const selectTab = useMemo(
    () => (name: string) => {
      try {
        if (TAB_ID_LIST.indexOf(name) < 0) throw new Error("존재하지 않는 메뉴입니다.");
        setTabName(name);
      } catch (err) {
        console.error((err as Error).message);
      }
    },
    [setTabName]
  );

  return { tabName, selectTab };
};

export default useCharacterTab;

