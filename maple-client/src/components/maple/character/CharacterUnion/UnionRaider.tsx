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
  border: 1px solid #777;
  border-radius: 4px;
  padding: 12px 8px;
  box-sizing: border-box;
  background-color: var(--primary-bg-color);
  box-shadow: var(--custom-shadow);

  &:hover {
    border: 1px solid #eee;
  }
`;

const WrapperBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
`;

const ClassImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const GradeBox = styled.div`
  color: #ccc;
  font-weight: 600;
`;

const ClassBox = styled.div`
  color: white;
`;
const LevelBox = styled.div`
  color: #ccc;
`;

const UnionRaider: React.FC<Props> = ({ block_class, block_level, class_image, grade }) => {
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
