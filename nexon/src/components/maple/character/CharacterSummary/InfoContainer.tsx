import React, { useEffect, useState } from "react";
import useCharacterBasic from "../../../../hooks/maple/useCharacterBasic";
import InfoContainerItem from "./InfoContainerItem";
import {
  BookmarkButton,
  CharacterName,
  CompareButton,
  InfoBox,
  InfoBoxBody,
  InfoBoxHeader,
  InfoBoxHeaderTitle,
} from "../../../../style/characterSummaryInfo";
import {
  BASIC_LEFT,
  BASIC_RIGHT,
  BasicPropsType,
} from "../../../../@types/maple/CharacterBasicTypes";

const InfoContainer = () => {
  const { characterBasic } = useCharacterBasic();
  const [props1, setProps1] = useState<BasicPropsType>({
    id: [0, 1, 2],
    titles: BASIC_LEFT,
    values: ["", "", ""],
  });
  const [props2, setProps2] = useState<BasicPropsType>({
    id: [3, 4, 5],
    titles: BASIC_RIGHT,
    values: ["", "", ""],
  });

  useEffect(() => {
    setProps1((prev) => {
      return {
        ...prev,
        values: [
          characterBasic.data?.character_level,
          characterBasic.data?.popularity,
          parseInt(characterBasic.data?.combat_power as string).toLocaleString("ko-kr"),
        ],
      };
    });
    setProps2((prev) => {
      return {
        ...prev,
        values: [
          characterBasic.data?.character_class,
          characterBasic.data?.world_name,
          characterBasic.data?.character_guild_name,
        ],
      };
    });
  }, [characterBasic]);

  return (
    <InfoBox>
      <InfoBoxHeader>
        <InfoBoxHeaderTitle>CHARACTER INFO</InfoBoxHeaderTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "2%",
            }}
          >
            <CharacterName>{characterBasic.data?.character_name}</CharacterName>
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
        <InfoContainerItem id={props1.id} titles={props1.titles} values={props1.values} />
        <InfoContainerItem id={props2.id} titles={props2.titles} values={props2.values} />
      </InfoBoxBody>
    </InfoBox>
  );
};

export default InfoContainer;
