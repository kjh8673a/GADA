import React from "react";
import styled from "styled-components";
import useStats from "../../../../hooks/maple/useStats";

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
  windowWidth: number;
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

  @media (max-width: 768px) {
    padding: 4px 0;
    padding-left: 12px;
    grid-template-columns: 1fr 9fr;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  font-size: 0.7rem;
`;

const MobileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MobileContentBox = styled.div`
  margin-left: 12px;
`;

const MobileContentLine = styled.div`
  display: flex;
  gap: 8px;
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
  windowWidth,
}) => {
  const { convertCombatPower } = useStats();
  return (
    <StyledBox onClick={() => clickHandler(character_name)}>
      <ContentBox>{ranking}</ContentBox>
      {windowWidth > 768 ? (
        <>
          <ImgBox style={{ justifySelf: "center" }} src={character_image} alt={"character preview"} />
          <ContentBox>{character_name}</ContentBox>
          <ContentBox>{character_level}</ContentBox>
          <ContentBox>{combat_power.toLocaleString("ko-kr")}</ContentBox>
          <ContentBox>{character_class}</ContentBox>
          <ContentBox>{guild_name}</ContentBox>
          <ContentBox>{world_name}</ContentBox>
        </>
      ) : (
        <MobileContainer>
          <ImgBox style={{ justifySelf: "center" }} src={character_image} alt={"character preview"} />
          <MobileContentBox>
            <MobileContentLine>
              <ContentBox>{character_name}</ContentBox>
              <SubContentBox>Lv. {character_level}</SubContentBox>
              <SubContentBox>({world_name})</SubContentBox>
            </MobileContentLine>
            <MobileContentLine>
              <ContentBox>클래스</ContentBox>
              <SubContentBox>{character_class}</SubContentBox>
            </MobileContentLine>
            <MobileContentLine>
              <ContentBox>전투력</ContentBox>
              <SubContentBox>{convertCombatPower(combat_power)}</SubContentBox>
            </MobileContentLine>
          </MobileContentBox>
        </MobileContainer>
      )}
    </StyledBox>
  );
};

export default CombatPowerTableItem;

