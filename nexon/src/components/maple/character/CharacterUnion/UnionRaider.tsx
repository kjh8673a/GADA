import React from "react";
import styled from "styled-components";

type Props = {
  block_class: string;
  block_level: string;
  class_image: string;
  grade: string;
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid white;
  border-radius: 2px;
  padding: 5px;
`;

const WrapperBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClassImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const GradeBox = styled.div`
  font-size: 1rem;
  color: white;
`;

const ClassBox = styled.div`
  font-size: 1rem;
  color: white;
`;
const LevelBox = styled.div`
  font-size: 1rem;
  color: white;
`;

const UnionRaider: React.FC<Props> = ({
  block_class,
  block_level,
  class_image,
  grade,
}) => {
  return (
    <StyledBox>
      <ClassImg src={class_image} alt={"class image"} />
      <WrapperBox>
        <GradeBox>{grade}</GradeBox>
        <ClassBox>{block_class}</ClassBox>
        <LevelBox>{"Lv. " + block_level}</LevelBox>
      </WrapperBox>
    </StyledBox>
  );
};

export default UnionRaider;
