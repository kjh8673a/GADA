import { useMemo } from "react";
import { TAB_ID_LIST, TabNameType } from "../@types/TabTypes";
import { useRecoilState } from "recoil";
import { atomTabName } from "../atoms/characterTabState";

const useCharacterTab = () => {
  const [tabName, setTabName] = useRecoilState<TabNameType>(atomTabName);

  const selectTab = useMemo(
    () => (name: TabNameType) => {
      try {
        if (TAB_ID_LIST.indexOf(name) < 0)
          throw new Error("존재하지 않는 메뉴입니다.");
        setTabName(name);
      } catch (err) {
        console.error((err as Error).message);
      }
    },
    [setTabName]
  );

  return {
    tabName,
    selectTab,
  };
};

export default useCharacterTab;
