import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCharacterBasic from "../../../../hooks/maple/useCharacterBasic";
import InfoContainerItem from "./InfoContainerItem";

const InfoBox = styled.div`
  margin: 10% 5%;
  padding: 1%;
  display: grid;
  grid-template-rows: 3fr 7.5fr;
  border-radius: 0.625rem;
  background: #3d444c;
`;

const InfoBoxHeader = styled.div`
  margin: 2%;
  margin-bottom: 0%;
  display: grid;
  grid-template-area
`;

const InfoBoxHeaderTitle = styled.div`
  color: #b4cb32;
  font-family: "Inria Sans";
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CharacterName = styled.div`
  color: #fff;
  font-family: "Zen Old Mincho";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BookmarkButton = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  color: #fff;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompareButton = styled.button`
  justify-self: end;
  color: #fff;
  width: 8rem;
  border: none;
  text-align: center;
  text-shadow: 3px 3px 3px #000;
  font-family: "Inria Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  border-radius: 0.5rem;
  background: #2d638b;
`;

const InfoBoxBody = styled.div`
  margin: 1%;
  margin-bottom: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const InfoContainer = () => {
  const { characterBasic } = useCharacterBasic();
  const [props1, setProps1] = useState({
    titles: ["LEVEL", "POPULARITY", "COMBAT POWER"],
    values: ["", "", ""],
  });
  const [props2, setProps2] = useState({
    titles: ["CLASS", "WORLD", "GUILD"],
    values: ["", "", ""],
  });

  useEffect(() => {
    setProps1((prev) => {
      return {
        ...prev,
        values: [
          characterBasic.data.character_level + "",
          characterBasic.data.popularity + "",
          (+characterBasic.data.combat_power).toLocaleString("ko-kr"),
        ],
      };
    });
    setProps2((prev) => {
      return {
        ...prev,
        values: [
          characterBasic.data.character_class,
          characterBasic.data.world_name,
          characterBasic.data.character_guild_name,
        ],
      };
    });
  }, [characterBasic]);

  return (
    <InfoBox>
      <InfoBoxHeader>
        <InfoBoxHeaderTitle>CHARACTER INFO</InfoBoxHeaderTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginRight: "2%"}}>
            <CharacterName>{characterBasic.data.character_name}</CharacterName>
            <BookmarkButton>
              <img
                src="/assets/star.png"
                width={"105%"}
                height={"80%"}
                alt="bookmark btn"
              />
            </BookmarkButton>
          </div>
          <CompareButton>Compare</CompareButton>
        </div>
      </InfoBoxHeader>
      <InfoBoxBody>
        <InfoContainerItem titles={props1.titles} values={props1.values} />
        <InfoContainerItem titles={props2.titles} values={props2.values} />
      </InfoBoxBody>
    </InfoBox>
  );
};

export default InfoContainer;
