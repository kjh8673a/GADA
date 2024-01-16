import React from "react";
import styled from "styled-components";
import useCharacterBasic from "../../../../hooks/maple/useCharacterBasic";

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = () => {
  const { characterBasic } = useCharacterBasic();
  return (
    <ImageBox>
      <img src={characterBasic.character_image} />
    </ImageBox>
  );
};

export default ImageContainer;
