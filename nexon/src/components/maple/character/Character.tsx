import { useRecoilState } from "recoil";
import { atomTabName } from "../../../atoms/maple/characterTabState";
import { TAB_LIST, TabNameType } from "../../../@types/maple/TabTypes";
import useCharacterTab from "../../../hooks/maple/useCharacterTab";

const Character = () => {
  const [tabName] = useRecoilState<TabNameType>(atomTabName);
  const { selectTab } = useCharacterTab();

  return (
    <div>
      <h2>캐릭터 조회 후 넘어오는 페이지</h2>
      {/* 여기에 조회된 캐릭터 정보 표시 */}
      {/* 아래에는 탭 표시 */}
      <span>현재 탭 : {tabName}</span>
      <select
        value={tabName}
        onChange={(e) => {
          selectTab(e.target.value);
        }}
      >
        {TAB_LIST.map((tabName, idx) => (
          <option key={idx} value={tabName}>
            {tabName}
          </option>
        ))}
        <option value="dfs">dfs</option>
      </select>
      {/* 그 아래에는 탭 내용 표시 */}
    </div>
  );
};

export default Character;

