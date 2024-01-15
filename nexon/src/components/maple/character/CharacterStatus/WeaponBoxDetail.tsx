import styled from "styled-components";
import { IWeaponData, MATCH_BGCOLOR, MATCH_COLOR } from "../../../../@types/maple/WeaponTypes";

const StyledBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 320px;
  height: 480px;
  top: 0;
  right: 56px;
  background-color: #2b2c2a;
  z-index: 3;
  border-radius: 16px;
  border: 2px solid #777;
`;

interface Props {
  data?: IWeaponData | undefined;
}

const WeaponDetailTitle = styled.div`
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-bottom: 1px dashed #777;
`;

const WeaponNameBox = styled.h3`
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`;

const WeaponGradeBox = styled.span`
  color: #fff;
  font-size: 0.9rem;
  margin-top: 4px;
`;

const WeaponSummaryBox = styled.div`
  width: 100%;
  padding: 16px;
`;

const WeaponBriefInfo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

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

const WeaponBoxDetail: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <StyledBox>
      <WeaponDetailTitle>
        <WeaponNameBox>
          {data?.item_name}
          {data?.scroll_upgrade && +data?.scroll_upgrade > 0 && ` (+${data?.scroll_upgrade})`}
        </WeaponNameBox>
        {data?.potential_option_grade && <WeaponGradeBox>{`(${data?.potential_option_grade} 아이템)`}</WeaponGradeBox>}
      </WeaponDetailTitle>
      <WeaponSummaryBox>
        <WeaponBriefInfo>
          <WeaponPreview img={data?.item_icon} grade={data?.potential_option_grade} />
        </WeaponBriefInfo>
      </WeaponSummaryBox>
    </StyledBox>
  );
};

export default WeaponBoxDetail;

