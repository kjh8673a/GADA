import React, { useState } from "react";
import styled from "styled-components";
import { ArtifactCrystalType } from "../../../../@types/maple/CharacterUnionTypes";

const StyledBox = styled.div`
  width: 140px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 8px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 28%;
  }
`;

const CrystalImg = styled.img<{ $hovered: boolean }>`
  width: 100%;
  z-index: 1;
  opacity: ${(props) => (props.$hovered ? "0.2" : "1")};
`;

const HoverItem = styled.div`
  width: max-content;
  padding: 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  z-index: 2;
  font-size: 0.8rem;
  font-weight: 600;
`;

const StyledTitle = styled.div`
  fontsize: 1.2rem;
  marginbottom: 4px;
`;

const UnionArtifactItem: React.FC<{ item: ArtifactCrystalType }> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledBox onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      <CrystalImg src={item.crystal_icon} alt={"crystal preview"} $hovered={isHover} />
      {isHover && (
        <HoverItem>
          <StyledTitle>{item.name.slice(7) + " Lv. " + item.level}</StyledTitle>
          <div>{item.crystal_option_name_1}</div>
          <div>{item.crystal_option_name_2}</div>
          <div>{item.crystal_option_name_3}</div>
        </HoverItem>
      )}
    </StyledBox>
  );
};

export default UnionArtifactItem;

