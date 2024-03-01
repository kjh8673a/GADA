import React from "react";
import styled from "styled-components";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";
import { TagBox, TagBoxWrapper } from "./OptionCharactersItem";

const StyledBox = styled.div`
  width: 25%;
  border-radius: 5px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  border-left: dashed 2px gray;

  @media (max-width: 768px) {
    border: none;
    border-top: dashed 2px gray;
    width: 100%;
    padding: 16px 0;
  }
`;

const MySynergy = () => {
  const { characterSynergy } = useCharacterSynergy();
  return (
    <StyledBox>
      <div style={{ fontSize: "1.1rem" }}>시너지 타입</div>
      <TagBoxWrapper
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <TagBox
          style={{
            backgroundColor: "rgb(180, 203, 50)",
          }}
        >
          {characterSynergy.data?.main_character.cycle! > 0
            ? characterSynergy.data?.main_character.cycle + " min"
            : "기타"}
        </TagBox>
        {characterSynergy.data?.main_character.skill_type.map((v, i) => {
          return <TagBox key={i}>{v}</TagBox>;
        })}
      </TagBoxWrapper>
    </StyledBox>
  );
};

export default MySynergy;

