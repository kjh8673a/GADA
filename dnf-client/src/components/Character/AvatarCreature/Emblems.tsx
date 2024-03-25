import React from "react";
import styled from "styled-components";
import {
  EMBLEMS_COLOR,
  TAvatarEmblem,
} from "../../../@types/Character/CharacterAvatarType";

interface Props {
  data: TAvatarEmblem[];
}

interface StyledProps {
  $backgroundColor?: string;
}

const PlatinumEmblem = styled.div<StyledProps>`
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 14px;
  height: 14px;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "black"};
  border: 3px solid green;
  border-radius: 3px;
`;

const EmblemWrapper = styled.div<StyledProps>`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
`;

const Emblem = styled.div<StyledProps>`
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  ${(props) =>
    props.$backgroundColor
      ? `background-color: ${props.$backgroundColor};`
      : "background-color: rgba(0, 0, 0, 0);"}
  border: 2px solid green;
  border-radius: 2px;
`;

const Emblems: React.FC<Props> = ({ data }) => {
  return (
    <React.Fragment>
      {data?.length > 2 && (
        <PlatinumEmblem
          $backgroundColor={EMBLEMS_COLOR[data[0].itemName.split(" ")[0]]}
        />
      )}
      <EmblemWrapper>
        <Emblem
          $backgroundColor={
            data.length > 0
              ? EMBLEMS_COLOR[data[data?.length - 2].slotColor]
              : undefined
          }
        />
        <Emblem
          $backgroundColor={
            data.length > 0
              ? EMBLEMS_COLOR[data[data?.length - 1].slotColor]
              : undefined
          }
        />
      </EmblemWrapper>
    </React.Fragment>
  );
};

export default Emblems;
