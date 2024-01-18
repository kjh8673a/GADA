import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ITitleDataType, IWeaponDataType, MATCH_BGCOLOR, MATCH_COLOR } from "../../../../@types/maple/WeaponTypes";
import WeaponBoxDetail from "./WeaponBoxDetail";

interface StylesProps {
  img: string | null;
  grade: string | null;
}

interface Props {
  data?: IWeaponDataType | undefined;
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
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 4px;
  background-image: url(${(props) => (props.img ? props.img.trim() : "")});
  background-position: center; /* 이미지를 가운데 정렬 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  border: 1px solid ${(props) => (!props.grade ? "#777" : MATCH_COLOR[props.grade])};
  background-color: ${(props) => (!props.grade ? "#555" : MATCH_BGCOLOR[props.grade])};
  margin-bottom: 4px;

  &:hover {
    cursor: pointer;
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

  if (data === undefined && title === undefined) return <VoidBox />;
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
      {title && (
        <ItemBox onMouseEnter={hoverInHandler} onMouseLeave={hoverOutHandler} img={title.title_icon} grade="" />
      )}
      {isHovered && <WeaponBoxDetail data={data} title={title} />}
    </BoxContainer>
  );
};

export default WeaponBox;

