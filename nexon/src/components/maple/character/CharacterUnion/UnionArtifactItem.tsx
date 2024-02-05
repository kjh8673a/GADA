import React, { useState } from "react";
import styled from "styled-components";
import { ArtifactCrystalType } from "../../../../@types/maple/CharacterUnionTypes";

const StyledBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CrystalImg = styled.img`
  z-index: 1;
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
  border: 1px solid white;
  border-radius: 10px;
  background-color: #3d444c;
  opacity: 0.8;
`;

const UnionArtifactItem: React.FC<{ item: ArtifactCrystalType }> = ({
  item,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledBox
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <CrystalImg src={item.crystal_icon} alt={"crystal image"} />
      {isHover && (
        <HoverItem>
          <div style={{fontSize: "1.2rem"}}>{item.name.slice(7) + " Lv. " + item.level}</div>
          <div>{item.crystal_option_name_1}</div>
          <div>{item.crystal_option_name_2}</div>
          <div>{item.crystal_option_name_3}</div>
        </HoverItem>
      )}
    </StyledBox>
  );
};

export default UnionArtifactItem;
