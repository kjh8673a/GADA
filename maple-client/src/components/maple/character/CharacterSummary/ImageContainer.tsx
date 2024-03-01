import React from "react";
import styled from "styled-components";
import useCharacterBasic from "../../../../hooks/maple/useCharacterBasic";

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = () => {
  const { characterBasic } = useCharacterBasic();
  return (
    <ImageBox>
      <img src={characterBasic.data?.character_image} width={"50%"} height={"35%"} alt="character preview" />
    </ImageBox>
  );
};

export default ImageContainer;

