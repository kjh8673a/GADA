import CenteredBox from "../../../style/CenteredBox";
import CharacterDetail from "./CharacterDetail";
import CharacterTab from "./CharacterTab";

const Character = () => {
  return (
    <CenteredBox>
      <h2>캐릭터 조회 후 넘어오는 페이지</h2>
      {/* 여기에 조회된 캐릭터 정보 표시 */}
      {/* 아래에는 탭 표시 */}
      <CharacterTab />
      {/* 아래에는 데이터 표시 */}
      <CharacterDetail />
    </CenteredBox>
  );
};

export default Character;

