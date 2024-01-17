import styled from "styled-components";
import { IWeaponData, MATCH_BGCOLOR, MATCH_COLOR } from "../../../../@types/maple/WeaponTypes";

const StyledBox = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
`;

interface WeaponPreviewProps {
  img: string | undefined;
  grade: string | undefined | null;
}

interface WeaponPreviewProps {
  img: string | undefined;
  grade: string | undefined | null;
}

const WeaponPreview = styled.div<WeaponPreviewProps>`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  padding: 8px;
  background-image: url(${(props) => (props.img ? props.img.trim() : "")});
  background-size: contain;
  background-position: center; /* 이미지를 가운데 정렬 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  background-origin: content-box;
  border: 1px solid ${(props) => (!props.grade ? "#777" : MATCH_COLOR[props.grade])};
  border-radius: 8px;
  background-color: ${(props) => (!props.grade ? "#555" : MATCH_BGCOLOR[props.grade])};
`;

const WeaponDetailTitle = styled.div`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const WeaponNameBox = styled.h3`
  display: flex;
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;

const WeaponGradeBox = styled.span`
  color: #fff;
  font-size: 0.9rem;
  margin-top: 4px;
`;

interface Props {
  data?: IWeaponData | undefined;
}

const WeaponSummaryBox: React.FC<Props> = ({ data }) => {
  return (
    <StyledBox>
      <WeaponPreview img={data?.item_icon} grade={data?.potential_option_grade} />
      <WeaponDetailTitle>
        <WeaponNameBox>
          {data?.item_name}
          {data?.scroll_upgrade && +data?.scroll_upgrade > 0 && ` (+${data?.scroll_upgrade})`}
        </WeaponNameBox>
        {data?.potential_option_grade && <WeaponGradeBox>{`(${data?.potential_option_grade} 아이템)`}</WeaponGradeBox>}
      </WeaponDetailTitle>
    </StyledBox>
  );
};

export default WeaponSummaryBox;

