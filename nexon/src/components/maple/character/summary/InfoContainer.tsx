import React from "react";
import styled from "styled-components";
import useCharacterBasic from "../../../../hooks/maple/useCharacterBasic";

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const InfoContainer = () => {
  const { characterBasic } = useCharacterBasic();

  return (
    <InfoBox>
      닉네임 : {characterBasic.character_name} <br />
      서버 : {characterBasic.world_name} <br />
      직업 : {characterBasic.character_class} <br />
      길드 : {characterBasic.character_guild_name} <br />
      레벨 : {characterBasic.character_level} <br />
      유니온 : characterBasicState 미포함 <br />
      전투력 : characterBasicState 미포함 <br />
    </InfoBox>
  );
};

export default InfoContainer;
