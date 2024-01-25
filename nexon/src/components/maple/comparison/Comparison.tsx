import styled from "styled-components";
import CenteredBox from "../../../style/CenteredBox";
import SearchBox from "./search/SearchBox";
import CharacterBox from "./character/CharacterBox";

const StyledTitle = styled.h2`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 800;
`;

const Comparison = () => {
  return (
    <CenteredBox>
      <StyledTitle>캐릭터 비교</StyledTitle>
      <SearchBox />
      <CharacterBox />
    </CenteredBox>
  );
};

export default Comparison;

