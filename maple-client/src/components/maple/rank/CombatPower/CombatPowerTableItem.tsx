import React from "react";
import styled from "styled-components";

type Props = {
  ranking: number;
  character_name: string;
  combat_power: number;
  character_level: number;
  character_class: string;
  character_image: string;
  guild_name: string;
  world_name: string;
  clickHandler: (character_name: string) => void;
};

const StyledBox = styled.div`
  width: 100%;
  min-height: 40px;
  display: grid;
  background-color: var(--secondary-bg-color);
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-bg-color);
    transition: 0.2s;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.img``;

const CombatPowerTableItem: React.FC<Props> = ({
  ranking,
  character_name,
  combat_power,
  character_level,
  character_class,
  character_image,
  guild_name,
  world_name,
  clickHandler,
}) => {
  return (
    <StyledBox onClick={() => clickHandler(character_name)}>
      <ContentBox>{ranking}</ContentBox>
      <ImgBox style={{ justifySelf: "center" }} src={character_image} alt={"character preview"} />
      <ContentBox>{character_name}</ContentBox>
      <ContentBox>{character_level}</ContentBox>
      <ContentBox>{combat_power.toLocaleString("ko-kr")}</ContentBox>
      <ContentBox>{character_class}</ContentBox>
      <ContentBox>{guild_name}</ContentBox>
      <ContentBox>{world_name}</ContentBox>
    </StyledBox>
  );
};

export default CombatPowerTableItem;

