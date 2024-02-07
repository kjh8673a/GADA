import styled from "styled-components";
import GraphContainer from "./GraphContainer";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";
import useCharacterBasic from "../../../../hooks/maple/useCharacterBasic";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterSummaryBox = styled.div`
  width: 1140px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1.8fr 1.8fr;
  margin-top: 1%;
  background: url("${process.env.REACT_APP_BG_IMG}/maple_bg_${String(Math.floor(Math.random() * 122) + 1).padStart(
      3,
      "0"
    )}.png")
    0% 100%;
`;

const CharacterSummary = () => {
  const params = useParams();
  const { getCharacterBasic } = useCharacterBasic();

  useEffect(() => {
    getCharacterBasic(params.Charactername as string);
  }, [params.Charactername, getCharacterBasic]);

  return (
    <CharacterSummaryBox>
      <ImageContainer />
      <InfoContainer />
      <GraphContainer />
    </CharacterSummaryBox>
  );
};

export default CharacterSummary;

