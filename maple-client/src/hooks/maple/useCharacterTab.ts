import { TAB_ID_LIST, TabNameType } from "./../../@types/maple/TabTypes";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomTabName } from "../../atoms/maple/characterTabState";
import { useMemo } from "react";
import { tabviewSendToGA } from "../../components/common/RouterTrackerForGA";
import { atomGAInitializeState } from "../../atoms/common/gaInitializeState";

const useCharacterTab = () => {
  const [tabName, setTabName] = useRecoilState<TabNameType>(atomTabName);
  const initialized = useRecoilValue(atomGAInitializeState);

  const selectTab = useMemo(
    () => (name: TabNameType) => {
      try {
        if (TAB_ID_LIST.indexOf(name) < 0) throw new Error("존재하지 않는 메뉴입니다.");
        setTabName(name);

        if (initialized) {
          tabviewSendToGA(name);
        }
      } catch (err) {
        console.error((err as Error).message);
      }
    },
    [setTabName]
  );

  return { tabName, selectTab };
};

export default useCharacterTab;

