import React, { useState } from "react";
import styled from "styled-components";
import CreatureHoverItem from "./CreatureHoverItem";
import { TDetail } from "../../../@types/Character/CommonTypes";

interface Props {
  slotColor: string;
  itemImage: string;
  detail: TDetail;
}

const StyledBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 45px;
  display: flex;
  justiy-content: center;
  align-items: center;
`;

const ArtifactItem: React.FC<Props> = ({ slotColor, itemImage, detail }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <StyledBox
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={itemImage} alt={"artifact image"} width={"45px"} />
      {isHover && (
        <CreatureHoverItem
          slotColor={slotColor}
          detail={detail!}
        />
      )}
    </StyledBox>
  );
};

export default ArtifactItem;
