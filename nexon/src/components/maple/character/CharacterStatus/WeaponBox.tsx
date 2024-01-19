import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ITitleDataType, IWeaponDataType, MATCH_BGCOLOR, MATCH_COLOR } from "../../../../@types/maple/WeaponTypes";
import WeaponBoxDetail from "./WeaponBoxDetail";

interface StylesProps {
  img: string | null;
  grade?: string | null;
}

interface Props {
  data?: IWeaponDataType | null | undefined;
  title?: ITitleDataType | null;
}

const BoxContainer = styled.div`
  position: relative;
`;

const VoidBox = styled.div`
  width: 56px;
  height: 56px;
  margin-bottom: 4px;
`;

const ItemBox = styled.div<StylesProps>`
  position: relative;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 4px;
  background-image: url(${(props) => (props.img ? props.img.trim() : "")});
  background-size: 70%;
  background-position: center; /* 이미지를 가운데 정렬 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  border: 1px solid ${(props) => (!props.grade ? "#777" : MATCH_COLOR[props.grade])};
  background-color: ${(props) => (!props.grade ? "#555" : MATCH_BGCOLOR[props.grade])};
  margin-bottom: 4px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 20%, rgba(255, 255, 255, 0.4) 50%, transparent 80%);
    opacity: 0;
    transform-origin: top left;
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1.5);
  }

  @keyframes sparkle {
    to {
      opacity: 0;
      transform: scale(1.5);
    }
  }
`;

const WeaponBox: React.FC<Props> = ({ data, title }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const hoverInHandler = useCallback(() => {
    setIsHovered(true);
  }, []);

  const hoverOutHandler = useCallback(() => {
    setIsHovered(false);
  }, []);

  console.log(data, title);

  if (data === undefined && (title === undefined || title === null)) return <VoidBox />;
  return (
    <BoxContainer>
      {data && (
        <ItemBox
          onMouseEnter={hoverInHandler}
          onMouseLeave={hoverOutHandler}
          img={data.item_icon}
          grade={data.potential_option_grade}
        />
      )}
      {data === null && <ItemBox img={`${process.env.PUBLIC_URL}/assets/question-mark.png`} />}
      {title && (
        <ItemBox onMouseEnter={hoverInHandler} onMouseLeave={hoverOutHandler} img={title.title_icon} grade="" />
      )}
      {isHovered && <WeaponBoxDetail data={data} title={title} />}
    </BoxContainer>
  );
};

export default WeaponBox;

