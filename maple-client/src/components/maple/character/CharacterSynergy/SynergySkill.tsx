import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SkillType } from "../../../../@types/maple/CharacterSynergyTypes";
import SkillNameBox from "../CharacterSkill/SkillNameBox";
import SkillDescriptionBox from "../CharacterSkill/SkillDescriptionBox";

const OuterBox = styled.div`
  position: relative;
  width: 32px;
`;

const StyledBox = styled.div`
  position: relative;
`;

const SkillImg = styled.img``;

const SkillHoverBox = styled.div<{ $offsetX: number }>`
  position: absolute;
  z-index: 2;
  box-sizing: border-box;
  width: 320px;
  bottom: 100%;
  background-color: #2b2c2a;
  border-radius: 16px;
  border: 2px solid #777;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    left: calc(100% - ${(props) => props.$offsetX}px - 20%);
  }
`;

const DottedHr = styled.hr`
  border: none;
  border-top: 2px dotted #ccc;
  margin: 1px 0;
  width: 95%;
  margin-left: 2.5%;
  height: 0;
`;

const SkillEffectBox = styled.div`
  display: flex;
  color: #ffffff;
  padding: 12px;
  white-space: pre-line;
`;

const SynergySkill: React.FC<{ data: SkillType }> = ({ data }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", resetOffset);
    resetOffset();
  }, []);

  const resetOffset = () => {
    if (containerRef && containerRef.current) {
      setOffsetX(containerRef.current.offsetLeft);
    }
  };

  const hoverInHandler = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsHovered(true);
  }, []);

  const hoverOutHandler = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsHovered(false);
  }, []);

  return (
    <OuterBox ref={containerRef}>
      <StyledBox onMouseEnter={hoverInHandler} onMouseLeave={hoverOutHandler}>
        <SkillImg src={data.skill_icon} alt={"skill preview"} />
      </StyledBox>
      {isHovered && (
        <SkillHoverBox $offsetX={offsetX}>
          <SkillNameBox name={data.skill_name} />
          <SkillDescriptionBox imgRoad={data.skill_icon} description={data.skill_description} />
          <DottedHr />
          <SkillEffectBox>{data.skill_effect}</SkillEffectBox>
        </SkillHoverBox>
      )}
    </OuterBox>
  );
};

export default SynergySkill;

