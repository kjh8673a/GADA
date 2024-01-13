import React from "react";
import styled from "styled-components";
import { IWeaponData, WEAPON_GRADE_TYPE } from "../../../../@types/maple/WeaponTypes";

interface StylesProps {
  img: string;
  grade: string | null;
}

interface Props {
  data?: IWeaponData | undefined;
}

const MATCH_COLOR: { [key in WEAPON_GRADE_TYPE]: string } = {
  에픽: "rgb(76, 2, 145)",
  유니크: "rgb(254, 199, 99)",
  레전드리: "rgb(83, 182, 0)",
};

const MATCH_BGCOLOR: { [key in WEAPON_GRADE_TYPE]: string } = {
  에픽: "rgba(76, 2, 145, 0.2)", // 연한 보라색
  유니크: "rgba(254, 199, 99, 0.2)", // 연한 노란색
  레전드리: "rgba(83, 182, 0, 0.2)", // 연한 녹색
};

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
`;

const WeaponBox: React.FC<Props> = ({ data }) => {
  if (data === undefined) return <VoidBox />;
  return (
    <>
      <ItemBox
        onMouseEnter={() => {
          console.log(data);
        }}
        img={data.item_shape_icon}
        grade={data.potential_option_grade}
      />
    </>
  );
};

export default WeaponBox;

