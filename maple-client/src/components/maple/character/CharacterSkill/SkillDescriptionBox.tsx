import React from "react";
import styled from "styled-components";

interface Props {
  imgRoad: string;
  description: string;
}

const DescriptionContainer = styled.div`
  display: flex;
  padding: 8px 8px 12px 8px;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;
const DescriptionBox = styled.div`
  width: 80%;
  font-size: 0.8rem;
  line-height: 1.2rem;
  white-space: pre-line;
`;

const SkillDescription = styled.div`
  color: #ffffff;
`;

const SkillImg = styled.img`
  width: 64px;
  height: 64px;
`;

const SkillDescriptionBox: React.FC<Props> = ({ imgRoad, description }) => {
  return (
    <DescriptionContainer>
      <ImgBox>
        <SkillImg src={imgRoad} alt="skill preview" />
      </ImgBox>
      <DescriptionBox>
        <SkillDescription>{description}</SkillDescription>
      </DescriptionBox>
    </DescriptionContainer>
  );
};

export default SkillDescriptionBox;

