import React, { useEffect } from "react";
import styled from "styled-components";
import GraphContainer from "./GraphContainer";
import ImageContainer from "./ImageContainer";
import InfoContainer from "./InfoContainer";
import { useParams } from "react-router-dom";
import useCharacterBasic from "../../../../hooks/maple/useCharacterBasic";
import { getCharacterBasicInfo } from "../../../../api/Character/Basic";

const CharacterSummaryBox = styled.div`
  width: 1140px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1.8fr 1.8fr;
  margin-top: 1%;
  border-radius: 1.25rem;
  background: url("${process.env.PUBLIC_URL}/assets/bg_cursed_temple.png") 0%
    100%;
`;

const CharacterSummary = () => {
  const params = useParams();
  const { setCharacterBasic } = useCharacterBasic();

  useEffect(() => {
    getCharacterBasicInfo(params.Charactername as string).then((res) => {
      setCharacterBasic(res.data);
    });
  }, [setCharacterBasic, params.Charactername]);

  return (
    <CharacterSummaryBox>
      <ImageContainer />
      <InfoContainer />
      <GraphContainer />
    </CharacterSummaryBox>
  );
};

export default CharacterSummary;
