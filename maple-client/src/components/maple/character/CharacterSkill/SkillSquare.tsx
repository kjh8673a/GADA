import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SkillDetail from "./SkillDetail";
import { skillType } from "../../../../@types/maple/CharacterSkillType";

const OuterBox = styled.div`
  position: relative;
  width: 60px;
  heigth: 48px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px;
  width: 100%;
  heigth: 100%;
  padding: 8px;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;

export const ImgBox = styled.img`
  display: flex;
  width: 48px;
  box-shadow: var(--custom-shadow);
`;

export const LevelPosition = styled.div`
  position: absolute;
  color: rgb(255, 255, 255);
  background-color: var(--primary-bg-color);
  width: 30px;
  heigth: 30px;
  bottom: -1px;
  text-align: center;
  border-radius: 16px;
`;

//스킬이 들어있는 박스를 보여줄 구간입니다.
//props가 필요함. 스킬을 받아올거니까.
//먼저 여기선 스킬에 대한 이미지 및 레벨 보여주기.

interface Props {
  skill: skillType;
}

const SkillSquare: React.FC<Props> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [offsetX, setOffsetX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      resetBoxOffset();
    });

    resetBoxOffset();
  }, []);

  const resetBoxOffset = () => {
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

  if (skill.skill_level !== 0 && skill.skill_effect !== null) {
    return (
      <OuterBox ref={containerRef}>
        <Box onMouseEnter={hoverInHandler} onMouseLeave={hoverOutHandler}>
          <ImgBox src={skill.skill_icon} />
          <LevelPosition>{skill.skill_level}</LevelPosition>
        </Box>
        {isHovered && <SkillDetail skill={skill} offsetX={offsetX} />}
      </OuterBox>
    );
  }
  return null;
};

export default SkillSquare;

