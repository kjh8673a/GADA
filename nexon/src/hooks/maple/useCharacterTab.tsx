import { useRecoilState } from "recoil";
import { atomTabName } from "../../atoms/maple/characterTabState";
import { TAB_LIST } from "../../@types/maple/TabTypes";

const useCharacterTab = () => {
  const [, setTabName] = useRecoilState(atomTabName);

  const selectTab = (name: string) => {
    try {
      if (TAB_LIST.indexOf(name) < 0) throw new Error("존재하지 않는 메뉴입니다.");
      setTabName(name);
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  return { selectTab };
};

export default useCharacterTab;

