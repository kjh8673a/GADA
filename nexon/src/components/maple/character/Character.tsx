import styled from "styled-components";
import CenteredBox from "../../../style/CenteredBox";
import CharacterDetail from "./CharacterDetail";
import CharacterSummary from "./CharacterSummary/CharacterSummary";
import CharacterTab from "./CharacterTab";

/* 헤더에 h2가 가려져서 임시로 넣어놓은 빈 박스 */
const BlankDiv = styled.div`
  height: 64px;
`;

const Character = () => {
  return (
    <CenteredBox>
      {/* 헤더에 h2가 가려져서 임시로 넣어놓은 빈 박스 */}
      <BlankDiv />
      <h2>캐릭터 조회 후 넘어오는 페이지</h2>
      <>
        {/* 여기에 조회된 캐릭터 정보 표시 */}
        <CharacterSummary />
        {/* 아래에는 탭 표시 */}
        <CharacterTab />
        {/* 아래에는 데이터 표시 */}
        <CharacterDetail />
      </>
    </CenteredBox>
  );
};

export default Character;

