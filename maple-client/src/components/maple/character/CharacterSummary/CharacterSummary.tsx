import styled from "styled-components";
import GraphContainer from "./GraphContainer";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";

const CharacterSummaryBox = styled.div`
  width: 100%;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1.8fr 1.8fr;
  margin-top: 1%;
  background: url("${process.env.REACT_APP_BG_IMG}/maple_bg_${String(Math.floor(Math.random() * 122) + 1).padStart(
      3,
      "0"
    )}.png")
    0% 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    display: flex;
    position: relative;
  }
`;

const CharacterSummary = () => {
  return (
    <CharacterSummaryBox>
      <ImageContainer />
      <InfoContainer />
      <GraphContainer />
    </CharacterSummaryBox>
  );
};

export default CharacterSummary;

