import styled from "styled-components";
import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom";

const StyledBox = styled.div`
  width: 100%;
  padding: 16px 0;
  box-sizing: border-box;
`;

const SearchBox = () => {
  const { characters } = useParams();
  const [left, right] = characters ? characters.split("&") : ["", ""];
  return (
    <StyledBox>
      <SearchBar nameLeft={left || ""} nameRight={right || ""} />
    </StyledBox>
  );
};

export default SearchBox;

