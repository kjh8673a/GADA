import React, { useState } from "react";
import styled from "styled-components";
import { SelectedCharactersType } from "../../../../@types/maple/CharacterSynergyTypes";
import { TagBox, TagBoxWrapper } from "./OptionCharactersItem";
import SynergySkill from "./SynergySkill";
import useCharacterSynergy from "../../../../hooks/maple/useCharacterSynergy";

const StyledBox = styled.div`
  position: relative;
  padding: 1%;
  width: 98%;
  border-radius: 5px;
  background-color: var(--primary-bg-color);
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  &:hover {
    transition: 0.2s;
    background-color: #375158;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const HeaderBox = styled.div`
  font-size: 1.2rem;
`;

const SkillWrapper = styled.div`
  display:flex;
  align-items: center;
`;

const HoverItem = styled.div`
  position: absolute;
  border-radius: 5px;
  padding: 2px 5px;
  background-color: var(--primary-bg-color);
  font-size: 1rem;
  top: 50%;
  right: 20px;
  transform: translate(0%, -50%);
  opacity: 0.9;
  &:hover {
    cursor: pointer;
  }
`;

const SelectedCharactersItem: React.FC<{ data: SelectedCharactersType, index: number }> = ({
  data, index
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { deleteSelectedHandler } = useCharacterSynergy();
  return (
    <StyledBox onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <GridContainer>
        <HeaderBox>{data.character_class}</HeaderBox>
        <TagBoxWrapper>
          <TagBox
            style={{
              backgroundColor: "rgb(180, 203, 50)"
            }}
          >
            {data.cycle > 0 ? data.cycle + " min" : "기타"}
          </TagBox>
          {data.skill_type.map((v, i) => {
            return <TagBox key={i}>{v}</TagBox>;
          })}
        </TagBoxWrapper>
      </GridContainer>
      <GridContainer>
        <div>시너지 스킬</div>
        <SkillWrapper>
          {data.skill_desc.map((v, i) => {
            return <SynergySkill key={i} data={v}/>;
          })}
        </SkillWrapper>
      </GridContainer>
      {isHovered && <HoverItem onClick={() => deleteSelectedHandler(index)}>제거</HoverItem>}
    </StyledBox>
  );
};

export default SelectedCharactersItem;
